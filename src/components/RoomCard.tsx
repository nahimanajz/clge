"use client";

import { IRoom } from "@/shared/types";

import { useRouter } from "next/navigation";
import ImageSlider from "./ImageSlider";
import { FC } from "react";

interface IRoomProps {
  room: IRoom;
}
const RoomCard:FC<IRoomProps> = ({
  room: {
    id,
    title,
    price,
    shortDescription,
    images,
    country,
    city, daytime
  },
}) => {
  const router = useRouter();
  return (
    <div className="max-w-xs mx-auto p-4 cursor-pointer">
      <ImageSlider images={images[0]} />
      <div onClick={() => router.push(`/room/${id}/details`)}>
        <div className="flex justify-between">
          <h2 className="font-semibold mt-2 text-slate-800">{country}</h2>
          <h2 className="font-semibold mt-2 text-slate-800">{city}</h2>

        </div>
        <h2 className="font-semibold mt-2 text-slate-600">{title}</h2>

        <p className="text-gray-600">{shortDescription}</p>
        
        <p className="text-dark mt-2 font-bold">${parseInt(price)} /Night</p>
        <p className="text-green-500 mt-2">Available on: {daytime}</p>
      </div>
    </div>
  );
};

export default RoomCard;
