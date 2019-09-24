import { NextFunction, Request, Response } from "express";
import { firebaseDatabase } from "../firebase";

const FIREBASE_REF = "post_database";
const RESPONSE_TEXT = "Data successfully saved to Firebase";

export default class FirebaseTestController {
  /**
   * Takes a JSON request body and pushes it to the Firebase real-time database
   */
  public insertJsonBodyToFirebaseDatabase = async (
    request: Request,
    response: Response,
    _next: NextFunction
  ): Promise<void> => {
    firebaseDatabase.ref(FIREBASE_REF).push(request.body);
    response.status(201).send(RESPONSE_TEXT);
  };
}
