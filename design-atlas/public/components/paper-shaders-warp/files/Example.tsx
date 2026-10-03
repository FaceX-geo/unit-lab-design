'use client';
import React,{useState,useRef} from 'react';
import {Warp as Component} from "./runtime/shaders/warp";

export default function Example({settings={}}:{settings?:Record<string,any>}){
const p={...{"text":"Design in motion.","speed":1,"accent":"#b6a1ff","density":1,"waves":0.5,"distortion":0.15,"gravity":1,"threshold":110},...settings};
const [feedback,setFeedback]=useState('');

return <><div className="demo-layout"><div className="full"><Component style={{width:"100%",height:"100%"}} speed={p.speed} colors={["#111119",p.accent,"#f5b59b","#7c9cca"]} distortion={p.distortion} /><div className="shader-caption"><span>PAPER / WARP</span><h2>A different dimension.</h2></div></div></div>{feedback&&<output className="demo-feedback" aria-live="polite">{feedback}</output>}</>;
}
