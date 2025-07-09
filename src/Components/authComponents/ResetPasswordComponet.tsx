import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "../../config/firebaseconfig";

const ResetPasswordComponent = () => {
 const navigate = useNavigate();
    const handleResetPassword = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const email = formData.get("email") as string;
        try {
            console.log(email);
            await sendPasswordResetEmail(auth, email);
            alert("Password reset email sent successfully");
        } catch (error) {
            console.error("Error sending password reset email:", error);
            return;
        }
        console.log("Password reset email sent successfully");
        navigate("/login");
    };
  return (
    <form
      className="w-full flex flex-col items-center gap-3"
      onSubmit={handleResetPassword}
    >
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
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </g>
        </svg>
        <input type="email" placeholder="mail@site.com" required  name="email"/>
      </label>
      <div className="validator-hint hidden">Enter valid email address</div>

      <button className="btn btn-primary w-full mt-4" type="submit">
        Send Verification Email
      </button>
    </form>
  );
}

export default ResetPasswordComponent