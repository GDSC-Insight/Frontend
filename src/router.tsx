import { createBrowserRouter, Outlet } from "react-router-dom";
import Main from "./pages/Main";

import CorporationMypage from "./pages/CorporationMypage";
import AuthSelect from "./pages/auth/authselect/AuthSelect";
import CoporationAuth from "./pages/auth/coporationauth/CoporationAuth";
import Header from "./layout/Header";
import UserAuth from "./pages/auth/userauth/UserAuth";
import SignUpSelect from "./pages/signup/signupselect/SignUpSelect";
import UserSignUp from "./pages/signup/usersignup/UserSignUp";
import CoporationSignUp from "./pages/signup/coporationsignup/CoporationSignUp";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/corporMypage",
        element: <CorporationMypage />,
      },
      {
        path: "/authselect",
        element: <AuthSelect />,
      },
      {
        path: "/corporationauth",
        element: <CoporationAuth />,
      },
    ],
  },
  {
    path: "/authselect",
    element: <AuthSelect />,
  },
  {
    path: "/corporationauth",
    element: <CoporationAuth />,
  },
  {
    path: "/userauth",
    element: <UserAuth />,
  },
  {
    path: "/signupselect",
    element: <SignUpSelect />,
  },
  {
    path: "/usersignup",
    element: <UserSignUp />,
  },
  {
    path: "/coporationsignup",
    element: <CoporationSignUp />,
  },
]);

export default router;
