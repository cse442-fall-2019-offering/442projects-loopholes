import { config } from "dotenv";
import App from "./app";

// Inject environment variables from `.env` file
config();

// Set the port where this application will be running
const PORT = process.env.UBULLETIN_BACKEND_PORT || 4422;

//Initialize a new App instance and run it on the PORT

const app = new App();

/* Used for running on localhost. */
/*app.run().then(app => {
  app.app.listen(PORT, () => {});
});*/

// Used for running on cheshire
const fs = require("fs");
const https = require("https");
https
  .createServer(
    {
      key: fs.readFileSync(process.env.HTTPS_KEY),
      cert: fs.readFileSync(process.env.HTTPS_CERT)
    },
    app.app
  )
  .listen(PORT, () => {
    app.run();
  });
