

const programdetails = () => {
  return (
         <div
      className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden"
      style={{"--checkbox-tick-svg":"url('data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27rgb(248,250,252)%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e'); font-family: Inter, &quot;Noto Sans&quot;, sans-serif;"} as any}
    >
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7ecf4] px-10 py-3">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4 text-[#0d131c]">
              <div className="size-4">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <h2 className="text-[#0d131c] text-lg font-bold leading-tight tracking-[-0.015em]">EduSite</h2>
            </div>
            <div className="flex items-center gap-9">
              <a className="text-[#0d131c] text-sm font-medium leading-normal" href="#">Programs</a>
              <a className="text-[#0d131c] text-sm font-medium leading-normal" href="#">Admissions</a>
              <a className="text-[#0d131c] text-sm font-medium leading-normal" href="#">Tuition</a>
              <a className="text-[#0d131c] text-sm font-medium leading-normal" href="#">Resources</a>
            </div>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <label className="flex flex-col min-w-40 !h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                <div
                  className="text-[#496a9c] flex border-none bg-[#e7ecf4] items-center justify-center pl-4 rounded-l-xl border-r-0"
                  data-icon="MagnifyingGlass"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                    ></path>
                  </svg>
                </div>
                <input
                  placeholder="Search"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d131c] focus:outline-0 focus:ring-0 border-none bg-[#e7ecf4] focus:border-none h-full placeholder:text-[#496a9c] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                  value=""
                />
              </div>
            </label>
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#2074f3] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">Apply Now</span>
            </button>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{'backgroundImage': 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBkE2zZ_LHK0_hegcj1M8xWCgORIOVc_j0ajCKEYl8bKhyZWMQ_A6cGZwYrktSr2yiVepM1FRxH8zJPk7fswjcQUjSayYFhbBQFM3j4m72T1N_epggJAVGtggc3JqXk8HT9FjXfRRwtw74e1EkBzeOJ6x-V-IPDm571VMbuJJW6fPQwW_u3l-a11U7avLVSbzS8yxsvsqa9Tfu9ic4KpUDCZ2jHz5n3jg9puC_zJ3g1dw-wjT9fApzShG3FQKtoYL5-q5dhF2iIpBun")'}}
            ></div>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#0d131c] text-4xl font-black leading-tight tracking-[-0.033em]">Introduction to Python Programming</p>
                <p className="text-[#496a9c] text-base font-normal leading-normal">Learn the fundamentals of Python programming from scratch</p>
              </div>
            </div>
            <div className="flex justify-stretch">
              <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-start">
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#2074f3] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">Apply Now</span>
                </button>
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#e7ecf4] text-[#0d131c] text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">Save</span>
                </button>
              </div>
            </div>
            <h2 className="text-[#0d131c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Course Details</h2>
            <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#ced9e8] py-5">
                <p className="text-[#496a9c] text-sm font-normal leading-normal">Instructor</p>
                <p className="text-[#0d131c] text-sm font-normal leading-normal">Sarah Khan</p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#ced9e8] py-5">
                <p className="text-[#496a9c] text-sm font-normal leading-normal">Duration</p>
                <p className="text-[#0d131c] text-sm font-normal leading-normal">6 Weeks</p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#ced9e8] py-5">
                <p className="text-[#496a9c] text-sm font-normal leading-normal">Start Date</p>
                <p className="text-[#0d131c] text-sm font-normal leading-normal">July 15, 2025</p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#ced9e8] py-5">
                <p className="text-[#496a9c] text-sm font-normal leading-normal">Delivery Mode</p>
                <p className="text-[#0d131c] text-sm font-normal leading-normal">Online / Self-paced / Instructor-led</p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#ced9e8] py-5">
                <p className="text-[#496a9c] text-sm font-normal leading-normal">Category</p>
                <p className="text-[#0d131c] text-sm font-normal leading-normal">Technology</p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#ced9e8] py-5">
                <p className="text-[#496a9c] text-sm font-normal leading-normal">Prerequisites</p>
                <p className="text-[#0d131c] text-sm font-normal leading-normal">None / Basic computer knowledge</p>
              </div>
            </div>
            <h2 className="text-[#0d131c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Course Description</h2>
            <p className="text-[#0d131c] text-base font-normal leading-normal pb-3 pt-1 px-4">
              This course provides a comprehensive introduction to Python programming, covering fundamental concepts such as data types, control structures, and object-oriented
              programming. Through hands-on exercises and projects, students will develop practical skills in writing efficient and well-structured Python code. The course is
              designed for beginners with no prior programming experience, making it accessible to anyone interested in learning Python. By the end of the course, students will be
              able to create basic applications and have a solid foundation for more advanced topics in Python programming.
            </p>
            <h2 className="text-[#0d131c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">What You'll Learn</h2>
            <div className="px-4">
              <label className="flex gap-x-3 py-3 flex-row">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border-[#ced9e8] border-2 bg-transparent text-[#2074f3] checked:bg-[#2074f3] checked:border-[#2074f3] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#ced9e8] focus:outline-none"
                />
                <p className="text-[#0d131c] text-base font-normal leading-normal">Understand basic Python syntax and data structures</p>
              </label>
              <label className="flex gap-x-3 py-3 flex-row">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border-[#ced9e8] border-2 bg-transparent text-[#2074f3] checked:bg-[#2074f3] checked:border-[#2074f3] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#ced9e8] focus:outline-none"
                />
                <p className="text-[#0d131c] text-base font-normal leading-normal">Write and debug Python scripts</p>
              </label>
              <label className="flex gap-x-3 py-3 flex-row">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border-[#ced9e8] border-2 bg-transparent text-[#2074f3] checked:bg-[#2074f3] checked:border-[#2074f3] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#ced9e8] focus:outline-none"
                />
                <p className="text-[#0d131c] text-base font-normal leading-normal">Implement object-oriented programming concepts</p>
              </label>
              <label className="flex gap-x-3 py-3 flex-row">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border-[#ced9e8] border-2 bg-transparent text-[#2074f3] checked:bg-[#2074f3] checked:border-[#2074f3] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#ced9e8] focus:outline-none"
                />
                <p className="text-[#0d131c] text-base font-normal leading-normal">Develop simple applications using Python</p>
              </label>
            </div>
            <h2 className="text-[#0d131c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Prerequisites</h2>
            <p className="text-[#0d131c] text-base font-normal leading-normal pb-3 pt-1 px-4">
              No prior programming experience is required. Basic computer literacy, including familiarity with file management and internet browsing, is sufficient to succeed in
              this course.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default programdetails