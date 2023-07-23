import AliceCarousel from "react-alice-carousel";
import React from "react";

const responsive = {
    0: {items: 1},
    568: {items: 2},
    1024: {items: 3},
};
const HomeSectionCarousel = () => {
    const items = [1, 1, 1, 1].map((item) => (<HomeSectionCarousel/>));
    return (
        <div className={"relative px-4 lg:px-8"}>
            <div className={"relative p-5"}>

                <AliceCarousel
                    items={items}
                    disableButtonsControls={true}
                    autoPlayInterval={1000}
                    infinite
                    responsive={responsive}/>
            </div>

        </div>
    );
}

export default HomeSectionCarousel;
