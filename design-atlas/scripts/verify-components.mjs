import fs from 'node:fs';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {unzipSync} from 'fflate';
import {selected} from './component-selection.mjs';
const catalog=JSON.parse(fs.readFileSync('src/components-data/catalog.json','utf8'));
const hash=b=>crypto.createHash('sha256').update(b).digest('hex');
assert.equal(catalog.length,50);assert.equal(new Set(catalog.map(m=>m.id)).size,50);
assert.deepEqual(catalog.map(m=>m.id).sort(),selected.map(m=>m.id).sort());
const counts={};let checkedFiles=0;
for(const m of catalog){
 counts[m.library]=(counts[m.library]||0)+1;
 assert.match(m.revision,/^[a-f0-9]{40}$/);assert(m.author&&m.license&&m.sourceUrl);
 assert(m.files.some(f=>f.path==='LICENSE.txt'));assert(m.exportFiles.some(f=>f.path===m.entry));
 const archive=unzipSync(fs.readFileSync(`public/components/${m.id}/component.zip`));
 const manifest=JSON.parse(Buffer.from(archive['manifest.json']).toString());
 assert.equal(manifest.id,m.id);assert.equal(manifest.revision,m.revision);assert.equal(manifest.bundleHash,m.bundleHash);
 for(const f of m.exportFiles){
  const bytes=fs.readFileSync(`public/components/${m.id}/files/${f.path}`);
  assert.equal(hash(bytes),f.sha256,`File hash: ${m.id}/${f.path}`);assert.equal(bytes.length,f.bytes);
  assert.deepEqual(Buffer.from(archive[f.path]),bytes,`Archive bytes: ${m.id}/${f.path}`);checkedFiles++;
 }
 for(const f of m.files){const exported=m.exportFiles.find(x=>x.path===f.path);assert(exported?.original);assert.equal(exported.sha256,f.sha256,`Original bytes must stay unchanged: ${m.id}/${f.path}`)}
 for(const target of Object.values(m.aliases))assert(m.exportFiles.some(f=>f.path===target),`Missing alias target ${target}`);
 assert.equal(hash(JSON.stringify(m.exportFiles.map(f=>[f.path,f.sha256]))),m.bundleHash);
 assert(fs.existsSync(`public/component-previews/${m.id}/index.html`));assert(fs.existsSync('public'+m.poster));
 assert(m.exportFiles.some(f=>f.path==='Manrope-OFL.txt'));
 if(m.library!=='uiverse'){
  const example=Buffer.from(archive['Example.tsx']).toString();assert(example.includes('return <>'));assert(example.includes('./'+m.runtimeEntry.replace(/\.(jsx|js)$/,''))||m.library==='animate-ui'||m.id==='motion-primitives-toolbar-expandable');
  const {componentAliases}=await import(pathToFileURL(path.resolve(`public/components/${m.id}/files/vite.config.fragment.mjs`)).href);for(const [key,target]of Object.entries(m.runtimeAliases||m.aliases))assert.equal(componentAliases[key],path.resolve(`public/components/${m.id}/files/${target}`));
  const next=Buffer.from(archive['NextExample.tsx']).toString();assert(next.startsWith("'use client'"));assert(next.includes('ssr: false'));
  assert(m.dependencies.every(dep=>m.dependencyVersions[dep]&&!m.dependencyVersions[dep].includes('latest')));
 }else{assert(m.formats.includes('HTML/CSS'));assert(!archive['NextExample.tsx']);assert.equal(m.dependencies.length,0)}
}
assert.deepEqual(counts,{'react-bits':20,'magic-ui':12,'animate-ui':10,'motion-primitives':3,uiverse:5});
console.log(`50 components: pinned revisions, ${checkedFiles} file hashes, original bytes, ZIP contents, aliases, fonts, dependencies and Next client wrappers PASS.`);
