let cardsArr = [
    {name:"Винтовые компрессоры", img:"catalog/catalogStubs/ScrewСompressor_180x175.jpg"},
    {name:"Поршневые компрессоры", img:"catalog/catalogStubs/pistonСompressor_180x180.jpg"},
    {name:"Дизельные компрессоры", img:"catalog/catalogStubs/dieselСompressor_180x180.jpg"},
    {name:"Безмасляные компрессоры", img:"catalog/catalogStubs/oil-freeСompress_180x180.jpg"},
    {name:"Системы подготовки сжатого воздуха", img:"catalog/catalogStubs/CompressedAirPrepSystems_180x180.jpg"},
    {name:"Магистральные фильтры", img:"catalog/catalogStubs/MainFilter_180x180.jpg"},
    {name:"Ресиверы", img:"catalog/catalogStubs/resivers_180x180.jpg"},
    {name:"Расходники (фильтры масляные, сепараторы, воздушные фильтры, масла)", img:"catalog/catalogStubs/Consumables_179x180.jpg"},
    {name:"Запасные части для винтовых компрессоров", img:"catalog/catalogStubs/SpareParts_180x180.jpg"},    
    {name:"Запасные части для поршневых компрессоров", img:"catalog/catalogStubs/SpareParts_180x180.jpg"},
    {name:"Реле давления", img:"catalog/catalogStubs/PressureSwitch_180x180.jpg"},
    {name:"Масла и смазки", img:"catalog/catalogStubs/OilsAndLubricants.jpg"}
];

let cardsBox = document.querySelector('#catalog-sectionCards');
let cardTemplateContent = cardsBox.querySelector('template').content;
let cardTemplate = cardTemplateContent.querySelector('.content__catalog_cardContainer');

let makeNewCard = function (src, name) {
    let newCard = cardTemplate.cloneNode(true);
    let newLogo = newCard.querySelector('.catalogCard_img');
    newLogo.src = src;
    let newName = newCard.querySelector('.catalogCard_name');
    newName.textContent = name;
    cardsBox.appendChild(newCard);
};

for (i = 0; i < cardsArr.length; i++) {
    let imgPath = cardsArr[i].img;
    let title = cardsArr[i].name;
    makeNewCard(imgPath,title);
};