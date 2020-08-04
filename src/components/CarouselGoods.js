import React, {Fragment} from 'react';
import carouselItemsTest from '@/maps/carousel/carouselMap';//тестовый массив с товарами
import {CarouselItem} from '@/components/CarouselItem';

const styles = {
    content__containerGoods: {width: '65%'},
    content__goodsCarousel: {
        height: 'auto',
        width: '100%',
        position: 'relative'
    },
    content__goodsCarousel_arrow: {
        height: '168px',
        margin:' 0 5px',
        padding: '5px',
        fontFamily: 'sans-serif',
        fontSize: '30px',
        color: '#343a40',
        borderColor: '#ced4da',
    },
    /*.content__goodsCarousel_arrow:focus {outline: none;}
    .content__goodsCarousel_arrow:hover {cursor: pointer;}*/
    prevCarousel: {left: '7px'},
    nextCarousel: {right: '7px'},
    content__goodsCarousel_galleryWindow: {
        width: '510px',
        overflow: 'hidden'
    },
    content__goodsCarousel_gallery: {
        width: '9999px',
        margin: '0',
        padding: '0',
        listStyle: 'none',
        transition: 'margin-left 250ms',
        fontSize: '0'
    }
};

export const CarouselGoods = () => {
    return(
        <Fragment>
            <div className="content__containerGoods flex justify-content_center" 
            style={styles.content__containerGoods}>
                <div className="content__goodsCarousel flex align-items_center justify-content_center" id="main-carouselBox" 
                style={styles.content__goodsCarousel}>
                    <div className="content__goodsCarousel_arrow prevCarousel border_1px border-radius_4px flex align-items_center" 
                    style={styles.content__goodsCarousel_arrow/*, styles.prevCarousel*/}>◄</div>
                    <div className="content__goodsCarousel_galleryWindow" 
                    style={styles.content__goodsCarousel_galleryWindow}>
                        <div className="content__goodsCarousel_gallery flex" 
                        style={styles.content__goodsCarousel_gallery}>
                        <CarouselItem items = {carouselItemsTest}/>
                        </div>
                    </div>
                    <div className="content__goodsCarousel_arrow nextCarousel border_1px border-radius_4px flex align-items_center" 
                    style={styles.content__goodsCarousel_arrow/*, styles.nextCarousel*/}>►</div>
                </div>
            </div>
        </Fragment>
    )
}