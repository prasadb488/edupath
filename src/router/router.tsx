import {
  createBrowserRouter,
} from "react-router";
import  App from "../pages/App";
import Login from "../pages/Login";
import NotFound from "../pages/404";
import PrivateRoute from "./privateroute";
import Dashboard from "../pages/Dashboard";


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