import { Link } from "react-router";
import courses from "../utils/courses.json";
const Programs = () => {
  return (
    <div className="flex flex-col gap-6 p-4">
      <div className="flex flex-col items-center justify-between">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-[#101419]">Programs</h1>
          <p className="text-base font-normal text-[#5a6e8c]">
            Explore our range of educational programs designed to enhance your
            skills and knowledge.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {courses.map((course, index) => (
            <Link
              to={`/programs/${course.id}`}
              key={index}
              className="flex flex-col gap-3"
            >
              <div key={index} className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{ backgroundImage: `url("${course.image}")` }}
                />
                <div>
                  <p className="text-[#101419] text-base font-medium leading-normal">
                    {course.title}
                  </p>
                  <p className="text-[#5a6e8c] text-sm font-normal leading-normal">
                    {course.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
