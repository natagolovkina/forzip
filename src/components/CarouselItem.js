import React, {Fragment} from 'react';

export const CarouselItem = ({items}) => {
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
}