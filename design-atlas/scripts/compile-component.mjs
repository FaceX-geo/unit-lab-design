import fs from 'node:fs/promises';
import path from 'node:path';
import ts from 'typescript';
import {spawnSync} from 'node:child_process';
import crypto from 'node:crypto';
// Package-style JS + declarations alongside byte-for-byte upstream source.
// Type erasure avoids changing third-party implementations to satisfy a newer compiler.
const dependencyLock=JSON.parse(await fs.readFile('package-lock.json','utf8'));
export async function compileComponent(m,base){
 if(m.library==='uiverse')return [];
 const fixDeclarations=async outputs=>{
  for(const file of outputs.filter(p=>p.endsWith('.d.ts'))){
   const dest=base+'/files/'+file,source=await fs.readFile(dest,'utf8');
   const fixed=source.replace(/(["'])(@[^"']+)\1/g,(match,quote,spec)=>{
    const target=m.aliases[spec];if(!target)return match;
    let relative=path.posix.relative(path.posix.dirname(file),'runtime/'+target.replace(/\.(tsx|ts|jsx|js)$/, ''));
    if(!relative.startsWith('.'))relative='./'+relative;
    return quote+relative+quote;
   });
   if(fixed!==source)await fs.writeFile(dest,fixed);
  }
  return outputs;
 };
 const runtimePath=p=>'runtime/'+p.replace(/\.tsx$/,'.jsx').replace(/(?<!\.d)\.ts$/,'.js');
 const assignPaths=()=>{m.runtimeAliases=Object.fromEntries(Object.entries(m.aliases).map(([key,value])=>[key,runtimePath(value)]));m.runtimeEntry=runtimePath(m.entry);m.runtimeDemoEntry=m.demoEntry?runtimePath(m.demoEntry):null;};
 // Reuse a verified package compilation when exact upstream files and runtime bytes match.
 const savedRuntime=(m.exportFiles||[]).filter(f=>f.path.startsWith('runtime/'));
 if(savedRuntime.length&&!m.dependencies.includes('poly-decomp')&&m.files.every(f=>m.exportFiles.some(e=>e.original&&e.path===f.path&&e.sha256===f.sha256))&&!Object.keys(m.demoAssetReplacements||{}).length){
  const valid=(await Promise.all(savedRuntime.map(async f=>{try{return crypto.createHash('sha256').update(await fs.readFile(base+'/files/'+f.path)).digest('hex')===f.sha256}catch{return false}}))).every(Boolean);
  if(valid){assignPaths();return await fixDeclarations(savedRuntime.map(f=>f.path));}
 }
 const inputHash=crypto.createHash('sha256');
 for(const f of m.files)inputHash.update(await fs.readFile(base+'/files/'+f.path));
 inputHash.update(JSON.stringify([ts.version,m.demoAssetReplacements,m.dependencies.map(d=>[d,dependencyLock.packages['node_modules/'+d]?.version]),dependencyLock.packages['node_modules/@types/react']?.version]));
 if(m.id==='animata-card-card-spread')inputHash.update(await fs.readFile('scripts/demo-theme.css'));
 if(m.library==='paper-shaders')inputHash.update('esm-jsx-v1');
 if(m.dependencies.includes('poly-decomp'))inputHash.update('static-require-esm-v1');
 const cacheKey=inputHash.digest('hex'),cacheFile='.component-build/compile-'+m.id+'.json';
 const cached=JSON.parse(await fs.readFile(cacheFile,'utf8').catch(()=>'null'));
 if(cached?.key===cacheKey){
  const valid=(await Promise.all(cached.outputs.map(async([p,h])=>{try{return crypto.createHash('sha256').update(await fs.readFile(base+'/files/'+p)).digest('hex')===h}catch{return false}}))).every(Boolean);
  if(valid){assignPaths();return await fixDeclarations(cached.outputs.map(([p])=>p));}
 }
 const sourceRoot=path.resolve(base,'files');const runtimeRoot=path.join(sourceRoot,'runtime');
 await fs.rm(runtimeRoot,{recursive:true,force:true});await fs.mkdir(runtimeRoot,{recursive:true});
 const typed=m.files.filter(f=>/\.(tsx|ts)$/.test(f.path)&&!f.path.endsWith('.d.ts'));
 const usedCss=new Set();
 for(const source of typed){
  const ast=ts.createSourceFile(source.path,await fs.readFile(path.join(sourceRoot,source.path),'utf8'),ts.ScriptTarget.Latest,true);
  ts.forEachChild(ast,node=>{if(ts.isImportDeclaration(node)&&ts.isStringLiteral(node.moduleSpecifier)&&node.moduleSpecifier.text.endsWith('.css')){const spec=node.moduleSpecifier.text;usedCss.add(m.aliases[spec]||path.posix.normalize(path.posix.join(path.posix.dirname(source.path),spec)));}});
 }
 const options={target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ESNext,moduleResolution:ts.ModuleResolutionKind.Bundler,jsx:ts.JsxEmit.Preserve,declaration:true,emitDeclarationOnly:true,noEmitOnError:false,skipLibCheck:true,strict:false,esModuleInterop:true,rootDir:sourceRoot,outDir:runtimeRoot};
 const host=ts.createCompilerHost(options);const declarations=new Map();
 host.resolveModuleNames=(names,file)=>names.map(name=>m.aliases[name]&&name.startsWith('@')&&/\.[jt]sx?$/.test(m.aliases[name])?{resolvedFileName:path.join(sourceRoot,m.aliases[name]),isExternalLibraryImport:false}:ts.resolveModuleName(name,file,options,host).resolvedModule);
 host.writeFile=(file,text)=>declarations.set(file,text);
 const program=ts.createProgram(typed.map(f=>path.join(sourceRoot,f.path)),options,host);program.emit();
 const outputs=[];
 for(const f of m.files){
  if(f.path==='LICENSE.txt')continue;
  const input=await fs.readFile(path.join(sourceRoot,f.path));
  const relative='runtime/'+f.path.replace(/\.tsx$/,'.jsx').replace(/(?<!\.d)\.ts$/,'.js');
  const target=path.join(sourceRoot,relative);await fs.mkdir(path.dirname(target),{recursive:true});
  if(typed.includes(f)){
   const js=ts.transpileModule(input.toString('utf8'),{
    compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ESNext,jsx:ts.JsxEmit.Preserve,removeComments:false},
    transformers:{before:[context=>source=>{
     const required=new Map();
     const visit=node=>{
      if(ts.isCallExpression(node)&&ts.isIdentifier(node.expression)&&node.expression.text==='require'&&node.arguments.length===1&&ts.isStringLiteral(node.arguments[0])){
       const spec=node.arguments[0].text;
       if(!required.has(spec))required.set(spec,ts.factory.createIdentifier('atlasRequiredModule'+required.size));
       return required.get(spec);
      }
      if((ts.isImportDeclaration(node)||ts.isExportDeclaration(node))&&node.moduleSpecifier&&ts.isStringLiteral(node.moduleSpecifier)){
       const spec=node.moduleSpecifier.text;
       if(spec.startsWith('.')&&spec.endsWith('.js')&&m.files.some(file=>file.path===path.posix.normalize(path.posix.join(path.posix.dirname(f.path),spec.replace(/\.js$/,'.tsx'))))){
        const fixed=ts.factory.createStringLiteral(spec.replace(/\.js$/,'.jsx'));
        node=ts.isImportDeclaration(node)?ts.factory.updateImportDeclaration(node,node.modifiers,node.importClause,fixed,node.attributes):ts.factory.updateExportDeclaration(node,node.modifiers,node.isTypeOnly,node.exportClause,fixed,node.attributes);
       }
      }
      return ts.isStringLiteral(node)&&Object.hasOwn(m.demoAssetReplacements||{},node.text)?ts.factory.createStringLiteral(m.demoAssetReplacements[node.text]):ts.visitEachChild(node,visit,context);
     };
     const transformed=ts.visitNode(source,visit);
     const statements=[...transformed.statements];
     const imports=[...required].map(([spec,id])=>ts.factory.createImportDeclaration(undefined,ts.factory.createImportClause(false,id,undefined),ts.factory.createStringLiteral(spec)));
     // Preserve directive prologues, including Next.js's client boundary.
     const directiveEnd=statements.findIndex(node=>!ts.isExpressionStatement(node)||!ts.isStringLiteral(node.expression));
     statements.splice(directiveEnd<0?statements.length:directiveEnd,0,...imports);
     return ts.factory.updateSourceFile(transformed,statements);
    }]}
   }).outputText;
   await fs.writeFile(target,js);outputs.push(relative);
   const declaration=path.join(runtimeRoot,f.path.replace(/\.(tsx|ts)$/,'.d.ts'));
   if(!declarations.has(declaration))throw new Error('Declaration not emitted: '+m.id+'/'+f.path);
   await fs.writeFile(declaration,declarations.get(declaration));outputs.push(path.relative(sourceRoot,declaration));
  }else{
   if(usedCss.has(f.path)&&input.toString().includes('@apply')){
    const cssInput='.component-build/'+m.id+'-'+path.basename(f.path);
    const referenced=input.toString().replace(/@reference\s+["'][^"']+["'];?/g,'@reference '+JSON.stringify(path.resolve('scripts/demo-theme.css'))+';');
    await fs.writeFile(cssInput,referenced);
    const result=spawnSync(process.execPath,['node_modules/@tailwindcss/cli/dist/index.mjs','-i',cssInput,'-o',target,'--minify'],{encoding:'utf8'});
    if(result.status!==0)throw new Error('CSS compile: '+m.id+' '+result.stderr);
   }else await fs.writeFile(target,input);
   outputs.push(relative);
  }
 }
 assignPaths();
 await fixDeclarations(outputs);
 const hashed=await Promise.all(outputs.map(async p=>[p,crypto.createHash('sha256').update(await fs.readFile(base+'/files/'+p)).digest('hex')]));
 await fs.writeFile(cacheFile,JSON.stringify({key:cacheKey,outputs:hashed}));
 return outputs;
}
