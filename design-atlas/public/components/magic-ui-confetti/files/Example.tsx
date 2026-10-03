'use client';
import React, {useState,useRef} from 'react';
import {ConfettiButton} from "./runtime/components/magicui/confetti";

export default function Example({settings={}}:{settings?:Record<string,any>}) {
 const p={...{"accent":"#a78bfa","speed":1,"text":"Design that moves.","amount":100,"delay":200,"holdTime":1000,"gradientSize":220,"bend":3,"rotationInterval":2400},...settings};
 const [feedback,setFeedback]=useState(''),[index,setIndex]=useState(0);
 const container=useRef<HTMLDivElement>(null),start=useRef<HTMLDivElement>(null),end=useRef<HTMLDivElement>(null);
 return <><div className="demo-layout"><ConfettiButton options={{particleCount:120,spread:90,colors:[p.accent,"#f8b895","#83dbc5"]}} className="demo-button" onClick={()=>setFeedback("Celebrate! ✦")}>Celebrate your next idea ✦</ConfettiButton></div>{feedback&&<output className="demo-feedback" aria-live="polite">{feedback}</output>}</>;
}
