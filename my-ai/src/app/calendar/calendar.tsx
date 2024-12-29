"use client"

import { Scheduler } from "@aldabil/react-scheduler";
import { Fullscreen } from "lucide-react";
import { useEffect, useState } from "react";
import React from "react";

export function CalendarComponent() {
    const [events, setEvents] = useState<[]>([]);
    const [todaysEvents, setTodaysEvents] = useState<[]>([]);
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
                for (let i = 0; i < formattedEvents.length; i++) {
                    if (formattedEvents[i].start.getDate() === new Date().getDate()) {
                        setTodaysEvents((prev) => [...prev, formattedEvents[i]]);
                    }
                }
                setEvents(formattedEvents);
                console.log(formattedEvents);
                console.log(todaysEvents);
            });
    }, []);

    const handleConfirm = async (
        event: ProcessedEvent,
        action: EventActions
    ): Promise<ProcessedEvent> => {
        console.log("handleConfirm =", action, event.title);

        /**
         * Make sure to return 4 mandatory fields:
         * event_id: string|number
         * title: string
         * start: Date|string
         * end: Date|string
         * ....extra other fields depend on your custom fields/editor properties
         */
        // Simulate http request: return added/edited event
        // TODO: Fix so it doesnt fail
        return new Promise((res, rej) => {
            if (action === "edit") {
                /** PUT event to remote DB */
            } else if (action === "create") {
                fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"}/calendar/create`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        title: event.title,
                        start: event.start,
                        end: event.end,
                    }),
                }).then((res) => res.json());
                
            }

            const isFail = 0;
            // Make it slow just for testing
            setTimeout(() => {
                if (isFail) {
                    rej("Ops... Faild");
                } else {
                    res({
                        ...event,
                        event_id: event.event_id || Math.random()
                    });
                }
            }, 3000);
        });
    };

    return (
        
            <Scheduler

                view="month"
                height={840}
                events={events}
                onConfirm={handleConfirm}
                            />
          
        




    );
};