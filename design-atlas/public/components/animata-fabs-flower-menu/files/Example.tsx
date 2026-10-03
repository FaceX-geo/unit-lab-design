'use client';
import React,{useState,useRef} from 'react';
import Component from "./runtime/animata/fabs/flower-menu";
import {Home,Heart,Search,Sparkles} from 'lucide-react';

export default function Example({settings={}}:{settings?:Record<string,any>}){
const p={...{"text":"Design in motion.","speed":1,"accent":"#b6a1ff","density":1,"waves":0.5,"distortion":0.15,"gravity":1,"threshold":110},...settings};
const [feedback,setFeedback]=useState('');

return <><div className="demo-layout"><Component togglerSize={56} triggerLabel="Открыть меню" menuLabel="Действия коллекции" backgroundColor="#b6a1ff" iconColor="#251936" menuItems={[{icon:Home,href:"#home",label:"Home"},{icon:Heart,href:"#saved",label:"Saved"},{icon:Search,href:"#search",label:"Search"},{icon:Sparkles,href:"#inspiration",label:"Inspiration"}]}/></div>{feedback&&<output className="demo-feedback" aria-live="polite">{feedback}</output>}</>;
}
