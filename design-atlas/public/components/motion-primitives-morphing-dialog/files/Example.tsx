'use client';
import React, {useState,useRef} from 'react';
import {MorphingDialog,MorphingDialogTrigger,MorphingDialogContent,MorphingDialogContainer,MorphingDialogTitle,MorphingDialogDescription,MorphingDialogClose} from "./runtime/components/motion-primitives/morphing-dialog";

export default function Example({settings={}}:{settings?:Record<string,any>}) {
 const p={...{"accent":"#a78bfa","speed":1,"text":"Design that moves.","amount":100,"delay":200,"holdTime":1000,"gradientSize":220,"bend":3,"rotationInterval":2400},...settings};
 const [feedback,setFeedback]=useState(''),[index,setIndex]=useState(0);
 const container=useRef<HTMLDivElement>(null),start=useRef<HTMLDivElement>(null),end=useRef<HTMLDivElement>(null);
 return <><div className="demo-layout"><MorphingDialog transition={{type:"spring",stiffness:180,damping:22}}><MorphingDialogTrigger className="showcase-card text-left"><span className="overline">CLICK TO EXPAND</span><MorphingDialogTitle className="text-3xl">A closer look.</MorphingDialogTitle></MorphingDialogTrigger><MorphingDialogContainer><MorphingDialogContent className="showcase-card max-w-md"><MorphingDialogTitle className="text-3xl">A closer look.</MorphingDialogTitle><MorphingDialogDescription>A small card becomes a place for the full story. Smooth shared layout animation connects both states.</MorphingDialogDescription><MorphingDialogClose /></MorphingDialogContent></MorphingDialogContainer></MorphingDialog></div>{feedback&&<output className="demo-feedback" aria-live="polite">{feedback}</output>}</>;
}
