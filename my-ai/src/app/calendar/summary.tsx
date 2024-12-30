import React, { useEffect } from "react";

export function Summary( {todaysEvents} ) {
    console.log(todaysEvents);
    const test = todaysEvents.map((event) => { return {title: event.title, start: event.start, end: event.end}});
    console.log("test" + test);
    
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
    }, [todaysEvents]);
    
   


    return (
        <div className="flex-1 flex items-center justify-center  ">
            <p>daily summary:</p>
        </div>
    );
}