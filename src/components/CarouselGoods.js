import React, {Fragment} from 'react';
import carouselItemsTest from '@/maps/carousel/carouselMap';//тестовый массив с товарами
import {CarouselItem} from '@components/CarouselItem';
import '@/styles/block-carousel.css';

export const CarouselGoods = () => {
    return(
        <Fragment>
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
        </Fragment>
    )
}