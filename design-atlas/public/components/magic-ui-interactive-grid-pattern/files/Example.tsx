'use client';
import React, {useState,useRef} from 'react';
import {InteractiveGridPattern} from "./runtime/components/magicui/interactive-grid-pattern";

export default function Example({settings={}}:{settings?:Record<string,any>}) {
 const p={...{"accent":"#a78bfa","speed":1,"text":"Design that moves.","amount":100,"delay":200,"holdTime":1000,"gradientSize":220,"bend":3,"rotationInterval":2400},...settings};
 const [feedback,setFeedback]=useState(''),[index,setIndex]=useState(0);
 const container=useRef<HTMLDivElement>(null),start=useRef<HTMLDivElement>(null),end=useRef<HTMLDivElement>(null);
 return <><div className="demo-layout"><div className="full"><InteractiveGridPattern width={40} height={40} squares={[24,16]} className="border-neutral-700" squaresClassName="fill-violet-500/0 hover:fill-violet-500/40"/><div className="effect-title">Leave your mark.</div></div></div>{feedback&&<output className="demo-feedback" aria-live="polite">{feedback}</output>}</>;
}
