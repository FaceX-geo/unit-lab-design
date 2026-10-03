'use client';
import React,{useState,useRef} from 'react';
import Component,{MatterBody} from "./runtime/fancy/components/physics/gravity";

export default function Example({settings={}}:{settings?:Record<string,any>}){
const p={...{"text":"Design in motion.","speed":1,"accent":"#b6a1ff","density":1,"waves":0.5,"distortion":0.15,"gravity":1,"threshold":110},...settings};
const [feedback,setFeedback]=useState('');

return <><div className="demo-layout"><div className="physics-stage"><div className="physics-heading"><span className="overline">FORM / PLAY / PHYSICS</span><h2>Let your ideas fall.</h2><p>Move. Drag. Explore.</p></div><Component className="absolute inset-0" gravity={{x:0,y:p.gravity}}>{["DESIGN","MOTION","CURIOUS","PLAY","✦","FORM"].map((t,i)=><MatterBody key={t} x={30+i*45} y={20+i*24} angle={i*8} matterBodyOptions={{restitution:.65,friction:.1}}><div className={"physics-pill pill-"+(i%3)}>{t}</div></MatterBody>)}</Component></div></div>{feedback&&<output className="demo-feedback" aria-live="polite">{feedback}</output>}</>;
}
