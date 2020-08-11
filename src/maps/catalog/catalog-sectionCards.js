let cardsArr = [
    {name:"Винтовые компрессоры", imgSrc:"catalog/catalogStubs/ScrewСompressor_180x175.jpg"},
    {name:"Поршневые компрессоры", imgSrc:"catalog/catalogStubs/pistonСompressor_180x180.jpg"},
    {name:"Дизельные компрессоры", imgSrc:"catalog/catalogStubs/dieselСompressor_180x180.jpg"},
    {name:"Безмасляные компрессоры", imgSrc:"catalog/catalogStubs/oil-freeСompress_180x180.jpg"},
    {name:"Системы подготовки сжатого воздуха", imgSrc:"catalog/catalogStubs/CompressedAirPrepSystems_180x180.jpg"},
    {name:"Магистральные фильтры", imgSrc:"catalog/catalogStubs/MainFilter_180x180.jpg"},
    {name:"Ресиверы", imgSrc:"catalog/catalogStubs/resivers_180x180.jpg"},
    {name:"Расходники (фильтры масляные, сепараторы, воздушные фильтры, масла)", imgSrc:"catalog/catalogStubs/Consumables_179x180.jpg"},
    {name:"Запасные части для винтовых компрессоров", imgSrc:"catalog/catalogStubs/SpareParts_180x180.jpg"},    
    {name:"Запасные части для поршневых компрессоров", imgSrc:"catalog/catalogStubs/SparePartsPiston_180x180.jpg"},
    {name:"Реле давления", imgSrc:"catalog/catalogStubs/PressureSwitch_180x180.jpg"},
    {name:"Масла и смазки", imgSrc:"catalog/catalogStubs/OilsAndLubricants.jpg"},
    {name:"Ремонт и обслуживание компрессоров", imgSrc:"catalog/catalogStubs/Service.jpg"}
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
    let imgPath = cardsArr[i].imgSrc;
    let title = cardsArr[i].name;
    makeNewCard(imgPath,title);
};