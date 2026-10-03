import {defineConfig} from 'vite';
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
