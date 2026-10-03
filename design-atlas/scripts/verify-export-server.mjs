import fs from 'node:fs';
import ts from 'typescript';
import assert from 'node:assert/strict';
import http from 'node:http';
const js=ts.transpileModule(fs.readFileSync('scripts/local-export.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.ES2022,target:ts.ScriptTarget.ES2022}}).outputText;
const {localExportPlugin}=await import('data:text/javascript;base64,'+Buffer.from(js).toString('base64'));
let middleware;localExportPlugin().configureServer({middlewares:{use(fn){middleware=fn}}});
const server=http.createServer((req,res)=>middleware(req,res,()=>{res.statusCode=404;res.end()}));
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
const origin='http://127.0.0.1:'+server.address().port;
try{
 for(const format of ['json','markdown']){const content=format==='json'?JSON.stringify({version:2,notes:{demo:'Кириллица и ✦'}}):'# Мой отбор\n\nСохранённый компонент ✦';const r=await fetch(origin+'/api/export',{method:'POST',headers:{origin},body:new URLSearchParams({format,content})});assert.equal(r.status,200);assert.equal(await r.text(),content);assert.match(r.headers.get('content-disposition'),/attachment; filename=/);assert.equal(r.headers.get('cache-control'),'no-store');}
 const denied=await fetch(origin+'/api/export',{method:'POST',headers:{origin:'null'},body:new URLSearchParams({format:'json',content:'example'})});assert.equal(denied.status,403,'Sandbox iframe cannot submit downloads');
 const bad=await fetch(origin+'/api/export',{method:'POST',headers:{origin},body:new URLSearchParams({format:'unknown',content:'example'})});assert.equal(bad.status,400);
 console.log('Local download endpoint: JSON/Markdown Unicode bytes, attachment headers, no-store and foreign/sandbox origin rejection PASS.');
}finally{await new Promise(resolve=>server.close(resolve))}
