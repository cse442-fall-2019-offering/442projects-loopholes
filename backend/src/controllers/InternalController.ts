import { NextFunction, Request, Response } from "express";
import { WELCOME_MESSAGE } from "../constants/strings";

export default class InternalController {
  /**
   * Returns the WELCOME_MESSAGE of the application as a response
   */
  public root = async (
    _request: Request,
    response: Response,
    _next: NextFunction
  ): Promise<void> => {
    response.status(200).json(WELCOME_MESSAGE);
  };
}
