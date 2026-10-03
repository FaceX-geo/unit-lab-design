'use client';
import React, {useState,useRef} from 'react';
import {Marquee} from "./runtime/components/magicui/marquee";

export default function Example({settings={}}:{settings?:Record<string,any>}) {
 const p={...{"accent":"#a78bfa","speed":1,"text":"Design that moves.","amount":100,"delay":200,"holdTime":1000,"gradientSize":220,"bend":3,"rotationInterval":2400},...settings};
 const [feedback,setFeedback]=useState(''),[index,setIndex]=useState(0);
 const container=useRef<HTMLDivElement>(null),start=useRef<HTMLDivElement>(null),end=useRef<HTMLDivElement>(null);
 return <><div className="demo-layout"><div style={{width:"100%",overflow:"hidden"}}><Marquee pauseOnHover className="[--duration:18s]">{["Made to move","A better detail","Your next idea","Keep exploring"].map((t,i)=><div className="marquee-card" key={t}><span>0{i+1} / ATLAS</span><h2>{t}</h2><p>Thoughtfully made. Ready to use.</p></div>)}</Marquee></div></div>{feedback&&<output className="demo-feedback" aria-live="polite">{feedback}</output>}</>;
}
