import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router";
import { auth } from "../../config/firebaseconfig";
import { useContext, useState } from "react";
import authContext from "../../context/authContext";

const LoginComponent = () => {
  const usercontext = useContext(authContext);
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User logged in:", userCredential.user);
      usercontext.setUser(userCredential.user);
      navigate("/dashboard");
    } catch (error: unknown) {
      console.error("Error during login:", error);
      setError("Failed to login. Please check your credentials.");
      return;
    }
  };
  return (
    <div className="login_wrapper bg-green-50 shadow-lg rounded-lg p-6 w-full max-w-md flex flex-col items-center gap-3">
      {error && (
        <div role="alert" className="alert alert-warning">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span>Warning: Invalid email address!</span>
        </div>
      )}
      <h1 className="text-2xl font-bold text-gray-800 mb-4">EduPath Login</h1>
      <form
        className="w-full flex flex-col items-center gap-3"
        onSubmit={handleLogin}
      >
        <label className="input validator w-full">
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
        <label className="input validator w-full">
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
        <button
          className="btn btn-primary w-full mt-4 rounded-full"
          type="submit"
        >
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
