
import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import About from "../pages/about/page";
import Team from "../pages/team/page";
import Services from "../pages/services/page";
import Contact from "../pages/contact/page";
import CareersPage from "../pages/careers/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/careers",
    element: <CareersPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
