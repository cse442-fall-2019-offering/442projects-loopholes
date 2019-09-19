import bodyParser from "body-parser";
import express, { Application } from "express";
import InternalController from "./controllers/InternalController";
import FirebaseTestController from "./controllers/FirebaseTestController";

export default class App {
  public app: Application;

  constructor() {
    this.app = express();
  }

  public async run(): Promise<App> {
    this.setupMiddleware();

    const internalController = new InternalController();
    const firebaseTestController = new FirebaseTestController();
    this.setupRoutes(internalController, firebaseTestController);

    return this;
  }

  private setupMiddleware(): void {
    this.app.use(bodyParser.json());
  }

  private setupRoutes(
    internalController: InternalController,
    firebaseTestController: FirebaseTestController
  ): void {
    this.app.route("/").get(internalController.root);
    this.app
      .route("/firebaseTestEndpoint")
      .post(firebaseTestController.insertJsonBodyToFirebaseDatabase);
  }
}
