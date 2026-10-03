import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import ts from 'typescript';
import {libraries,selected} from './component-selection.mjs';
const exists=async p=>{try{await fs.access(p);return true}catch{return false}};
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const lockPath='components.lock.json';
let lock=await exists(lockPath)?JSON.parse(await fs.readFile(lockPath,'utf8')):{};
const repos={};
const previous=JSON.parse(await fs.readFile('src/components-data/catalog.json','utf8').catch(()=>'[]'));
const oldById=new Map(previous.map(m=>[m.id,m]));
const pending=process.argv.includes('--only-new')?selected.filter(m=>!oldById.has(m.id)):selected;
const needed=new Set(pending.map(m=>m.library));
async function fetchBytes(url){for(let i=0;i<3;i++){try{const r=await fetch(url,{headers:{'User-Agent':'Design-Atlas'}});if(!r.ok)throw new Error(`${r.status} ${url}`);return Buffer.from(await r.arrayBuffer())}catch(e){if(i===2)throw e}}}
for(const [id,lib]of Object.entries(libraries)){
 if(!needed.has(id))continue;
 const revision=lock[id]?.revision||JSON.parse(await fetchBytes(`https://api.github.com/repos/${lib.repo}/commits/main`)).sha;
 const tree=JSON.parse(await fetchBytes(`https://api.github.com/repos/${lib.repo}/git/trees/${revision}?recursive=1`));
 if(!tree.tree)throw new Error(JSON.stringify(tree));
 lock[id]={revision,repo:lib.repo};repos[id]={...lib,revision,paths:new Set(tree.tree.filter(x=>x.type==='blob').map(x=>x.path)),cache:new Map()};
}
await fs.writeFile(lockPath,JSON.stringify(lock,null,2)+'\n');
function resolve(repo,p){return [p,p.replace(/\.js$/,'.ts'),p.replace(/\.js$/,'.tsx'),p+'.tsx',p+'.ts',p+'.jsx',p+'.js',p+'.css',p+'/index.tsx',p+'/index.ts'].find(p=>repo.paths.has(p));}
function alias(repo,imp){
 const root=repo.root;
 if(imp.startsWith('@repo/shadcn-ui/'))return resolve(repo,'packages/shadcn-ui/'+imp.slice('@repo/shadcn-ui/'.length));
 if(imp.startsWith('@repo/smoothui/'))return resolve(repo,'packages/smoothui/'+imp.slice('@repo/smoothui/'.length));
 if(imp.startsWith('@workspace/ui/'))return resolve(repo, 'packages/ui/src/'+imp.slice('@workspace/ui/'.length));
 const plain=imp.slice(2);
 const options=[`${root}/${plain}`,plain];
 if(imp.startsWith('@/components/magicui/'))options.unshift(`${root}/registry/magicui/${imp.split('/').at(-1)}`);
 if(imp.startsWith('@/components/ui/'))options.unshift(`${root}/registry/ui/${imp.split('/').at(-1)}`,`${root}/registry/default/ui/${imp.split('/').at(-1)}`);
 if(imp.startsWith('@/components/animate-ui/'))options.unshift(`${root}/registry/${imp.replace('@/components/animate-ui/','')}/index`);
 return options.map(p=>resolve(repo,p.replace(/^\//,''))).find(Boolean);
}
function canonical(repo,p){
 if(p.startsWith('packages/ui/src/'))return 'workspace-ui/'+p.slice('packages/ui/src/'.length);
 if(p.includes('src/ts-default/'))return 'components/react-bits/'+p.split('/').slice(3).join('/');
 if(p.includes('/registry/magicui/'))return 'components/magicui/'+p.split('/').at(-1);
 if(p.includes('/registry/ui/'))return 'components/ui/'+p.split('/').at(-1);
 if(p.includes('/registry/components/')||p.includes('/registry/primitives/'))return 'components/animate-ui/'+p.split('/registry/')[1].replace('/index.tsx','.tsx');
 if(p.startsWith('components/core/'))return p.replace('components/core/','components/motion-primitives/');
 return p.replace(repo.root?repo.root+'/':'__never__','');
}
const descriptors=[];
for(const item of pending){
 const repo=repos[item.library];const folder=`public/components/${item.id}`;await fs.mkdir(folder+'/files',{recursive:true});
 let entry,demo;
 if(item.library==='react-bits')entry=[...repo.paths].find(p=>p.startsWith('src/ts-default/')&&p.endsWith('/'+item.name+'.tsx'));
 if(item.library==='magic-ui'){entry=`apps/www/registry/magicui/${item.name}.tsx`;demo=`apps/www/registry/example/${item.name}-demo.tsx`;}
 if(item.library==='animate-ui'){entry=`apps/www/registry/components/${item.name}/index.tsx`;demo=`apps/www/registry/demo/components/${item.name}/index.tsx`;}
 if(item.library==='motion-primitives')entry=`components/core/${item.name}.tsx`;
 if(item.library==='uiverse'){const slug=item.name.replace('/','_');entry=[...repo.paths].find(p=>p.endsWith('/'+slug+'.html'));}
 if(item.library==='kokonut-ui')entry=`components/kokonutui/${item.name}.tsx`;
 if(item.library==='smooth-ui')entry=`packages/smoothui/components/${item.name}/index.tsx`;
 if(item.library==='fancy-components')entry=`src/fancy/components/${item.name}.tsx`;
 if(item.library==='cult-ui')entry=`apps/www/registry/default/ui/${item.name}.tsx`;
 if(item.library==='animata')entry=`animata/${item.name}.tsx`;
 if(item.library==='paper-shaders')entry=`packages/shaders-react/src/shaders/${item.name}.tsx`;
 if(!entry||!repo.paths.has(entry))throw new Error(`Missing ${item.id}: ${entry}`);
 const files=[],deps=new Set(),visited=new Set(),aliases={};
 async function collect(p){
  if(visited.has(p))return;visited.add(p);
  let bytes=repo.cache.get(p);if(!bytes){bytes=await fetchBytes(`https://raw.githubusercontent.com/${repo.repo}/${repo.revision}/${p}`);repo.cache.set(p,bytes);}
  const target=canonical(repo,p);await fs.mkdir(path.dirname(folder+'/files/'+target),{recursive:true});await fs.writeFile(folder+'/files/'+target,bytes);
  files.push({path:target,sourcePath:p,url:`/components/${item.id}/files/${target}`,sha256:sha(bytes),bytes:bytes.length});
  if(!/\.(tsx?|jsx?|css)$/.test(p))return;
  const code=bytes.toString();
  const imports=[];
  const ast=ts.createSourceFile(p,code,ts.ScriptTarget.Latest,true,p.endsWith('.tsx')?ts.ScriptKind.TSX:ts.ScriptKind.TS);
  function visit(node){if((ts.isImportDeclaration(node)||ts.isExportDeclaration(node))&&node.moduleSpecifier&&ts.isStringLiteral(node.moduleSpecifier))imports.push(node.moduleSpecifier.text);if(ts.isCallExpression(node)&&(node.expression.kind===ts.SyntaxKind.ImportKeyword||(ts.isIdentifier(node.expression)&&node.expression.text==='require'))&&node.arguments[0]&&ts.isStringLiteral(node.arguments[0]))imports.push(node.arguments[0].text);ts.forEachChild(node,visit)}
  visit(ast);
  if(p.endsWith('.css'))for(const match of code.matchAll(/@(import|reference)\s+["']([^"']+)["']/g))imports.push(match[2]);
  for(const imp of imports){
   if(imp.startsWith('.')){const next=resolve(repo,path.posix.normalize(path.posix.join(path.posix.dirname(p),imp)));if(!next)throw new Error(`Unresolved ${p}: ${imp}`);aliases[imp]=canonical(repo,next);await collect(next);}
   else if(imp.startsWith('@/')||imp.startsWith('@workspace/ui/')||imp.startsWith('@repo/')){const next=alias(repo,imp);if(!next)throw new Error(`Unresolved alias ${p}: ${imp}`);aliases[imp]=canonical(repo,next);await collect(next);}
   else if(!imp.startsWith('node:')&&!imp.startsWith('next/'))deps.add(imp.startsWith('@')?imp.split('/').slice(0,2).join('/'):imp.split('/')[0]);
  }
 }
 await collect(entry);
 if(item.library==='animate-ui'&&repo.paths.has(demo))await collect(demo);
 // Component source and supporting files are exact upstream bytes. Demos are authored separately.
 const license=await fetchBytes(`https://raw.githubusercontent.com/${repo.repo}/${repo.revision}/${repo.licenseFile}`);
 await fs.writeFile(folder+'/files/LICENSE.txt',license);files.push({path:'LICENSE.txt',sourcePath:repo.licenseFile,url:`/components/${item.id}/files/LICENSE.txt`,sha256:sha(license),bytes:license.length});
 if(demo&&repo.paths.has(demo)){const bytes=await fetchBytes(`https://raw.githubusercontent.com/${repo.repo}/${repo.revision}/${demo}`);await fs.mkdir('scripts/upstream-demos',{recursive:true});await fs.writeFile(`scripts/upstream-demos/${item.id}.tsx`,bytes);}
 if(item.library==='paper-shaders'&&repo.paths.has('NOTICE'))await collect('NOTICE');
 const allCode=(await Promise.all(files.filter(f=>/\.(tsx?|css)$/.test(f.path)).map(f=>fs.readFile(folder+'/files/'+f.path,'utf8')))).join('\n');
 const technologies=['CSS'];if(allCode.includes('motion'))technologies.push('Motion');if(allCode.includes('gsap'))technologies.push('GSAP');if(['ogl','three','@react-three/fiber','cobe','postprocessing','@paper-design/shaders'].some(d=>deps.has(d)))technologies.push('WebGL');
 if(deps.has('matter-js'))technologies.push('Physics');
 const heavy=technologies.includes('WebGL')||deps.has('matter-js');
 descriptors.push({...item,author:item.library==='uiverse'?item.name.split('/')[0]:repo.author,sourceUrl:item.library==='uiverse'?`https://uiverse.io/${item.name}`:`https://github.com/${repo.repo}/blob/${repo.revision}/${entry}`,libraryUrl:repo.url,revision:repo.revision,license:repo.license,licenseUrl:`https://github.com/${repo.repo}/blob/${repo.revision}/${repo.licenseFile}`,entry:canonical(repo,entry),demoEntry:item.library==='animate-ui'?canonical(repo,demo):null,aliases,files,dependencies:[...deps].sort(),technologies,formats:item.library==='uiverse'?['HTML/CSS']:['React','Next.js'],heavy,performance:heavy?(deps.has('matter-js')?'Физика · запускайте по одному примеру':'WebGL · запускайте по одному примеру'):'Лёгкое DOM/CSS демо',accessibility:item.library==='uiverse'?'Авторский CSS эффект; проверьте доступность перед применением.':'Клавиатура зависит от API оригинала. Проверяйте фокус и reduced motion в своём продукте.',preview:`/component-previews/${item.id}/index.html`,poster:`/component-posters/${item.id}.jpg`});
 console.log(`${descriptors.length}/${pending.length} ${item.title}: ${files.length} files; ${[...deps].join(', ')}`);
}
const imported=new Map(descriptors.map(m=>[m.id,m]));
const catalog=selected.map(item=>imported.get(item.id)||oldById.get(item.id));
if(catalog.some(m=>!m))throw new Error('Incomplete catalog');
await fs.mkdir('src/components-data',{recursive:true});await fs.writeFile('src/components-data/catalog.json',JSON.stringify(catalog,null,2)+'\n');
await fs.writeFile('public/components/catalog.json',JSON.stringify(catalog,null,2)+'\n');
console.log('Dependencies:',[...new Set(catalog.flatMap(x=>x.dependencies))].join(' '));
