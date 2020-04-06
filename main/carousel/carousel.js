let step = 172; // ширина элемента, шаг сдвига карусели
let count = 3; // видимое количество изображений

let carousel = document.querySelector('#carouselGoods');
let list = carousel.querySelector('.content__goodsCarousel_gallery');
let listElems = carousel.querySelectorAll('.content__goodsCarousel_gallery_cardContainer');

let position = 0; // положение ленты прокрутки

carousel.querySelector('.prevCarousel').onclick = function() {
  // сдвиг влево
  position += step;
  position = Math.min(position, 0)
  list.style.marginLeft = position + 'px';
};

carousel.querySelector('.nextCarousel').onclick = function() {
  // сдвиг вправо
  position -= step;      
  position = Math.max(position, -step * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};

setInterval(function() {
	if(position ==  -step * (listElems.length - count)) {
	position = 0;
	} else {
	position -= step;
	position = Math.max(position, -step * (listElems.length - count));	
  };
  list.style.marginLeft = position + 'px';
},3000);