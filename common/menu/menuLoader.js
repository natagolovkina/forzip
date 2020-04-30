let menuMainContainer = document.querySelector('#menu-place');

let newMenuItem = function (str,href,id) {
    let aItem = document.createElement('a');
    aItem.classList.add('menu__list_itemText','text-decoration_none');
    aItem.href = href;
    aItem.id = id;
    aItem.textContent = str;
    let liItem = document.createElement('li');
    liItem.classList.add('menu__list_item');
    if (str === 'Online заявка') {
        liItem.classList.add('margin-left_auto');
    };
    liItem.append(aItem);
    menuMainContainer.append(liItem);
};

//Главная
newMenuItem('Главная','HTML main.html','menu-main');

//Каталог
newMenuItem('Каталог','HTML catalog.html','menu-catalog');

//Обслуживание
newMenuItem('Обслуживание','HTML service.html','menu-service');

//Контакты
newMenuItem('Контакты','HTML contacts.html','menu-contacts');

//Online заявка
newMenuItem('Online заявка','HTML request.html','menu-request');