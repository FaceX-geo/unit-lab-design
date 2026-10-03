# Расширение Design Atlas — 3–4 октября 2026

Добавлен 41 компонент: теперь в коллекции 91 модуль из 11 библиотек. Справочник содержит 12 библиотек, включая Aceternity UI. Первые 50 модулей и их закреплённые ревизии сохранены; исходники не заменены новыми версиями.

## Подборка

В подборке «Новое» находятся все 41 модуль. В «Ещё 20 эффектов» — 20 дополнительных модулей после основной подборки, включая 12 WebGL фонов.

| Библиотека | Основная подборка: 21 | Дополнительные эффекты: 20 |
|---|---|---|
| Kokonut UI | Particle Button, Liquid Glass, Card Stack, Animated File Upload; Morphic Navbar, Toolbar, Smooth Tab, Profile Dropdown, Action Search Bar; Scroll Text, Typing Text, Matrix Text, Dynamic Text, Glitch Text, Shimmer Text | — |
| SmoothUI | Dynamic Island, Siri Orb | Card Swipe Deck, Morph Surface |
| Fancy Components | Gravity | Letter 3D Swap, Elastic Line, Cursor Attractor & Gravity |
| Cult UI | Family Drawer | Direction Aware Tabs, Sortable List |
| Animata | Swipe Button, Flower Menu | Card Spread |
| Paper Shaders | — | Liquid Metal, Water, Metaballs, God Rays, Smoke Ring, Warp |
| React Bits | — | Galaxy, Light Rays, Balatro, Pixel Blast, Threads, Dark Veil |

Все 11 компонентов со скриншотов Kokonut включены. Letter 3D Swap взят из Fancy Components; Gravity и Cursor Attractor работают через Matter.js, а не через имитацию CSS. Swipe Button Animata меняет слои текста при наведении; жест свайпа реализован в Card Swipe Deck.

Ревизии закреплены в components.lock.json. Каждый manifest.json содержит автора, лицензию, SHA-256, исходные и runtime файлы, версии зависимостей. Paper сохраняет Apache-2.0 и NOTICE; новые Kokonut, SmoothUI, Fancy, Cult и Animata — MIT. React Bits сохраняет MIT + Commons Clause. Обновление исходников ручное.

## Сборки и выполнение

- `npm test`: 91 компонент, 1 550 файлов. Проверены исходные байты, SHA-256, содержимое ZIP, aliases, шрифты, лицензии, версии зависимостей; импорт v1 и экспорт v2, избранное/заметки/параметры, локальный endpoint скачивания.
- `npm run build`: строгая проверка TypeScript Atlas и production сборка Vite.
- `npm audit`: 0 известных уязвимостей, включая dev зависимости.
- `npm run test:react`: production сборка Vite с 86 React примерами, импортируемыми из тех же файлов, которые включаются в ZIP. Все 86 открыты в браузере, ошибок выполнения и сломанных изображений нет. См. [expanded-react-check.json](expanded-react-check.json).
- `npm run test:next`: Next.js 16.3.8 / React 19, 86 App Router маршрутов, проверка TypeScript включена. Все 86 открыты в браузере; ошибок выполнения и гидратации нет. У Silk, Liquid Ether и Pixel Blast есть предупреждение Three.js о deprecated THREE.Clock; исходный код сохранён. См. [expanded-next-check.json](expanded-next-check.json).
- Все 91 демо открыты в настоящих sandbox iframe с `allow-scripts`; загрузка подтверждена, ошибок нет. См. [expanded-iframe-check.json](expanded-iframe-check.json). Две физические анимации повторно проверены после ESM преобразования, Smooth Tab и Sortable List — после уточнения композиции примера.
- Все 41 новых демо отдельно просмотрены; WebGL canvas имеют ненулевой размер, изображения загружаются. Для карточек сохранены реальные локальные JPEG, включая раскрытые состояния. См. [expanded-component-check.json](expanded-component-check.json).

Runtime стирает TypeScript, содержит декларации типов и переводит статический CommonJS require в ESM import для Vite. Relative .js imports Paper, ведущие на TSX, преобразуются в .jsx. Декларации типов используют относительные пути внутри комплекта, чтобы одноимённые aliases разных библиотек не конфликтовали.

Card Spread содержит CSS с @apply/@reference: исходные CSS сохранены, исполняемый CSS скомпилирован Tailwind. Для React/Vite включены адаптеры next/link и next/image; Next использует свои нативные компоненты. Четыре стандартных внешних изображения Card Stack заменены только в runtime локальными CC0 SVG; исходный TSX сохраняет авторские URL. Прочие композиции, аватар и содержимое карточек созданы для Atlas через публичные API оригиналов.

## Проверенные действия

- Подборки: «Новое» — 41, «Ещё 20 эффектов» — 20, дополнительные «Фоны» — 12. Поиск, фильтр библиотеки, избранное и его сохранение после перезагрузки.
- «Копировать файл» Morphic Navbar: нативное нажатие, содержимое буфера совпало с исходным файлом (2 260 знаков). «Скачать комплект»: файл фактически сохранён в Downloads, затем побайтово сравнен с локальным архивом.
- Dynamic Island: раскрытие музыкального плеера. Morph Surface: раскрытие поля. Family Drawer: открытие, переход к длинному экрану и возврат с изменением высоты. Flower Menu: раскрытие четырёх пунктов, Escape закрывает меню.
- Action Search Bar: фильтрация текста, ArrowDown и Enter. Smooth Tab: смена активной вкладки и содержимого. Card Spread: флажок раскрывает четыре виджета, флажки внутри виджетов работают.
- Card Swipe Deck: кнопка Keep, настоящий drag, callback выбранного направления и Reset. Sortable List: отметка и появление действия удаления. File Upload: настоящий file chooser с тестовым TXT, анимированный прогресс и callback локального демо.
- Liquid Metal: переключение сплошного фона и формы Diamond. Typing Text завершает фразу. Настройки параметров и цвет/размер сохраняются в прежнем localStorage.
- Reduced motion: до ручного запуска iframe отсутствует; после запуска создаётся; остановка/закрытие удаляет iframe. Вместе с ним уничтожается отдельный JS контекст, canvas, таймеры и физическая сцена.
- Мобильный viewport 390×844: width и scrollWidth равны 390; фильтры работают, панель и iframe помещаются (iframe 338 px внутри панели). WebGL запускается вручную, закрытие выгружает демо. См. [expanded-mobile.jpg](expanded-mobile.jpg).

## Границы проверки

Это responsive проверка в браузере, без стенда физических iOS/Android устройств. Перетаскивание Matter.js и hover эффекты требуют указателя; у оригинального Smooth Tab нет стрелочного переключения вкладок, только Enter/Space для активной вкладки. Особенности клавиатуры, touch и нагрузки указаны у компонентов; это не сертификация WCAG.

Примеры подключения проверены с включённой проверкой типов в Next. Внутренние upstream TSX/TS ошибки не исправляются редактированием авторского кода; используется пакетный JS runtime с публичными декларациями. В существующем проекте нужно перенести необходимые токены и стили из demo.css с учётом его темы и добавить aliases. Автоматическая адаптация под проект и передача в Codex остаются следующим этапом.

Результат можно воспроизвести локально после `npm ci`: `npm run components:build`, `npm test`, `npm run build`, `npm run test:react`, `npm run test:next`. Сеть для пересборки локальных примеров и ZIP не требуется.
