import { Application } from "express";

// contollers
import { getAllCards } from "../controllers/cardsController";

export default (app: Application) => {
  app.get("/cards", getAllCards);
};
