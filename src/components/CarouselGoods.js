import React from 'react';
import {CarouselItem} from '@components/CarouselItem';
import '@styles/block-carousel.css';

//тестовый массив с товарами
let carouselItemsTest = [
    {title:"Компрессор Зубр", imgSrc:"../src/maps/carousel/1.png"},
    {title:"Ресивер AIRRUS (РКЗ)", imgSrc:"../src/maps/carousel/2.png"},
    {title:"Части для компрессоров", imgSrc:"../src/maps/carousel/3.png"},
    {title:"Гидрометр", imgSrc:"../src/maps/carousel/4.png"},  
    {title:"Колесо шасси", imgSrc:"../src/maps/carousel/5.png"}
];

export const CarouselGoods = () => {
    return(
        <div className="content__containerGoods flex justify-content_center" >
            <div className="content__goodsCarousel flex align-items_center justify-content_center" id="main-carouselBox">
                <div className="content__goodsCarousel_arrow prevCarousel border_1px border-radius_4px flex align-items_center">◄</div>
                <div className="content__goodsCarousel_galleryWindow">
                    <div className="content__goodsCarousel_gallery flex">
                    <CarouselItem items = {carouselItemsTest}/>
                    </div>
                </div>
                <div className="content__goodsCarousel_arrow nextCarousel border_1px border-radius_4px flex align-items_center">►</div>
            </div>
        </div>
    )
}