'use client';
import React, {useState,useRef} from 'react';
import {MagicCard} from "./runtime/components/magicui/magic-card";

export default function Example({settings={}}:{settings?:Record<string,any>}) {
 const p={...{"accent":"#a78bfa","speed":1,"text":"Design that moves.","amount":100,"delay":200,"holdTime":1000,"gradientSize":220,"bend":3,"rotationInterval":2400},...settings};
 const [feedback,setFeedback]=useState(''),[index,setIndex]=useState(0);
 const container=useRef<HTMLDivElement>(null),start=useRef<HTMLDivElement>(null),end=useRef<HTMLDivElement>(null);
 return <><div className="demo-layout"><MagicCard gradientColor="#27243e" gradientFrom={p.accent} gradientTo="#feac98" gradientSize={p.gradientSize} className="w-[320px] rounded-2xl"><div className="showcase-card border-none bg-transparent"><span className="overline">LIGHT / SURFACE</span><h2>Made for attention.</h2><p>Move across the surface.</p><button className="demo-button">Discover ↗</button></div></MagicCard></div>{feedback&&<output className="demo-feedback" aria-live="polite">{feedback}</output>}</>;
}
