'use client';
import React,{useState,useRef} from 'react';
import Component from "./runtime/packages/smoothui/components/siri-orb/index";

export default function Example({settings={}}:{settings?:Record<string,any>}){
const p={...{"text":"Design in motion.","speed":1,"accent":"#b6a1ff","density":1,"waves":0.5,"distortion":0.15,"gravity":1,"threshold":110},...settings};
const [feedback,setFeedback]=useState('');
const [orbState,setOrbState]=useState<"idle"|"listening"|"thinking"|"streaming"|"done"|"error">("idle");
return <><div className="demo-layout"><div className="orb-stage"><Component size="240px" state={orbState} amplitude={orbState==="listening"?.6:.2} animationDuration={20/p.speed}/><div className="state-buttons">{(["idle","listening","thinking","streaming","done","error"] as const).map(s=><button key={s} aria-pressed={orbState===s} onClick={()=>setOrbState(s)}>{s}</button>)}</div><p className="demo-caption">Состояния помощника · без доступа к микрофону</p></div></div>{feedback&&<output className="demo-feedback" aria-live="polite">{feedback}</output>}</>;
}
