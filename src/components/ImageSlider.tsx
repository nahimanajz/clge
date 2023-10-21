"use client";


import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FC } from "react";
import { IImageSliderProps } from "@/shared/props";



const ImageSlider: FC<IImageSliderProps> = ({ images }) => {
  return (
    <div className="relative overflow-hidden">
      <Carousel>
        <img src={`${images?.back}`} alt="back" className="rounded-[8px]" />
        <img src={`${images?.front}`} alt="front" className="rounded-[8px]" />
        <img src={`${images?.leftSide}`} alt="left" className="rounded-[8px]" />
        <img
          src={`${images?.rightSide}`}
          alt="right"
          className="rounded-[8px]"
        />
      </Carousel>
    </div>
  );
};
export default ImageSlider;
