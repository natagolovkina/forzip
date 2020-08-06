import React, {Fragment} from 'react';
import brandsTest from '@/maps/brands/brandsMap';//тестовый массив с брендами
import '@styles/block-brands.css';

export const Brands = ({brands}) => {
    brands = brandsTest;
    return(
        <div className="content__brands margin_auto width_90 flex justify-content_space-around" id="main-brands">
            {brands.map((brand, i) => (
                <div className="content__brands_card flex border_1px border-radius_12px"
                key={i}>
                    <figure className="brandCard flex flex-direction_column">
                        <div className="brandLogoContainer flex align-items_center">
                            <img src={brand.img130}
                            className="brandLogo" />
                        </div>
                        <figcaption className="brandName cardName font-size_12px">
                            {brand.name}
                        </figcaption>
                    </figure>				
                </div>
            ))}
        </div>
    )
}