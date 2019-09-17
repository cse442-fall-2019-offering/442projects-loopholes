import { config } from "dotenv";
import App from "./app";

config();

const PORT = process.env.UBULLETIN_BACKEND_PORT || 4422;

const app = new App();
app.run().then(app => {
  app.app.listen(PORT, () => {});
});
