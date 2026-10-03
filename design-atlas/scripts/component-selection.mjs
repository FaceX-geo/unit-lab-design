export const libraries = {
 'react-bits': {title:'React Bits', repo:'DavidHDev/react-bits', url:'https://reactbits.dev', author:'David Haz',license:'MIT + Commons Clause',licenseFile:'LICENSE.md',root:'src',color:'#7d64f8'},
 'magic-ui': {title:'Magic UI',repo:'magicuidesign/magicui',url:'https://magicui.design/docs/components',author:'Magic UI contributors',license:'MIT',licenseFile:'LICENSE.md',root:'apps/www',color:'#efae4c'},
 'animate-ui':{title:'Animate UI',repo:'imskyleen/animate-ui',url:'https://animate-ui.com/docs/components',author:'Skyleen and contributors',license:'MIT',licenseFile:'LICENSE.md',root:'apps/www',color:'#55c5a4'},
 'motion-primitives':{title:'Motion Primitives',repo:'ibelick/motion-primitives',url:'https://motion-primitives.com/docs',author:'ibelick and contributors',license:'MIT',licenseFile:'LICENCE.md',root:'',color:'#ef87a0'},
 'uiverse':{title:'Uiverse',repo:'uiverse-io/galaxy',url:'https://uiverse.io',author:'Uiverse creators',license:'MIT',licenseFile:'LICENSE',root:'',color:'#77b9f4'}
};
const selected=[];
function add(library,rows){for(const row of rows){const [name,title,category,description]=row;const slug=name.replace(/([a-z0-9])([A-Z])/g,'$1-$2').toLowerCase().replaceAll('/','-');selected.push({id:library+'-'+slug,library,name,title,category,description});}}
add('react-bits',[
 ['SplitText','Split Text','text','Каскадное появление букв и слов с точной хореографией.'],['BlurText','Blur Text','text','Текст проявляется через мягкое размытие.'],['ScrollReveal','Scroll Reveal','text','Прокрутка постепенно открывает смысл каждой строки.'],['DecryptedText','Decrypted Text','text','Символы расшифровываются при наведении.'],['RotatingText','Rotating Text','text','Смена слов с упругими переходами.'],
 ['Aurora','Aurora','background','Северное сияние на WebGL.'],['Iridescence','Iridescence','background','Переливающаяся интерактивная поверхность.'],['Silk','Silk','background','Текучая ткань света и тени.'],['Hyperspeed','Hyperspeed','background','Ночная трасса со следами света и ускорением.'],['LiquidEther','Liquid Ether','background','Жидкие потоки цвета реагируют на движение.'],
 ['SpotlightCard','Spotlight Card','cards','Световой акцент следует за курсором внутри карточки.'],['TiltedCard','Tilted Card','cards','Объёмная карточка с наклоном и плавающей подписью.'],['PixelTransition','Pixel Transition','transitions','Переход между слоями через пиксельную сетку.'],['CircularGallery','Circular Gallery','cards','Галерея на изогнутой орбите с инерцией.'],['GooeyNav','Gooey Nav','navigation','Навигация с жидким активным индикатором.'],['ElasticSlider','Elastic Slider','controls','Ползунок тянется за пределы шкалы и пружинит обратно.'],['Magnet','Magnet','controls','Элемент притягивается к указателю.'],['HoldButton','Hold Button','controls','Нажмите и удерживайте для подтверждения действия.'],['SwipeRow','Swipe Row','controls','Свайп открывает действия строки.'],['SquishSwitch','Squish Switch','controls','Тактильный переключатель с деформацией.']]);
add('magic-ui',[
 ['marquee','Marquee','cards','Бесконечная лента карточек с остановкой при наведении.'],['dock','Dock','navigation','Панель иконок с увеличением под курсором.'],['globe','Globe','background','Вращающийся интерактивный глобус.'],['animated-beam','Animated Beam','transitions','Световые связи между узлами интерфейса.'],['border-beam','Border Beam','cards','Свет движется по периметру карточки.'],['magic-card','Magic Card','cards','Карточка с градиентным светом под курсором.'],['shimmer-button','Shimmer Button','controls','Переливающаяся рамка вокруг кнопки.'],['ripple-button','Ripple Button','controls','Волна расходится из точки нажатия.'],['number-ticker','Number Ticker','text','Плавный счётчик для чисел и статистики.'],['interactive-grid-pattern','Interactive Grid','background','Ячейки сетки откликаются на указатель.'],['confetti','Confetti','transitions','Запуск частиц для момента успеха.'],['animated-list','Animated List','transitions','Новые события появляются в списке с анимацией.']]);
