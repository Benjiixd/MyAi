import { Request, Response } from "express";
import prisma from '../prisma';

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
