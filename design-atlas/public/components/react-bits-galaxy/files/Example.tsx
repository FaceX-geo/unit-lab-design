'use client';
import React,{useState,useRef} from 'react';
import Component from "./runtime/components/react-bits/Galaxy/Galaxy";

export default function Example({settings={}}:{settings?:Record<string,any>}){
const p={...{"text":"Design in motion.","speed":1,"accent":"#b6a1ff","density":1,"waves":0.5,"distortion":0.15,"gravity":1,"threshold":110},...settings};
const [feedback,setFeedback]=useState('');

return <><div className="demo-layout"><div className="full"><Component speed={p.speed} density={p.density} transparent={false} /><div className="shader-caption"><span>REACT BITS / GALAXY</span><h2>Stay curious.</h2></div></div></div>{feedback&&<output className="demo-feedback" aria-live="polite">{feedback}</output>}</>;
}
