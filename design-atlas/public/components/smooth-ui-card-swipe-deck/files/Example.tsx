'use client';
import React,{useState,useRef} from 'react';
import Component,{type CardSwipeDeckHandle} from "./runtime/packages/smoothui/components/card-swipe-deck/index";

export default function Example({settings={}}:{settings?:Record<string,any>}){
const p={...{"text":"Design in motion.","speed":1,"accent":"#b6a1ff","density":1,"waves":0.5,"distortion":0.15,"gravity":1,"threshold":110},...settings};
const [feedback,setFeedback]=useState('');
const deck=useRef<CardSwipeDeckHandle>(null);
return <><div className="demo-layout"><div className="swipe-stage"><Component ref={deck} threshold={p.threshold} labels={{left:"PASS",right:"KEEP"}} onSwipe={(id,d)=>setFeedback(id+" · "+d)} items={["A new perspective","Something to remember","Made for your next idea","Stay curious"].map((t,i)=>({id:"Idea "+(i+1),content:<div className={"swipe-art art-"+i}><span>0{i+1} / COLLECTION</span><i>✦</i><h2>{t}</h2></div>}))}/><div className="state-buttons"><button onClick={()=>deck.current?.swipeLeft()}>← Pass</button><button onClick={()=>deck.current?.reset()}>Reset</button><button onClick={()=>deck.current?.swipeRight()}>Keep →</button></div></div></div>{feedback&&<output className="demo-feedback" aria-live="polite">{feedback}</output>}</>;
}
