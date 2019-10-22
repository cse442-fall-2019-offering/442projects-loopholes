import bodyParser from "body-parser";
import cors from "cors";
import express, { Application } from "express";
import InternalController from "./controllers/InternalController";
import FirebaseTestController from "./controllers/FirebaseTestController";
import QueryFirebaseDatabase from "./querying/QueryFirebaseDatabase";
import MetadataUploader from "./uploading/MetadataUploader";
import FirebaseController from "./controllers/FirebaseController";

export default class App {
  public app: Application;

  constructor() {
    this.app = express();
  }

  /**
   * Sets up Express backend application and returns it
   *
   * @returns An initialized backend Express application
   */
  public async run(): Promise<App> {
    this.setupMiddleware();

    const internalController = new InternalController();
    const firebaseTestController = new FirebaseTestController();
    const firebaseController = new FirebaseController();
    this.setupRoutes(
      internalController,
      firebaseTestController,
      firebaseController
    );

    return this;
  }

  /**
   * Sets up middleware for the Express application
   */
  private setupMiddleware(): void {
    this.app.use(bodyParser.json()); // bodyParser is needed in order to parse incoming JSON request bodies
    this.app.use(cors());
  }

  /**
   * Sets up REST endpoints
   *
   * @param internalController Controller that stores functions that handle incoming requests that deal with the application
   * @param firebaseTestController Controller that stores functions that handle incoming requests that deal with Firebase
   */
  private setupRoutes(
    internalController: InternalController,
    firebaseTestController: FirebaseTestController,
    firebaseController: FirebaseController
  ): void {
    this.app.route("/").get(internalController.root);
    // tests post request to Firebase from the backend
    this.app
      .route("/firebaseTestPostEndpoint")
      .post(firebaseTestController.insertJsonBodyToFirebaseDatabase);
    // tests get request to Firebase from the backend
    this.app
      .route("/firebaseTestFetchEndpoint")
      .get(firebaseTestController.fetchJsonBodyFromFirebaseDatabase);

    // image upload
    this.app
      .route("/uploadImageMetadata")
      .post(firebaseController.uploadImageMetadata);

    this.app
      .route("/getHomepageImageMetadata")
      .get(firebaseController.getHomepageImageMetadata);
  }
}
