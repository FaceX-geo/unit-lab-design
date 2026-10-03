// Usage-specific notes; these do not claim an accessibility certification.
export function interactionNotes(m){
 const pointerOnly=['SpotlightCard','TiltedCard','Magnet','magic-card','interactive-grid-pattern'];
 const drag=['CircularGallery','Hyperspeed','LiquidEther','globe'];
 if(pointerOnly.includes(m.name))return{keyboard:'Кнопки примера доступны с Tab; визуальный эффект следует за мышью.',mobile:'Эффект наведения ограничен на сенсорном экране.'};
 if(drag.includes(m.name))return{keyboard:'Визуальный эффект не имеет полного клавиатурного эквивалента.',mobile:'Оригинал обрабатывает сенсорный ввод; WebGL требует GPU.'};
 if(m.name==='ElasticSlider')return{keyboard:'Ползунок оригинала управляется указателем; клавиатурный ввод не реализован.',mobile:'Pointer и touch обработчики оригинала.'};
 if(m.name==='HoldButton')return{keyboard:'Удержание Space / Enter; отпускание отменяет действие.',mobile:'Удержание указателем; движение за пределы кнопки отменяет действие.'};
 if(m.name==='SwipeRow')return{keyboard:'Кнопка раскрытия действий — Enter / Space; действия фокусируются Tab.',mobile:'Горизонтальное перетаскивание раскрывает действия.'};
 if(m.name==='SquishSwitch')return{keyboard:'Enter / Space переключают состояние.',mobile:'Касание и перетаскивание переключателя.'};
 if(m.library==='uiverse')return m.name==='Nawsome/wet-mayfly-23'?{keyboard:'Декоративный CSS загрузчик; фокус не требуется.',mobile:'CSS анимация работает без указателя.'}:{keyboard:'Нативный input или button; фокус зависит от исходных CSS.',mobile:'Нативное касание; отдельные hover эффекты требуют мыши.'};
 if(m.name==='community/radial-menu')return{keyboard:'Правый клик раскрывает меню; пункты управляются клавишами Base UI.',mobile:'Контекстное меню: проверьте долгое касание на целевом устройстве.'};
 if(m.library==='animate-ui')return{keyboard:'Использует клавиатурное управление базового Radix или Base UI компонента.',mobile:'Нативные касания элементов; карусель поддерживает перетаскивание.'};
 if(m.category==='controls'||m.category==='navigation'||m.library==='motion-primitives')return{keyboard:'Tab и Enter для кнопок примера; Escape закрывает диалоги.',mobile:'Касания кнопок; hover детали на touch могут отличаться.'};
 return{keyboard:'Декоративная анимация; отдельный фокус не требуется.',mobile:'Автоматическое воспроизведение; предварительный просмотр статичен.'};
}
