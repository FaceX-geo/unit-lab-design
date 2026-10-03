// Usage-specific notes; these do not claim an accessibility certification.
export function interactionNotes(m){
 if(m.technologies?.includes('Physics'))return{keyboard:'Физическое перетаскивание управляется мышью; клавиатурный эквивалент не реализован.',mobile:'Проверьте сенсорные жесты; симуляция использует CPU и останавливается при закрытии демо.'};
 if(m.name==='physics/elastic-line'||m.name==='text/letter-3d-swap')return{keyboard:'Визуальный hover эффект не имеет клавиатурного эквивалента.',mobile:'Эффект наведения требует указателя; на touch остаётся статичная композиция.'};
 if(m.name==='card-swipe-deck')return{keyboard:'Кнопки Pass / Keep / Reset доступны с Tab, Enter и Space.',mobile:'Перетаскивание карточки с порогом свайпа и инерцией.'};
 if(m.name==='sortable-list')return{keyboard:'Флажки и удаление доступны с Tab. Перестановка оригинала выполняется указателем.',mobile:'Перетаскивание строки, отметки и удаление.'};
 if(m.name==='button/swipe-button')return{keyboard:'Нативная кнопка: Enter / Space. Смена текста — эффект наведения.',mobile:'Касание кнопки; hover переход может отличаться.'};
 if(m.name==='fabs/flower-menu')return{keyboard:'Enter / Space раскрывают меню, Escape закрывает; пункты доступны с Tab.',mobile:'Касание центральной кнопки раскрывает лепестки.'};
 if(m.name==='card/card-spread')return{keyboard:'Tab / Space переключают раскладку; флажки виджетов доступны с клавиатуры.',mobile:'Касание раскрывает карточки; широкий ряд прокручивается горизонтально.'};
 if(m.name==='file-upload')return{keyboard:'Нативный выбор файла через фокусируемое поле. Демо симулирует прогресс.',mobile:'Нативный выбор файла; перетаскивание доступно на desktop.'};
 if(m.name==='scroll-text')return{keyboard:'Прокрутка контейнера выделяет строку; отдельный интерактивный выбор не предусмотрен.',mobile:'Вертикальная прокрутка списка текстов.'};
 if(m.name==='card-stack')return{keyboard:'Enter / Space раскрывают и сворачивают карточки.',mobile:'Касание стопки переключает состояние.'};
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
