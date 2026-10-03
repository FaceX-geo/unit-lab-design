'use client';
import React,{useState,useRef} from 'react';
import Component from "./runtime/components/kokonutui/smooth-tab";

export default function Example({settings={}}:{settings?:Record<string,any>}){
const p={...{"text":"Design in motion.","speed":1,"accent":"#b6a1ff","density":1,"waves":0.5,"distortion":0.15,"gravity":1,"threshold":110},...settings};
const [feedback,setFeedback]=useState('');

return <><div className="demo-layout"><div className="w-full max-w-xl"><Component className="max-w-full" items={["Models","MCPs","Agents","Users"].map((title,i)=>({id:title,title,color:["bg-blue-500 hover:bg-blue-600","bg-purple-500 hover:bg-purple-600","bg-emerald-500 hover:bg-emerald-600","bg-amber-500 hover:bg-amber-600"][i],cardContent:<div className="h-full p-6 flex items-center justify-between gap-6"><div><span className="overline">0{i+1} / YOUR WORKSPACE</span><h3 className="text-3xl font-semibold mt-4">{title}</h3><p className="text-sm text-muted-foreground mt-2">{["A new perspective.","Connect your ideas.","Made to work together.","A space for everyone."][i]}</p></div><span className="text-6xl text-violet-300" aria-hidden="true">{["◉","⌘","✦","◎"][i]}</span></div>}))}/></div></div>{feedback&&<output className="demo-feedback" aria-live="polite">{feedback}</output>}</>;
}
