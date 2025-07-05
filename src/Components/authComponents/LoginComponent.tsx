import {  signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router";
import { auth } from "../../config/firebaseconfig";
import { useContext } from "react";
import authContext from "../../context/authContext";


const LoginComponent = () => {
  const usercontext = useContext(authContext);
  const navigate = useNavigate();
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in:", userCredential.user);
    usercontext.setUser(userCredential.user);
    navigate("/dashboard");
  };
  return (
    <div className="login_wrapper bg-green-50 shadow-lg rounded-lg p-6 w-full max-w-md flex flex-col items-center gap-3">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        EduPath Login
      </h1>
      <form className="w-full flex flex-col items-center gap-3" onSubmit={handleLogin}>
        <label className="input validator">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </g>
          </svg>
          <input
            type="text"
            required
            placeholder="Username"
            name="email"
            title="Only letters, numbers or dash"
          />
        </label>
        <label className="input validator">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
              <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
            </g>
          </svg>
          <input
            type="password"
            required
            placeholder="Password"
            name="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
          />
        </label>
        <button className="btn btn-primary w-full mt-4" type="submit">
          Sign In
        </button>
      </form>
      <div className="wrapper flex flex-col items-center justify-center mt-4">

      <div className="text-sm text-gray-600 mt-2">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-500 hover:underline">
          Register here
        </Link>
      </div>
      <div className="text-[.8rem] text-gray-600 mt-2">
        Forgot your password?{" "}
        <Link to="/reset-password" className="text-blue-500 hover:underline">
          Reset it here
        </Link>
      </div>
      </div>
    </div>
  );
};

export default LoginComponent;
