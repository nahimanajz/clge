"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FC } from "react";
import { IImageSliderProps } from "@/shared/props";
import Image from "next/image";

const ImageSlider: FC<IImageSliderProps> = ({ images }) => {
  //TODO: REMOVE DUPLICATED IMAGES  AND DEFINE ONE IMAGE WITH PROPS
  return (
   
      <Carousel showArrows={true} showThumbs={false}>
        <Image
          src={`${images?.back}`}
          alt="back"
          className="rounded-[8px]"
          width={300}
          height={300}
        />
        <Image
          src={`${images?.front}`}
          alt="front"
          className="rounded-[8px]"
          width={300}
          height={300}
        />
        <Image
          src={`${images?.leftSide}`}
          alt="left"
          className="rounded-[8px]"
          width={300}
          height={300}
        />
        <Image
          src={`${images?.rightSide}`}
          alt="right"
          className="rounded-[8px]"
          width={300}
          height={300}
        />
      </Carousel>
   
  );
};
export default ImageSlider;
