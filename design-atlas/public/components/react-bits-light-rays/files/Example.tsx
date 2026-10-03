'use client';
import React,{useState,useRef} from 'react';
import Component from "./runtime/components/react-bits/LightRays/LightRays";

export default function Example({settings={}}:{settings?:Record<string,any>}){
const p={...{"text":"Design in motion.","speed":1,"accent":"#b6a1ff","density":1,"waves":0.5,"distortion":0.15,"gravity":1,"threshold":110},...settings};
const [feedback,setFeedback]=useState('');

return <><div className="demo-layout"><div className="full"><Component raysSpeed={p.speed} raysColor={p.accent} followMouse /><div className="shader-caption"><span>REACT BITS / LIGHT RAYS</span><h2>A moment of clarity.</h2></div></div></div>{feedback&&<output className="demo-feedback" aria-live="polite">{feedback}</output>}</>;
}
