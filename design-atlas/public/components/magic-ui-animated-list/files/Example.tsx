'use client';
import React, {useState,useRef} from 'react';
import {AnimatedList} from "./runtime/components/magicui/animated-list";

export default function Example({settings={}}:{settings?:Record<string,any>}) {
 const p={...{"accent":"#a78bfa","speed":1,"text":"Design that moves.","amount":100,"delay":200,"holdTime":1000,"gradientSize":220,"bend":3,"rotationInterval":2400},...settings};
 const [feedback,setFeedback]=useState(''),[index,setIndex]=useState(0);
 const container=useRef<HTMLDivElement>(null),start=useRef<HTMLDivElement>(null),end=useRef<HTMLDivElement>(null);
 return <><div className="demo-layout"><div className="list-demo"><AnimatedList delay={1200}>{["A new idea saved","Your collection is growing","A small detail matters","Ready for your next project"].map((t,i)=><div key={t} className="notification"><i>{["✦","♡","◉","↗"][i]}</i><div><strong>{t}</strong><p>Design Atlas · just now</p></div></div>)}</AnimatedList></div></div>{feedback&&<output className="demo-feedback" aria-live="polite">{feedback}</output>}</>;
}
