import React from "react";

export async function Summary( {todaysEvents} ) {
    console.log(todaysEvents);
    
    await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"}/calendar/createSummary`, {
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
    


    return (
        <div className="flex-1 flex items-center justify-center  ">
            <p>daily summary:</p>
        </div>
    );
}