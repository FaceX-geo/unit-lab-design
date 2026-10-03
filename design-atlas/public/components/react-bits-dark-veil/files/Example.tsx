'use client';
import React,{useState,useRef} from 'react';
import Component from "./runtime/components/react-bits/DarkVeil/DarkVeil";

export default function Example({settings={}}:{settings?:Record<string,any>}){
const p={...{"text":"Design in motion.","speed":1,"accent":"#b6a1ff","density":1,"waves":0.5,"distortion":0.15,"gravity":1,"threshold":110},...settings};
const [feedback,setFeedback]=useState('');

return <><div className="demo-layout"><div className="full"><Component speed={p.speed} noiseIntensity={.08} /><div className="shader-caption"><span>REACT BITS / DARK VEIL</span><h2>Beyond the surface.</h2></div></div></div>{feedback&&<output className="demo-feedback" aria-live="polite">{feedback}</output>}</>;
}
