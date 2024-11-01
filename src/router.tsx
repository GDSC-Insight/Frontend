import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export default router;
