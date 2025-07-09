import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import authContext from "../../context/authContext";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebaseconfig";

const Navbar = () => {
  const user = useContext(authContext).user;
  const setUser = useContext(authContext).setUser;
  const navigate = useNavigate();
  const handleSignout = async () => {
    console.log("User signed out");
    const logout = await signOut(auth);
    console.log("Signout successful", logout);
    setUser(null);
    navigate("/login");
  };
  useEffect(() => {
    console.log(user, "user in navbar");
  }, [user]);
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf3] px-10 py-3">
      <div className="flex items-center gap-4 text-[#0e141b]">
        <div className="size-4">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <h2 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em]">
          EduPath
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <Link
            className="text-[#0e141b] text-sm font-medium leading-normal"
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-[#0e141b] text-sm font-medium leading-normal"
            to="/programs"
          >
            Programs
          </Link>
          <Link
            className="text-[#0e141b] text-sm font-medium leading-normal"
            to="/how-it-works"
          >
            How It Works
          </Link>
          <Link
            className="text-[#0e141b] text-sm font-medium leading-normal"
            to="/about"
          >
            About
          </Link>
          <Link
            className="text-[#0e141b] text-sm font-medium leading-normal"
            to="/contact"
          >
            Contact
          </Link>
        </div>
        <div className="flex gap-2">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#e7edf3] text-[#0e141b] text-sm font-bold leading-normal tracking-[0.015em]">
            {user ? (
              <span onClick={handleSignout}>Signout</span>
            ) : (
              <Link to={"/login"}>
                <span className="truncate">Login / Sign Up</span>
              </Link>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
