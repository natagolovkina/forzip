import React, {Fragment} from 'react';
import brandsTest from '@/maps/brands/brandsMap';//тестовый массив с брендами

const styles = {
    content__brends: {
        paddingTop: "40px",
        flexWrap: "wrap"
    },
    content__brends_card: {
        margin: "10px",
        padding: "10px",
        maxWidth: "100px",
        borderColor: "#ced4da",
        backgroundColor: "white",
        backgroundSize: "cover",
        cursor: "pointer"
    },
    /* ховер
    content__brends_card:hover: {
        boxShadow: "0 0 10px grey"
    },*/
    /*brendCard: {},*/
    brendLogoContainer: {
        height: "100px",
        width: "100px"
    },
    brendLogo: {
        display: "block",
        margin: "0 auto",
        maxHeight: "100px",
        maxWidth: "100px"
    },
    brendName: {
        marginTop: "10px"
    }
};

export const Brands = ({brands}) => {
    brands = brandsTest;
    return(
        <div className="content__brands margin_auto width_90 flex justify-content_space-around" id="main-brands"
        style={styles.content__brends}>
            {brands.map((brand, i) => (
                <div className="content__brends_card flex border_1px border-radius_12px"
                style={styles.content__brends_card}
                key={i}>
                    <figure className="brendCard flex flex-direction_column">
                        <div className="brendLogoContainer flex align-items_center"
                        style={styles.brendLogoContainer}>
                            <img src={brand.img130}
                            className="brendLogo"
                            style={styles.brendLogo} />
                        </div>
                        <figcaption className="brendName cardName font-size_12px"
                        style={styles.brendName}>
                            {brand.name}
                        </figcaption>
                    </figure>				
                </div>
            ))}
        </div>
    )
}