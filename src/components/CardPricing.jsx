'use client'

import React, { useState } from "react";
import { Card, CardHeader } from "@nextui-org/react";

export default function CardPricing({ id, level, price, km, road, trip, isActive, setActive }) {

  const handleClick = () => {
    setActive(id);
  };

  return (
    <div onClick={handleClick} className=" select-none">
      <Card
        className={`p-8 cursor-pointer ${isActive === id ? 'bg-primary text-white shadow-md' : ''}`}
      >
        <CardHeader className="pb-0 pt-2 px-4 flex flex-col items-center gap-4">
          <p className={`text-sm uppercase ${isActive === id ? 'text-white' : ''}`}>VanDrive</p>
          <small className={`text-lg font-bold ${isActive === id ? 'text-white' : ''}`}>{level}</small>
          <h4 className={`text-4xl ${isActive === id ? 'text-white' : ''}`}>{price}</h4>
        </CardHeader>
        <div className="flex flex-col gap-4 p-8">
          <div className="flex flex-row gap-1">
            <span className="material-symbols-rounded">done</span>
            <p className={`text-sm ${isActive === id ? 'text-white' : ''}`}>{km}</p>
          </div>
          <div className="flex flex-row gap-1">
            <span className="material-symbols-rounded">done</span>
            <p className={`text-sm ${isActive === id ? 'text-white' : ''}`}>{road}</p>
          </div>
          <div className="flex flex-row gap-1">
            <span className="material-symbols-rounded">done</span>
            <p className={`text-sm ${isActive === id ? 'text-white' : ''}`}>{trip}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
