import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebaseconfig";
import { useContext } from "react";
import { useNavigate } from "react-router";
import authContext from "../context/authContext";
import Loading from "../pages/Loading";
import getUser from "../utils/getUser";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const authuser = useContext(authContext);

  const navigate = useNavigate();

  onAuthStateChanged(auth, async (user) => {
    if (!user) {
      authuser.setLoading(false);
      authuser.setUser(null);
      console.error("No user is authenticated");
      navigate("/login");
      return;
    }
    if (user) {
      authuser.setLoading(false);
      const userData = await getUser(user.uid);
      if (userData) {
        if (
          !userData.isProfileComplete &&
          window.location.pathname !== "/edit-profile"
        ) {
          // If the user profile is not complete, redirect to edit profile page
          navigate("/edit-profile");
        } else {
          authuser.setUser({ ...user, ...userData });
        }
      } else {
        console.error("User data not found for UID:", user.uid);
        authuser.setUser(null);
        authuser.setLoading(false);
        navigate("/login");
      }
    }
  });

  return authuser.loading ? <Loading /> : <div>{children}</div>;
};

export default PrivateRoute;
