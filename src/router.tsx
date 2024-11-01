import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import Auth from "./pages/auth/Auth";
import AuthSelect from "./pages/auth/authselect/AuthSelect";
import CoporationAuth from "./pages/auth/coporationauth/CoporationAuth";
import UserAuth from "./pages/auth/userauth/UserAuth";
import SignUpSelect from "./pages/signup/signupselect/SignUpSelect";
import UserSignUp from "./pages/signup/usersignup/UserSignUp";

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
  },
  {
    path: "/userauth",
    element: <UserAuth/>
  },
  {
    path: "/signupselect",
    element: <SignUpSelect/>
  },
  {
    path: "/usersignup",
    element: <UserSignUp/>
  },
  {
    path: "/corporationsignup",
    element: <UserAuth/>
  },

]);

export default router;
