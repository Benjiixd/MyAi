"use client";

import React, { useState } from "react";
import { CalendarComponent } from "./calendar.tsx";
import { TextareaForm } from "./input.tsx";
import { CheckboxReactHookFormMultiple } from "./checks.tsx";
import { Summary} from "./summary.tsx";
import { Card } from "@/components/ui/card";
import { ModeToggle } from "@/components/mode-toggle";
import "./styles.css";

export default function CalendarPage() {
     const [todaysEvents, setTodaysEvents] = useState([]);

    return (
        <div className="flex h-screen">
            <ModeToggle />
            {/* Left Half */}
            <Card className="w-1/2  flex items-center justify-center">
                <div className="w-full ">
                    <CalendarComponent setTodaysEvents={setTodaysEvents}/>
                </div>
            </Card>

            {/* Right Half */}
            <div className="w-1/2 flex flex-col">
                <Card className="flex-1 flex items-center justify-center  ">
                    <Summary todaysEvents={todaysEvents}/>
            </Card>
               
                {/* Div 2 */}
                <Card className="flex-1 flex items-center justify-center  ">
                    <CheckboxReactHookFormMultiple />
                </Card>

                {/* Div 3 */}
                <Card className="flex-1 flex items-center justify-center  ">
                   <TextareaForm />
                </Card>

                
            </div>
        </div>
    );
}
