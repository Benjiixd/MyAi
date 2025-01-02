import React, { useEffect, useContext, useRef, useState } from "react";
import { EventsContext } from "./context";

export function Summary() {

    
    const todaysEvents = useContext(EventsContext);
    const [summary, setSummary] = useState();
    const isFirstRender = useRef(true); // Track initial render

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false; // Mark the first render as handled
            return; // Skip the first effect run
        }
        
        console.log("todaysEventsSummary", todaysEvents);
            fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"}/calendar/createSummary`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: todaysEvents
            }).then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setSummary(data.content);
                });
        
    }, [todaysEvents]);
    
    /*
    useEffect(() => {
        
        if (todaysEvents.length > 0) {
            fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"}/calendar/createSummary`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    events: todaysEvents,
                }),
            }).then((res) => res.json())
                .then((data) => {
                    console.log(data);
                });
        }
    }, []);
    */
   


    return (
        <div className="flex-1 flex items-center justify-center  ">
            <p>daily summary:</p>
            <p>{summary}</p>
        </div>
    );
}