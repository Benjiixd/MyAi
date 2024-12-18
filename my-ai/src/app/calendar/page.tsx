"use client"

import { Scheduler } from "@aldabil/react-scheduler";
import { Fullscreen } from "lucide-react";
import { useEffect, useState } from "react";
import React from "react";
import { CalendarComponent } from "./calendar.jsx"

export default function CalendarPage()  {
  return (
    <div className="flex flex-col">
          <CalendarComponent></CalendarComponent>
          <div className="flex flex-col items-center justify-center bg-gray-800 text-white w-1000 h-1000">
              <p>Content inside the gray div</p>
          </div>
    </div>
    
    
    
    
  );
};