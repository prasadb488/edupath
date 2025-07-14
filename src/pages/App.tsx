import Footer from "../Components/common/Footer";
import data from "../utils/data.json";
import HomeCardComponet from "../Components/HomePageComponets/HomeCardComponet";
import type { CourseType } from "../types/Types";
import Carousel from "../Components/HomePageComponets/Carousel";

function App() {
  return (
    <>
      <div className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <Carousel />

              {/* <div className="@container">
                <div className="@[480px]:p-4">
                  <div
                    className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBMTZI1tbZafKp6VM-yvIFd9oE4kLaqMnWQEej4xShl8tzVVNKrIPaWVOd09WT5DZM7s0vcDr6fL7CCZ3__r8XuJMzXXD1NYug38L-fTvEQoPtxurx1y8qkzY-p_xKFMq-QzHmqr-49TDOK0WNDKTtdO-28mkjQOEOa2dv5IjXrPDL9yekXY9Gc-T-nITBYUAH0tJ_xffgfDg3ngI6o8-d8Wpb7f_Tx0DfzyI4zO5HJH1nFw_L0tgeS3feAlM8BEJiqJZTkqmxSvAzZ")',
                    }}
                  >
                    <div className="flex flex-col gap-2 text-center">
                      <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                        Advance Your Career with Online Programs from Top
                        Instructors
                      </h1>
                      <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                        Flexible, accredited, and career-focused programs
                        designed to fit your life and help you achieve your
                        professional goals.
                      </h2>
                    </div>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1978e5] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                      <span className="truncate">Explore Programs</span>
                    </button>
                  </div>
                </div>
              </div> */}
              <h3 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                Trusted by 50+ institutions worldwide
              </h3>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                <div className="flex flex-col gap-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        'url("https://i.pinimg.com/736x/a4/c1/d6/a4c1d6b57a63155dd2cfd6c025078bae.jpg")',
                    }}
                  ></div>
                </div>
                <div className="flex flex-col gap-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        'url("https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/1200px-Indian_Institute_of_Technology_Bombay_Logo.svg.png")',
                    }}
                  ></div>
                </div>
                <div className="flex flex-col gap-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOX3d_fkWmqeHwv1x2KIMnrt9Y-KcN8DDVf_XCEgLkofT5-BHejojXtO8oufCgxTVYVVI&usqp=CAU")',
                    }}
                  ></div>
                </div>
                <div className="flex flex-col gap-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        'url("https://i.ytimg.com/vi/LXgktisMdHk/hqdefault.jpg")',
                    }}
                  ></div>
                </div>
                <div className="flex flex-col gap-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs2JoLLmjfdYZ2Twavh6nDP0ooCeayukb0Ww&s")',
                    }}
                  ></div>
                </div>
              </div>
              <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                How It Works
              </h2>
              <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
                <div className="flex flex-col items-center gap-1 pt-3">
                  <div
                    className="text-[#0e141b]"
                    data-icon="TextHThree"
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
                      <path d="M152,56V176a8,8,0,0,1-16,0V124H48v52a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v52h88V56a8,8,0,0,1,16,0Zm73.52,90.63,21-30A8,8,0,0,0,240,104H192a8,8,0,0,0,0,16h32.63l-19.18,27.41A8,8,0,0,0,212,160a20,20,0,1,1-14.29,34,8,8,0,1,0-11.42,11.19A36,36,0,0,0,248,180,36.07,36.07,0,0,0,225.52,146.63Z"></path>
                    </svg>
                  </div>
                  <div className="w-[1.5px] bg-[#d0dbe7] h-2 grow"></div>
                </div>
                <div className="flex flex-1 flex-col pt-3 pb-5">
                  <p className="text-[#0e141b] text-base font-medium leading-normal">
                    Discover Programs
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-[1.5px] bg-[#d0dbe7] h-2"></div>
                  <div
                    className="text-[#0e141b]"
                    data-icon="TextHThree"
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
                      <path d="M152,56V176a8,8,0,0,1-16,0V124H48v52a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v52h88V56a8,8,0,0,1,16,0Zm73.52,90.63,21-30A8,8,0,0,0,240,104H192a8,8,0,0,0,0,16h32.63l-19.18,27.41A8,8,0,0,0,212,160a20,20,0,1,1-14.29,34,8,8,0,1,0-11.42,11.19A36,36,0,0,0,248,180,36.07,36.07,0,0,0,225.52,146.63Z"></path>
                    </svg>
                  </div>
                  <div className="w-[1.5px] bg-[#d0dbe7] h-2 grow"></div>
                </div>
                <div className="flex flex-1 flex-col pt-3 pb-5">
                  <p className="text-[#0e141b] text-base font-medium leading-normal">
                    Apply Online
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-[1.5px] bg-[#d0dbe7] h-2"></div>
                  <div
                    className="text-[#0e141b]"
                    data-icon="TextHFour"
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
                      <path d="M152,56V176a8,8,0,0,1-16,0V124H48v52a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v52h88V56a8,8,0,0,1,16,0Zm96,112h-8V144a8,8,0,0,0-16,0v24H195.1l20.49-61.47a8,8,0,0,0-15.18-5.06l-24,72A8,8,0,0,0,184,184h40v24a8,8,0,0,0,16,0V184h8a8,8,0,0,0,0-16Z"></path>
                    </svg>
                  </div>
                  <div className="w-[1.5px] bg-[#d0dbe7] h-2 grow"></div>
                </div>
                <div className="flex flex-1 flex-col pt-3 pb-5">
                  <p className="text-[#0e141b] text-base font-medium leading-normal">
                    Get Approved
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-[1.5px] bg-[#d0dbe7] h-2"></div>
                  <div
                    className="text-[#0e141b]"
                    data-icon="TextHThree"
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
                      <path d="M152,56V176a8,8,0,0,1-16,0V124H48v52a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v52h88V56a8,8,0,0,1,16,0Zm73.52,90.63,21-30A8,8,0,0,0,240,104H192a8,8,0,0,0,0,16h32.63l-19.18,27.41A8,8,0,0,0,212,160a20,20,0,1,1-14.29,34,8,8,0,1,0-11.42,11.19A36,36,0,0,0,248,180,36.07,36.07,0,0,0,225.52,146.63Z"></path>
                    </svg>
                  </div>
                  <div className="w-[1.5px] bg-[#d0dbe7] h-2 grow"></div>
                </div>
                <div className="flex flex-1 flex-col pt-3 pb-5">
                  <p className="text-[#0e141b] text-base font-medium leading-normal">
                    Learn at Your Pace
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1 pb-3">
                  <div className="w-[1.5px] bg-[#d0dbe7] h-2"></div>
                  <div
                    className="text-[#0e141b]"
                    data-icon="TextHThree"
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
                      <path d="M152,56V176a8,8,0,0,1-16,0V124H48v52a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v52h88V56a8,8,0,0,1,16,0Zm73.52,90.63,21-30A8,8,0,0,0,240,104H192a8,8,0,0,0,0,16h32.63l-19.18,27.41A8,8,0,0,0,212,160a20,20,0,1,1-14.29,34,8,8,0,1,0-11.42,11.19A36,36,0,0,0,248,180,36.07,36.07,0,0,0,225.52,146.63Z"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-1 flex-col pt-3 pb-5">
                  <p className="text-[#0e141b] text-base font-medium leading-normal">
                    Earn a Certificate
                  </p>
                </div>
              </div>
              <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Explore Our Most Popular Programs
              </h2>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                {(data as CourseType[]).map((course) => (
                  <HomeCardComponet key={course.id} course={course} />
                ))}
              </div>
              <div className="flex px-4 py-3 justify-center">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#e7edf3] text-[#0e141b] text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">See All Programs</span>
                </button>
              </div>
              <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Success Stories
              </h2>
              <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden">
                <div className="flex items-stretch p-4 gap-3">
                  <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                      style={{
                        backgroundImage: `url('https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg')`,
                      }}
                    ></div>
                    <div>
                      <p className="text-[#0e141b] text-base font-medium leading-normal">
                        "This program transformed my career!"
                      </p>
                      <p className="text-[#4e7097] text-sm font-normal leading-normal">
                        - Sarah Chen, Data Science Fundamentals
                      </p>
                    </div>
                  </div>

                  <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                      style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=600&q=60')`,
                      }}
                    ></div>
                    <div>
                      <p className="text-[#0e141b] text-base font-medium leading-normal">
                        "The flexibility was perfect for my busy schedule."
                      </p>
                      <p className="text-[#4e7097] text-sm font-normal leading-normal">
                        - David Lee, Project Management Professional
                      </p>
                    </div>
                  </div>

                  <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                      style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=600&q=60')`,
                      }}
                    ></div>
                    <div>
                      <p className="text-[#0e141b] text-base font-medium leading-normal">
                        "I highly recommend this program to anyone looking to
                        upskill."
                      </p>
                      <p className="text-[#4e7097] text-sm font-normal leading-normal">
                        - Maria Rodriguez, Digital Marketing Mastery
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="@container">
                <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
                  <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-[#0e141b] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                      Ready to Start Learning?
                    </h1>
                  </div>
                  <div className="flex flex-1 justify-center">
                    <div className="flex justify-center">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1978e5] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow">
                        <span className="truncate">Apply Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
export default App;
