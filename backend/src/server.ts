import App from "./app";

const PORT = process.env.UBULLETIN_BACKEND_PORT || 4422;

const app = new App();
app.run().then(app => {
  app.app.listen(PORT, () => {});
});
