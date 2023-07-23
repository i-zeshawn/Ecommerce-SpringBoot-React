import AliceCarousel from "react-alice-carousel";
import React from "react";
import {Button} from "@mui/material";
import {KeyboardArrowLeft} from "@mui/icons-material";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";

const responsive = {
    0: {items: 1},
    568: {items: 2},
    1024: {items: 5},
    1922: {items: 5},
};
const items = [1, 1, 1, 1, 1].map((item) => (<HomeSectionCard/>));

const HomeSectionCarousel = () => {
    return (
        <div className={"relative px-4 lg:px-8"}>
            <div className={"relative p-5"}>

                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    autoPlayInterval={1000}
                    infinite
                    responsive={responsive}/>
                <Button variant={"contained"} className={"z-50"}
                        sx={{
                            position: 'absolute',
                            top: "8rem",
                            right: "0rem",
                            transform: "translateX(50%) rotate(90deg)"
                        }} aria-label={"next"}>
                    <KeyboardArrowLeft sx={{transform: "rotate(90deg)"}}/>
                </Button>
            </div>

        </div>
    );
}

export default HomeSectionCarousel;
