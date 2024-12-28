import { Request, Response } from "express";
import prisma from '../prisma';

/**
 * GET /
 * Home page.
 */
export const index = async (req: Request, res: Response): Promise<void> => {
    console.log("Hello World!");
    res.send("Hello World!");
};

export const create = async (req: Request, res: Response): Promise<void> => {
    const { name, email } = req.body;
    console.log(name, email);
    try {
        const newUser = await prisma.user.create({
            data: { name, email },
        });
        res.status(201).json(newUser);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "An unknown error occurred" });
        }
    }
}
