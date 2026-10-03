'use client';
import React,{useState,useRef} from 'react';
import Component from "./runtime/components/react-bits/Balatro/Balatro";

export default function Example({settings={}}:{settings?:Record<string,any>}){
const p={...{"text":"Design in motion.","speed":1,"accent":"#b6a1ff","density":1,"waves":0.5,"distortion":0.15,"gravity":1,"threshold":110},...settings};
const [feedback,setFeedback]=useState('');

return <><div className="demo-layout"><div className="full"><Component spinSpeed={p.speed*7} color1={p.accent} color2="#f0997d" color3="#1b1630" isRotate /><div className="shader-caption"><span>REACT BITS / BALATRO</span><h2>A playful perspective.</h2></div></div></div>{feedback&&<output className="demo-feedback" aria-live="polite">{feedback}</output>}</>;
}
