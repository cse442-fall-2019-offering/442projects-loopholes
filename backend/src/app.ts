import bodyParser from "body-parser";
import express, { Application } from "express";
import InternalController from "./controllers/InternalController";
import FirebaseTestController from "./controllers/FirebaseTestController";
import QueryFirebaseDatabase from "./querying/QueryFirebaseDatabase";
import MetadataUploader from "./uploading/MetadataUploader";


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
    this.setupRoutes(internalController, firebaseTestController);

    // used for testing start
    let query = new QueryFirebaseDatabase();
    await query.fetchNextPostId();
    let postId = query.getNextPostId();
    let uploader = new MetadataUploader();
    console.log(await uploader.pushToDatabase({"blah":{"name": "batman"}}, postId));
    // used for testing end
    return this;
  }

  /**
   * Sets up middleware for the Express application
   */
  private setupMiddleware(): void {
    this.app.use(bodyParser.json()); // bodyParser is needed in order to parse incoming JSON request bodies
  }

  /**
   * Sets up REST endpoints
   *
   * @param internalController Controller that stores functions that handle incoming requests that deal with the application
   * @param firebaseTestController Controller that stores functions that handle incoming requests that deal with Firebase
   */
  private setupRoutes(
    internalController: InternalController,
    firebaseTestController: FirebaseTestController
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
  }
}
