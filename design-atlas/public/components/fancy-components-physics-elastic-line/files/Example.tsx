'use client';
import React,{useState,useRef} from 'react';
import Component from "./runtime/fancy/components/physics/elastic-line";

export default function Example({settings={}}:{settings?:Record<string,any>}){
const p={...{"text":"Design in motion.","speed":1,"accent":"#b6a1ff","density":1,"waves":0.5,"distortion":0.15,"gravity":1,"threshold":110},...settings};
const [feedback,setFeedback]=useState('');

return <><div className="demo-layout"><div className="elastic-stage"><span className="overline">STRETCH YOUR PERSPECTIVE</span><h2>Give it a little pull.</h2><Component className="w-full h-48 text-violet-300" strokeWidth={2} grabThreshold={16} releaseThreshold={90}/><p>Проведите указателем через линию</p></div></div>{feedback&&<output className="demo-feedback" aria-live="polite">{feedback}</output>}</>;
}
