import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { topMeels } from "./topMeal";
import { CarosuelItem } from "./CarosuelItem";

export const MultiItemCarosuel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplayspeed: 1000,
        arrows:false
      };
    return (
        <Slider {...settings}>
            {console.log(topMeels)}
            {topMeels.map((item, index) => (
                <CarosuelItem 
                    key={index} 
                    image={item.image} 
                    title={item.title} 
                />
            ))}
        </Slider>
    );
};