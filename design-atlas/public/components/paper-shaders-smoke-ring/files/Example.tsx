'use client';
import React,{useState,useRef} from 'react';
import {SmokeRing as Component} from "./runtime/shaders/smoke-ring";

export default function Example({settings={}}:{settings?:Record<string,any>}){
const p={...{"text":"Design in motion.","speed":1,"accent":"#b6a1ff","density":1,"waves":0.5,"distortion":0.15,"gravity":1,"threshold":110},...settings};
const [feedback,setFeedback]=useState('');

return <><div className="demo-layout"><div className="full"><Component style={{width:"100%",height:"100%"}} speed={p.speed} colorBack="#111119" colors={[p.accent,"#f5c2a5","#8eaeee"]} radius={.3} thickness={.12} /><div className="shader-caption"><span>PAPER / SMOKE RING</span><h2>An atmosphere of ideas.</h2></div></div></div>{feedback&&<output className="demo-feedback" aria-live="polite">{feedback}</output>}</>;
}
