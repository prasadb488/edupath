import { useContext, useEffect, useState } from "react";

import getUser from "../utils/getUser";
import authContext from "../context/authContext";
import type { userType } from "../types/Types";
import { Link } from "react-router";

const Dashboard = () => {
  const [user, setUser] = useState<userType | null>(null);
  const userid = useContext(authContext).user;
  useEffect(() => {
    const getUserData = async () => {
      if (!userid?.uid) return;
      console.log("Fetching user data for UID:", userid);

      console.log("Fetching user data for UID:", userid.uid);
      const userData = await getUser(userid.uid);
      console.log(userData);

      setUser(userData as userType | null);
    };
    getUserData();
  }, [userid?.uid]);
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#0e141b] tracking-light text-[32px] font-bold leading-tight min-w-72">
                My Courses
              </p>
              {user?.userType === "mentor" && (
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#e7edf3] text-[#0e141b] text-sm font-medium leading-normal">
                  <Link to="/approvals">
                    <span className="truncate">Pending Approvals</span>
                  </Link>
                </button>
              )}
            </div>
            <h3 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Welcome back, {user?.fullName || "User"}!
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
