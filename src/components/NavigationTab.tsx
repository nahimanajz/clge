"use client";
import { INavbarProps } from "@/shared/props";
import React, { FC, useState } from "react";
import { FiSunrise } from "react-icons/fi";

const NavigationTab:FC<INavbarProps> = ({onFilter}) => {
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
      isActive: true,
    },
  ]);
  const handleDayClick = (clickedDay: string) => {
    const updatedDays = days.map((day) => ({
      ...day,
      isActive: day.day === clickedDay ? true : false,
    }));
    setDays(updatedDays);
   
  };
  return (
    <div className="flex flex-row justify-between px-8 h-28 mt-4 relative">
      {days.map((day) => (
        <div
          className={`flex flex-row items-center`}
          key={day.day}
          onClick={() =>{
            onFilter(day.day)
            handleDayClick(day.day)
          } }
        >
          <div className="flex flex-col cursor-pointer">
            <FiSunrise className="text-slate-700" />
            <p
              className={`text-slate-700 font-semibold ${
                day.isActive ? "border-b-[3px] border-primary" : ""
              }`}
            >
              {day.day}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavigationTab;
