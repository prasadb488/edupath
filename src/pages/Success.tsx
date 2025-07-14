import { Link } from "react-router";

const Success = () => {
  return (
    <div>
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col w-[512px]] py-5 max-w-[960px] flex-1">
          <h2 className="text-[#0d1c0d] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
            Application Submitted Successfully!
          </h2>
          <p className="text-[#0d1c0d] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
            Thank you, We've received your application for Data Science
            Fundamentals.
          </p>

          <p className="text-[#0d1c0d] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
            Our admissions team will review your application. You'll be notified
            via email within 3-5 business days.
          </p>
          <p className="text-[#499c49] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
            A confirmation has been sent to your email.
          </p>
          <div className="flex px-4 py-3 justify-center cursor-pointer">
            <Link to="/dashboard">
              <button className="rounded-full h-10 px-4 bg-[#2074f3] text-white text-sm font-bold">
                Go to Dashboard
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
