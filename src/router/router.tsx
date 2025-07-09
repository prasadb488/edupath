import {
  createBrowserRouter,
} from "react-router";
import  App from "../pages/App";
import Login from "../pages/Login";
import NotFound from "../pages/404";
import PrivateRoute from "./privateroute";
import Dashboard from "../pages/Dashboard";
import ResetPassword from "../pages/ResetPassword";
import Signin from "../pages/Signin";
import EditProfilePage from "../pages/EditProfilePage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
   {
    path: "/register",
    element: <Signin />,
    },
   {
    path: "/edit-student-profile",
    element: (
      <PrivateRoute>
        <EditProfilePage />
      </PrivateRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  }
  
]);

export default router;