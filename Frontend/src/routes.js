import NavigationBar from "./components/navigationBar.js";
import HomePage from "./components/homepage.js";
import CreatePage from "./components/createpage.js";
import UploadPage from "./components/uploadpage.js";

const routes = [
  {
    component: NavigationBar,
    routes: [
      {
        path: "/",
        exact: true,
        component: HomePage
      },
      {
        path: "/create",
        component: CreatePage
      },
      {
        path: "/upload",
        component: UploadPage
      }
    ]
  }
];

export default routes;
