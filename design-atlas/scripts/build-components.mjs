import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import {build} from 'esbuild';
import {prepareDemoAssets} from './demo-assets.mjs';
import {compileComponent} from './compile-component.mjs';
import {zipSync,strToU8} from 'fflate';
import {exampleFor} from './demo-examples.mjs';
import {selected} from './component-selection.mjs';
import {interactionNotes} from './component-accessibility.mjs';
const root=process.cwd(),catalog=JSON.parse(await fs.readFile('src/components-data/catalog.json','utf8'));
const pkg=JSON.parse(await fs.readFile('package.json','utf8'));
const lock=JSON.parse(await fs.readFile('package-lock.json','utf8'));
const version=dep=>dep==='@base-ui-components/react'?'npm:@base-ui/react@'+lock.packages['node_modules/'+dep].version:lock.packages['node_modules/'+dep]?.version||(pkg.dependencies?.[dep]||pkg.devDependencies?.[dep]||'latest').replace(/^[~^]/,'');
const theme=await fs.readFile('.component-build/theme.css','utf8');
const font=await fs.readFile('public/fonts/manrope-500.ttf');
const fontCss=`@font-face{font-family:Manrope;src:url(data:font/ttf;base64,${font.toString('base64')}) format('truetype');font-weight:100 900;font-display:swap}`;
const selection=new Map(selected.map(m=>[m.id,m]));
for(const m of catalog){
 Object.assign(m,selection.get(m.id));
 const base=`public/components/${m.id}`,out=`public/component-previews/${m.id}`;await fs.mkdir(out,{recursive:true});
 m.technologies=m.technologies.filter(t=>!['Motion','GSAP'].includes(t));if(m.dependencies.includes('motion'))m.technologies.push('Motion');if(m.dependencies.includes('gsap'))m.technologies.push('GSAP');
 Object.assign(m,interactionNotes(m));
 const assetFiles=await prepareDemoAssets(m,base);
 const extraFiles=[...await compileComponent(m,base),...assetFiles];
 const ex=exampleFor(m);m.controls=m.library==='uiverse'?[]:ex.controls;m.defaults=ex.defaults;
 if(m.library!=='uiverse')await fs.writeFile(base+'/files/Example.tsx',ex.code);
 await fs.writeFile(base+'/files/demo.css',theme+'\n'+fontCss);
 const aliases={};for(const [key,target]of Object.entries(m.runtimeAliases||m.aliases))aliases[key]=['./'+target];
 await fs.writeFile(base+'/files/tsconfig.paths.json',JSON.stringify({compilerOptions:{baseUrl:'.',paths:aliases}},null,2));
 if(m.library!=='uiverse')m.dependencies=[...new Set([...m.dependencies,'react','react-dom'])];
 m.typeDependencies=m.dependencies.includes('matter-js')?['@types/matter-js','@types/lodash']:[];
 m.installCommand=m.library==='uiverse'?'HTML и CSS готовы к копированию. Зависимости не нужны.':'npm install '+m.dependencies.filter(d=>d!=='next').map(d=>`${d}@${version(d)}`).join(' ')+(m.typeDependencies.length?'\nnpm install -D '+m.typeDependencies.map(d=>`${d}@${version(d)}`).join(' '):'');
 m.dependencyVersions=Object.fromEntries(m.dependencies.map(dep=>[dep,version(dep)]));
 if(m.library!=='uiverse')await fs.writeFile(base+'/files/vite.config.fragment.mjs',`import path from 'node:path';\nimport {fileURLToPath} from 'node:url';\nconst root=path.dirname(fileURLToPath(import.meta.url));\nexport const componentAliases=Object.fromEntries(Object.entries(${JSON.stringify({...m.runtimeAliases||m.aliases,...m.previewAliases})}).map(([key,value])=>[key,path.resolve(root,value)]));\nexport default {resolve:{alias:componentAliases}};\n`);
 const entry=m.library==='uiverse'?m.entry:'Example.tsx';
 if(m.library!=='uiverse')await fs.writeFile(base+'/files/NextExample.tsx',`'use client';\nimport dynamic from 'next/dynamic';\n// Browser-only loading also supports components accessing window during render.\nconst Example = dynamic(() => import('./Example'), { ssr: false });\nexport default Example;\n`);
 else await fs.rm(base+'/files/NextExample.tsx',{force:true});
 await fs.copyFile('public/fonts/manrope-OFL.txt',base+'/files/Manrope-OFL.txt');
 const readme=`# ${m.title}\n\n${m.description}\n\nOriginal: ${m.sourceUrl}\nRevision: ${m.revision}\nAuthor: ${m.author}\nLicense: ${m.license} (see LICENSE.txt)\n\n## Install\n\n${m.installCommand}\n\n## Files and styles\n\nKeep the relative layout of this folder. Merge tsconfig.paths.json paths into your tsconfig.json; if moving the files into a subfolder, prefix those path values with that folder. Import demo.css once in your root layout or main entry. It includes compiled Tailwind utilities and demo styling; it is intended for an isolated demo. In an existing app, add only the needed demo styles/tokens/keyframes to your own stylesheet to avoid global CSS collisions. Original component CSS files stay next to their TSX file.\n\n${m.library==='uiverse'?'HTML/CSS: use the original HTML file directly. No React version is claimed.':`React/Vite: import Example from './Example'. Vite does not read tsconfig aliases automatically. Import {componentAliases} from './vite.config.fragment.mjs' in your vite.config and merge it into resolve.alias, before broader app aliases. Keep the fragment next to Example.tsx so its paths remain relative to this folder.\nNext.js App Router: import NextExample from './NextExample' in a page. Merge the paths as described above. This is a client boundary with browser-only loading. Use your existing React/Next versions; the tested fixture uses Next 16 and React 19.`}\n\n${extraFiles.length?'Runtime: the example imports package-style JavaScript generated by TypeScript type erasure, with public type declarations. Original TSX/TS and CSS are preserved byte for byte. Runtime CSS using @apply is compiled with Tailwind and Atlas demo tokens. Runtime uses ESM imports in place of static CommonJS require calls for Vite compatibility. Where noted, default sample media URLs are replaced by local Atlas artwork; interaction logic is preserved. Exact upstream TSX/TS sources are included separately; compiled files avoid requiring consumers to type-check internal third-party source.\n\n':''}${m.demoAssets?.length?'Offline sample media: atlas-assets/ contains CC0 SVG artwork; the compiled runtime embeds it in place of default external sample images. Original upstream source retains its original sample URLs.\n\n':''}${Object.keys(m.previewAliases||{}).length?'Vite: atlas-adapters/ bridges next/link and next/image to native HTML elements for React-only use. Next.js uses its own native components and does not use those bridges.\n\n':''}Demo content and Example.tsx are Atlas-authored usage, not the library website screenshot. Component implementations are exact upstream bytes.\n\nThis is a private personal collection; check the original license before redistribution.\n`;
 await fs.writeFile(base+'/files/README.md',readme);
 const content=new Map();for(const f of m.files)content.set(f.path,await fs.readFile(base+'/files/'+f.path));
 if(m.library!=='uiverse'){
  await fs.writeFile(base+'/runtime.tsx',`import React from 'react';import{createRoot}from'react-dom/client';import Example from './files/Example';\nconst report=(type,message='')=>parent.postMessage({atlasPreview:true,id:${JSON.stringify(m.id)},type,message},'*');\nwindow.addEventListener('error',e=>report('error',e.message));window.addEventListener('unhandledrejection',e=>report('error',String(e.reason)));\nclass Boundary extends React.Component{state={error:''};static getDerivedStateFromError(e){return{error:String(e)}}componentDidCatch(e){report('error',String(e))}render(){return this.state.error?<div className="demo-error">{this.state.error}</div>:this.props.children}}\nconst params=new URLSearchParams(location.search);document.body.classList.toggle('light',params.get('theme')==='light');const settings=JSON.parse(params.get('settings')||'{}');createRoot(document.getElementById('root')).render(<Boundary><Example settings={settings}/></Boundary>);setTimeout(()=>report('ready'),250);`);
  const aliasPlugin={name:'component-aliases',setup(b){b.onResolve({filter:/^(@\/|@workspace\/ui\/|@repo\/|next\/(link|image)$)/},args=>{const target=({...m.runtimeAliases||m.aliases,...m.previewAliases})[args.path];if(!target)throw new Error('Unknown alias '+args.path);return{path:path.join(root,base,'files',target)}})}};
  try{await build({entryPoints:[base+'/runtime.tsx'],outfile:out+'/bundle.js',bundle:true,platform:'browser',format:'iife',jsx:'automatic',minify:true,define:{'process.env.NODE_ENV':'"production"'},plugins:[aliasPlugin],logLevel:'silent'});}catch(e){console.error(m.id,e.errors?.map(x=>x.text)||e);throw e}
  const css=await fs.readFile(out+'/bundle.css','utf8').catch(()=>'');
  await fs.writeFile(out+'/index.html',`<!doctype html><html lang="en" class="dark"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${m.title} · Design Atlas</title><style>${theme}\n${fontCss}\n${css}</style></head><body><div id="root"></div><script src="bundle.js"></script></body></html>`);
 }else{
  const code=await fs.readFile(base+'/files/'+m.entry,'utf8');
  await fs.writeFile(out+'/index.html',`<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${m.title}</title><style>${fontCss}html,body{margin:0;height:100%;color:#eee;background:#17161e;font:16px Manrope,sans-serif}body{display:grid;place-items:center}button,input{font:inherit}</style></head><body>${code}<script>parent.postMessage({atlasPreview:true,id:${JSON.stringify(m.id)},type:'ready'},'*')</script></body></html>`);
 }
 const ownFiles=['README.md','demo.css','tsconfig.paths.json','Manrope-OFL.txt',...extraFiles];if(m.library!=='uiverse')ownFiles.push('Example.tsx','NextExample.tsx','vite.config.fragment.mjs');
 for(const p of ownFiles){const bytes=await fs.readFile(base+'/files/'+p);content.set(p,bytes);}
 m.exportFiles=[...content].map(([p,b])=>({path:p,url:`/components/${m.id}/files/${p}`,sha256:crypto.createHash('sha256').update(b).digest('hex'),bytes:b.length,original:m.files.some(f=>f.path===p)}));
 m.bundleHash=crypto.createHash('sha256').update(JSON.stringify(m.exportFiles.map(f=>[f.path,f.sha256]))).digest('hex');
 const manifest={id:m.id,revision:m.revision,bundleHash:m.bundleHash,sourceUrl:m.sourceUrl,license:m.license,entry,sourceEntry:m.entry,runtimeEntry:m.runtimeEntry,author:m.author,typeDependencies:Object.fromEntries(m.typeDependencies.map(d=>[d,version(d)])),demoAssets:m.demoAssets,previewAliases:m.previewAliases,dependencies:m.dependencyVersions,files:m.exportFiles};
 content.set('manifest.json',strToU8(JSON.stringify(manifest,null,2)));await fs.writeFile(base+'/manifest.json',JSON.stringify(manifest,null,2));
 await fs.writeFile(base+'/component.zip',zipSync(Object.fromEntries(content),{level:6}));
 await fs.rm(base+'/runtime.tsx',{force:true});console.log('Built',m.id);
}
await fs.writeFile('src/components-data/catalog.json',JSON.stringify(catalog,null,2)+'\n');await fs.writeFile('public/components/catalog.json',JSON.stringify(catalog,null,2)+'\n');
