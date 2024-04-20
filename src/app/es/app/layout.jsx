"use client";
import SideBar from "@/components/SideBar";
import { Button } from "@nextui-org/react";
import { useState } from "react";

export default function EnAppLayout({ children }) {
  return (
    <div className="flex flex-grow overflow-hidden h-screen">
      <SideBar />
      <div className="flex flex-grow overflow-auto">
        {children}
      </div>
    </div>
  );
}
