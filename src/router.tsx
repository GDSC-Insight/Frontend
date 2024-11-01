import { createBrowserRouter, Outlet } from "react-router-dom";
import Main from "./pages/Main";

import CorporationMypage from "./pages/CorporationMypage";
import AuthSelect from "./pages/auth/authselect/AuthSelect";
import CoporationAuth from "./pages/auth/coporationauth/CoporationAuth";
import Header from "./layout/Header";

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
]);

export default router;
