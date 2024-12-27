import { Request, Response } from "express";

/**
 * GET /
 * Home page.
 */
export const index = async (req: Request, res: Response): Promise<void> => {
    console.log("Hello World!");
    res.send("Hello World!");
};

export const create = async (req: Request, res: Response): Promise<void> => {
    let user = "User";
    console.log(user);
    res.send(user);
}
