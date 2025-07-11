import Login from "../../pages/Login";
import ResetPassword from "../../pages/ResetPassword";
import Signin from "../../pages/Signin";

const Authroutes = [
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
];

export default Authroutes;
