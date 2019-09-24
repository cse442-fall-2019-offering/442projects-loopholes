import { NextFunction, Request, Response } from "express";
import { firebaseDatabase } from "../firebase";


// branch in the database used for testing post requests
const FIREBASE_FETCH_REF = "post_database";
// branch in the database used for testing get requests
const FIREBASE_POST_REF = "testRef";
// response text for post request
const POST_RESPONSE_TEXT = "Data successfully saved to Firebase";
// response text for making get request
const FETCH_RESPONSE_TEXT = "Get request to Firebase complete, check the console for output.";

export default class FirebaseTestController {
  /**
   * Takes a JSON request body and pushes it to the Firebase real-time database.
   */
  public insertJsonBodyToFirebaseDatabase = async (
    request: Request,
    response: Response,
    _next: NextFunction
  ): Promise<void> => {
    firebaseDatabase.ref(FIREBASE_POST_REF).push(request.body);
    response.status(201).send(POST_RESPONSE_TEXT);
  };

  /**
   * Makes a get request to the {@link FIREBASE_FETCH_REF} to get the dummy data.
   */
   public fetchJsonBodyFromFirebaseDatabase = async (
     request: Request,
     response: Response,
     _next: NextFunction
   ) => {
      firebaseDatabase
      .ref(FIREBASE_FETCH_REF)
      .once("value")
      .then(function(snapshot){
        console.log(snapshot.child("post_metadata").val());
        response.status(201).send(FETCH_RESPONSE_TEXT);
          });
    };
}
