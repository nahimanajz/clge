"use client";

import { ICard } from "@/shared/types";

interface IRoomProps {
  key: number,
  room: ICard
}
const RoomCard = ({key, room}: IRoomProps) => {
  const {title, description, price, image} = room
  return (
    <div className="max-w-xs mx-auto p-4" key={key}>
      <div className="relative overflow-hidden">
        <img src={image} alt={title} className="w-full transition-transform transform hover:scale-105" />
      </div>
      <h2 className="text-xl font-semibold mt-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <p className="text-green-500 mt-2">{price}</p>
    </div>
  );
};

export default RoomCard;
