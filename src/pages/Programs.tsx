const Programs = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#101419] text-4xl font-black leading-tight tracking-[-0.033em]">
                  Explore Our Courses
                </p>
                <p className="text-[#5a6e8c] text-base font-normal leading-normal">
                  Find a course that suits your career path.
                </p>
              </div>
            </div>
            <div className="flex gap-3 p-3 flex-wrap pr-4">
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#e9ecf1] pl-4 pr-4">
                <p className="text-[#101419] text-sm font-medium leading-normal">
                  All
                </p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#e9ecf1] pl-4 pr-4">
                <p className="text-[#101419] text-sm font-medium leading-normal">
                  Business
                </p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#e9ecf1] pl-4 pr-4">
                <p className="text-[#101419] text-sm font-medium leading-normal">
                  Technology
                </p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#e9ecf1] pl-4 pr-4">
                <p className="text-[#101419] text-sm font-medium leading-normal">
                  Arts
                </p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#e9ecf1] pl-4 pr-4">
                <p className="text-[#101419] text-sm font-medium leading-normal">
                  Science
                </p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#e9ecf1] pl-4 pr-4">
                <p className="text-[#101419] text-sm font-medium leading-normal">
                  Health
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAhy89DqAPidg7oREtzHRiSqmNuQDeSNLQF3kufKaLIcJVU6glLjBYvH74-F5npdtLEdOZ80g3J0T-mLb_SXU-ew5jq8fBA7BcpJ-f0foIp6yJybJCosS0WDUqA1FFU1nKxylk48nca4H74_uoC5sITsSfEjLPMsheoYTgrRxDYGnUniT4Jtg0IA3U_lrcIn2AvksiHEaJO-lT8YutXn24QXVdjw1WfA7I3asbmI8eU-47Q2ty6PnYCwqxl5c86XwegfCadEzlYCGNL")',
                  }}
                ></div>
                <div>
                  <p className="text-[#101419] text-base font-medium leading-normal">
                    Introduction to Business Management
                  </p>
                  <p className="text-[#5a6e8c] text-sm font-normal leading-normal">
                    Learn the basics of business management, including strategy,
                    marketing, and finance.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDL6NtGN0-xKsdDUqhk0eHRd59quMPcFYXMZhJEokVeEvkjbtMNeoBJEDE9jM-d2m10yXzNvOtAiwZvVyuoEdAjXZAI9pins8bbN06h9WfkNyDCZKz3BcEnfvyZTAC3f85olx_tsGFt_SyEPMkwzM1tuSCC7gNjBc5_SC-w1st0ppU-N3H4FsnyYrdG3dAG9LeMiuaj0qmLSYri5a9-Ce8_sxA1H8m8zWx5-jFX-h-I49uglNHLuHgXqvGdEaOp6Lqs50MkRsX-XQ1J")',
                  }}
                ></div>
                <div>
                  <p className="text-[#101419] text-base font-medium leading-normal">
                    Fundamentals of Software Development
                  </p>
                  <p className="text-[#5a6e8c] text-sm font-normal leading-normal">
                    Master the fundamentals of software development, including
                    programming and data structures.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDE3m6wKCOXubCZdyLIV8rDVnz8QATBfOiZEDo5Hx8ZUOJsxjHlvQgmwt4hyGvOH2XCH94k4oTMZpz6oyQ3oe0v65dEfsrdENFQ2HQTZK0YEd7k2aq5gR4BZEx524Y7BafJw3xO_x75VYu3PHzgtI1TRquqbW3LJUX2JsAZ6MlKOOwqqBAbx5xwCHx5vS81wffZGF8_L_psLMg8rGWtvRH2ZrLXYg57g4upDxBhH35NDpZ3-Ny-dtTqPIVpeW0Gt4ei4mCUokSFZiNc")',
                  }}
                ></div>
                <div>
                  <p className="text-[#101419] text-base font-medium leading-normal">
                    Digital Art and Design Basics
                  </p>
                  <p className="text-[#5a6e8c] text-sm font-normal leading-normal">
                    Explore the basics of digital art and design, including
                    graphic design and illustration.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD50LQSk0C_h_qsVwSShS41SoDEY-COhyI41FOHXRII9pdUE2cvOl3JkMoJ9_PKDAqoQMthrS2dmpM35Q83UQEmCBV797mo5TMIEe3QCFPrb5l8az3VU1uFnRYAoKXwvo_7uzzHYOQp1q4YLijmQu5ft7OO5e3DlPjvUMXu7oUBzjZntx21dyuSREU7du1PbLgsOipwhucvJb1weBo2N8e_zeTv3OMkwm6qKeP_xkA0lZANcVHpGLp4WQeL5p52jHABu9uxEikSFO-O")',
                  }}
                ></div>
                <div>
                  <p className="text-[#101419] text-base font-medium leading-normal">
                    Advanced Biology Concepts
                  </p>
                  <p className="text-[#5a6e8c] text-sm font-normal leading-normal">
                    Dive into advanced biology concepts, including genetics and
                    molecular biology.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB5puWpZf-arxe1KpWOicG7sPIwqCNB51OwvPZnajYGpDJ0DnXsbjcJMP-lpbDIjpQeVVTXII2QSECWqEtKPi9aMdAw3n4R1ekb0tODg-xhjAda2kMbNAlEX7-mINnaG2CiODwPqbqJkqZxXXFpd__8OBPkdXVM0Y9-EX_jQUJy-GiAsPFFWQIaAOfe2cpgLcWzZ6W3faekdnCSc5UU3AMkOVeZOvzdD_Yn15Fw-o-YyyZH509g1XrKWRCbKHPlKalRQXs3SY6JNWgu")',
                  }}
                ></div>
                <div>
                  <p className="text-[#101419] text-base font-medium leading-normal">
                    Healthcare Management Essentials
                  </p>
                  <p className="text-[#5a6e8c] text-sm font-normal leading-normal">
                    Understand the essentials of healthcare management,
                    including operations and finance.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCd8BZm2ne0sZkY5VqlbQ4dLN5jMzEp5u7tLQ32ybY9TJwr-SCoThyQqX49g5VyLBMV9G6YlmyK0_C1IO_ZH1hDuz02mToytXdKXhbN_k2UylRT2iwoRD0YWSOD5oqgpbCysF8uEdduuT9CYnkEQY70mE0s-M065xml6y0A4JBkVQfX6VvhVP4-KFqOsChJkumS2a3BhGLQ306FeHntyAplauWWVsBckw13Xho-PUc9g70hYOSD2sxbJ-cTsoxivGL_tjA94Y1j08zm")',
                  }}
                ></div>
                <div>
                  <p className="text-[#101419] text-base font-medium leading-normal">
                    Creative Writing Workshop
                  </p>
                  <p className="text-[#5a6e8c] text-sm font-normal leading-normal">
                    Develop your creative writing skills through workshops and
                    feedback sessions.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center p-4">
              <a href="#" className="flex size-10 items-center justify-center">
                <div
                  className="text-[#101419]"
                  data-icon="CaretLeft"
                  data-size="18px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
                  </svg>
                </div>
              </a>
              <a
                className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-[#101419] rounded-full bg-[#e9ecf1]"
                href="#"
              >
                1
              </a>
              <a
                className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#101419] rounded-full"
                href="#"
              >
                2
              </a>
              <a
                className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#101419] rounded-full"
                href="#"
              >
                3
              </a>
              <a
                className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#101419] rounded-full"
                href="#"
              >
                4
              </a>
              <a
                className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#101419] rounded-full"
                href="#"
              >
                5
              </a>
              <a href="#" className="flex size-10 items-center justify-center">
                <div
                  className="text-[#101419]"
                  data-icon="CaretRight"
                  data-size="18px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
