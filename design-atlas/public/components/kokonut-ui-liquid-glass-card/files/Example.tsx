'use client';
import React,{useState,useRef} from 'react';
import {LiquidGlassCard,LiquidButton} from "./runtime/components/kokonutui/liquid-glass-card";

export default function Example({settings={}}:{settings?:Record<string,any>}){
const p={...{"text":"Design in motion.","speed":1,"accent":"#b6a1ff","density":1,"waves":0.5,"distortion":0.15,"gravity":1,"threshold":110},...settings};
const [feedback,setFeedback]=useState('');

return <><div className="demo-layout"><div className="glass-stage"><div className="glass-art"/><LiquidGlassCard className="w-[310px] p-7 rounded-3xl"><span className="overline">LIGHT / REFRACTION</span><h2 className="text-4xl font-semibold my-6">Through a<br/>different lens.</h2><p className="text-sm mb-5">An original liquid glass surface.</p><LiquidButton onClick={()=>setFeedback("A clearer perspective ✓")}>Explore ↗</LiquidButton></LiquidGlassCard></div></div>{feedback&&<output className="demo-feedback" aria-live="polite">{feedback}</output>}</>;
}
