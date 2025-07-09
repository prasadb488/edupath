import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebaseconfig";
import { useContext } from "react";
import { useNavigate } from "react-router";
import authContext from "../context/authContext";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const authuser = useContext(authContext);
  const navigate = useNavigate();
  console.log("Checking authentication state...");
  onAuthStateChanged(auth, (user) => {
    authuser.setLoading(true);
    if (!user) {
      console.log("User is signed out");
      navigate("/login");
      authuser.setLoading(false);
      authuser.setUser(null);
      console.log("Redirecting to login page");
      return;
    } else {
      console.log("User is signed in", user);
      authuser.setUser(user);
      authuser.setLoading(false);
    }
  });

  return authuser.loading ? (
    <div>
      <h1>Loading...</h1>
    </div>
  ) : (
    <div>{children}</div>
  );
};

export default PrivateRoute;
