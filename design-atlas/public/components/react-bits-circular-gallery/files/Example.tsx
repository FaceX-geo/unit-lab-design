'use client';
import React, {useState,useRef} from 'react';
import Component from "./runtime/components/react-bits/CircularGallery/CircularGallery";

export default function Example({settings={}}:{settings?:Record<string,any>}) {
 const p={...{"accent":"#a78bfa","speed":1,"text":"Design that moves.","amount":100,"delay":200,"holdTime":1000,"gradientSize":220,"bend":3,"rotationInterval":2400},...settings};
 const [feedback,setFeedback]=useState(''),[index,setIndex]=useState(0);
 const container=useRef<HTMLDivElement>(null),start=useRef<HTMLDivElement>(null),end=useRef<HTMLDivElement>(null);
 return <><div className="demo-layout"><div className="full"><Component items={['Form','Motion','Texture','Light','Space'].map(text=>({text,image:'data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600"><defs><linearGradient id="g" x2="1" y2="1"><stop stop-color="#b5a0ff"/><stop offset="1" stop-color="#202338"/></linearGradient></defs><rect width="600" height="600" fill="url(#g)"/><circle cx="300" cy="300" r="155" fill="none" stroke="#e5daff" stroke-width="24"/><path d="M140 420L460 180" stroke="#fbc49a" stroke-width="42"/><text x="40" y="565" fill="white" font-size="30">DESIGN / ATLAS</text></svg>')}))} bend={p.bend} font="bold 30px Manrope" textColor="#f5f3ff" /></div></div>{feedback&&<output className="demo-feedback" aria-live="polite">{feedback}</output>}</>;
}
