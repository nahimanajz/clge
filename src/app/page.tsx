"use client";

import { fetchRooms } from "@/services/rooms";
import { IRoom } from "@/shared/types";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import dynamic from "next/dynamic";

const RoomCard = dynamic(() => import("@/components/RoomCard"));
const Loader = dynamic(() => import("@/components/Loader"));
const NavBar = dynamic(() => import("@/components/Navbar"));
const NavigationTab = dynamic(() => import("@/components/NavigationTab"));

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [cards, setCards] = useState<IRoom[]>([]);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [showSpinner, setShowSpinner] = useState<boolean>(false);
  const[isTyping, setIsTyping] = useState<boolean>(false)

  const { isLoading, data } = useQuery({
    queryKey: ["rooms"],
    queryFn: () => fetchRooms(), //todo: mock this in test or, allow this component to update state
  });

  const loadMore = () => {
    setShowSpinner(true);
    setIsLoadingMore(true);
    const pageSize = 10;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const newCards = data?.slice(startIndex, endIndex) || [];
    setCards([...cards, ...newCards]);
    setCurrentPage(currentPage + 1);

    if (data?.length === cards.length) {
      setShowSpinner(false);
    }
  };

  const onFilter = (filterQuery: string, isTyping:boolean) => {
    setIsLoadingMore(true);
    setShowSpinner(false);
    setIsTyping(isTyping)
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
        <NavigationTab onFilter={onFilter} isTyping={isTyping} />
      </NavBar>

      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex justify-stretch items-center flex-wrap">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4  z-0 w-full mt-40 mb-0">
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
          </div>
          <div
            className="grid grid-cols-1 place-items-stretch  h-56 w-full"
            onMouseOver={loadMore}
          >
            <div className="flex items-center justify-center">
              {showSpinner ? <Loader /> : ""}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
