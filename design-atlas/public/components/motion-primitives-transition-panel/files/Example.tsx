'use client';
import React, {useState,useRef} from 'react';
import {TransitionPanel} from "./runtime/components/motion-primitives/transition-panel";

export default function Example({settings={}}:{settings?:Record<string,any>}) {
 const p={...{"accent":"#a78bfa","speed":1,"text":"Design that moves.","amount":100,"delay":200,"holdTime":1000,"gradientSize":220,"bend":3,"rotationInterval":2400},...settings};
 const [feedback,setFeedback]=useState(''),[index,setIndex]=useState(0);
 const container=useRef<HTMLDivElement>(null),start=useRef<HTMLDivElement>(null),end=useRef<HTMLDivElement>(null);
 return <><div className="demo-layout"><div className="showcase-card"><div className="panel-tabs">{["Discover","Explore","Create"].map((t,i)=><button key={t} onClick={()=>setIndex(i)} aria-pressed={index===i}>{t}</button>)}</div><TransitionPanel activeIndex={index} transition={{duration:.3}} variants={{enter:{opacity:0,y:20},center:{opacity:1,y:0},exit:{opacity:0,y:-20}}}>{["Good design starts with curiosity.","Try a different perspective.","Make something worth keeping."].map(t=><div key={t} className="panel-story"><h2>{t}</h2></div>)}</TransitionPanel></div></div>{feedback&&<output className="demo-feedback" aria-live="polite">{feedback}</output>}</>;
}
