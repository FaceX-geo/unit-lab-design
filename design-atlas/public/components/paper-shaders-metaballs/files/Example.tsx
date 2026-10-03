'use client';
import React,{useState,useRef} from 'react';
import {Metaballs as Component} from "./runtime/shaders/metaballs";

export default function Example({settings={}}:{settings?:Record<string,any>}){
const p={...{"text":"Design in motion.","speed":1,"accent":"#b6a1ff","density":1,"waves":0.5,"distortion":0.15,"gravity":1,"threshold":110},...settings};
const [feedback,setFeedback]=useState('');

return <><div className="demo-layout"><div className="full"><Component style={{width:"100%",height:"100%"}} speed={p.speed} colorBack="#111119" colors={[p.accent,"#f9ad95","#91d5c5"]} count={9} size={.65} /><div className="shader-caption"><span>PAPER / METABALLS</span><h2>Beautifully connected.</h2></div></div></div>{feedback&&<output className="demo-feedback" aria-live="polite">{feedback}</output>}</>;
}
