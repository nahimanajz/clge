"use client";
import Loader from "@/components/Loader";
import NavBar from "@/components/Navbar";
import NavigationTab from "@/components/NavigationTab";
import RoomCard from "@/components/RoomCard";
import { fetchRooms } from "@/services/rooms";
import { IRoom } from "@/shared/types";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [cards, setCards] = useState<IRoom[]>([]);
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

  const onFilter = (filterQuery: string) => {
    setIsLoadingMore(true);
    const query = filterQuery.toLowerCase();

    const searched: IRoom[] =
      data?.filter((room: IRoom) => {
        const roomByDaytime = room.daytime.toLowerCase().includes(query);
        return roomByDaytime
          ? roomByDaytime
          : room.country.toLowerCase().includes(query);
      }) || [];

    setCards(searched);
  };

  const firstTen = data?.slice(0, 10);

  return (
    <div>
      <NavBar onFilter={onFilter}>
        <NavigationTab onFilter={onFilter} />
      </NavBar>

      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 z-0 absolute w-full my-40">
          {!isLoadingMore ? (
            <>
              {firstTen?.map((room) => (
                <RoomCard room={room} key={room.id} />
              ))}
            </>
          ) : (
            <>
              {cards?.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </>
          )}

          <div className="flex flex-row justify-start align-start gap-x-4 ml-12">
            <div
              className="font-bold text-dark text-xl"
              onMouseEnter={loadMore}
            >
              Continue exploring
            </div>
            <button type="button" className="bg-primary p-8" disabled>
              <svg
                className="animate-spin h-5 w-5 mr-3 ..."
                viewBox="0 0 24 24"
              ></svg>
              Loading...
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
