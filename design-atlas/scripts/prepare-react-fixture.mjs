import fs from 'node:fs/promises';
const dir='fixtures/react-smoke';
const catalog=JSON.parse(await fs.readFile('src/components-data/catalog.json','utf8'));
const components=catalog.filter(m=>m.library!=='uiverse');
await fs.mkdir(dir,{recursive:true});
await fs.writeFile(dir+'/index.html','<!doctype html><html lang="en" class="dark"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Atlas React export verification</title></head><body><div id="root"></div><script type="module" src="/main.tsx"></script></body></html>');
await fs.writeFile(dir+'/main.tsx',`import React,{Suspense,lazy} from 'react';
import {createRoot} from 'react-dom/client';
import '../../public/components/${components[0].id}/files/demo.css';
const modules={${components.map(m=>`${JSON.stringify(m.id)}:lazy(()=>import('../../public/components/${m.id}/files/Example'))`).join(',\n')}};
const id=location.hash.slice(1);const Example=modules[id as keyof typeof modules];
class Boundary extends React.Component<{children:React.ReactNode},{error:string}>{state={error:''};static getDerivedStateFromError(error:Error){return{error:error.message}};render(){return this.state.error?<pre className="demo-error">{this.state.error}</pre>:this.props.children}}
createRoot(document.getElementById('root')!).render(<Boundary><Suspense fallback={<p>Loading exported component…</p>}>{Example?<Example/>:<main><h1>React/Vite exported components</h1><ul>${components.map(m=>`<li><a href="/?component=${m.id}#${m.id}">${m.title}</a></li>`).join('')}</ul></main>}</Suspense></Boundary>);
`);
await fs.writeFile(dir+'/vite.config.mjs',`import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';import path from 'node:path';
const atlasRoot=path.resolve('../..');
const catalog=JSON.parse(fs.readFileSync(path.join(atlasRoot,'src/components-data/catalog.json'),'utf8'));
export default defineConfig({publicDir:false,plugins:[{name:'scoped-component-aliases',enforce:'pre',resolveId(spec,importer){
 if(!importer)return null;
 const m=catalog.find(m=>importer.includes('/components/'+m.id+'/files/'));
 const target={...m?.runtimeAliases,...m?.previewAliases}[spec];
 return target?path.join(atlasRoot,'public/components',m.id,'files',target):null;
}},react()],server:{host:'127.0.0.1',port:5175,strictPort:true,fs:{allow:[atlasRoot]}},preview:{host:'127.0.0.1',port:5175,strictPort:true},build:{outDir:'dist'}});
`);
console.log('React/Vite fixture: '+components.length+' exported examples with component-scoped aliases and native HTML adapters.');
