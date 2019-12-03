import NavigationBar from "./components/navigationBar.js";
import HomePage from "./components/homepage.js";
import CreatePage from "./components/createpage.js";
import UploadPage from "./components/uploadpage.js";
import TemplatePage from "./components/templateGenerator.js";

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
      },
      {
        path: "/CSE442-542/2019-Fall/cse-442i/template",
        component: TemplatePage
      }
    ]
  }
];

export default routes;
