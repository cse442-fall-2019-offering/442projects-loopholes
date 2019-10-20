import { config } from "dotenv";
import App from "./app";
import { AddressInfo } from "net";

// Inject environment variables from `.env` file
config();

// Set the port where this application will be running
const PORT = process.env.UBULLETIN_BACKEND_PORT || 4422;

//Initialize a new App instance and run it on the PORT
const app = new App();
app.run().then(app => {
  app.app.listen(PORT, () => {});
});
