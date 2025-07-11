import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router";
import { auth, db } from "../../config/firebaseconfig";
import authContext from "../../context/authContext";
import { useContext } from "react";
import { collection, doc, setDoc } from "firebase/firestore";
import Loading from "../../pages/Loading";

const SigninComponent = () => {
  const navigate = useNavigate();
  const usercontext = useContext(authContext);
  usercontext.setLoading(false);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    usercontext.setLoading(true);
    console.log("Form submitted");
    const formdata = new FormData(event.currentTarget);

    const email = formdata.get("email") as string;
    const password = formdata.get("password") as string;
    const confirmPassword = formdata.get("confirmPassword") as string;
    const userType = formdata.get("userType") as string;
    if (!email || !password || !confirmPassword || !userType) {
      alert("Please fill in all fields");
      usercontext.setLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      usercontext.setLoading(false);
      return;
    }
    const signIn = await createUserWithEmailAndPassword(auth, email, password);
    if (signIn) {
      console.log("User signed in successfully:", signIn.user);
      usercontext.setUser(signIn.user);
    } else {
      console.error("Error signing in:", signIn);
      usercontext.setLoading(false);
      alert("Error signing in. Please try again.");
    }

    try {
      console.log(db);

      const collectionRef = collection(db, "users");
      if (userType === "student") {
        console.log("User is a student");
        console.log(signIn.user.uid);

        const documentRef = doc(collectionRef, signIn.user.uid);
        await setDoc(documentRef, {
          email: email,
          userType: userType,
          isProfileComplete: false,
          createdAt: new Date(),
        });
        usercontext.setLoading(false);
        console.log("User document created successfully");
        navigate("/edit-profile");
      } else if (userType === "mentor") {
        const collectionRef = collection(db, "users");
        const documentRef = doc(collectionRef, signIn.user.uid);
        await setDoc(documentRef, {
          email: email,
          userType: userType,
          isProfileComplete: false,
          createdAt: new Date(),
        });

        console.log("User is a mentor");
        usercontext.setLoading(false);
        console.log("User document created successfully");
        navigate("/edit-profile");
      }
    } catch (error) {
      console.error("Error navigating to student profile:", error);
      usercontext.setLoading(false);
      alert("Failed to create user profile. Please try again.");
    }
  };

  return usercontext.loading ? (
    <Loading />
  ) : (
    <div className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <form
            className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 flex-1"
            onSubmit={handleSubmit}
          >
            <h2 className="text-[#0d131c] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
              Sign up to get started with EduPath
            </h2>

            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#0d131c] text-base font-medium leading-normal pb-2">
                  Email
                </p>
                <input
                  placeholder="Enter your email"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d131c] focus:outline-0 focus:ring-0 border border-[#ced9e8] bg-slate-50 focus:border-[#ced9e8] h-14 placeholder:text-[#496a9c] p-[15px] text-base font-normal leading-normal"
                  type="email"
                  required
                  autoComplete="email"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  name="email"
                  title="Enter a valid email address"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  autoFocus
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#0d131c] text-base font-medium leading-normal pb-2">
                  Password
                </p>
                <input
                  placeholder="Enter your password"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d131c] focus:outline-0 focus:ring-0 border border-[#ced9e8] bg-slate-50 focus:border-[#ced9e8] h-14 placeholder:text-[#496a9c] p-[15px] text-base font-normal leading-normal"
                  type="password"
                  required
                  autoComplete="new-password"
                  name="password"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  autoFocus
                  title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#0d131c] text-base font-medium leading-normal pb-2">
                  Confirm Password
                </p>
                <input
                  placeholder="Confirm your password"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d131c] focus:outline-0 focus:ring-0 border border-[#ced9e8] bg-slate-50 focus:border-[#ced9e8] h-14 placeholder:text-[#496a9c] p-[15px] text-base font-normal leading-normal"
                  name="confirmPassword"
                  type="password"
                  required
                  autoComplete="new-password"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                />
              </label>
            </div>
            <div className="flex flex-wrap gap-3 p-4 justify-center">
              <label className="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#ced9e8] px-4 h-11 text-[#0d131c] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#2074f3] relative cursor-pointer">
                Student
                <input
                  type="radio"
                  className="invisible absolute"
                  name="userType"
                  value={"student"}
                />
              </label>
              <label className="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#ced9e8] px-4 h-11 text-[#0d131c] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#2074f3] relative cursor-pointer">
                Mentor
                <input
                  type="radio"
                  className="invisible absolute"
                  name="userType"
                  value={"mentor"}
                />
              </label>
            </div>
            <div className="flex px-4 py-3">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 flex-1 bg-[#2074f3] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]"
                type="submit"
              >
                <span className="truncate">Sign Up</span>
              </button>
            </div>
            <Link to="/login">
              <p className="text-[#496a9c] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline">
                Already have an account? Sign in
              </p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SigninComponent;
