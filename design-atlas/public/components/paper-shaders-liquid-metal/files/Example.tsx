'use client';
import React,{useState,useRef} from 'react';
import {LiquidMetal as Component} from "./runtime/shaders/liquid-metal";

export default function Example({settings={}}:{settings?:Record<string,any>}){
const p={...{"text":"Design in motion.","speed":1,"accent":"#b6a1ff","density":1,"waves":0.5,"distortion":0.15,"gravity":1,"threshold":110},...settings};
const [feedback,setFeedback]=useState('');
const [backdrop,setBackdrop]=useState(true);
return <><div className="demo-layout"><div className="full"><Component style={{width:"100%",height:"100%"}} speed={p.speed} colorBack="#111119" colorTint={p.accent} distortion={p.distortion} shape={backdrop?"none":"diamond"} scale={backdrop?1:.6} /><button className="material-view" onClick={()=>setBackdrop(v=>!v)}>{backdrop?"Diamond view ↗":"Full background ↗"}</button><div className="shader-caption"><span>PAPER / LIQUID METAL</span><h2>Reflect a new idea.</h2></div></div></div>{feedback&&<output className="demo-feedback" aria-live="polite">{feedback}</output>}</>;
}
