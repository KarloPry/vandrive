"use client"
import { Button } from "@nextui-org/react";
import { useState } from "react";


export default function EnAppLayout({ children }) {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  return (
    <div className="h-screen flex overflow-hidden">
      <nav
        className={`h-screen flex flex-col ${isNavBarOpen ? "w-56" : ""} transition-all gap-4 bg-[#1C385F] p-4`}
        onMouseOver={() => setIsNavBarOpen(true)}
        onMouseLeave={(e) => setIsNavBarOpen(false)}
      >
        <button className="bg-transparent hover:bg-[#142B51] p-2 rounded-md block">
          <div className="flex gap-2 items-center">
            <span className="material-symbols-rounded inline-block !text-white">home</span>
            <span className={` inline-block text-white ${isNavBarOpen ? "" : "hidden"}`}>Dashboard</span>
          </div>
        </button>
        <button className="bg-transparent hover:bg-[#142B51] p-2 rounded-md block">
          <div className="flex gap-2 items-center">
            <span className="material-symbols-rounded inline-block !text-white">map</span>
            <span className={`inline-block text-white ${isNavBarOpen ? "" : "hidden"}`}>Map</span>
          </div>
        </button>
        <button className="bg-transparent hover:bg-[#142B51] p-2 rounded-md block">
          <div className="flex gap-2 items-center">
            <span className="material-symbols-rounded inline-block !text-white">route</span>
            <span className={`inline-block text-white ${isNavBarOpen ? "" : "hidden"}`}>Rutas</span>
          </div>
        </button>
      </nav>
      {children}
    </div>
  );
}