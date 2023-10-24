"use client";

import { IRoom } from "@/shared/types";

import { FC } from "react";
import dynamic from "next/dynamic";
import { animateCls } from "@/shared/helpers";
import Link from "next/link";

const ImageSlider = dynamic(() => import("./ImageSlider"));
interface IRoomProps {
  room: IRoom;
}
const RoomCard: FC<IRoomProps> = ({
  room: { id, title, price, shortDescription, images, country, city, daytime },
}) => {
  return (
    <div className={`max-w-xs mx-auto p-4 h-auto ${animateCls} items-strecth`}>
      <ImageSlider images={images[0]} />
      <Link className="cursor-pointer" href={`/room/${id}/details`}>
        <div className="flex justify-between flex-wrap">
          <h2 className="font-semibold mt-2 text-slate-800 truncate w-20 truncate">
            {country}
          </h2>
          <h2 className="font-semibold mt-2 text-slate-800">{city}</h2>
        </div>
        <h2 className="font-semibold mt-2 text-slate-600">{title}</h2>

        <p className="text-gray-600 w-full truncate">{shortDescription}...</p>

        <p className="text-dark mt-2 font-bold">${parseInt(price)} /Night</p>
        <p className="text-dark mt-2">Available on: {daytime}</p>
      </Link>
    </div>
  );
};

export default RoomCard;
