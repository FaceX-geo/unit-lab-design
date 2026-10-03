'use client';
import React, {useState,useRef} from 'react';
import {BorderBeam} from "./runtime/components/magicui/border-beam";

export default function Example({settings={}}:{settings?:Record<string,any>}) {
 const p={...{"accent":"#a78bfa","speed":1,"text":"Design that moves.","amount":100,"delay":200,"holdTime":1000,"gradientSize":220,"bend":3,"rotationInterval":2400},...settings};
 const [feedback,setFeedback]=useState(''),[index,setIndex]=useState(0);
 const container=useRef<HTMLDivElement>(null),start=useRef<HTMLDivElement>(null),end=useRef<HTMLDivElement>(null);
 return <><div className="demo-layout"><div className="showcase-card relative overflow-hidden"><span className="overline">A MOMENT OF LIGHT</span><h2>A little edge.</h2><p>A perimeter that never stands still.</p><BorderBeam duration={6} size={180} colorFrom={p.accent} colorTo="#fb9f8f" /></div></div>{feedback&&<output className="demo-feedback" aria-live="polite">{feedback}</output>}</>;
}
