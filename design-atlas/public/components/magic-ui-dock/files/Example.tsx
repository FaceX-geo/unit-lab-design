'use client';
import React, {useState,useRef} from 'react';
import {Dock, DockIcon} from "./runtime/components/magicui/dock";

export default function Example({settings={}}:{settings?:Record<string,any>}) {
 const p={...{"accent":"#a78bfa","speed":1,"text":"Design that moves.","amount":100,"delay":200,"holdTime":1000,"gradientSize":220,"bend":3,"rotationInterval":2400},...settings};
 const [feedback,setFeedback]=useState(''),[index,setIndex]=useState(0);
 const container=useRef<HTMLDivElement>(null),start=useRef<HTMLDivElement>(null),end=useRef<HTMLDivElement>(null);
 return <><div className="demo-layout"><Dock className="bg-neutral-900 border-neutral-700">{["⌂","✦","◉","▦","♡"].map((s,i)=><DockIcon key={i}><button aria-label={"Раздел "+i} onClick={()=>setFeedback("Выбран раздел "+(i+1))} className="dock-button">{s}</button></DockIcon>)}</Dock></div>{feedback&&<output className="demo-feedback" aria-live="polite">{feedback}</output>}</>;
}
