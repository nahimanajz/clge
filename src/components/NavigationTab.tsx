"use client";
import { INavbarProps } from "@/shared/props";
import React, { FC, useEffect, useState } from "react";
import { FiSunrise } from "react-icons/fi";

const NavigationTab: FC<INavbarProps> = ({ onFilter, isTyping }) => {
  const [days, setDays] = useState([
    {
      day: "Monday",
      isActive: false,
    },
    {
      day: "Tuesday",
      isActive: false,
    },
    {
      day: "Wednesday",
      isActive: false,
    },
    {
      day: "Thursday",
      isActive: false,
    },
    {
      day: "Friday",
      isActive: false,
    },
    {
      day: "Saturday",
      isActive: false,
    },
    {
      day: "Sunday",
      isActive: false,
    },
  ]);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleDayClick = (clickedDay: string) => {
    const updatedDays = days.map((day) => ({
      ...day,
      isActive: day.day === clickedDay ? true : false,
    }));
    setDays(updatedDays);
  };
  useEffect(()=> {
if(isTyping){
  setDays(days.map((day)=> ({...day, isActive: false})))
}
  }, [isTyping])
  return (
    <div className="p-4">
      <div className="flex justify-between"> 
        <div className="hidden md:flex space-x-4 justify-center transition delay-300 duration-300 ease-in-out hover:transform hover:scale-105 w-full"> 
          {days.map((day) => (
            <div
              className="flex flex-col justify-center self-center cursor-pointer"
              key={day.day}
              onClick={() => {
                onFilter(day.day, false);
                handleDayClick(day.day);
              }}
            >
              <FiSunrise className="w-5 h-5 self-center" />
              <div className={`text-gray font-semibold hover:text-dark my-3 `}>
                {day.day}
              </div>
              {day.isActive ? <hr className="text-dark"/> : ""}
            </div>
          ))}
        </div>
        <div className="flex md:hidden items-center">
          <button onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer text-gray"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-2">
          {days.map((day) => (
            <div
              className="flex flex-row cursor-pointer text-gray font-semibold hover:text-dark"
              key={day.day}
              onClick={() => {
                onFilter(day.day, false);
                handleDayClick(day.day);
              }}
            >
              <FiSunrise className="w-5 h-5 mr-4" />
              <div
                className={` ${
                  day.isActive ? "border-b-[3px] border-primary" : ""
                }`}
              >
                {day.day}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

};

export default NavigationTab;
