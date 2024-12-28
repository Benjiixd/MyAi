"use client"

import { Scheduler } from "@aldabil/react-scheduler";
import { Fullscreen } from "lucide-react";
import { useEffect, useState } from "react";
import React from "react";

export function CalendarComponent() {
    const [events, setEvents] = useState<[]>([]);
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"}/calendar/get`)
            .then((res) => res.json())
            .then((data) => {
                // Convert events to the format expected by Scheduler
                const formattedEvents = data.map((event) => ({
                    event_id: event.id, // Adjust based on your backend response
                    title: event.title,
                    start: new Date(event.start),
                    end: new Date(event.end),
                }));
                setEvents(formattedEvents);
                console.log(formattedEvents);
            });
    }, []);


    return (
        
            <Scheduler

                view="month"
                height={840}
                events={events}
            />
          
        




    );
};