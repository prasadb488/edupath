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
                      'url("https://www.iqacademy.ac.za//wp-content/uploads/2021/07/sc-ibm.jpg")',
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
                      'url("https://img.wazobia.tech/https://sytbuildr.s3.eu-west-2.amazonaws.com/0406191c-f351-4a58-b164-b9521b3d78c5/SzB3tcglqH5ka2LpdqEFpGNHsgrR91iFhkQ08bQS.jpg?tr=w-1500")',
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
                      'url("https://pixlr.com/blog/wp-content/uploads/2021/04/Beginners-Guide-to-Digital-Art-Design-1170px-x-620px.png")',
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
                      'url("https://www.kgsorkney.com/uploads/1/4/9/3/14935550/editor/6526463.jpg?1615305717")',
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
                      'url("https://cdn.slidesharecdn.com/ss_thumbnails/creativewritingworkshopbyslidesgo-221114111412-c4900898-thumbnail.jpg?width=640&height=640&fit=bounds")',
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
