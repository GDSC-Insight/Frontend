import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import Auth from "./pages/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
]);

export default router;
