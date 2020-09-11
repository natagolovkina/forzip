import React, {Fragment, useState} from 'react';
import '@styles/block-carousel.css';

//тестовый массив с товарами
let carouselItemsTest = [
    {title:"Компрессор Зубр", imgSrc:"../src/maps/carousel/1.png"},
    {title:"Ресивер AIRRUS (РКЗ)", imgSrc:"../src/maps/carousel/2.png"},
    {title:"Части для компрессоров", imgSrc:"../src/maps/carousel/3.png"},
    {title:"Гидрометр", imgSrc:"../src/maps/carousel/4.png"},  
    {title:"Колесо шасси", imgSrc:"../src/maps/carousel/5.png"}
];

const CarouselItem = ({items}) => {
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
};

export const Carousel = () => {
    const [carouselState, setCarouselState] = useState({
        step: 170, // ширина элемента, шаг сдвига карусели
        count: 3, // видимое количество изображений
        position: 0, // положение ленты прокрутки
        itemsArr: carouselItemsTest, // массив айтемов
        intervalOn: false
    });

    function clickPrevCarousel () {
        // сдвиг влево
        let newPosition = carouselState.position + carouselState.step;
        newPosition = Math.min(newPosition, 0);
        setCarouselState(prevState => ({
            ...prevState,
            position: newPosition
        }));
    };

    function clickNextCarousel () {
        // сдвиг вправо
        let newPosition = carouselState.position - carouselState.step;
        newPosition = Math.max(newPosition, -carouselState.step * (carouselState.itemsArr.length - carouselState.count));
        setCarouselState(prevState => ({
            ...prevState,
            position: newPosition
        }));
    };

    if (!carouselState.intervalOn) {
        // автоматическая прокрутка
        setCarouselState(prevState => ({
            ...prevState,
            intervalOn: true
        }));

        let rebuildState = function (prevState) {
            let newState = {...prevState};
            if (newState.position ==  -newState.step * (newState.itemsArr.length - newState.count)) {
                newState.position = 0;
            } else {
                let newPosition = newState.position - newState.step;                    
                newPosition = Math.max(newPosition, -newState.step * (newState.itemsArr.length - newState.count));
                newState.position = newPosition;
            };
            return newState
        };

        setInterval(function() {
            setCarouselState(prevState => rebuildState(prevState))
        },3000);
    };    

    return(
        <div className="content__containerGoods flex justify-content_center" >
            <div className="content__goodsCarousel flex align-items_center justify-content_center">
                <div className="content__goodsCarousel_arrow prevCarousel border_1px border-radius_4px flex align-items_center"
                onClick={clickPrevCarousel}>◄</div>
                <div className="content__goodsCarousel_galleryWindow">
                    <div className="content__goodsCarousel_gallery flex" style={{marginLeft: carouselState.position + 'px'}}>
                    <CarouselItem items = {carouselState.itemsArr}/>
                    </div>
                </div>
                <div className="content__goodsCarousel_arrow nextCarousel border_1px border-radius_4px flex align-items_center"
                onClick={clickNextCarousel}>►</div>
            </div>
        </div>
    )
}