import {getModule} from './catalog';
import {getComponent} from './component-catalog';
import {defaultConfig,type DemoConfig} from './demos';
export type ComponentPersonal={favorites:string[];notes:Record<string,string>;presets:Record<string,Record<string,string|number>>};
export type PersonalData={version:2;favorites:string[];notes:Record<string,string>;checked:Record<string,number[]>;config:DemoConfig;components:ComponentPersonal};
export const storageKey='design-atlas:v1';
export const emptyData:PersonalData={version:2,favorites:[],notes:{},checked:{},config:defaultConfig,components:{favorites:[],notes:{},presets:{}}};
export function validateData(input:unknown):PersonalData{
 if(!input||typeof input!=='object')throw new Error('Ожидался JSON-файл Design Atlas.');
 const v=input as Record<string,unknown>;if(![1,2].includes(v.version as number)||!Array.isArray(v.favorites))throw new Error('Неизвестный формат. Нужен экспорт Design Atlas версии 1 или 2.');
 const favorites=[...new Set(v.favorites.filter((x):x is string=>typeof x==='string'&&!!getModule(x)))];
 const notes:Record<string,string>={},checked:Record<string,number[]>={};
 if(v.notes&&typeof v.notes==='object')for(const[id,n]of Object.entries(v.notes)){if(getModule(id)&&typeof n==='string')notes[id]=n.slice(0,5000)}
 if(v.checked&&typeof v.checked==='object')for(const[id,a]of Object.entries(v.checked)){const m=getModule(id);if(m&&Array.isArray(a))checked[id]=[...new Set(a.filter((x):x is number=>Number.isInteger(x)&&x>=0&&x<m.rules.length))]}
 const c=(v.config&&typeof v.config==='object'?v.config:{}) as Record<string,unknown>;
 const number=(x:unknown,min:number,max:number,fallback:number)=>typeof x==='number'&&Number.isFinite(x)&&x>=min&&x<=max?x:fallback;
 const config:DemoConfig={accent:typeof c.accent==='string'&&/^#[0-9a-fA-F]{6}$/.test(c.accent)?c.accent:defaultConfig.accent,radius:number(c.radius,0,40,defaultConfig.radius),spacing:number(c.spacing,8,32,defaultConfig.spacing),duration:number(c.duration,100,1600,defaultConfig.duration),easing:typeof c.easing==='string'&&['linear','cubic-bezier(.2,.8,.2,1)','cubic-bezier(.4,0,.2,1)','cubic-bezier(.68,-.35,.27,1.35)'].includes(c.easing)?c.easing:defaultConfig.easing,platform:typeof c.platform==='string'&&['web','ios','android','desktop'].includes(c.platform)?c.platform:defaultConfig.platform,reduced:c.reduced===true};
 const components:ComponentPersonal={favorites:[],notes:{},presets:{}};
 if(v.version===2&&v.components&&typeof v.components==='object'){
  const incoming=v.components as Record<string,unknown>;
  if(Array.isArray(incoming.favorites))components.favorites=[...new Set(incoming.favorites.filter((id):id is string=>typeof id==='string'&&!!getComponent(id)))];
  if(incoming.notes&&typeof incoming.notes==='object')for(const[id,n]of Object.entries(incoming.notes)){if(getComponent(id)&&typeof n==='string')components.notes[id]=n.slice(0,5000)}
  if(incoming.presets&&typeof incoming.presets==='object')for(const[id,preset]of Object.entries(incoming.presets)){
   const m=getComponent(id);if(!m||!preset||typeof preset!=='object')continue;const valid:Record<string,string|number>={};
   for(const control of m.controls||[]){const value=(preset as Record<string,unknown>)[control.key];if(control.type==='number'&&typeof value==='number'&&Number.isFinite(value)&&value>=(control.min??-Infinity)&&value<=(control.max??Infinity))valid[control.key]=value;else if(control.type==='color'&&typeof value==='string'&&/^#[\da-f]{6}$/i.test(value))valid[control.key]=value;else if(control.type==='text'&&typeof value==='string')valid[control.key]=value.slice(0,180)}
   components.presets[id]=valid;
  }
 }
 return {version:2,favorites,notes,checked,config,components};
}
export function loadData():{data:PersonalData;issue:string}{try{const raw=localStorage.getItem(storageKey);return {data:raw?validateData(JSON.parse(raw)):emptyData,issue:''}}catch{return {data:emptyData,issue:'Не удалось прочитать локальный отбор. Сохранённый файл можно импортировать; исходные данные в браузере не перезаписаны.'}}}
export function download(name:string,content:string,type='application/json'){const url=URL.createObjectURL(new Blob([content],{type}));const a=document.createElement('a');a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),10000);}
