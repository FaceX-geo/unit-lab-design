import fs from 'node:fs/promises';
const link=`import React,{forwardRef} from 'react';
// React/Vite-only bridge. Next.js resolves its own native next/link.
export default forwardRef(function Link({href,as,replace,scroll,shallow,prefetch,locale,legacyBehavior,passHref,...props},ref){const url=typeof href==='string'?href:(href?.pathname||'#');return <a {...props} href={url} ref={ref}/>});
`;
const image=`import React from 'react';
// React/Vite-only bridge. Next.js resolves its own native next/image.
export default function Image({src,alt='',fill,priority,quality,sizes,loader,placeholder,blurDataURL,unoptimized,onLoadingComplete,style,...props}){const url=typeof src==='string'?src:src?.src;return <img {...props} src={url} alt={alt} sizes={sizes} style={fill?{position:'absolute',height:'100%',width:'100%',inset:0,...style}:style}/>}
`;
export async function prepareDemoAssets(m,base){
 const extras=[];m.previewAliases={};m.demoAssetReplacements={};
 if(m.batch){
  const code=(await Promise.all(m.files.filter(f=>/\.tsx?$/.test(f.path)).map(f=>fs.readFile(base+'/files/'+f.path,'utf8')))).join('\n');
  for(const [name,source]of [['link',link],['image',image]])if(code.includes('next/'+name)){
   const file='atlas-adapters/next-'+name+'.jsx';await fs.mkdir(base+'/files/atlas-adapters',{recursive:true});await fs.writeFile(base+'/files/'+file,source);extras.push(file);m.previewAliases['next/'+name]=file;
  }
 }
 if(m.id==='kokonut-ui-card-stack'){
  const urls=['/undraw.svg','https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80','https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&auto=format&fit=crop&q=80','https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?w=800&auto=format&fit=crop&q=80'];
  const colors=['#b2a5d4','#a9c9c0','#e9b8a0','#a8b6d4'];
  await fs.mkdir(base+'/files/atlas-assets',{recursive:true});m.demoAssets=[];
  for(let i=0;i<urls.length;i++){
   const device=i===0?'<path d="M195 330l55 35 85-90" fill="none" stroke="#413056" stroke-width="18" stroke-linecap="round"/>':`<rect x="${i===1?95:180}" y="${i===1?180:125}" width="${i===1?410:240}" height="${i===1?240:330}" rx="24" fill="#242231"/><rect x="${i===1?110:195}" y="${i===1?195:140}" width="${i===1?380:210}" height="${i===1?205:295}" rx="14" fill="url(#g)"/><circle cx="300" cy="310" r="75" fill="none" stroke="${colors[(i+1)%4]}" stroke-width="20"/>`;
   const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"><defs><linearGradient id="g" x2="1" y2="1"><stop stop-color="${colors[i]}"/><stop offset="1" stop-color="#382b51"/></linearGradient></defs><rect width="600" height="600" fill="${colors[i]}"/><circle cx="485" cy="80" r="200" fill="#fff" opacity=".15"/>${device}<text x="40" y="550" font-family="sans-serif" font-size="18" letter-spacing="5" fill="#30253d">ATLAS / OBJECT 0${i+1}</text></svg>`;
   const file='atlas-assets/object-'+i+'.svg';await fs.writeFile(base+'/files/'+file,svg);extras.push(file);m.demoAssetReplacements[urls[i]]='data:image/svg+xml,'+encodeURIComponent(svg);m.demoAssets.push({path:file,author:'Design Atlas',license:'CC0-1.0',purpose:'Local sample artwork; replaces only default demo media in compiled runtime',originalUrl:urls[i]});
  }
  await fs.writeFile(base+'/files/atlas-assets/LICENSE.txt','Atlas-authored sample SVG artwork is dedicated to the public domain under CC0 1.0. https://creativecommons.org/publicdomain/zero/1.0/\n');extras.push('atlas-assets/LICENSE.txt');
 }
 return extras;
}
