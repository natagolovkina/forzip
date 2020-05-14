let menuOuterContainer = document.querySelector('#menu-place');
menuOuterContainer.classList.add('menu_outer', 'outerContainer', 'blocksMargin', 'menuBackground');

let menuInnerContainer = document.createElement('div');
menuInnerContainer.classList.add('menu_inner', 'innerContainer', 'max-width');
menuOuterContainer.append(menuInnerContainer);

let menuList = document.createElement('ul');
menuList.classList.add('menu__list', 'flex');
menuInnerContainer.append(menuList);

let newMenuItem = function (str,href,id,order) {
    let aItem = document.createElement('a');
    aItem.classList.add('menu__list_itemText', 'textFontDefault', 'text-decoration_none');
    aItem.href = href;
    aItem.id = id;
    aItem.textContent = str;
    let liItem = document.createElement('li');
    liItem.classList.add('menu__list_item');
    if (order === 'first') {
        liItem.classList.add('menu__list_firstItem');
    };
    if (order === 'last') {
        liItem.classList.add('menu__list_lastItem');
    };
    liItem.append(aItem);
    menuList.append(liItem);
};

//Главная
newMenuItem('Главная','HTML main.html','menu-main','first');

//Каталог
newMenuItem('Каталог','HTML catalog.html','menu-catalog');

//Обслуживание
newMenuItem('Обслуживание','HTML service.html','menu-service');

//Контакты
newMenuItem('Контакты','HTML contacts.html','menu-contacts');

//Online заявка
newMenuItem('Online заявка','HTML request.html','menu-request','last');