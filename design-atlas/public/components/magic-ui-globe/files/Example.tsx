'use client';
import React, {useState,useRef} from 'react';
import {Globe} from "./runtime/components/magicui/globe";

export default function Example({settings={}}:{settings?:Record<string,any>}) {
 const p={...{"accent":"#a78bfa","speed":1,"text":"Design that moves.","amount":100,"delay":200,"holdTime":1000,"gradientSize":220,"bend":3,"rotationInterval":2400},...settings};
 const [feedback,setFeedback]=useState(''),[index,setIndex]=useState(0);
 const container=useRef<HTMLDivElement>(null),start=useRef<HTMLDivElement>(null),end=useRef<HTMLDivElement>(null);
 return <><div className="demo-layout"><div className="full"><Globe config={{width:800,height:800,onRender:()=>{},devicePixelRatio:2,phi:0,theta:.3,dark:1,diffuse:1.2,mapSamples:16000,mapBrightness:6,baseColor:[.3,.3,.4],markerColor:[.8,.6,1],glowColor:[.5,.4,.8],markers:[{location:[55.75,37.62],size:.1}]}} /></div></div>{feedback&&<output className="demo-feedback" aria-live="polite">{feedback}</output>}</>;
}
