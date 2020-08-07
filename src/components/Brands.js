import React, {Fragment} from 'react';
import '@styles/block-brands.css';

//тестовый массив с брендами
let brandArr = [
    {name:"Ремеза (Remeza)", img130:"../src/maps/brands/remeza.jpg"},
    {name:"Бежецкий завод АСО", img130:"../src/maps/brands/aso.jpg"},
    {name:"Берг (Berg)", img130:"../src/maps/brands/berg.png"},
    {name:"Компраг (Comprag)", img130:"../src/maps/brands/comprag.jpg"},
    {name:"Фини (FINI)", img130:"../src/maps/brands/fini.jpg"},
];

export const Brands = ({brands}) => {
    brands = brandArr;
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