'use client';
import React,{useState,useRef} from 'react';
import Component from "./runtime/animata/button/swipe-button";

export default function Example({settings={}}:{settings?:Record<string,any>}){
const p={...{"text":"Design in motion.","speed":1,"accent":"#b6a1ff","density":1,"waves":0.5,"distortion":0.15,"gravity":1,"threshold":110},...settings};
const [feedback,setFeedback]=useState('');

return <><div className="demo-layout"><Component firstText="Hover for a new perspective" secondText="Make it happen ↗" firstClass="bg-violet-200 text-violet-950" secondClass="bg-orange-200 text-orange-950" className="rounded-2xl px-7 py-4" onClick={()=>setFeedback("Нажатие зарегистрировано ✓")}/></div>{feedback&&<output className="demo-feedback" aria-live="polite">{feedback}</output>}</>;
}
