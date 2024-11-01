import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import Auth from "./pages/auth/Auth";
import AuthSelect from "./pages/auth/authselect/AuthSelect";
import CoporationAuth from "./pages/auth/coporationauth/CoporationAuth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/authselect",
    element: <AuthSelect/>
  },
  {
    path: "/corporationauth",
    element: <CoporationAuth/>
  }
]);

export default router;
