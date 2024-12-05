import { Request, Response, Router } from "express";
import ingredient from "./ingredient";

export default () => {
  const app = Router();

  ingredient(app)
  
  return app;
};


