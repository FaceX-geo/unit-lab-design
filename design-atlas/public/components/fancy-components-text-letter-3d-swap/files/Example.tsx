'use client';
import React,{useState,useRef} from 'react';
import Component from "./runtime/fancy/components/text/letter-3d-swap";

export default function Example({settings={}}:{settings?:Record<string,any>}){
const p={...{"text":"Design in motion.","speed":1,"accent":"#b6a1ff","density":1,"waves":0.5,"distortion":0.15,"gravity":1,"threshold":110},...settings};
const [feedback,setFeedback]=useState('');

return <><div className="demo-layout"><div className="text-center"><Component mainClassName="hero-text" secondFaceClassName="text-violet-300" rotateDirection="top" staggerDuration={.035}>{p.text}</Component><p className="demo-caption">Наведите на буквы · 3D rotation</p></div></div>{feedback&&<output className="demo-feedback" aria-live="polite">{feedback}</output>}</>;
}
