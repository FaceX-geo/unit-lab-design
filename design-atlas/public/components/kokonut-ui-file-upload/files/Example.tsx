'use client';
import React,{useState,useRef} from 'react';
import Component from "./runtime/components/kokonutui/file-upload";

export default function Example({settings={}}:{settings?:Record<string,any>}){
const p={...{"text":"Design in motion.","speed":1,"accent":"#b6a1ff","density":1,"waves":0.5,"distortion":0.15,"gravity":1,"threshold":110},...settings};
const [feedback,setFeedback]=useState('');
const [upload,setUpload]=useState<File|null>(null);
return <><div className="demo-layout"><div className="w-full max-w-md"><Component acceptedFileTypes={["image/png","image/jpeg","application/pdf","text/plain"]} currentFile={upload} onUploadSuccess={f=>{setUpload(f);setFeedback("Локальное демо: "+f.name)}} onFileRemove={()=>setUpload(null)} uploadDelay={1200}/><p className="demo-caption">Демонстрация прогресса. Файлы остаются в браузере.</p></div></div>{feedback&&<output className="demo-feedback" aria-live="polite">{feedback}</output>}</>;
}
