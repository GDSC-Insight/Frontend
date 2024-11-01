import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main";

import CorporationMypage from "./pages/CorporationMypage";
import AuthSelect from "./pages/auth/authselect/AuthSelect";
import CoporationAuth from "./pages/auth/coporationauth/CoporationAuth";

import UserAuth from "./pages/auth/userauth/UserAuth";
import SignUpSelect from "./pages/signup/signupselect/SignUpSelect";
import UserSignUp from "./pages/signup/usersignup/UserSignUp";
import CoporationSignUp from "./pages/signup/coporationsignup/CoporationSignUp";
import IndividualMypage from "./pages/IndividualMypage";
import Layout from "./layout/Layout";
import DonationDetail from "./pages/DonationDetail";

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
      {
        path: "/IndiMypage",
        element: <IndividualMypage />,
      },
      {
        path: "/donation-detail",
        element: <DonationDetail />, // Add the new route for the detail page
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
