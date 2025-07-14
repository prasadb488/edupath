import { useEffect, useState } from "react";

// Example application data type
type Application = {
  id: string;
  applicant: string;
  program: string;
  applicationDate: string;
  status: "Pending" | "Approved" | "Rejected";
};

const initialApplications: Application[] = [
  {
    id: "1",
    applicant: "Sophia Clark",
    program: "Data Science Bootcamp",
    applicationDate: "2024-07-15",
    status: "Pending",
  },
  {
    id: "2",
    applicant: "Ethan Miller",
    program: "Web Development Course",
    applicationDate: "2024-07-16",
    status: "Pending",
  },
  {
    id: "3",
    applicant: "Olivia Davis",
    program: "UX/UI Design Workshop",
    applicationDate: "2024-07-17",
    status: "Pending",
  },
  {
    id: "4",
    applicant: "Noah Wilson",
    program: "Digital Marketing Masterclass",
    applicationDate: "2024-07-18",
    status: "Pending",
  },
  {
    id: "5",
    applicant: "Ava Thompson",
    program: "Mobile App Development Program",
    applicationDate: "2024-07-19",
    status: "Pending",
  },
];

export default function ApplicationsDashboard() {
  const [applications, setApplications] = useState<Application[]>([]);

  useEffect(() => {
    // Replace with API call to fetch real data
    setApplications(initialApplications);
  }, []);

  const updateStatus = (id: string, newStatus: Application["status"]) => {
    setApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: newStatus } : app))
    );
    // TODO: Send status update to your backend / database here
    console.log(`Application ${id} status updated to ${newStatus}`);
  };

  return (
    <div className="min-h-screen bg-[#f9f9fb] flex flex-col">
      <main className="flex-grow px-10 py-6">
        <h1 className="text-3xl font-bold text-[#101319] mb-2">Applications</h1>
        <p className="text-sm text-[#5b698b] mb-4">
          Review and approve or reject applications from potential students.
        </p>

        <div className="overflow-auto rounded-xl border border-[#d4d8e3] bg-white">
          <table className="w-full">
            <thead>
              <tr className="bg-white">
                <th className="p-3 text-left text-[#101319] w-1/4 text-sm font-medium">
                  Applicant
                </th>
                <th className="p-3 text-left text-[#101319] w-1/4 text-sm font-medium">
                  Program
                </th>
                <th className="p-3 text-left text-[#101319] w-1/4 text-sm font-medium">
                  Application Date
                </th>
                <th className="p-3 text-left text-[#101319] w-1/4 text-sm font-medium">
                  Status
                </th>
                <th className="p-3 text-left text-[#5b698b] text-sm font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id} className="border-t border-[#d4d8e3]">
                  <td className="p-3 text-[#101319]">{app.applicant}</td>
                  <td className="p-3 text-[#5b698b]">{app.program}</td>
                  <td className="p-3 text-[#5b698b]">{app.applicationDate}</td>
                  <td className="p-3">
                    <button
                      className={`px-4 py-1 rounded-full ${
                        app.status === "Pending"
                          ? "bg-[#e9ecf1] text-[#101319]"
                          : app.status === "Approved"
                          ? "bg-green-200 text-green-800"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      {app.status}
                    </button>
                  </td>
                  <td className="p-3 space-x-2 text-sm font-semibold">
                    <button
                      disabled={app.status !== "Pending"}
                      onClick={() => updateStatus(app.id, "Approved")}
                      className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
                    >
                      Approve
                    </button>
                    <button
                      disabled={app.status !== "Pending"}
                      onClick={() => updateStatus(app.id, "Rejected")}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
