import React from 'react';
// React/Vite-only bridge. Next.js resolves its own native next/image.
export default function Image({src,alt='',fill,priority,quality,sizes,loader,placeholder,blurDataURL,unoptimized,onLoadingComplete,style,...props}){const url=typeof src==='string'?src:src?.src;return <img {...props} src={url} alt={alt} sizes={sizes} style={fill?{position:'absolute',height:'100%',width:'100%',inset:0,...style}:style}/>}
