import type { CourseType } from "../../types/CourseType"

const HomeCardComponet = ({course}:{course:CourseType}) => {
  return (
    <div className="flex flex-col gap-3 pb-3" key={course.id}>
    <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl" style={{backgroundImage: `url(${course.thumbnail})`}}>
    </div>
    <div>
      <p className="text-[#0e141b] text-base font-medium leading-normal">{course.title}</p>
      <p className="text-[#4e7097] text-sm font-normal leading-normal">{course.category}</p>
      <p className="text-[#4e7097] text-sm font-normal leading-normal">{course.duration}</p>
    </div>
  </div>
  )
}

export default HomeCardComponet