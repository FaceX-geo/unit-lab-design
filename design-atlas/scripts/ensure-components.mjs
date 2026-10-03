// Rebuild offline demos/archives only when local source or build inputs change.
import fs from 'node:fs/promises';
import crypto from 'node:crypto';
import {spawnSync} from 'node:child_process';
const catalog=JSON.parse(await fs.readFile('src/components-data/catalog.json','utf8'));
const hash=crypto.createHash('sha256');
for(const file of ['scripts/demo-examples.mjs','scripts/component-accessibility.mjs','scripts/compile-component.mjs','scripts/demo-theme.css','scripts/build-components.mjs','package-lock.json','public/fonts/manrope-500.ttf','public/fonts/manrope-OFL.txt'])hash.update(await fs.readFile(file));
for(const m of catalog){hash.update(JSON.stringify([m.id,m.title,m.description,m.author,m.license,m.sourceUrl,m.revision,m.entry,m.aliases,m.dependencies,m.files]));for(const f of m.files)hash.update(await fs.readFile(`public/components/${m.id}/files/${f.path}`));}
const key=hash.digest('hex');
const previous=await fs.readFile('.component-build/stamp','utf8').catch(()=>'');
const missing=(await Promise.all(catalog.map(async m=>{try{await fs.access(`public/component-previews/${m.id}/index.html`);await fs.access(`public/components/${m.id}/component.zip`);return false}catch{return true}}))).some(Boolean);
if(previous===key&&!missing&&!process.argv.includes('--force')){console.log('50 local component previews and archives are ready.');process.exit(0);}
await fs.mkdir('.component-build',{recursive:true});
for(const args of [['node_modules/@tailwindcss/cli/dist/index.mjs','-i','scripts/demo-theme.css','-o','.component-build/theme.css','--minify'],['scripts/build-components.mjs']]){
 const result=spawnSync(process.execPath,args,{stdio:'inherit'});if(result.status!==0)process.exit(result.status||1);
}
// Dependencies can be supplemented by the bundler; recompute on next run if needed.
await fs.writeFile('.component-build/stamp',key);
