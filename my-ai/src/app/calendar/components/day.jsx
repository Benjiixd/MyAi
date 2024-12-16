import { act } from "react";
import { Activity, EmptyActivity } from "./activity";


export default function Day({ date }) {
    

    const activities = [];

    const activity1 = new Activity('Activity 1', '10:00', '12:00');
    const activity2 = new Activity('Activity 2', '12:00', '14:00');
    const activity3 = new Activity('Activity 3', '14:00', '16:00');

    activities.push(activity1);
    activities.push(activity2);
    activities.push(activity3);

    
    const dateString = date.toDateString();
    const divs = activities.map((activity, index) => {
        const heightPercentage = (activity.height * 100).toFixed(2) + '%'; // Convert decimal to percentage string
        if (activity.isEmpty) {
            return (
                <div key={index} className="w-full" style={{ height: heightPercentage }}>
                </div>
            );
        }
        return (
            <div key={index} className="w-full border-2 border-white bg-blue-500" style={{ height: heightPercentage }}>
                {activity.name}
            </div>
        );
    });
    

    
    
    

    return (
        <div className="h-screen w-1/7 border-2 border-black flex flex-col items-center justify-items-center">
            <div className="w-full flex">
                <div className="w-full border-r-2 border-black">
                    <p>{dateString}</p>
                    {divs}
                </div>
               
            </div>
            
        </div>
    );
}