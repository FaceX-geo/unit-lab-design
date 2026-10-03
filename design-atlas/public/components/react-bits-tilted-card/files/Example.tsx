'use client';
import React, {useState,useRef} from 'react';
import Component from "./runtime/components/react-bits/TiltedCard/TiltedCard";

export default function Example({settings={}}:{settings?:Record<string,any>}) {
 const p={...{"accent":"#a78bfa","speed":1,"text":"Design that moves.","amount":100,"delay":200,"holdTime":1000,"gradientSize":220,"bend":3,"rotationInterval":2400},...settings};
 const [feedback,setFeedback]=useState(''),[index,setIndex]=useState(0);
 const container=useRef<HTMLDivElement>(null),start=useRef<HTMLDivElement>(null),end=useRef<HTMLDivElement>(null);
 return <><div className="demo-layout"><Component imageSrc={'data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600"><defs><linearGradient id="g" x2="1" y2="1"><stop stop-color="#b5a0ff"/><stop offset="1" stop-color="#202338"/></linearGradient></defs><rect width="600" height="600" fill="url(#g)"/><circle cx="300" cy="300" r="155" fill="none" stroke="#e5daff" stroke-width="24"/><path d="M140 420L460 180" stroke="#fbc49a" stroke-width="42"/><text x="40" y="565" fill="white" font-size="30">DESIGN / ATLAS</text></svg>')} captionText="Design / Atlas" altText="Абстрактная геометрическая композиция" containerWidth="300px" imageWidth="280px" imageHeight="280px" containerHeight="320px" showMobileWarning={false} /></div>{feedback&&<output className="demo-feedback" aria-live="polite">{feedback}</output>}</>;
}
