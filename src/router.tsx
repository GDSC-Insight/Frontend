import { createBrowserRouter, Outlet } from "react-router-dom";
import Main from "./pages/Main";
import Header from "./layout/Header";
import CorporationMypage from "./pages/CorporationMypage";
import AuthSelect from "./pages/auth/authselect/AuthSelect";
import CoporationAuth from "./pages/auth/coporationauth/CoporationAuth";

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
        path: "/CorporMypage",
        element: <CorporationMypage />,
      },
      {
        path: "/",
        element: <Main />,
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
]);

export default router;
