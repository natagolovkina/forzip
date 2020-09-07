import React, {Fragment} from 'react';
import '@styles/block-carousel.css';

//тестовый массив с товарами
let carouselItemsTest = [
    {title:"Компрессор Зубр", imgSrc:"../src/maps/carousel/1.png"},
    {title:"Ресивер AIRRUS (РКЗ)", imgSrc:"../src/maps/carousel/2.png"},
    {title:"Части для компрессоров", imgSrc:"../src/maps/carousel/3.png"},
    {title:"Гидрометр", imgSrc:"../src/maps/carousel/4.png"},  
    {title:"Колесо шасси", imgSrc:"../src/maps/carousel/5.png"}
];

const CarouselItem = ({items}) => {
    return(
        <Fragment>
            {items.map((item, i) => (
                <div className="content__goodsCarousel_gallery_cardContainer box-sizing border_1px border-radius_4px"
                key={i}>
                    <figure className="carouselCard flex flex-direction_column align-items_center">
                        <div className="carouselCard_imgContainer flex">
                            <img src={item.imgSrc} className="carouselCard_img" />
                        </div>
                        <figcaption className="carouselCard_name cardName font-size_12px">
                            {item.title}
                        </figcaption>
                    </figure>
                </div>
            ))}
        </Fragment>
    )
};

//логика проккрутки карусели
let step = 170; // ширина элемента, шаг сдвига карусели
let count = 3; // видимое количество изображений
let position = 0; // положение ленты прокрутки

function clickPrevCarousel () {
    // сдвиг влево
    position += step;
    position = Math.min(position, 0);
    console.log('click prev, position:', position);
};

function clickNextCarousel () {
    // сдвиг вправо
    position -= step;      
    position = Math.max(position, -step * (carouselItemsTest.length - count));
    console.log('click next, position:', position);
};

setInterval(function() {
    //автоматическая прокрутка
	if(position ==  -step * (carouselItemsTest.length - count)) {
	position = 0;
	} else {
	position -= step;
	position = Math.max(position, -step * (carouselItemsTest.length - count));	
  };
  console.log('int next, position:', position);
},3000);

export const Carousel = () => {
    return(
        <div className="content__containerGoods flex justify-content_center" >
            <div className="content__goodsCarousel flex align-items_center justify-content_center">
                <div className="content__goodsCarousel_arrow prevCarousel border_1px border-radius_4px flex align-items_center" onClick={clickPrevCarousel}>◄</div>
                <div className="content__goodsCarousel_galleryWindow">
                    <div className="content__goodsCarousel_gallery flex" style={{marginLeft: position + 'px'}}>
                    <CarouselItem items = {carouselItemsTest}/>
                    </div>
                </div>
                <div className="content__goodsCarousel_arrow nextCarousel border_1px border-radius_4px flex align-items_center" onClick={clickNextCarousel}>►</div>
            </div>
        </div>
    )
}