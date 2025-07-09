import { Link } from "react-router";
import ResetPasswordComponent from "../Components/authComponents/ResetPasswordComponet";


const ResetPassword = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div>

      <h1 className="text-2xl font-bold mb-4">Reset Password</h1>
      <p className="mb-6 text-gray-600">Enter your email to reset your password</p>
      <ResetPasswordComponent />
      <p className="mt-4 text-sm text-gray-500">
        Remembered your password? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
      </p>
      </div>
    </div>
  )
};

export default ResetPassword;
