"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"

const FormSchema = z.object({
    request: z
        .string()
        .min(10, {
            message: "Request must be at least 10 characters.",
        })
        .max(160, {
            message: "Request must not be longer than 30 characters.",
        }),
})

export function TextareaForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"}/calendar/generatenewwithai`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="request"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>New plan</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Explain your upcoming plan..."
                                    className="resize-none text-white"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                You will be able to change the plan before applying it.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
