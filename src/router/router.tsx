import { createBrowserRouter } from "react-router";
import App from "../pages/App";
import NotFound from "../pages/404";
import PrivateRoute from "./privateroute";
import Dashboard from "../pages/Dashboard";
import EditProfilePage from "../pages/EditProfilePage";
import Main from "../layout/Main";
import Authroutes from "./authRoutes/Authroutes";
import Programs from "../pages/Programs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { index: true, element: <App /> },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/edit-profile",
        element: (
          <PrivateRoute>
            <EditProfilePage />
          </PrivateRoute>
        ),
      },
      {
        path: "/programs",
        element: <Programs />,
      },
    ],
  },
  ...Authroutes,

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
