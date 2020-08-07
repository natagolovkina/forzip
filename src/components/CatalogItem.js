import React, {Fragment} from 'react';

export const CatalogItem = ({categories}) => {
    return(
        <Fragment>
            {categories.map((category, i) => (
                <div className="content__catalog_cardContainer border_1px border-radius_12px background_white" key={i}>
                    <figure className="catalogCard flex flex-direction_column align-items_center box-sizing">
                        <div className="catalogCard_imgContainer flex align-items_center">
                            <img src={category.imgSrc} className="catalogCard_img" />
                        </div>
                        <figcaption className="catalogCard_name cardName font-size_16px">{category.name}</figcaption>
                    </figure>
                </div>
            ))}
        </Fragment>
    )
}