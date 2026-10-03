'use client';
import React,{useState,useRef} from 'react';
import Component from "./runtime/components/kokonutui/profile-dropdown";

export default function Example({settings={}}:{settings?:Record<string,any>}){
const p={...{"text":"Design in motion.","speed":1,"accent":"#b6a1ff","density":1,"waves":0.5,"distortion":0.15,"gravity":1,"threshold":110},...settings};
const [feedback,setFeedback]=useState('');

return <><div className="demo-layout"><Component data={{name:"Alex Designer",email:"alex@atlas.local",avatar:'data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" rx="50" fill="#c4b5fd"/><circle cx="50" cy="37" r="17" fill="#332342"/><path d="M15 93a35 35 0 0170 0" fill="#332342"/></svg>'),subscription:"Personal",model:"Design Atlas"}} /></div>{feedback&&<output className="demo-feedback" aria-live="polite">{feedback}</output>}</>;
}
