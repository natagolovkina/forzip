import React, {Fragment} from 'react';
import {AboutUs} from '@/components/AboutUs';
import {GoodsCarousel} from '@/components/GoodsCarousel';
import {Brands} from '@/components/Brands';

export const Home = () => {
    return(
        <Fragment>
            <div className="content__container flex justify-content_space-between">
                <AboutUs />
                <GoodsCarousel />
            </div>
            <div className="content__container">
                <Brands />
            </div>
        </Fragment>
    )
}