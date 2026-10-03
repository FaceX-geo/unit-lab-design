import React,{forwardRef} from 'react';
// React/Vite-only bridge. Next.js resolves its own native next/link.
export default forwardRef(function Link({href,as,replace,scroll,shallow,prefetch,locale,legacyBehavior,passHref,...props},ref){const url=typeof href==='string'?href:(href?.pathname||'#');return <a {...props} href={url} ref={ref}/>});
