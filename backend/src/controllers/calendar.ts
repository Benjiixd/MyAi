import { Request, Response } from "express";

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
    
}
