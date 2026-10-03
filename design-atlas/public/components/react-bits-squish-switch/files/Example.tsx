'use client';
import React, {useState,useRef} from 'react';
import Component from "./runtime/components/react-bits/SquishSwitch/SquishSwitch";

export default function Example({settings={}}:{settings?:Record<string,any>}) {
 const p={...{"accent":"#a78bfa","speed":1,"text":"Design that moves.","amount":100,"delay":200,"holdTime":1000,"gradientSize":220,"bend":3,"rotationInterval":2400},...settings};
 const [feedback,setFeedback]=useState(''),[index,setIndex]=useState(0);
 const container=useRef<HTMLDivElement>(null),start=useRef<HTMLDivElement>(null),end=useRef<HTMLDivElement>(null);
 return <><div className="demo-layout"><Component label="Make it playful" ariaLabel="Включить режим" onChange={v=>setFeedback(v?"Включено":"Выключено")} trackOnColor={p.accent} /></div>{feedback&&<output className="demo-feedback" aria-live="polite">{feedback}</output>}</>;
}
