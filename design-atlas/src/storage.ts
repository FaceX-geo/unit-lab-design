import {getModule} from './catalog';
import {defaultConfig,type DemoConfig} from './demos';
export type PersonalData={version:1;favorites:string[];notes:Record<string,string>;checked:Record<string,number[]>;config:DemoConfig};
export const storageKey='design-atlas:v1';
export const emptyData:PersonalData={version:1,favorites:[],notes:{},checked:{},config:defaultConfig};
export function validateData(input:unknown):PersonalData{
 if(!input||typeof input!=='object')throw new Error('Ожидался JSON-файл Design Atlas.');
 const v=input as Record<string,unknown>;if(v.version!==1||!Array.isArray(v.favorites))throw new Error('Неизвестный формат. Нужен экспорт Design Atlas версии 1.');
 const favorites=[...new Set(v.favorites.filter((x):x is string=>typeof x==='string'&&!!getModule(x)))];
 const notes:Record<string,string>={},checked:Record<string,number[]>={};
 if(v.notes&&typeof v.notes==='object')for(const [id,n]of Object.entries(v.notes)){if(getModule(id)&&typeof n==='string')notes[id]=n.slice(0,5000)}
 if(v.checked&&typeof v.checked==='object')for(const[id,a]of Object.entries(v.checked)){const m=getModule(id);if(m&&Array.isArray(a))checked[id]=[...new Set(a.filter((x):x is number=>Number.isInteger(x)&&x>=0&&x<m.rules.length))]}
 const c=(v.config&&typeof v.config==='object'?v.config:{}) as Record<string,unknown>;
 const number=(x:unknown,min:number,max:number,fallback:number)=>typeof x==='number'&&Number.isFinite(x)&&x>=min&&x<=max?x:fallback;
 const config:DemoConfig={accent:typeof c.accent==='string'&&/^#[0-9a-fA-F]{6}$/.test(c.accent)?c.accent:defaultConfig.accent,radius:number(c.radius,0,40,defaultConfig.radius),spacing:number(c.spacing,8,32,defaultConfig.spacing),duration:number(c.duration,100,1600,defaultConfig.duration),easing:typeof c.easing==='string'&&['linear','cubic-bezier(.2,.8,.2,1)','cubic-bezier(.4,0,.2,1)','cubic-bezier(.68,-.35,.27,1.35)'].includes(c.easing)?c.easing:defaultConfig.easing,platform:typeof c.platform==='string'&&['web','ios','android','desktop'].includes(c.platform)?c.platform:defaultConfig.platform,reduced:c.reduced===true};
 return {version:1,favorites,notes,checked,config};
}
export function loadData():{data:PersonalData;issue:string}{try{const raw=localStorage.getItem(storageKey);return {data:raw?validateData(JSON.parse(raw)):emptyData,issue:''}}catch{return {data:emptyData,issue:'Не удалось прочитать локальный отбор. Сохранённый файл можно импортировать; исходные данные в браузере не перезаписаны.'}}}
export function download(name:string,content:string,type='application/json'){const url=URL.createObjectURL(new Blob([content],{type}));const a=document.createElement('a');a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),10000);}
