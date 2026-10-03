'use client';
import React,{useState,useRef} from 'react';
import {GodRays as Component} from "./runtime/shaders/god-rays";

export default function Example({settings={}}:{settings?:Record<string,any>}){
const p={...{"text":"Design in motion.","speed":1,"accent":"#b6a1ff","density":1,"waves":0.5,"distortion":0.15,"gravity":1,"threshold":110},...settings};
const [feedback,setFeedback]=useState('');

return <><div className="demo-layout"><div className="full"><Component style={{width:"100%",height:"100%"}} speed={p.speed} colorBack="#111119" colorBloom="#d8beff" colors={[p.accent,"#f6b3a2","#7a98e2"]} density={p.density} /><div className="shader-caption"><span>PAPER / GOD RAYS</span><h2>Find your light.</h2></div></div></div>{feedback&&<output className="demo-feedback" aria-live="polite">{feedback}</output>}</>;
}
