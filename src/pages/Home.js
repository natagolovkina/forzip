import React, {Fragment} from 'react';
import {AboutUs} from '@components/AboutUs';
import {CarouselGoods} from '@components/CarouselGoods';
import {Brands} from '@components/Brands';
import '@styles/content-main.css';

export const Home = () => {
    return(
        <Fragment>
            <div className="content__container flex justify-content_space-between">
                <AboutUs />
                <CarouselGoods />
            </div>
            <div className="content__container">
                <Brands />
            </div>
        </Fragment>
    )
}