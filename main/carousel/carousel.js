let carouselItems = [
  {name:"Компрессор Зубр", imgCarousel:"main/carousel/1.png"},
  {name:"Ресивер AIRRUS (РКЗ)", imgCarousel:"main/carousel/2.png"},
  {name:"Части для компрессоров", imgCarousel:"main/carousel/3.png"},
  {name:"Гидрометр", imgCarousel:"main/carousel/4.png"},
  {name:"Колесо шасси", imgCarousel:"main/carousel/5.png"},
];

let carouselBox = document.querySelector('#main-carouselBox');
let carouselGallery = carouselBox.querySelector('.content__goodsCarousel_gallery');
let carouselCardTemplateContent = carouselGallery.querySelector('template').content;
let carouselCardTemplate = carouselCardTemplateContent.querySelector('.content__goodsCarousel_gallery_cardContainer');

let makeNewItemForCarousel = function (src, name) {
    let newCard = carouselCardTemplate.cloneNode(true);
    let newImg = newCard.querySelector('.carouselCard_img');
    newImg.src = src;
    let newName = newCard.querySelector('.carouselCard_name');
    newName.textContent = name;
    carouselGallery.appendChild(newCard);
};

for (i = 0; i < carouselItems.length; i++) {
  let imgPath = carouselItems[i].imgCarousel;
  let title = carouselItems[i].name;
  makeNewItemForCarousel(imgPath,title);
}; 

let step = 172; // ширина элемента, шаг сдвига карусели
let count = 3; // видимое количество изображений

let listElems = carouselBox.querySelectorAll('.content__goodsCarousel_gallery_cardContainer');

let position = 0; // положение ленты прокрутки

carouselBox.querySelector('.prevCarousel').onclick = function() {
  // сдвиг влево
  position += step;
  position = Math.min(position, 0)
  carouselGallery.style.marginLeft = position + 'px';
};

carouselBox.querySelector('.nextCarousel').onclick = function() {
  // сдвиг вправо
  position -= step;      
  position = Math.max(position, -step * (listElems.length - count));
  carouselGallery.style.marginLeft = position + 'px';
};

setInterval(function() {
	if(position ==  -step * (listElems.length - count)) {
	position = 0;
	} else {
	position -= step;
	position = Math.max(position, -step * (listElems.length - count));	
  };
  carouselGallery.style.marginLeft = position + 'px';
},3000);