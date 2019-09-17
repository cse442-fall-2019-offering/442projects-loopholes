import { NextFunction, Request, Response } from "express";
import { WELCOME_MESSAGE } from "../constants/strings";

export default class InternalController {
  public root = async (
    _request: Request,
    response: Response,
    _next: NextFunction
  ) => {
    response.status(200).json(WELCOME_MESSAGE);
  };
}
