import { createBrowserRouter, Outlet } from "react-router-dom";
import Main from "./pages/Main";
import CorporationMypage from "./pages/CorporationMypage";
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
        path: "/CorporMypage",
        element: <CorporationMypage />,
      },
      {
        path: "/",
        element: <Main />,
      },
    ],
  },
]);

export default router;
