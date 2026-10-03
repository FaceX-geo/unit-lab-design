'use client';
import React,{useState,useRef} from 'react';
import {SortableList,SortableListItem,type Item} from "./runtime/registry/default/ui/sortable-list";

export default function Example({settings={}}:{settings?:Record<string,any>}){
const p={...{"text":"Design in motion.","speed":1,"accent":"#b6a1ff","density":1,"waves":0.5,"distortion":0.15,"gravity":1,"threshold":110},...settings};
const [feedback,setFeedback]=useState('');
const [items,setItems]=useState<Item[]>(["Collect an idea","Try a different perspective","Make a little motion","Keep the details"].map((text,id)=>({id,text,checked:false,description:"Drag to reorder · mark to remove"})));
return <><div className="demo-layout"><div className="w-full max-w-md"><SortableList items={items} setItems={setItems} onCompleteItem={id=>setItems(a=>a.map(t=>t.id===id?{...t,checked:!t.checked}:t))} renderItem={(item,order,onCompleteItem,onRemoveItem)=><SortableListItem key={item.id} item={item} order={order} onCompleteItem={onCompleteItem} onRemoveItem={onRemoveItem} handleDrag={()=>setFeedback("Переставьте строку")}/>} /><p className="demo-caption">Перетаскивание · отметки · удаление</p></div></div>{feedback&&<output className="demo-feedback" aria-live="polite">{feedback}</output>}</>;
}
