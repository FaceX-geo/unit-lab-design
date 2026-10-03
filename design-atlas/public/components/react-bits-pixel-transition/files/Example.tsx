'use client';
import React, {useState,useRef} from 'react';
import Component from "./runtime/components/react-bits/PixelTransition/PixelTransition";

export default function Example({settings={}}:{settings?:Record<string,any>}) {
 const p={...{"accent":"#a78bfa","speed":1,"text":"Design that moves.","amount":100,"delay":200,"holdTime":1000,"gradientSize":220,"bend":3,"rotationInterval":2400},...settings};
 const [feedback,setFeedback]=useState(''),[index,setIndex]=useState(0);
 const container=useRef<HTMLDivElement>(null),start=useRef<HTMLDivElement>(null),end=useRef<HTMLDivElement>(null);
 return <><div className="demo-layout"><Component firstContent={<div className="pixel-first">A different<br/>perspective.</div>} secondContent={<div className="pixel-second">Make<br/>the switch. ↗</div>} pixelColor={p.accent} gridSize={10} style={{width:320}} /></div>{feedback&&<output className="demo-feedback" aria-live="polite">{feedback}</output>}</>;
}
