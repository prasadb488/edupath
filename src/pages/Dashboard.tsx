const Dashboard = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-80">
            <div className="flex h-full min-h-[700px] flex-col justify-between bg-slate-50 p-4">
              <div className="flex flex-col gap-4">
                <div className="flex gap-3">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCZ_nPZhM5HG2aE9ONpIAhTGnMYFDC3U2mH4XHl9fx5Q29C4pqVOEsvWkK3sPShLpavlfWy0YjyixpNJRi7KBukDO_gLrB73TV2qLfHelhEN_oH4yJxldFLexGyBgCjLTMPFXQTOR1KFKXE3Rv4-yT0-Wq-XMy7wWeW5WsxmgcB1CZnHIiLRH9Yjx2mP9CONHn3NCztRetcv2vzwzkuLUO26cLT46RejY4wwJrkOhx12DnT-MPIXOjC-PVIdjD9issYtbGXXz2Q0l8N")',
                    }}
                  ></div>
                  <h1 className="text-[#0e141b] text-base font-medium leading-normal">
                    LearnTech
                  </h1>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div
                      className="text-[#0e141b]"
                      data-icon="House"
                      data-size="24px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"></path>
                      </svg>
                    </div>
                    <p className="text-[#0e141b] text-sm font-medium leading-normal">
                      Home
                    </p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 rounded-full bg-[#e7edf3]">
                    <div
                      className="text-[#0e141b]"
                      data-icon="Video"
                      data-size="24px"
                      data-weight="fill"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16H224A8,8,0,0,1,232,208Zm0-152V168a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Zm-68,56a8,8,0,0,0-3.71-6.75l-44-28A8,8,0,0,0,104,84v56a8,8,0,0,0,12.29,6.75l44-28A8,8,0,0,0,164,112Z"></path>
                      </svg>
                    </div>
                    <p className="text-[#0e141b] text-sm font-medium leading-normal">
                      Courses
                    </p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div
                      className="text-[#0e141b]"
                      data-icon="Users"
                      data-size="24px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
                      </svg>
                    </div>
                    <p className="text-[#0e141b] text-sm font-medium leading-normal">
                      Students
                    </p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div
                      className="text-[#0e141b]"
                      data-icon="PresentationChart"
                      data-size="24px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176ZM104,120v24a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32-16v40a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32-16v56a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"></path>
                      </svg>
                    </div>
                    <p className="text-[#0e141b] text-sm font-medium leading-normal">
                      Analytics
                    </p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div
                      className="text-[#0e141b]"
                      data-icon="Gear"
                      data-size="24px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></path>
                      </svg>
                    </div>
                    <p className="text-[#0e141b] text-sm font-medium leading-normal">
                      Settings
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#0e141b] tracking-light text-[32px] font-bold leading-tight min-w-72">
                My Courses
              </p>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#e7edf3] text-[#0e141b] text-sm font-medium leading-normal">
                <span className="truncate">Create New Course</span>
              </button>
            </div>
            <h3 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Welcome back, Alex
            </h3>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-1 gap-3 rounded-lg border border-[#d0dbe7] bg-slate-50 p-4 items-center">
                <div
                  className="text-[#0e141b]"
                  data-icon="Bell"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
                  </svg>
                </div>
                <h2 className="text-[#0e141b] text-base font-bold leading-tight">
                  You have 3 new student submissions
                </h2>
              </div>
              <div className="flex flex-1 gap-3 rounded-lg border border-[#d0dbe7] bg-slate-50 p-4 items-center">
                <div
                  className="text-[#0e141b]"
                  data-icon="Envelope"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path>
                  </svg>
                </div>
                <h2 className="text-[#0e141b] text-base font-bold leading-tight">
                  You have 2 assignments due for grading
                </h2>
              </div>
            </div>
            <h3 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Authored Courses
            </h3>
            <div className="px-4 py-3 @container">
              <div className="flex overflow-hidden rounded-xl border border-[#d0dbe7] bg-slate-50">
                <table className="flex-1">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="table-616b39d5-cb66-4b78-af02-4e673ad10d31-column-120 px-4 py-3 text-left text-[#0e141b] w-[400px] text-sm font-medium leading-normal">
                        Course
                      </th>
                      <th className="table-616b39d5-cb66-4b78-af02-4e673ad10d31-column-240 px-4 py-3 text-left text-[#0e141b] w-60 text-sm font-medium leading-normal">
                        Status
                      </th>
                      <th className="table-616b39d5-cb66-4b78-af02-4e673ad10d31-column-360 px-4 py-3 text-left text-[#0e141b] w-[400px] text-sm font-medium leading-normal">
                        Last Updated
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-t-[#d0dbe7]">
                      <td className="table-616b39d5-cb66-4b78-af02-4e673ad10d31-column-120 h-[72px] px-4 py-2 w-[400px] text-[#0e141b] text-sm font-normal leading-normal">
                        Introduction to Programming
                      </td>
                      <td className="table-616b39d5-cb66-4b78-af02-4e673ad10d31-column-240 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#e7edf3] text-[#0e141b] text-sm font-medium leading-normal w-full">
                          <span className="truncate">Live</span>
                        </button>
                      </td>
                      <td className="table-616b39d5-cb66-4b78-af02-4e673ad10d31-column-360 h-[72px] px-4 py-2 w-[400px] text-[#4e7097] text-sm font-normal leading-normal">
                        2023-08-15
                      </td>
                    </tr>
                    <tr className="border-t border-t-[#d0dbe7]">
                      <td className="table-616b39d5-cb66-4b78-af02-4e673ad10d31-column-120 h-[72px] px-4 py-2 w-[400px] text-[#0e141b] text-sm font-normal leading-normal">
                        Advanced Data Structures
                      </td>
                      <td className="table-616b39d5-cb66-4b78-af02-4e673ad10d31-column-240 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#e7edf3] text-[#0e141b] text-sm font-medium leading-normal w-full">
                          <span className="truncate">Draft</span>
                        </button>
                      </td>
                      <td className="table-616b39d5-cb66-4b78-af02-4e673ad10d31-column-360 h-[72px] px-4 py-2 w-[400px] text-[#4e7097] text-sm font-normal leading-normal">
                        2023-09-22
                      </td>
                    </tr>
                    <tr className="border-t border-t-[#d0dbe7]">
                      <td className="table-616b39d5-cb66-4b78-af02-4e673ad10d31-column-120 h-[72px] px-4 py-2 w-[400px] text-[#0e141b] text-sm font-normal leading-normal">
                        Machine Learning Fundamentals
                      </td>
                      <td className="table-616b39d5-cb66-4b78-af02-4e673ad10d31-column-240 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#e7edf3] text-[#0e141b] text-sm font-medium leading-normal w-full">
                          <span className="truncate">Live</span>
                        </button>
                      </td>
                      <td className="table-616b39d5-cb66-4b78-af02-4e673ad10d31-column-360 h-[72px] px-4 py-2 w-[400px] text-[#4e7097] text-sm font-normal leading-normal">
                        2023-10-10
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
