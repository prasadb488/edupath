import { Link, useParams } from "react-router";
import courses from "../utils/courses.json";

const Applyprogram = () => {
  const { id } = useParams<{ id: string }>();
  const filteredCourse = courses.find((course) => course.id.toString() === id);

  if (!filteredCourse) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50">
        <p className="text-xl font-semibold text-red-500">Course not found.</p>
      </div>
    );
  }

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}

        {/* Main Content */}
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Title & Summary */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#0d131c] text-4xl font-black leading-tight">
                  {filteredCourse.title}
                </p>
                <p className="text-[#496a9c] text-base">
                  {filteredCourse.description}
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-start px-4 py-3 gap-3">
              <Link to={`/apply/${filteredCourse.id}`}>
                <button className="rounded-full h-10 px-4 bg-[#2074f3] text-white text-sm font-bold">
                  Apply Now
                </button>
              </Link>
              <button className="rounded-full h-10 px-4 bg-[#e7ecf4] text-[#0d131c] text-sm font-bold">
                Save
              </button>
            </div>

            {/* Details */}
            <h2 className="text-xl font-bold px-4 pb-3 pt-5">Course Details</h2>
            <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
              {[
                ["Instructor", filteredCourse.instructor],
                ["Duration", filteredCourse.duration],
                ["Start Date", filteredCourse.startDate],
                ["Delivery Mode", filteredCourse.delivery],
                ["Category", filteredCourse.category],
                ["Prerequisites", filteredCourse.prerequisites],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="col-span-2 grid grid-cols-subgrid border-t border-t-[#ced9e8] py-5"
                >
                  <p className="text-[#496a9c] text-sm">{label}</p>
                  <p className="text-[#0d131c] text-sm">{value}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <h2 className="text-xl font-bold px-4 pb-3 pt-5">
              Course Description
            </h2>
            <p className="text-[#0d131c] text-base px-4 pb-3 pt-1">
              {filteredCourse.fullDescription}
            </p>

            {/* Learnings */}
            <h2 className="text-xl font-bold px-4 pb-3 pt-5">
              What You'll Learn
            </h2>
            <div className="px-4">
              {filteredCourse.learningOutcomes?.map((item, index) => (
                <label key={index} className="flex gap-x-3 py-3 flex-row">
                  <input
                    type="checkbox"
                    className="h-5 w-5 border-[#ced9e8] rounded"
                  />
                  <p className="text-[#0d131c] text-base">{item}</p>
                </label>
              ))}
            </div>

            {/* Prerequisites (again if needed) */}
            <h2 className="text-xl font-bold px-4 pb-3 pt-5">Prerequisites</h2>
            <p className="text-[#0d131c] text-base px-4 pb-3 pt-1">
              {filteredCourse.prerequisitesDetails || "None"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applyprogram;
