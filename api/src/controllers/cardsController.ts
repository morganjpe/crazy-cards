import { Request, Response } from "express";

import { MockCards } from "../entities/cards";

export const getAllCards = (req: Request, res: Response): void => {
  setTimeout(() => {
    res.send(MockCards);
  }, 500);
};
