import React, {Fragment} from 'react';

const styles = {
    content__goodsCarousel_gallery_cardContainer: {
        margin: '10px',
        padding: '5px',
        width: '150px',
        display: 'inline-block',
        borderColor: '#ced4da',
        cursor: 'pointer'
    },
    /*carouselCard: {},*/    
    carouselCard_imgContainer: {
        height: '135px',
        width: '135px',
        marginBottom: 'auto'
    },
    carouselCard_img: {
        display: 'block',
        margin: '0 auto',
        maxHeight: '135px',
        maxWidth: '135px'
    },
    carouselCard_name: {
        marginTop: '5px'
    }
};

export const CarouselItem = ({items}) => {
    return(
        <Fragment>
            {items.map((item, i) => (
                <div className="content__goodsCarousel_gallery_cardContainer box-sizing border_1px border-radius_4px"
                style={styles.content__goodsCarousel_gallery_cardContainer} 
                key={i}>
                    <figure className="carouselCard flex flex-direction_column align-items_center">
                        <div className="carouselCard_imgContainer flex" style={styles.carouselCard_imgContainer}>
                            <img src={item.imgSrc} className="carouselCard_img" style={styles.carouselCard_img}/>
                        </div>
                        <figcaption className="carouselCard_name cardName font-size_12px" style={styles.carouselCard_name}>
                            {item.title}
                        </figcaption>
                    </figure>
                </div>
            ))}
        </Fragment>
    )
}