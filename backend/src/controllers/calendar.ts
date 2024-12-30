import { Request, Response } from "express";
import prisma from '../prisma';
import openai from 'openai';

if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY environment variable is not set.");
}


const openAi = new openai({ apiKey: process.env.OPENAI_API_KEY });

/**
 * GET /
 * Home page.
 */
export const index = async (req: Request, res: Response): Promise<void> => {
    console.log("Hello Calendar!");
    res.send("Hello Calendar!");
};

/**
 * POST /create
 * @param req Request
 * @param res Response
 */
export const create = async (req: Request, res: Response): Promise<void> => {
    let { title, start, end } = req.body;
    console.log(title, start, end);

    // Parse start and end into Date objects
    start = new Date(start);
    end = new Date(end);



    // Check if dates are valid
    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
        res.status(400).json({ error: "Invalid date format. Dates must be valid ISO-8601 strings." });
    }

    try {
        const newEvent = await prisma.event.create({
            data: { start, end, title },
        });
        res.status(201).json(newEvent);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "An unknown error occurred" });
        }
    }
}

export const getAll = async (req: Request, res: Response): Promise<void> => {
    const events = await prisma.event.findMany();
    res.json(events);
}

export const generateNewWithAi = async (req: Request, res: Response): Promise<void> => {
    const thread = await openAi.beta.threads.create();
    const currentDate = new Date();
    const instructions = req.body.request
    console.log("INSTRUCTIONS:", instructions);
    
    let run = await openAi.beta.threads.runs.createAndPoll(
        thread.id,
        {
            assistant_id: "asst_l1xQ0Z4P8BHv1QLHLrYOxQmS",
            instructions: instructions,
        }
    );

    const messages = await openAi.beta.threads.messages.list(
        thread.id
    );

    

    for (const message of messages.data.reverse()) {
        console.log(`${message.role} > ${message.content[0].text.value}`);
        if (message.role === "assistant") {
            let content = message.content[0].text.value;
            content = JSON.parse(content)
            console.log("FINAL:", content)
        }
    }
    res.json({ thread, messages, run });
}


export const createSummary = async (req: Request, res: Response): Promise<void> => {
    const { text } = req.body;
    console.log("RUNNING AI SUMMARY")
    const thread = await openAi.beta.threads.create();
    const currentDate = new Date();
    const instructions = text + " " + currentDate.toISOString();
    console.log("INSTRUCTIONS:", instructions);
    
    let run = await openAi.beta.threads.runs.createAndPoll(
        thread.id,
        {
            assistant_id: "asst_AwE0sFi9ScJZs5Po60fKDQ9C",
            instructions: instructions,
        }
    );

    const messages = await openAi.beta.threads.messages.list(
        thread.id
    );

    for (const message of messages.data.reverse()) {
        console.log(`${message.role} > ${message.content[0].text.value}`);
        if (message.role === "assistant") {
            let content = message.content[0].text.value;
 
            console.log("FINAL:", content)
        }
    }
    res.json({ thread, messages, run });
}