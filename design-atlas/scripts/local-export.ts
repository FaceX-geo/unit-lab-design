import type {Plugin,Connect} from 'vite';
// Same-origin loopback download response; no personal data is persisted on disk.
export function localExportPlugin():Plugin{
 const download:Connect.NextHandleFunction=(req,res,next)=>{
  if(req.url!=='/api/export'||req.method!=='POST'){next();return}
  if(req.headers.origin!==`http://${req.headers.host}`){res.statusCode=403;res.end('Same-origin exports only');return}
  let bytes=0;const chunks:Buffer[]=[];
  req.on('data',(chunk:Buffer)=>{bytes+=chunk.length;if(bytes>32_000_000){res.statusCode=413;res.end('Export is too large');req.destroy();return}chunks.push(chunk)});
  req.on('end',()=>{if(res.writableEnded)return;const body=new URLSearchParams(Buffer.concat(chunks).toString('utf8'));const format=body.get('format');if(!['json','markdown'].includes(format||'')){res.statusCode=400;res.end('Unknown export format');return}
   const name=format==='json'?'design-atlas-my-collection.json':'my-design-atlas.md';res.setHeader('Content-Disposition',`attachment; filename="${name}"`);res.setHeader('Content-Type',format==='json'?'application/json; charset=utf-8':'text/markdown; charset=utf-8');res.setHeader('Cache-Control','no-store');res.setHeader('X-Content-Type-Options','nosniff');res.end(body.get('content')||'');
  });
 };
 return{name:'atlas-local-export',configureServer(server){server.middlewares.use(download)},configurePreviewServer(server){server.middlewares.use(download)}};
}
