# forzip

28.01 
Initial commit

29.01.20
создал картинки для брендов и лого для сайта

31.01.20
создал картики для поиска и отредактировал html и css для главной страницы

03.02.20
начал делать карусель товаров

04.02.20
добавил место и классы под карусели товаров

06.02.20
1)Нанес футер. Сделал текст ссылки белым цветом. …
2)Из кнопки оставить-заявку убрал текст. Теперь он появляется при наведение курсора на иконку
3)убрал бордеры из навбера …
4) увеличил отступы навбара
5) задний фон кнопок навбара сделал #8ffaff
6) убрал подчеркивание со всех ссылок
7) из формы поиска убрал иконку
8)переставил кнопку заявки между поиском и контактами
9)всем бордерам присвоил цвет #ced4da

25.03.20
1) сделал фон шапки #343a40 
2) заголовок шапки размером 16px
3) контакты размером 14px, (18px очень большие)
4) сделал фон меню #f8f9fa
5) текст меню 18px
6) фон основного контента #e9ecef
7) заголовок в основном контенте 20px, текст 16px
8) бренды переместил в низ блока контента, карусель товаров рядом с описанием
9) вместо карусели пока заглушка
10) фон футера #f8f9fa
11) текст в шапке белым цветом, в остальных местах текст цвета фона шапки
12) добавил картинку для темной шапки для заявки
 
26.03.20
1) добавил функционал для кнопки оставить заявку, чтобы ее не было видно вверху экрана, но появлялась при скроллинге вниз на высоту строки меню. для этого добавил js файл.
2) заменил лого на белый на темном фоне и увеличил его, т.к. высота шапки ранее увеличивали
3) удалил папку с картинками для кнопки поиска, т.к. от кнопки отказались
4) высоту шапки сделал больше

30.03.20
1)бордер радиус 4px везде, где он есть, кроме марок. У марок 12px …
2)бордер у всех элементов 1px
3)высоту строки увеличить до 30px и убрал фон
4)блок контактов в шапке выровнял на право, блок с марками растянул на 90% ширины экрана
5)карта сайта - сделал шрифт и цвет #343a40(как меню). Сделал pointer на блоки марок 
6)разлипил названия в две строки у марок, блок марок спустил вниз на 40px
7)разделил файл CSS на несколько файлов
8)перенес кнопку оставитьЗаявку и оставил свободное место для кнопки, чтобы поиск не прыгал

31.03.20
1)сделал заглушки элементов карусели
2)вставил карусель. Пока карусель только из картинок, надо заменить на карточки-заглушки

01.04.20
1)приделал setInterval для карусели
2)в карусели заменил картинки на карточки
3)поправил шрифт карточек товара и высоту карусели
4)все изображения из шапки и JS кнопки оставитьЗаявку положил в папку navbar
5)убрал бордер с кнопки Заявки и увеличил размер изображения
6)сделал дополнительный класс с цветом текста #2196f3 для вкладок меню
7)cделал ховер-тень для марок
8)сделал мах-ширину экрана 1240рх, все бэкгроунды доходят до края экрана
9)отредактировал кнопки прокрутки и карточки карусели

02.04.20
сделал правки на главной + добавил карусель

06.04.20
1)переорганизовал файлы с папками 
2)создал <tempate> для брендов
3)сделал автозаполнение блока с брендами
4)переписал js-файл с каруселью

*********************************************************

01.06.20
инициировал проект и установил webpack

04.06.20 ранее сделал загрузочные для навбар, меню и футера. А также для контейнеров блока контент. Немного изучив Вебпак решил, что нужно сделать html шаблон для навбара, меню, футера и контейнеров контента. Буду использовать шаблон при сборке

08.06.20 
начал настраивать webpack и вернул html-шаблон из старых коммитов. Настроил очистку папки dist перед очередной сборкой билда

10.06.20 
1)установил плагины для очистки папки dist
2)настроил загрузку CSS-ов с normlize.css
3)настроил загрузку изображений
4)установил и подключил шрифт Roboto
5)настроил сокращенные абсолютные пути
6)файлы без указанного расширения будут по дефолту восприниматься как js или json
7)оптимизировал одинаковые импорты

11.06.20
актуализировал html-шаблон

12.06.20
установил и настроил copy-webpack-plugin


Commits on May 29, 2020
сделал сортировку и загрузку по типу товара

@DenSpar
DenSpar committed 15 days ago
 
Commits on May 27, 2020
сделал файл с 1 таблицей товаров и загрузочными скриптами

@DenSpar
DenSpar committed 17 days ago
 
