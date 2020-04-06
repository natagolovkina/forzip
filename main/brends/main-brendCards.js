let brendArr = [
    {name:"Ремеза (Remeza)", img130:"main/brends/remeza.jpg"},
    {name:"Бежецкий завод АСО", img130:"main/brends/aso.jpg"},
    {name:"Берг (Berg)", img130:"main/brends/berg.png"},
    {name:"Компраг (Comprag)", img130:"main/brends/comprag.jpg"},
    {name:"Фини (FINI)", img130:"main/brends/fini.jpg"},
];

let brendBox = document.querySelector('#main-brends');
let brendCardTemplateContent = brendBox.querySelector('template').content;
let brendCardTemplate = brendCardTemplateContent.querySelector('.content__brends_card');

let makeNewBrendCard = function (src, name) {
    let newCard = brendCardTemplate.cloneNode(true);
    let newLogo = newCard.querySelector('.brendLogo');
    newLogo.src = src;
    let newName = newCard.querySelector('.brendName');
    newName.textContent = name;
    brendBox.appendChild(newCard);
};

for (i = 0; i < brendArr.length; i++) {
    let imgPath = brendArr[i].img130;
    let title = brendArr[i].name;
    makeNewBrendCard(imgPath,title);
};