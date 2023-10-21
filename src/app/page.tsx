"use client";

import RoomCard from "@/components/RoomCard";
import { fetchRooms } from "@/services/rooms";
import { HTTP_URL } from "@/shared";
import { ICard } from "@/shared/types";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [cards, setCards] = useState<ICard[]>([]);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);

  const { isLoading, data } = useQuery({
    queryKey: ["rooms"],
    queryFn: () => fetchRooms(),
  });

  const loadMore = () => {
    setIsLoadingMore(true);
    const pageSize = 10;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const newCards = data?.slice(startIndex, endIndex) || [];
    setCards([...cards, ...newCards]);
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="min-h-screen bg-white">
      {isLoading ? (
        <div>Please wait ...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
          {!isLoadingMore ? (
            <>
              {data?.slice(0, 11).map((room, index) => (
                <RoomCard key={index} room={room} />
              ))}
            </>
          ) : (
            <>
              {cards?.map((room, index) => (
                <RoomCard key={index} room={room} />
              ))}
            </>
          )}
        </div>
      )}
      <button
        onClick={loadMore}
        className="w-full p-4 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 mt-20"
      >
        Load More
      </button>
    </div>
  );
}
