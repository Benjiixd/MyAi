import React from "react";
import Day from "./components/day";

export default function Home() {
    let date = new Date();

    let dates = [date];

    // Add the next 6 days
    for (let i = 1; i <= 6; i++) {
        let nextDate = new Date(date);
        nextDate.setDate(date.getDate() + i);
        dates.push(nextDate);
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            {dates.map((date, index) => (
                <Day key={index} date={date} />
            ))}
        </div>
    );
}