add('animate-ui',[
 ['radix/accordion','Accordion','controls','Раскрывающиеся секции с плавным изменением высоты.'],['radix/dialog','Dialog','transitions','Диалог с анимированным появлением и управлением фокусом.'],['radix/dropdown-menu','Dropdown Menu','navigation','Меню действий с анимацией и клавиатурной навигацией.'],['radix/sheet','Sheet','navigation','Выдвижная панель для дополнительных действий.'],['radix/switch','Switch','controls','Анимированный переключатель настроек.'],['animate/tabs','Tabs','navigation','Смена вкладок с движущимся индикатором.'],['animate/tooltip','Tooltip','controls','Подсказки с плавным переходом между элементами.'],['buttons/liquid','Liquid Button','controls','Кнопка с жидкой реакцией на указатель.'],['community/motion-carousel','Motion Carousel','cards','Карусель с анимациями и управлением.'],['community/radial-menu','Radial Menu','navigation','Круговое контекстное меню с выбором действий.']]);
add('motion-primitives',[
 ['morphing-dialog','Morphing Dialog','transitions','Карточка превращается в развёрнутый диалог.'],['transition-panel','Transition Panel','transitions','Переходы между панелями с изменением размеров.'],['toolbar-expandable','Expandable Toolbar','navigation','Компактная панель раскрывает инструменты.']]);
add('uiverse',[
 ['Nawsome/wet-mayfly-23','Hamster Wheel','transitions','Хомяк бежит в колесе: детальная CSS анимация.'],['Nawsome/silent-owl-45','Plane Switch','controls','Самолёт вылетает при включении переключателя.'],['Nawsome/short-dolphin-98','Bubble Toggle','controls','Полупрозрачный пузырь меняет форму при нажатии.'],['adamgiebl/big-ape-36','Layered Button','controls','Слои объёмной кнопки расходятся при наведении.'],['alexruix/fat-vampirebat-55','Focus Input','controls','Поле меняет форму и отступы при фокусе.']]);
