import bodyParser from "body-parser";
import cors from "cors";
import express, { Application } from "express";
import InternalController from "./controllers/InternalController";
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
    const firebaseController = new FirebaseController();
    this.setupRoutes(internalController, firebaseController);

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
   * @param firebaseController Controller that stores functions that handle incoming requests that deal with Firebase
   */
  private setupRoutes(
    internalController: InternalController,
    firebaseController: FirebaseController
  ): void {
    /* root route */
    this.app.route("/").get(internalController.root);

    /* uploading image metadata */
    this.app
      .route("/uploadImageMetadata")
      .post(firebaseController.uploadImageMetadata);

    /* fetching image metadata for homepage */
    this.app
      .route("/getHomepageImageMetadata")
      .get(firebaseController.getHomepageImageMetadata);

    this.app.route("/searchForPosts").post(firebaseController.searchForPosts);
  }
}
