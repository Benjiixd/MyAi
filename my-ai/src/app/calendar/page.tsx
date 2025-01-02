"use client";

import React, { useState, useEffect } from "react";
import { CalendarComponent } from "./calendar.tsx";
import { TextareaForm } from "./input.tsx";
import { CheckboxReactHookFormMultiple } from "./checks.tsx";
import { Summary } from "./summary.tsx";
import { Card } from "@/components/ui/card";
import { ModeToggle } from "@/components/mode-toggle";
import { EventsContext } from "./context"; // Import the shared context
import "./styles.css";

export default function CalendarPage() {
    const [Events, setEvents] = useState([]);
    const [todaysEvents, setTodaysEvents] = useState();

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"}/calendar/get`)
            .then((res) => res.json())
            .then((data) => {
                const formattedEvents = data.map((event) => ({
                    event_id: event.id,
                    title: event.title,
                    start: new Date(event.start),
                    end: new Date(event.end),
                }));
                const temp = [];
                const today = new Date();

                for (let i = 0; i < formattedEvents.length; i++) {
                    if (
                        formattedEvents[i].start.getFullYear() === today.getFullYear() &&
                        formattedEvents[i].start.getMonth() === today.getMonth() &&
                        formattedEvents[i].start.getDate() === today.getDate()
                    ) {
                        temp.push(formattedEvents[i]);
                    }
                }
                console.log("formattedEvents", JSON.stringify(formattedEvents, null, 2));
                console.log("temp", JSON.stringify(temp, null, 2));
                const summaryString = JSON.stringify(temp, null, 2)
                setEvents(formattedEvents);
                setTodaysEvents(summaryString);
            });
    }, []);

    return (
        <div className="flex h-screen">
            <ModeToggle />
            <Card className="w-1/2 flex items-center justify-center">
                <div className="w-full">
                    <EventsContext.Provider value={Events}>
                        <CalendarComponent />
                    </EventsContext.Provider>
                </div>
            </Card>
            <div className="w-1/2 flex flex-col">
                <Card className="flex-1 flex items-center justify-center">
                    <EventsContext.Provider value={todaysEvents}>
                        <Summary />
                    </EventsContext.Provider>
                </Card>
                <Card className="flex-1 flex items-center justify-center">
                    <CheckboxReactHookFormMultiple />
                </Card>
                <Card className="flex-1 flex items-center justify-center">
                    <TextareaForm />
                </Card>
            </div>
        </div>
    );
}
