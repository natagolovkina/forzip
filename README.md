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
1) Нанес футер. Сделал текст ссылки белым цветом. …
2) Из кнопки оставить-заявку убрал текст. Теперь он появляется при наведение курсора на иконку
3) убрал бордеры из навбара …
4) увеличил отступы навбара
5) задний фон кнопок навбара сделал #8ffaff
6) убрал подчеркивание со всех ссылок
7) из формы поиска убрал иконку
8) переставил кнопку заявки между поиском и контактами
9) всем бордерам присвоил цвет #ced4da

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
1) бордер радиус 4px везде, где он есть, кроме марок. У марок 12px …
2) бордер у всех элементов 1px
3) высоту строки увеличить до 30px и убрал фон
4) блок контактов в шапке выровнял на право, блок с марками растянул на 90% ширины экрана
5) карта сайта - сделал шрифт и цвет #343a40(как меню). Сделал pointer на блоки марок 
6) разлипил названия в две строки у марок, блок марок спустил вниз на 40px
7) разделил файл CSS на несколько файлов
8) перенес кнопку оставитьЗаявку и оставил свободное место для кнопки, чтобы поиск не прыгал

31.03.20
1) сделал заглушки элементов карусели
2) вставил карусель. Пока карусель только из картинок, надо заменить на карточки-заглушки

01.04.20
1) приделал setInterval для карусели
2) в карусели заменил картинки на карточки
3) поправил шрифт карточек товара и высоту карусели
4) все изображения из шапки и JS кнопки оставитьЗаявку положил в папку navbar
5) убрал бордер с кнопки Заявки и увеличил размер изображения
6) сделал дополнительный класс с цветом текста #2196f3 для вкладок меню
7) cделал ховер-тень для марок
8) сделал мах-ширину экрана 1240рх, все бэкгроунды доходят до края экрана
9) отредактировал кнопки прокрутки и карточки карусели

02.04.20
сделал правки на главной + добавил карусель

06.04.20
1) переорганизовал файлы с папками 
2) создал <tempate> для брендов
3) сделал автозаполнение блока с брендами
4) переписал js-файл с каруселью

15.04.20
1) переделал класс кнопки ОСТАВИТЬ ЗАЯВКУ на visibility:hidden
2) нашел-исправил ошибку в шаблоне карточки карусели
3) добавил класс box-sizing

16.04.20
пофиксил карточки брендов и карусели

21.04.20
добавил свойство z-index навбару, теперь он прорисован выше всех

22.04.20
1) сверстал страницу обслуживание
2) выделил для брендов отдельный CSS

23.04.20
сверстал страницу Контакты

24.04.20
сверстал скелет страницы онлайн-заявки

27.06.20
1) наверстал скелет страницы каталога
2) наверстал скелет страницы карта сайта
3) пофиксил + переименовал навигационный блок catalog в menu
 
30.04.20
1) сделал загрузочный JS для navbar
2) поправил вложенные списки на странице карта сайта
3) оптимизировал navbarLoader
4) сделал загрузочный JS для menu
5) сделал загрузочный JS для footer

01.05.20
1) сделал переход при нажатии на кнопку оставить заявку в навбаре
2) на всех страницах заменил скрипты и убрал лишний html-код. Создал себе template.html, там будет лежать html, который теперь загружается скриптом
3) добавил скрипты для выделения выбраной странице в меню
4) добавил favicon

06.05.20
1) переложил описания классов outerContainer и innerContainer в commons.css
2) сделал одинаковые паддинги в блоках и перенес их[паддинги] в innerContainer

13.05.20
1) промежуточный коммит
2) создал классы titleDefault и textDefault
3) перенес заглушки для страницы каталога в папку catalog

14.05.20
1) сделал загрузочные скрипты для навбара, меню и футера глубже
2) сделал загрузочный скрипт для блока контент
3) удалил test-back.css

18.05.20
1) сделал картинки мессенджеров кликабельными. ВОтсап проверил на компе
2) скрыл иконку телеграмма
3) добавил тень при наведение курсора на иконку месенджера

27.05.20
сделал файл с 1 таблицей товаров и загрузочными скриптами

29.05.20
сделал сортировку и загрузку по типу товара

01.06.20
инициировал проект и установил webpack

04.06.20 ранее сделал загрузочные для навбар, меню и футера. А также для контейнеров блока контент. Немного изучив Вебпак решил, что нужно сделать html шаблон для навбара, меню, футера и контейнеров контента. Буду использовать шаблон при сборке

08.06.20 
начал настраивать webpack и вернул html-шаблон из старых коммитов. Настроил очистку папки dist перед очередной сборкой

10.06.20 
1) настроил загрузку CSS-ов с normlize.css
2) настроил загрузку изображений
3) установил и подключил шрифт Roboto
4) настроил сокращенные абсолютные пути
5) файлы без указанного расширения будут по дефолту восприниматься как js или json
6) оптимизировал одинаковые импорты

11.06.20
актуализировал html-шаблон

12.06.20
установил и настроил copy-webpack-plugin

15.06.20
1) минимизировал HTML, CSS и JS файлы, при сборка режиме прода
2) настроил имена файлов - hash в имени файлов будет только при сборке в режиме прода

16.06.20
1) установил webpack-bundle-analyzer
2) заполнил README

28.07.20
установил React и JSX

29.07.20
настроил роутинг, но пока криво - при обновление страницы 404