Commits on May 25, 2020
Merge pull request #60 from natagolovkina/59-fonts-fallback …

@DenSpar
DenSpar committed 19 days ago
  
Commits on May 18, 2020
сделал нормальные фолбэки для шрифтов

@DenSpar
DenSpar committed 26 days ago
 
добавил тень при наведение курсора на иконку месенджера

@DenSpar
DenSpar committed 26 days ago
 
сделал картинки мессенджеров кликабельными. ВОтсап проверил на компе.… …

@DenSpar
DenSpar committed 26 days ago
 
Commits on May 14, 2020
Merge pull request #57 from natagolovkina/49-refactoring …

@DenSpar
DenSpar committed on 14 May
  
сделал загрузочные скрипты для навбара, меню и футера глубже …

@DenSpar
DenSpar committed on 14 May
 
Commits on May 13, 2020
перенес заглушки для страницы каталога в папку catalog

@DenSpar
DenSpar committed on 13 May
 
создал классы titleDefault и textDefault

@DenSpar
DenSpar committed on 13 May
 
промежуточный коммит

@DenSpar
DenSpar committed on 13 May
 
Commits on May 6, 2020
сделал одинаковые паддинги в блоках и перенес их[паддинги] в innerCon… …

@DenSpar
DenSpar committed on 6 May
 
переложил описания классов outerContainer и innerContainer в commons.css

@DenSpar
DenSpar committed on 6 May
 
Commits on May 1, 2020
добавил favicon

@DenSpar
DenSpar committed on 1 May
 
Merge pull request #55 from natagolovkina/50-JS-loaders …

@DenSpar
DenSpar committed on 1 May
  
добавил скрипты для выделения выбраной странице в меню

@DenSpar
DenSpar committed on 1 May
 
на всех страницах заменил скрипты и убрал лишний html-код. Создал себ… …

@DenSpar
DenSpar committed on 1 May
 
сделал переход при нажатии на кнопку оставить заявку в навбаре

@DenSpar
DenSpar committed on 1 May
 
Commits on Apr 30, 2020
сделал загрузочный JS для footer

@DenSpar
DenSpar committed on 30 Apr
 
сделал загрузочный JS для menu

@DenSpar
DenSpar committed on 30 Apr
 
оптимизировал navbarLoader

@DenSpar
DenSpar committed on 30 Apr
 
сделал загрузочный JS для navbar …

@DenSpar
DenSpar committed on 30 Apr
 
Commits on Apr 29, 2020
Merge pull request #48 from natagolovkina/47-links-fix …

@DenSpar
DenSpar committed on 29 Apr
  
Commits on Apr 27, 2020
пофиксил + переименовал навигационный блок catalog в menu

@DenSpar
DenSpar committed on 27 Apr
 
наверстал скелет страницы карта сайта

@DenSpar
DenSpar committed on 27 Apr
 
наверстал скелет страницы каталога

@DenSpar
DenSpar committed on 27 Apr
 
Commits on Apr 24, 2020
сверстал скелет страницы онлайн-заявки

@DenSpar
DenSpar committed on 24 Apr
 
Commits on Apr 23, 2020
сверстал страницу Контакты

@DenSpar
DenSpar committed on 23 Apr
Commits on Apr 22, 2020
выделил для брендов отдельный CSS

@DenSpar
DenSpar committed on 22 Apr
 
сверстал страницу обслуживание

@DenSpar
DenSpar committed on 22 Apr
 
Merge pull request #35 from natagolovkina/27-nav-z-index …

@DenSpar
DenSpar committed on 22 Apr
  
Commits on Apr 21, 2020
добавил свойство z-index навбару, теперь он прорисован выше всех

@DenSpar
DenSpar committed on 21 Apr
 
Commits on Apr 16, 2020
carousel card fix

@DenSpar
DenSpar committed on 16 Apr
 
brends card fix

@DenSpar
DenSpar committed on 16 Apr
 
Commits on Apr 15, 2020
Merge pull request #32 from natagolovkina/31-box-sizing-visibility …

@DenSpar
DenSpar committed on 15 Apr
  
добавил класс box-sizing

@DenSpar
DenSpar committed on 15 Apr
 
переделал класс кнопки ОСТАВИТЬ ЗАЯВКУ на visibility:hidden …

@DenSpar
DenSpar committed on 15 Apr
 
Commits on Apr 7, 2020
Merge pull request #29 from natagolovkina/20-2-carousel …

@DenSpar
DenSpar committed on 7 Apr
  
Merge pull request #30 from natagolovkina/20-1-brends …

@DenSpar
DenSpar committed on 7 Apr