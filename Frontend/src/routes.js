import NavigationBar from "./components/navigationBar.js";
import HomePage from "./components/homepage.js";
import CreatePage from "./components/createpage.js";
import UploadPage from "./components/uploadpage.js";

const routes = [
  {
    component: NavigationBar,
    routes: [
      {
        path: "/CSE442-542/2019-Fall/cse-442i/",
        exact: true,
        component: HomePage
      },
      {
        path: "/CSE442-542/2019-Fall/cse-442i/create",
        component: CreatePage
      },
      {
        path: "/CSE442-542/2019-Fall/cse-442i/upload",
        component: UploadPage
      }
    ]
  }
];

export default routes;
