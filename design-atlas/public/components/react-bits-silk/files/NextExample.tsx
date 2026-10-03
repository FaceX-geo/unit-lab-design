'use client';
import dynamic from 'next/dynamic';
// Browser-only loading also supports components accessing window during render.
const Example = dynamic(() => import('./Example'), { ssr: false });
export default Example;
