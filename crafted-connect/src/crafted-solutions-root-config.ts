import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

// registerApplication(
//   'header',
//   () => System.import('@your-org-name/header'),
//   () => true
// );

// registerApplication(
//   'footer',
//   () => System.import('@your-org-name/header'),
//   () => true
// );
applications.forEach(registerApplication);
layoutEngine.activate();
start();