Object.assign(libraries, {
 'kokonut-ui':{title:'Kokonut UI',repo:'kokonut-labs/kokonutui',url:'https://kokonutui.com/docs',author:'Dorian Baffier and Kokonut UI contributors',license:'MIT',licenseFile:'LICENSE',root:'',color:'#e6a658'},
 'smooth-ui':{title:'SmoothUI',repo:'educlopez/smoothui',url:'https://smoothui.dev',author:'Eduardo Calvo and SmoothUI contributors',license:'MIT',licenseFile:'LICENSE',root:'',color:'#ed936e'},
 'fancy-components':{title:'Fancy Components',repo:'danielpetho/fancy',url:'https://www.fancycomponents.dev',author:'Daniel Petho and contributors',license:'MIT',licenseFile:'LICENSE',root:'src',color:'#df81b4'},
 'cult-ui':{title:'Cult UI',repo:'nolly-studio/cult-ui',url:'https://www.cult-ui.com',author:'nolly-studio and Cult UI contributors',license:'MIT',licenseFile:'LICENSE.md',root:'apps/www',color:'#9acb72'},
 'animata':{title:'Animata',repo:'codse/animata',url:'https://animata.design',author:'codse and Animata contributors',license:'MIT',licenseFile:'LICENSE.md',root:'',color:'#68bcce'},
 'paper-shaders':{title:'Paper Shaders',repo:'paper-design/shaders',url:'https://shaders.paper.design',author:'Lost Coast Labs, Inc.',license:'Apache-2.0',licenseFile:'LICENSE',root:'packages/shaders-react/src',color:'#91a6ee'}
});
const previousCount=selected.length;
add('kokonut-ui',[
 ['particle-button','Particle Button','controls','Частицы разлетаются из кнопки при нажатии.'],
 ['liquid-glass-card','Liquid Glass','cards','Стеклянная поверхность с SVG преломлением и бликами.'],
 ['card-stack','Card Stack','cards','Стопка карточек раскрывается с пружинной анимацией.'],
 ['file-upload','Animated File Upload','controls','Перетаскивание файла, прогресс и состояния загрузки.'],
 ['action-search-bar','Action Search Bar','navigation','Поиск с анимированными подсказками действий.'],
 ['morphic-navbar','Morphic Navbar','navigation','Активный пункт навигации превращается в плавную капсулу.'],
 ['toolbar','Kokonut Toolbar','navigation','Панель инструментов раскрывает название выбранного действия.'],
 ['smooth-tab','Smooth Tab','navigation','Вкладки с движущимся индикатором и анимированным содержимым.'],
 ['profile-dropdown','Profile Dropdown','navigation','Меню профиля с карточкой пользователя и действиями.'],
 ['scroll-text','Scroll Text','text','Прокрутка выделяет активную строку типографической композиции.'],
 ['type-writer','Typing Text','text','Последовательная печать и удаление фраз с курсором.'],
 ['matrix-text','Matrix Text','text','Двоичный шум собирается в читаемый текст.'],
 ['dynamic-text','Dynamic Text','text','Плавная смена слов с переходом между состояниями.'],
 ['glitch-text','Glitch Text','text','Цифровые сбои текста с цветным смещением слоёв.'],
 ['shimmer-text','Shimmer Text','text','Световой градиент проходит по буквам.']
]);
add('smooth-ui',[
 ['dynamic-island','Dynamic Island','navigation','Пружинная капсула раскрывает уведомления, таймер и плеер.'],
 ['siri-orb','Siri Orb','background','Светящаяся сфера меняет движение по состоянию помощника.']
]);
add('fancy-components', [['physics/gravity','Gravity','controls','Элементы падают, сталкиваются и перетаскиваются с настоящей физикой.']]);
add('cult-ui',[['family-drawer','Family Drawer','transitions','Несколько экранов внутри панели с плавным изменением высоты.']]);
add('animata',[
 ['button/swipe-button','Swipe Button','controls','Два слоя текста сменяют друг друга при наведении.'],
 ['fabs/flower-menu','Flower Menu','navigation','Кнопка раскрывает действия в лепестки вокруг центра.']
]);
const extraStart=selected.length;
add('paper-shaders',[
 ['liquid-metal','Liquid Metal','background','Текучий металл с движущимися отражениями.'],
 ['water','Water','background','Живая поверхность воды с регулируемой рябью.'],
 ['metaballs','Metaballs','background','Органические капли сливаются и расходятся.'],
 ['god-rays','God Rays','background','Объёмные световые лучи заполняют пространство.'],
 ['smoke-ring','Smoke Ring','background','Кольцо дыма с плавной деформацией и свечением.'],
 ['warp','Warp','background','Искажение цветовых потоков в движущемся поле.']
]);
add('react-bits',[
 ['Galaxy','Galaxy','background','Звёздная галактика с вращением и реакцией на указатель.'],
 ['LightRays','Light Rays','background','Лучи света меняют направление за курсором.'],
 ['Balatro','Balatro','background','Гипнотическое вращение цветовых потоков.'],
 ['PixelBlast','Pixel Blast','background','Пиксельное поле реагирует волнами на указатель.'],
 ['Threads','Threads','background','Светящиеся нити складываются в подвижный рисунок.'],
 ['DarkVeil','Dark Veil','background','Тёмная кинематографичная завеса с зерном и волнами.']
]);
add('fancy-components',[
 ['text/letter-3d-swap','Letter 3D Swap','text','Буквы переворачиваются как грани объёмного блока.'],
 ['physics/elastic-line','Elastic Line','controls','Линия натягивается за указателем и упруго возвращается.'],
 ['physics/cursor-attractor-and-gravity','Cursor Attractor & Gravity','controls','Физические объекты притягиваются к указателю и сталкиваются.']
]);
add('cult-ui',[
 ['direction-aware-tabs','Direction Aware Tabs','navigation','Содержимое вкладок движется в направлении выбора.'],
 ['sortable-list','Sortable List','controls','Список перетаскивается с плавным перестроением строк.']
]);
add('smooth-ui',[
 ['card-swipe-deck','Card Swipe Deck','cards','Карточки улетают по свайпу с инерцией и вращением.'],
 ['morph-surface','Morph Surface','transitions','Компактная поверхность превращается в раскрытую панель.']
]);
add('animata',[['card/card-spread','Card Spread','cards','Стопка виджетов раскрывается в ряд; наведение добавляет лёгкий наклон.']]);
for(let i=previousCount;i<selected.length;i++){selected[i].batch='october-2026';selected[i].extra=i>=extraStart;}
export {selected};
