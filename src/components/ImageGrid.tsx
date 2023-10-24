"use client";

import { animateCls } from "@/shared/helpers";
import { IImageSliderProps } from "@/shared/props";
import Image from "next/image";
import { FC } from "react";

const ImageGrid: FC<IImageSliderProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-40">
      <Image
        className="h-full object-container"
        src={`${images?.back}`}
        alt="back"
        width={700}
        height={300}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Image
          className={animateCls}
          src={`${images?.front}`}
          alt="front"
          width={400}
          height={300}
        />
        <Image
          className={animateCls}
          src={`${images?.leftSide}`}
          alt="left"
          width={400}
          height={300}
        />
        <Image
          className={animateCls}
          src={`${images?.rightSide}`}
          alt="right"
          width={400}
          height={300}
        />
        <Image
          className={animateCls}
          src={`${images?.back}`}
          alt="back"
          width={400}
          height={300}
        />
      </div>
    </div>
  );
};
export default ImageGrid;
