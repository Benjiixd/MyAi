import { useContext } from "react";
import { Scheduler } from "@aldabil/react-scheduler";
import { EventsContext } from "./context"; // Import the shared context

export function CalendarComponent() {
    const Events = useContext(EventsContext);

    const handleConfirm = async (event, action) => {
        console.log("handleConfirm =", action, event.title);

        return new Promise((res, rej) => {
            if (action === "create") {
                fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"}/calendar/create`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        title: event.title,
                        start: event.start,
                        end: event.end,
                    }),
                }).then((res) => res.json());
            }

            setTimeout(() => res({ ...event, event_id: event.event_id || Math.random() }), 3000);
        });
    };

    return <Scheduler view="month" height={840} events={Events} onConfirm={handleConfirm} />;
}
