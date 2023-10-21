"use client"

import { IImageSliderProps } from "@/shared/props"
import { FC } from "react";

const ImageGrid:FC<IImageSliderProps> = ({images})=>{
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-40">
        <img className="h-full object-container" src={`${images?.back}`} alt="back" loading="lazy" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img className="h-full object-container" src={`${images?.front}`} alt="front" loading="lazy" />
        <img className="h-full object-container" src={`${images?.leftSide}`} alt="left" loading="lazy" />
        <img className="h-full object-container" src={`${images?.rightSide}`} alt="right" loading="lazy" />
        <img className="h-full object-container" src={`${images?.back}`} alt="back" loading="lazy" />
        </div>
      </div>
    )
}
export default ImageGrid;