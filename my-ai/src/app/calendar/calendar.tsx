"use client"

import { Scheduler } from "@aldabil/react-scheduler";
import { Fullscreen } from "lucide-react";
import { useEffect, useState } from "react";
import React from "react";

export function CalendarComponent() {
    return (
        
            <Scheduler

                view="month"
                height={840}
                events={[
                    {
                        event_id: 1,
                        title: "Event 1",
                        start: new Date("2021/5/2 09:30"),
                        end: new Date("2021/5/2 10:30"),
                    },
                    {
                        event_id: 2,
                        title: "Event 2",
                        start: new Date("2021/5/4 10:00"),
                        end: new Date("2021/5/4 11:00"),
                    },
                    {
                        event_id: 3,
                        title: "tove",
                        start: new Date("2024/12/23 00:00"),
                        end: new Date("2024/12/24 00:01"),
                    },
                ]}
            />
          
        




    );
};