30.07.20
настроил роутинг, теперь при обновление страницы отображается нужный контент. Кроме двух страниц. Со страниц catalog и contacts редиректит на catalog/ и contacts/ соответственно. Пока изменил pathname на fcatalog и fcontacts, потом пофиксю

03.08.20
1) начал заполнять страницы сайта
2) наполнил основную страницу, надо добавить логику к блоку карусели
3) удалил из компонентов добавление стилей через объект styles. Стили добавлялись в html разметку, результат выглядел стремно. Оставил описание стилей в CSS

06.08.20
1) перенес navbar, menu и footer в React. Не могу удалить navbar из html, потом доделаю
2) удалил лишние HTML и CSS. Те, что еще понадобятся для заполнения страниц перенес в папку restOldPages
3) наполнил контентом страницу контактов. Не загрузились иконки мэссенджеров - завтра донастрою вэбпак.
4) наполнил контентом страницу заявки. Отправка сообщений пока не реализована

07.08.20
1) наполнил контентом страницу сервиса
2) наполнил контентом страницу каталога. Пока наполнение из заглушек
3) настроил webpack, чтобы появились иконки ватсапа и вибера. Надо будет перенастроить, сейчас все иконки подгруженны индивидуально, надо переделать чтобы грузилась вся папка с иконками. Поправил ссылки на заглушки
4) сделал страницу карты сайта. Пока статичное наполнение текстом, чтобы представлять как примерно будет выглядеть страница

10.08.20
1) сделал компонент для отрисовки айтемов. Пока все в 1 компоненте - надо будет разделить. Также надо переписать функцию для перебора мапы айтемов в массив, который будет отрисовываться. Не получилось отрисовать примечание для таблицы айтема - нужно сделать условие наличия заметок, в условие цикл, отрисовывающий заметки. Все заметки передаются в цикл, но цикл не отрисовывает заметки. Пока отложил
2) переделал компонент меню, теперь количество пунктов меню можно быстро увеличивать. Создал себе временно пункт меню Item(dev), чтобы переходить на страницу /item без перезагрузки. Странным образом решилась проблема названия страниц /fcatalog и /fcontacts - теперь нормально: /catalog и /contacts
3) переделал <Link> на <NavLink> в меню (в футере тоже менял, но выглядело стремно). Описал класс активной вкладки - теперь вкладка "Главная" всегда активна. Пока добавил свойство exact ко всем вкладкам, в дальнейшем надо будет добавлять его динамически

11.08.20
1) пофиксил exact во вкладках меню. Теперь все работает как надо, и легко изменяемо
2) разделил компонент Item на несколько компонентов, возможно разделю компонент ItemTable, надо подумать

12.08.20
1) увеличил количество айтемов до 10, чтобы больше кейсов можно было протестировать
2) сделал обработчик события при вводе текста в инпут навбара, пока обработчик выводит сообщение в консоль
3) подсказали как написать условие чтобы отрисовывались примечания под таблицами

13.08.20
1) мне объяснили почему я не мог удалить navbar из temlate.html - на один из елементов ссылался js-файл. Поправил
2) сделал поиск по "номеру айтема" в мапе по запросу из инпута навбара. Пока выводит результат в консоль, дальше надо будет выводить результат на страницу

17.08.20
1) объединил компоненты Item, весь код теперь в странице Items

18.08.20
1) переименовал компонент-страницу Items в Item. По запросу из навбара можно найти и отрисовать нужный айтем. Использовал State и Context
2) Понял, что StateItem и ContextItem не удобно для для страницы айтема - если искать по ссылке, то стейт будет пустой. Это было бы удобно для корзины или сравнения. Надо сделать изменение url и производить поиск по параметрам из урла, тогда и при переходе по ссылке будет отображаться нужный айтем

19.08.20
1) сделал изменение урла через history.pushState - урл меняется, стейт айтема меняется, но роутер не переключается на страницу айтема
2) переключене роута сделать не получается, отложу на потом. Пока сделаю переход через window.location, также из урла будут забирать значения для отрисовки айтема. Также учесть случай, если уже на странице Item, тогда достаточно history.pushState с изменением в стейте

20.08.20
1) сделал поиск товаров в навбаре. Теперь при вводе названия айтема в поиск - редиректит на страницу айтема. Если поиск выполняется из пути "/item", то редирект не происходит, айтем обновляется в стейте и на странице
2) пофиксил название на странице айтема, раньше не отображался

25.08.20
1) сделал обработку нестандартной шапки таблиц
2) добавил подпись картинки айтема

26.08.20
1) добавил название подраздела айтемов
2) добавил нестандартных айтемов в мапу
3) сделал условие, если картинок больше 1, то они отображаются над таблицей. Вскрылся новый косяк - что делать если таблица шире страницы
4) пофиксил стили инпута в навбаре, теперь цвета плэйсхолдера и вводимого текста разные, также изменил курсор
5) обработал случай, если по названию айтем не найден - на странице вместо названию будет: По названию "..." товар не найден

07.09.20
1) сделал разделительную линию между айтемами
2) сделал картинку "noimage", которая отображается если картинка не найдена
3) начал описывать логику карусели, при клике и по таймауту изменяется значение позиции, но не перерисовывается контейнер

10.09.20
1) пофиксил прокрутку карусели кнопками, банальная ошибка - перепутал переменные, когда переписывал код со старого js

11.09.20
1) пофиксил прокурутку карусели через временной интервал
2) заменил заглушки в карусели на айтемы
3) сделал переход на страницу айтема при клике по айтему в карусели