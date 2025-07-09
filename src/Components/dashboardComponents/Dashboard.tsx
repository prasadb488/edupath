
const Dashboard = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden" style={{'fontFamily': 'Inter, "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#eaedf1] px-10 py-3">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4 text-[#101418]">
              <div className="size-4">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_6_543)">
                    <path
                      d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.24189 26.4066C7.31369 26.4411 7.64204 26.5637 8.52504 26.3738C9.59462 26.1438 11.0343 25.5311 12.7183 24.4963C14.7583 23.2426 17.0256 21.4503 19.238 19.238C21.4503 17.0256 23.2426 14.7583 24.4963 12.7183C25.5311 11.0343 26.1438 9.59463 26.3738 8.52504C26.5637 7.64204 26.4411 7.31369 26.4066 7.24189C26.345 7.21246 26.143 7.14535 25.6664 7.1918C24.9745 7.25925 23.9954 7.5498 22.7699 8.14278C20.3369 9.32007 17.3369 11.4915 14.4142 14.4142C11.4915 17.3369 9.32007 20.3369 8.14278 22.7699C7.5498 23.9954 7.25925 24.9745 7.1918 25.6664C7.14534 26.143 7.21246 26.345 7.24189 26.4066ZM29.9001 10.7285C29.4519 12.0322 28.7617 13.4172 27.9042 14.8126C26.465 17.1544 24.4686 19.6641 22.0664 22.0664C19.6641 24.4686 17.1544 26.465 14.8126 27.9042C13.4172 28.7617 12.0322 29.4519 10.7285 29.9001L21.5754 40.747C21.6001 40.7606 21.8995 40.931 22.8729 40.7217C23.9424 40.4916 25.3821 39.879 27.0661 38.8441C29.1062 37.5904 31.3734 35.7982 33.5858 33.5858C35.7982 31.3734 37.5904 29.1062 38.8441 27.0661C39.879 25.3821 40.4916 23.9425 40.7216 22.8729C40.931 21.8995 40.7606 21.6001 40.747 21.5754L29.9001 10.7285ZM29.2403 4.41187L43.5881 18.7597C44.9757 20.1473 44.9743 22.1235 44.6322 23.7139C44.2714 25.3919 43.4158 27.2666 42.252 29.1604C40.8128 31.5022 38.8165 34.012 36.4142 36.4142C34.012 38.8165 31.5022 40.8128 29.1604 42.252C27.2666 43.4158 25.3919 44.2714 23.7139 44.6322C22.1235 44.9743 20.1473 44.9757 18.7597 43.5881L4.41187 29.2403C3.29027 28.1187 3.08209 26.5973 3.21067 25.2783C3.34099 23.9415 3.8369 22.4852 4.54214 21.0277C5.96129 18.0948 8.43335 14.7382 11.5858 11.5858C14.7382 8.43335 18.0948 5.9613 21.0277 4.54214C22.4852 3.8369 23.9415 3.34099 25.2783 3.21067C26.5973 3.08209 28.1187 3.29028 29.2403 4.41187Z"
                      fill="currentColor"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_6_543"><rect width="48" height="48" fill="white"></rect></clipPath>
                  </defs>
                </svg>
              </div>
              <h2 className="text-[#101418] text-lg font-bold leading-tight tracking-[-0.015em]">LearnHub</h2>
            </div>
            <div className="flex items-center gap-9">
              <a className="text-[#101418] text-sm font-medium leading-normal" href="#">My Courses</a>
              <a className="text-[#101418] text-sm font-medium leading-normal" href="#">Catalog</a>
              <a className="text-[#101418] text-sm font-medium leading-normal" href="#">Resources</a>
            </div>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <label className="flex flex-col min-w-40 !h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                <div
                  className="text-[#5c718a] flex border-none bg-[#eaedf1] items-center justify-center pl-4 rounded-l-xl border-r-0"
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
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#101418] focus:outline-0 focus:ring-0 border-none bg-[#eaedf1] focus:border-none h-full placeholder:text-[#5c718a] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                  value=""
                />
              </div>
            </label>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{'backgroundImage': 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBZGY3SM5uyl3BS6WmaIgghgjEDw7ZVhahnqjRfv6Fx5AQPNvUwruw3ZYFogUWecch5EZ44zAgOhLi5rl7s0l9c39jOimrCAIqAf7rVtHFOpRCeOapUohHINjJK899k1vLEnuS2ZuGFgAnMhT5o1NKgLHypVPZiS9tcIffxJ03dfo-E9AOo7vccFRP9PHX6DcZ7qTQX3uc-JTd5wvy-2Gzq52KPnEn4-eMOaM2_Y6T0SwF3d0C-NoCf2CsvfXSXCWC8u9xDqlVOQXM9")'}}
            ></div>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4"><p className="text-[#101418] tracking-light text-[32px] font-bold leading-tight min-w-72">My Programs</p></div>
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-xl">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-[#5c718a] text-sm font-normal leading-normal">Due Today</p>
                    <p className="text-[#101418] text-base font-bold leading-tight">Submit Assignment: Data Analysis Project</p>
                    <p className="text-[#5c718a] text-sm font-normal leading-normal">Due by 11:59 PM</p>
                  </div>
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 flex-row-reverse bg-[#eaedf1] text-[#101418] text-sm font-medium leading-normal w-fit"
                  >
                    <span className="truncate">Submit Assignment</span>
                  </button>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style={{'backgroundImage': 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD2xmnjAha9ZDyxXGhMiCBYkSAtX5-yz4jxbZPQrLWNKtzp-372pW9uKMOms3UP9mzODWDcUmqY831Y6mXJRcCgjlUBaeXYYheJOYr5xkbqWzK2iqQuHKBbOCRNnQtzCOOtsTez8HZfFMLFGeDEfXwjRerKLlyPEXVZd-GeFqM1zFZD60qznzgf1HZ3J9sM84qraSdyTntgIZiTDmxfzN5zid7gHY-XddO2tYiLjX8zDznaSx93C6wLhSEbid5k_bQuLPVJezWBa_Gd")'}}
                ></div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-xl">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-[#101418] text-base font-bold leading-tight">Continue Course: Advanced Python Programming</p>
                    <p className="text-[#5c718a] text-sm font-normal leading-normal">Last accessed: 2 days ago</p>
                  </div>
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 flex-row-reverse bg-[#eaedf1] text-[#101418] text-sm font-medium leading-normal w-fit"
                  >
                    <span className="truncate">Continue Course</span>
                  </button>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style={{'backgroundImage': 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA4XhRkmjhe36bSt-ncbrxZwAJR2UrWkDWp_iyiP9SvmXh7fYN6hLL9VYRuzLk8zVlYeDXE1utA1Yn0kL1m7VG5ZrGN_pp1Q00UjelFnMOpzMr6j-es4L3HxtsrqW2c_9n1eMlFUJ3E1MQf53kq0K16YdjGbHc9v4IMl1IONpwlqNgvD9zoVWSXsZzIFdlvgA017pd_Nf038GeAInwi03rlrtWxzF0Msq74oHR75Grm4QwaPxSmwN-94N1eXqL-biomVD9K5Log2AML")'}}
                ></div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-xl">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-[#101418] text-base font-bold leading-tight">Join Live Session: Machine Learning Fundamentals</p>
                    <p className="text-[#5c718a] text-sm font-normal leading-normal">Starts in 30 minutes</p>
                  </div>
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 flex-row-reverse bg-[#eaedf1] text-[#101418] text-sm font-medium leading-normal w-fit"
                  >
                    <span className="truncate">Join Live Session</span>
                  </button>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style={{'backgroundImage': 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAPFiGmm-ATSXmXDXWr67qcHS5BLyG9tfrhcfV2YDnw1atsNPqGd-5JeQsYYTcMjSWmDYINUbWV_vnz8TBzPmND2WTlig572tzgsDqjgaJJLuzc7yZS_xofPXBsDViXqWVSjQmWc-JTbzeOl2VYq4SWEQhfYMtZCyQZ4Oc9m7ILSynb5WHIARQjySri5L6P-Y9E5RYWeRJHC2gpqTfyHKE6QWyIBohE3pBzfzhrpthLxXiDUcy_gZ2dDszPjbHmoOZJXGBv7kIu-Kwk")'}}
                ></div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-xl">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-[#101418] text-base font-bold leading-tight">Continue Course: Web Development with React</p>
                    <p className="text-[#5c718a] text-sm font-normal leading-normal">Last accessed: 1 week ago</p>
                  </div>
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 flex-row-reverse bg-[#eaedf1] text-[#101418] text-sm font-medium leading-normal w-fit"
                  >
                    <span className="truncate">Continue Course</span>
                  </button>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style={{'backgroundImage': 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzWzvWgFEW6CPDgffur0K1OgQAaGIecnoKncnr101vjWbMWTYOh8mBhUF3bV_-y1WgbwXapRpzO_3ope5bW09U2VP2EkANc-sN6VEuk5uebHiuADcZryQkbQQGCgupN9ja-kCKptaLR9F5v5QZgin1XT2AbC1faRTKXBwo6w6gBUY-wu7dEsHdtbB6f6SMl11drEqMVQX2pURrSrUdDaW1RXOHoyE1nqLqSg1F5htIk-YY-q052wuSwU9D8kF2mV_zn-PZrp2YWPuU")'}}
                ></div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-xl">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-[#101418] text-base font-bold leading-tight">Submit Assignment: UI/UX Design Challenge</p>
                    <p className="text-[#5c718a] text-sm font-normal leading-normal">Due in 3 days</p>
                  </div>
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 flex-row-reverse bg-[#eaedf1] text-[#101418] text-sm font-medium leading-normal w-fit"
                  >
                    <span className="truncate">Submit Assignment</span>
                  </button>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style={{'backgroundImage': 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAqD1LMabsQIGoKtjHBVLtiYDu8QlQo1aim3Sp1TrS-4EFuYrkvY-zBW481F6-Frc0rPCI1R87qcLVREu2p4Af2NKVq-yTwWDK7y13vEwvRdbzzZ_l781dZAzLyxvIrJq3LBlHZ1Iti2n90-Eyeee_puDhSXStCdyhipoewPeDocWf1iLDe-CEHXsHBpXzPFw4OJJlMyU2nndTx5QJvQxHPihcbGnuMatXOdkk34n9fqxU78A6svPoxQkAZGAUIGwvKUzASxTCjMns3")'}}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard