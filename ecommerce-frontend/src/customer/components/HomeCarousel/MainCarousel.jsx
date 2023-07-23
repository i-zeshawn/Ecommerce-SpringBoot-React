import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {mainCarouselData} from "./MainCarouselData";


const MainCarousel = () => {
    const items = mainCarouselData.map((item) => {
        return (
            <img
                src={item.image}
                alt={""}
                className={"cursor-pointer"}
                role={"presentation"}

            />
        )
    });
    return (<AliceCarousel
        items={items}
        disableButtonsControls={true}
        autoPlay
        autoPlayInterval={1000}
        infinite
    />);
}
export default MainCarousel;
