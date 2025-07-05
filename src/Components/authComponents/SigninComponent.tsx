
const SigninComponent = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden" >
      <div className="layout-container flex h-full grow flex-col">
      
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 flex-1">
            <h2 className="text-[#0d131c] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">Create your account</h2>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#0d131c] text-base font-medium leading-normal pb-2">Full Name</p>
                <input
                  placeholder="Enter your full name"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d131c] focus:outline-0 focus:ring-0 border border-[#ced9e8] bg-slate-50 focus:border-[#ced9e8] h-14 placeholder:text-[#496a9c] p-[15px] text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#0d131c] text-base font-medium leading-normal pb-2">Email</p>
                <input
                  placeholder="Enter your email"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d131c] focus:outline-0 focus:ring-0 border border-[#ced9e8] bg-slate-50 focus:border-[#ced9e8] h-14 placeholder:text-[#496a9c] p-[15px] text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#0d131c] text-base font-medium leading-normal pb-2">Password</p>
                <input
                  placeholder="Enter your password"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d131c] focus:outline-0 focus:ring-0 border border-[#ced9e8] bg-slate-50 focus:border-[#ced9e8] h-14 placeholder:text-[#496a9c] p-[15px] text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#0d131c] text-base font-medium leading-normal pb-2">Confirm Password</p>
                <input
                  placeholder="Confirm your password"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d131c] focus:outline-0 focus:ring-0 border border-[#ced9e8] bg-slate-50 focus:border-[#ced9e8] h-14 placeholder:text-[#496a9c] p-[15px] text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div className="flex flex-wrap gap-3 p-4">
              <label
                className="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#ced9e8] px-4 h-11 text-[#0d131c] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#2074f3] relative cursor-pointer"
              >
                Student
                <input type="radio" className="invisible absolute" name="338e8ce9-6702-4e10-9228-bad53a418b08" />
              </label>
              <label
                className="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#ced9e8] px-4 h-11 text-[#0d131c] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#2074f3] relative cursor-pointer"
              >
                Mentor
                <input type="radio" className="invisible absolute" name="338e8ce9-6702-4e10-9228-bad53a418b08" />
              </label>
            </div>
            <div className="flex px-4 py-3">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 flex-1 bg-[#2074f3] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Sign Up</span>
              </button>
            </div>
            <p className="text-[#496a9c] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline">Already have an account? Sign in</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SigninComponent