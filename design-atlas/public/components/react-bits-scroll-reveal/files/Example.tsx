'use client';
import React, {useState,useRef} from 'react';
import Component from "./runtime/components/react-bits/ScrollReveal/ScrollReveal";

export default function Example({settings={}}:{settings?:Record<string,any>}) {
 const p={...{"accent":"#a78bfa","speed":1,"text":"Design that moves.","amount":100,"delay":200,"holdTime":1000,"gradientSize":220,"bend":3,"rotationInterval":2400},...settings};
 const [feedback,setFeedback]=useState(''),[index,setIndex]=useState(0);
 const container=useRef<HTMLDivElement>(null),start=useRef<HTMLDivElement>(null),end=useRef<HTMLDivElement>(null);
 return <><div className="demo-layout"><div className="scroll-demo"><p>SCROLL TO REVEAL ↓</p><div style={{height:240}}/><Component textClassName="hero-text">Every detail becomes a decision. Every decision becomes an experience.</Component><div style={{height:400}}/></div></div>{feedback&&<output className="demo-feedback" aria-live="polite">{feedback}</output>}</>;
}
