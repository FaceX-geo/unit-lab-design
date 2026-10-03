// Atlas-authored usage examples; the imported component implementation stays unchanged.
export function exampleFor(m){
 const entry='./'+(m.runtimeEntry||m.entry).replace(/\.(tsx|jsx|js)$/,'');
 const css=m.library==='react-bits'?'': '';
 const defaults={accent:'#a78bfa',speed:1,text:'Design that moves.',amount:100,delay:200,holdTime:1000,gradientSize:220,bend:3,rotationInterval:2400};
 let imports='',body='',controls=[];
 const control=(key,label,min,max,step)=>controls.push({key,label,min,max,step,type:'number',default:defaults[key]??1});
 const image="'data:image/svg+xml,'+encodeURIComponent('<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"600\" height=\"600\"><defs><linearGradient id=\"g\" x2=\"1\" y2=\"1\"><stop stop-color=\"#b5a0ff\"/><stop offset=\"1\" stop-color=\"#202338\"/></linearGradient></defs><rect width=\"600\" height=\"600\" fill=\"url(#g)\"/><circle cx=\"300\" cy=\"300\" r=\"155\" fill=\"none\" stroke=\"#e5daff\" stroke-width=\"24\"/><path d=\"M140 420L460 180\" stroke=\"#fbc49a\" stroke-width=\"42\"/><text x=\"40\" y=\"565\" fill=\"white\" font-size=\"30\">DESIGN / ATLAS</text></svg>')";
 if(m.library==='react-bits'){
  imports=`import Component from ${JSON.stringify(entry)};`;
  switch(m.name){
   case'SplitText':body='<Component text={p.text} delay={p.delay/4} duration={p.speed} className="hero-text" />';controls=[{key:'text',label:'Текст',type:'text',default:defaults.text}];control('speed','Длительность',.3,3,.1);break;
   case'BlurText':body='<Component text={p.text} delay={p.delay} className="hero-text" />';controls=[{key:'text',label:'Текст',type:'text',default:defaults.text}];control('delay','Задержка слов · ms',20,500,10);break;
   case'ScrollReveal':body='<div className="scroll-demo"><p>SCROLL TO REVEAL ↓</p><div style={{height:240}}/><Component textClassName="hero-text">Every detail becomes a decision. Every decision becomes an experience.</Component><div style={{height:400}}/></div>';break;
   case'DecryptedText':body='<Component text={p.text} animateOn="inViewHover" className="hero-text" parentClassName="hero-text" encryptedClassName="muted" />';controls=[{key:'text',label:'Текст',type:'text',default:defaults.text}];break;
   case'RotatingText':body='<div className="hero-text">Design is <Component texts={["playful.","alive.","personal."]} rotationInterval={p.rotationInterval} mainClassName="rotating-label" /></div>';control('rotationInterval','Интервал · ms',800,5000,100);break;
   case'Aurora':body='<div className="full"><Component colorStops={["#5227ff",p.accent,"#fd77ba"]} speed={p.speed} /><div className="effect-title">Beyond ordinary.</div></div>';control('speed','Скорость',.2,3,.1);break;
   case'Iridescence':body='<div className="full"><Component speed={p.speed} /><div className="effect-title">Fluid by nature.</div></div>';control('speed','Скорость',.1,3,.1);break;
   case'Silk':body='<div className="full"><Component speed={p.speed*5} color={p.accent} /><div className="effect-title">Soft. Unfolded.</div></div>';control('speed','Скорость',.1,3,.1);break;
   case'Hyperspeed':body='<div className="full"><Component /><div className="effect-title small-title">Hold to accelerate.</div></div>';break;
   case'LiquidEther':body='<div className="full"><Component colors={[p.accent,"#ff799e","#84ddff"]} autoSpeed={p.speed} /><div className="effect-title">Move the atmosphere.</div></div>';control('speed','Скорость',.1,2,.1);break;
   case'SpotlightCard':body='<Component className="showcase-card" spotlightColor="rgba(167, 139, 250, 0.45)"><span className="overline">01 / INTERACTION</span><h2>Follow your curiosity.</h2><p>A little light. A different perspective.</p><button className="demo-button">Explore ↗</button></Component>';break;
   case'TiltedCard':body=`<Component imageSrc={${image}} captionText="Design / Atlas" altText="Абстрактная геометрическая композиция" containerWidth="300px" imageWidth="280px" imageHeight="280px" containerHeight="320px" showMobileWarning={false} />`;break;
   case'PixelTransition':body='<Component firstContent={<div className="pixel-first">A different<br/>perspective.</div>} secondContent={<div className="pixel-second">Make<br/>the switch. ↗</div>} pixelColor={p.accent} gridSize={10} style={{width:320}} />';break;
   case'CircularGallery':body=`<div className="full"><Component items={['Form','Motion','Texture','Light','Space'].map(text=>({text,image:${image}}))} bend={p.bend} font="bold 30px Manrope" textColor="#f5f3ff" /></div>`;control('bend','Кривизна',-5,5,.5);break;
   case'GooeyNav':body='<Component items={[{label:"Explore",href:"#explore"},{label:"Create",href:"#create"},{label:"Collect",href:"#collect"}]} />';break;
   case'ElasticSlider':body='<div className="showcase-card"><span className="overline">TUNE YOUR EXPERIENCE</span><h2>Turn it up.</h2><Component leftIcon={<span>−</span>} rightIcon={<span>＋</span>} /></div>';break;
   case'Magnet':body='<Component padding={90} magnetStrength={2}><button className="demo-button" onClick={()=>setFeedback("Притяжение сработало ✓")}>Follow the attraction ↗</button></Component>';break;
   case'HoldButton':body='<Component holdTime={p.holdTime} onHold={()=>setFeedback("Подтверждено ✓")} doneLabel="Confirmed" fillColor={p.accent}>Hold to confirm</Component>';control('holdTime','Время удержания · ms',400,2400,100);break;
   case'SwipeRow':body='<div style={{width:320}}><Component label="Swipe to reveal actions" onAction={()=>setFeedback("Действие выбрано ✓")}><span style={{padding:24}}>Swipe this row ←</span></Component></div>';break;
   case'SquishSwitch':body='<Component label="Make it playful" ariaLabel="Включить режим" onChange={v=>setFeedback(v?"Включено":"Выключено")} trackOnColor={p.accent} />';break;
  }
 }
 if(m.library==='magic-ui'){
  const exports={'marquee':'Marquee','dock':'Dock, DockIcon','globe':'Globe','animated-beam':'AnimatedBeam','border-beam':'BorderBeam','magic-card':'MagicCard','shimmer-button':'ShimmerButton','ripple-button':'RippleButton','number-ticker':'NumberTicker','interactive-grid-pattern':'InteractiveGridPattern','confetti':'ConfettiButton','animated-list':'AnimatedList'};
  imports=`import {${exports[m.name]}} from ${JSON.stringify(entry)};`;
  switch(m.name){
   case'marquee':body='<div style={{width:"100%",overflow:"hidden"}}><Marquee pauseOnHover className="[--duration:18s]">{["Made to move","A better detail","Your next idea","Keep exploring"].map((t,i)=><div className="marquee-card" key={t}><span>0{i+1} / ATLAS</span><h2>{t}</h2><p>Thoughtfully made. Ready to use.</p></div>)}</Marquee></div>';break;
   case'dock':body='<Dock className="bg-neutral-900 border-neutral-700">{["⌂","✦","◉","▦","♡"].map((s,i)=><DockIcon key={i}><button aria-label={"Раздел "+i} onClick={()=>setFeedback("Выбран раздел "+(i+1))} className="dock-button">{s}</button></DockIcon>)}</Dock>';break;
   case'globe':body='<div className="full"><Globe config={{width:800,height:800,onRender:()=>{},devicePixelRatio:2,phi:0,theta:.3,dark:1,diffuse:1.2,mapSamples:16000,mapBrightness:6,baseColor:[.3,.3,.4],markerColor:[.8,.6,1],glowColor:[.5,.4,.8],markers:[{location:[55.75,37.62],size:.1}]}} /></div>';break;
   case'animated-beam':body='<div ref={container} className="beam-demo"><div ref={start} className="beam-node">✦</div><div ref={end} className="beam-node">◉</div><AnimatedBeam containerRef={container} fromRef={start} toRef={end} gradientStartColor={p.accent} gradientStopColor="#ffb68b" /></div>';break;
   case'border-beam':body='<div className="showcase-card relative overflow-hidden"><span className="overline">A MOMENT OF LIGHT</span><h2>A little edge.</h2><p>A perimeter that never stands still.</p><BorderBeam duration={6} size={180} colorFrom={p.accent} colorTo="#fb9f8f" /></div>';break;
   case'magic-card':body='<MagicCard gradientColor="#27243e" gradientFrom={p.accent} gradientTo="#feac98" gradientSize={p.gradientSize} className="w-[320px] rounded-2xl"><div className="showcase-card border-none bg-transparent"><span className="overline">LIGHT / SURFACE</span><h2>Made for attention.</h2><p>Move across the surface.</p><button className="demo-button">Discover ↗</button></div></MagicCard>';control('gradientSize','Размер света',80,400,10);break;
   case'shimmer-button':body='<ShimmerButton shimmerColor={p.accent} onClick={()=>setFeedback("Нажатие зарегистрировано ✓")}>Start something beautiful ↗</ShimmerButton>';break;
   case'ripple-button':body='<RippleButton rippleColor={p.accent} className="rounded-full px-9 py-4 text-xl" onClick={()=>setFeedback("Волна запущена")}>Make a ripple</RippleButton>';break;
   case'number-ticker':body='<div className="number-demo"><NumberTicker value={p.amount} className="text-8xl tracking-tighter text-white"/><span>Ideas worth keeping.</span></div>';control('amount','Целевое число',10,999,1);break;
   case'interactive-grid-pattern':body='<div className="full"><InteractiveGridPattern width={40} height={40} squares={[24,16]} className="border-neutral-700" squaresClassName="fill-violet-500/0 hover:fill-violet-500/40"/><div className="effect-title">Leave your mark.</div></div>';break;
   case'confetti':body='<ConfettiButton options={{particleCount:120,spread:90,colors:[p.accent,"#f8b895","#83dbc5"]}} className="demo-button" onClick={()=>setFeedback("Celebrate! ✦")}>Celebrate your next idea ✦</ConfettiButton>';break;
   case'animated-list':body='<div className="list-demo"><AnimatedList delay={1200}>{["A new idea saved","Your collection is growing","A small detail matters","Ready for your next project"].map((t,i)=><div key={t} className="notification"><i>{["✦","♡","◉","↗"][i]}</i><div><strong>{t}</strong><p>Design Atlas · just now</p></div></div>)}</AnimatedList></div>';break;
  }
 }
 if(m.library==='animate-ui'){
  const names={'radix/accordion':'RadixAccordionDemo','radix/dialog':'RadixDialogDemo','radix/dropdown-menu':'RadixDropdownMenuDemo','radix/sheet':'RadixSheetDemo','radix/switch':'RadixSwitchDemo','animate/tabs':'AnimateTabsDemo','animate/tooltip':'AnimateTooltipDemo','buttons/liquid':'LiquidButtonDemo','community/motion-carousel':'MotionCarouselDemo','community/radial-menu':'RadialMenuDemo'};
  imports=m.name==='buttons/liquid'?`import OriginalDemo from ${JSON.stringify('./'+(m.runtimeDemoEntry||m.demoEntry).replace(/\.(tsx|jsx|js)$/,''))};`:`import {${names[m.name]} as OriginalDemo} from ${JSON.stringify('./'+(m.runtimeDemoEntry||m.demoEntry).replace(/\.(tsx|jsx|js)$/,''))};`;
  const demoProps={'radix/dialog':' from="bottom" showCloseButton={true}','radix/dropdown-menu':' side="right" sideOffset={8}','animate/tooltip':' side="right" sideOffset={8}','buttons/liquid':' variant="default" size="default"'};
  body='<OriginalDemo'+(demoProps[m.name]||'')+' />';
 }
 if(m.library==='motion-primitives'){
  if(m.name==='morphing-dialog'){
   imports=`import {MorphingDialog,MorphingDialogTrigger,MorphingDialogContent,MorphingDialogContainer,MorphingDialogTitle,MorphingDialogDescription,MorphingDialogClose} from ${JSON.stringify(entry)};`;
   body='<MorphingDialog transition={{type:"spring",stiffness:180,damping:22}}><MorphingDialogTrigger className="showcase-card text-left"><span className="overline">CLICK TO EXPAND</span><MorphingDialogTitle className="text-3xl">A closer look.</MorphingDialogTitle></MorphingDialogTrigger><MorphingDialogContainer><MorphingDialogContent className="showcase-card max-w-md"><MorphingDialogTitle className="text-3xl">A closer look.</MorphingDialogTitle><MorphingDialogDescription>A small card becomes a place for the full story. Smooth shared layout animation connects both states.</MorphingDialogDescription><MorphingDialogClose /></MorphingDialogContent></MorphingDialogContainer></MorphingDialog>';
  }
  if(m.name==='transition-panel'){
   imports=`import {TransitionPanel} from ${JSON.stringify(entry)};`;
   body='<div className="showcase-card"><div className="panel-tabs">{["Discover","Explore","Create"].map((t,i)=><button key={t} onClick={()=>setIndex(i)} aria-pressed={index===i}>{t}</button>)}</div><TransitionPanel activeIndex={index} transition={{duration:.3}} variants={{enter:{opacity:0,y:20},center:{opacity:1,y:0},exit:{opacity:0,y:-20}}}>{["Good design starts with curiosity.","Try a different perspective.","Make something worth keeping."].map(t=><div key={t} className="panel-story"><h2>{t}</h2></div>)}</TransitionPanel></div>';
  }
  if(m.name==='toolbar-expandable'){
   imports=`import ToolbarExpandable from ${JSON.stringify(entry)}; import {Bold,Italic,Underline,AlignLeft} from 'lucide-react';`;
   body='<ToolbarExpandable />';
  }
 }
 if(body.includes('p.accent'))controls.push({key:'accent',label:'Акцент',type:'color',default:defaults.accent});
 return {controls,defaults,code:`'use client';\nimport React, {useState,useRef} from 'react';\n${imports}\n${css}\nexport default function Example({settings={}}:{settings?:Record<string,any>}) {\n const p={...${JSON.stringify(defaults)},...settings};\n const [feedback,setFeedback]=useState(''),[index,setIndex]=useState(0);\n const container=useRef<HTMLDivElement>(null),start=useRef<HTMLDivElement>(null),end=useRef<HTMLDivElement>(null);\n return <><div className="demo-layout">${body}</div>{feedback&&<output className="demo-feedback" aria-live="polite">{feedback}</output>}</>;\n}\n`};
}
