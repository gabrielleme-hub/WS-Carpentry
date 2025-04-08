import Contact from '../(home)/components/sections/contact';
import Footer from '../(home)/components/sections/footer';
import MenuNav from '../(home)/components/sections/menu';

export default function WorksPage() {
  return (
    <div className="flex min-h-screen flex-col  bg-white">
      <MenuNav />
      <div className="bg-[#E3E7EC] flex flex-col items-center justify-center h-[300px] py-[60px]">
        <h1 className="text-[#384654] text-[50px] font-bold mb-[13px]">
          Our Recent Projects
        </h1>
        <p className="text-[#556273] text-[18px]">
          Explore our latest work and see the impact we&apos;ve made.
        </p>
      </div>
      <section className="flex flex-col justify-center text-[#384654] px-[165px] py-[60px]">
        <div className=" w-full flex flex-col items-center justify-center">
          <div className="bg-white w-full ">
            <h2 className="text-[#384654] text-[36px] font-semibold mb-[40px]">
              Featured Works
            </h2>
            <p className="text-[#556273] text-[16px] mb-[80px]">
              Discover a selection of our most recent and impactful projects.
            </p>
            <div>
              <div className="grid grid-cols-3 gap-[100px]">
                {/* Project 1 */}
                <div className="flex flex-col justify-center gap-[13px] ">
                  <div className="bg-gray-400 w-[300px] h-[200]  rounded-md " />
                  <h1 className="text-[24px] font-bold">Project 1</h1>
                  <button className="flex items-center justify-center bg-[#384654] text-white py-2 px-4 rounded-[6px] w-[300px]  h-[28px] hover:bg-[#556273] transition duration-300 ease-in-out text-[12px] font-bold md:text-base">
                    View Project
                  </button>
                </div>
                {/* Project 2 */}
                <div className="flex flex-col justify-center gap-[13px] ">
                  <div className="bg-gray-400 w-[300px] h-[200]  rounded-md " />
                  <h1 className="text-[24px] font-bold">Project 2</h1>
                  <button className="flex items-center justify-center bg-[#384654] text-white py-2 px-4 rounded-[6px] w-[300px]  h-[28px] hover:bg-[#556273] transition duration-300 ease-in-out text-[12px] font-bold md:text-base">
                    View Project
                  </button>
                </div>
                {/* Project 3 */}
                <div className="flex flex-col justify-center gap-[13px] ">
                  <div className="bg-gray-400 w-[300px] h-[200]  rounded-md " />
                  <h1 className="text-[24px] font-bold">Project 3</h1>
                  <button className="flex items-center justify-center bg-[#384654] text-white py-2 px-4 rounded-[6px] w-[300px]  h-[28px] hover:bg-[#556273] transition duration-300 ease-in-out text-[12px] font-bold md:text-base">
                    View Project
                  </button>
                </div>
                {/* Project 4 */}
                <div className="flex flex-col justify-center gap-[13px] ">
                  <div className="bg-gray-400 w-[300px] h-[200]  rounded-md " />
                  <h1 className="text-[24px] font-bold">Project 4</h1>
                  <button className="flex items-center justify-center bg-[#384654] text-white py-2 px-4 rounded-[6px] w-[300px]  h-[28px] hover:bg-[#556273] transition duration-300 ease-in-out text-[12px] font-bold md:text-base">
                    View Project
                  </button>
                </div>
                {/* Project 5 */}
                <div className="flex flex-col justify-center gap-[13px] ">
                  <div className="bg-gray-400 w-[300px] h-[200]  rounded-md " />
                  <h1 className="text-[24px] font-bold">Project 5</h1>
                  <button className="flex items-center justify-center bg-[#384654] text-white py-2 px-4 rounded-[6px] w-[300px]  h-[28px] hover:bg-[#556273] transition duration-300 ease-in-out text-[12px] font-bold md:text-base">
                    View Project
                  </button>
                </div>
                {/* Project 6 */}
                <div className="flex flex-col justify-center gap-[13px] ">
                  <div className="bg-gray-400 w-[300px] h-[200]  rounded-md " />
                  <h1 className="text-[24px] font-bold">Project 6 </h1>
                  <button className="flex items-center justify-center bg-[#384654] text-white py-2 px-4 rounded w-[300px]  h-[28px] hover:bg-[#556273] transition duration-300 ease-in-out text-[12px] font-bold md:text-base">
                    View Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </div>
  );
}
