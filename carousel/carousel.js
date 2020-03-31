let width = 147; // ширина картинки
let count = 3; // видимое количество изображений

let carousel = document.querySelector('#carouselGoods');
let list = carousel.querySelector('.content__goodsCarousele_gallery');
let listElems = carousel.querySelectorAll('.content__goodsCarousele_gallery_item');

let position = 0; // положение ленты прокрутки

carousel.querySelector('.prev').onclick = function() {
  // сдвиг влево
  position += width;
  position = Math.min(position, 0)
  list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function() {
  // сдвиг вправо
  position -= width;      
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};