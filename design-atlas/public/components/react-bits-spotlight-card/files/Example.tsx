'use client';
import React, {useState,useRef} from 'react';
import Component from "./runtime/components/react-bits/SpotlightCard/SpotlightCard";

export default function Example({settings={}}:{settings?:Record<string,any>}) {
 const p={...{"accent":"#a78bfa","speed":1,"text":"Design that moves.","amount":100,"delay":200,"holdTime":1000,"gradientSize":220,"bend":3,"rotationInterval":2400},...settings};
 const [feedback,setFeedback]=useState(''),[index,setIndex]=useState(0);
 const container=useRef<HTMLDivElement>(null),start=useRef<HTMLDivElement>(null),end=useRef<HTMLDivElement>(null);
 return <><div className="demo-layout"><Component className="showcase-card" spotlightColor="rgba(167, 139, 250, 0.45)"><span className="overline">01 / INTERACTION</span><h2>Follow your curiosity.</h2><p>A little light. A different perspective.</p><button className="demo-button">Explore ↗</button></Component></div>{feedback&&<output className="demo-feedback" aria-live="polite">{feedback}</output>}</>;
}
