import AliceCarousel from "react-alice-carousel";
import React, {useState} from "react";
import {Button} from "@mui/material";
import {KeyboardArrowLeft} from "@mui/icons-material";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";

const responsive = {
    0: {items: 1},
    568: {items: 2},
    1024: {items: 5},
    1922: {items: 5},
};

const HomeSectionCarousel = ({data, sectionName}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = data.map((item) => (<HomeSectionCard product={item}/>));
    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);

    const syncActiveIndex = (item) => setActiveIndex(item);
    return (
        <div className={"border"}>
            <h2 className={"text-2xl font-extrabold text-gray-800 py-5"}>{sectionName}</h2>
            <div className={"relative p-5"}>

                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    autoPlayInterval={1000}
                    responsive={responsive}
                    disableDotsControls
                    onSlideChange={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                {activeIndex !== 0 && <Button variant={"contained"} className={"z-50 bg-white"}
                                              sx={{
                                                  position: 'absolute',
                                                  top: "8rem",
                                                  left: "0rem",
                                                  transform: "translateX(-50%) rotate(-90deg)",
                                                  bgcolor: "white",
                                              }} aria-label={"next"}
                                              onClick={slidePrev}
                >
                    <KeyboardArrowLeft sx={{transform: "rotate(90deg)", color: "black"}}/>
                </Button>
                }
                {activeIndex !== items.length - 5 && <Button variant={"contained"} className={"z-50 bg-white"}
                                                             sx={{
                                                                 position: 'absolute',
                                                                 top: "8rem",
                                                                 right: "0rem",
                                                                 transform: "translateX(50%) rotate(90deg)",
                                                                 bgcolor: "white",
                                                             }}
                                                             aria-label={"next"}
                                                             onClick={slideNext}
                >
                    <KeyboardArrowLeft sx={{transform: "rotate(90deg)", color: "black"}}/>
                </Button>
                }
            </div>

        </div>
    );
}

export default HomeSectionCarousel;
