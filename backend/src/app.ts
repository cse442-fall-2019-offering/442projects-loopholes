import express, { Application } from "express";
import InternalController from "./controllers/InternalController";

export default class App {
  public app: Application;

  constructor() {
    this.app = express();
  }

  public async run(): Promise<App> {
    const internalController = new InternalController();
    this.setupRoutes(internalController);

    return this;
  }

  private setupRoutes(internalController: InternalController): void {
    this.app.route("/").get(internalController.root);
  }
}
