'use client';
import React,{useState,useRef} from 'react';
import Component from "./runtime/components/react-bits/Threads/Threads";

export default function Example({settings={}}:{settings?:Record<string,any>}){
const p={...{"text":"Design in motion.","speed":1,"accent":"#b6a1ff","density":1,"waves":0.5,"distortion":0.15,"gravity":1,"threshold":110},...settings};
const [feedback,setFeedback]=useState('');

return <><div className="demo-layout"><div className="full"><Component color={[.7,.6,1]} amplitude={p.density} enableMouseInteraction /><div className="shader-caption"><span>REACT BITS / THREADS</span><h2>Follow the thread.</h2></div></div></div>{feedback&&<output className="demo-feedback" aria-live="polite">{feedback}</output>}</>;
}
