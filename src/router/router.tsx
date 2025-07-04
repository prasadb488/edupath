import {
  createBrowserRouter,
} from "react-router";
import  App from "../pages/App";
import Login from "../pages/Login";
import NotFound from "../pages/404";


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
    path: "*",
    element: <NotFound />,
  }
  
]);

export default router;