"use client";

import React from "react";
import { CalendarComponent } from "./calendar.tsx";
import { TextareaForm } from "./input.tsx";
import { CheckboxReactHookFormMultiple } from "./checks.tsx";
import { Card } from "@/components/ui/card";

export default function CalendarPage() {
    return (
        <div className="flex h-screen">
            {/* Left Half */}
            <Card className="w-1/2 bg-gray-100 flex items-center justify-center">
                <CalendarComponent />
            </Card>

            {/* Right Half */}
            <div className="w-1/2 flex flex-col">
            <Card className="flex-1 flex items-center justify-center bg-gray-800 text-white">
                    <p>daily summary:</p>

                    <p> this is a text explaining everything you need to do today in text, giving tips and tricks aswell!</p>
            </Card>
               
                {/* Div 2 */}
                <Card className="flex-1 flex items-center justify-center bg-gray-800 text-white">
                    <CheckboxReactHookFormMultiple />
                </Card>

                {/* Div 3 */}
                <Card className="flex-1 flex items-center justify-center bg-gray-800 text-white">
                   <TextareaForm />
                </Card>

                
            </div>
        </div>
    );
}
