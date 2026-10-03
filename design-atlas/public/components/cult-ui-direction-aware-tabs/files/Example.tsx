'use client';
import React,{useState,useRef} from 'react';
import {DirectionAwareTabs} from "./runtime/registry/default/ui/direction-aware-tabs";

export default function Example({settings={}}:{settings?:Record<string,any>}){
const p={...{"text":"Design in motion.","speed":1,"accent":"#b6a1ff","density":1,"waves":0.5,"distortion":0.15,"gravity":1,"threshold":110},...settings};
const [feedback,setFeedback]=useState('');

return <><div className="demo-layout"><div className="w-full max-w-md"><DirectionAwareTabs tabs={["Form","Motion","Texture"].map((t,i)=>({id:i,label:t,content:<div className="tab-art"><span className="overline">0{i+1} / PERSPECTIVE</span><i>{["◉","✦","▦"][i]}</i><h2>{["A little structure.","Made to move.","Feel the surface."][i]}</h2></div>}))}/></div></div>{feedback&&<output className="demo-feedback" aria-live="polite">{feedback}</output>}</>;
}
