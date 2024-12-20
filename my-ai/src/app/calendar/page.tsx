"use client";

import React from "react";
import { CalendarComponent } from "./calendar.tsx";
import { TextareaForm } from "./input.tsx";
import { CheckboxReactHookFormMultiple } from "./checks.tsx";
import { Card } from "@/components/ui/card";
import { ModeToggle } from "@/components/mode-toggle";
import "./styles.css"; // Import the CSS file

export default function CalendarPage() {
    return (
        <div className="flex h-screen">
            <ModeToggle />
            {/* Left Half */}
            <Card className="w-1/2  flex items-center justify-center">
                <div className="w-full ">
                    <CalendarComponent/>
                </div>
            </Card>

            {/* Right Half */}
            <div className="w-1/2 flex flex-col">
                <Card className="flex-1 flex items-center justify-center  ">
                    <p>daily summary:</p>

                    <p> this is a text explaining everything you need to do today in text, giving tips and tricks aswell!</p>
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
