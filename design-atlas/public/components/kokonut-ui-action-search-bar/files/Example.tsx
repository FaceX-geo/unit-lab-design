'use client';
import React,{useState,useRef} from 'react';
import Component from "./runtime/components/kokonutui/action-search-bar";
import {Search,Heart,Sparkles} from 'lucide-react';

export default function Example({settings={}}:{settings?:Record<string,any>}){
const p={...{"text":"Design in motion.","speed":1,"accent":"#b6a1ff","density":1,"waves":0.5,"distortion":0.15,"gravity":1,"threshold":110},...settings};
const [feedback,setFeedback]=useState('');

return <><div className="demo-layout"><div className="w-full max-w-xl"><Component defaultOpen actions={[{id:"1",label:"Find a component",description:"Explore the collection",icon:<Search size={18}/>},{id:"2",label:"Save an idea",description:"Add to your library",icon:<Heart size={18}/>},{id:"3",label:"Create something",description:"Start your next project",icon:<Sparkles size={18}/>}]} /></div></div>{feedback&&<output className="demo-feedback" aria-live="polite">{feedback}</output>}</>;
}
