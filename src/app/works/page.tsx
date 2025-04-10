'use client';
import { twMerge } from 'tailwind-merge';
import Contact from '../(home)/components/sections/contact';
import Link from 'next/link';
import { works } from '@/services/api/works';

export default function WorksPage() {
  return (
    <>
      <div
        className={twMerge(
          'bg-[#E3E7EC] flex flex-col items-center justify-center h-[300px] px-10 py-[60px]',
          'md:px-20 ',
          ' lg:px-40 ',
          ' 2xl:px-(187px) ',
        )}
      >
        <h1 className="text-[#384654] text-center text-[50px] font-bold mb-[13px]">
          Our Recent Projects
        </h1>
        <p className="text-[#556273] text-center text-[18px]">
          Explore our latest work and see the impact we&apos;ve made.
        </p>
      </div>
      <section
        className={twMerge(
          'flex flex-col justify-center text-[#384654] px-10 py-[60px]',
          'md:px-20 ',
          ' lg:px-40 ',
          ' 2xl:px-(187px) ',
        )}
      >
        <div className=" w-full flex flex-col items-center justify-center">
          <div className="bg-white w-full ">
            <h2 className="text-[#384654] text-[36px] font-semibold mb-[40px]">
              Featured Works
            </h2>
            <p className="text-[#556273] text-[16px] mb-[80px]">
              Discover a selection of our most recent and impactful projects.
            </p>
            <div>
              <div
                className={twMerge(
                  'grid grid-cols-1 gap-25',
                  'md:grid-cols-2',
                  'lg:grid-cols-3',
                )}
              >
                {works.map((project) => (
                  <div
                    key={project.id}
                    className="flex flex-col justify-center gap-[13px] "
                  >
                    <div
                      className="bg-gray-400 w-[300px] h-[200px]  rounded-md "
                      style={{
                        backgroundImage: `url(${project.coverImage})`,
                        backgroundSize: 'cover',
                      }}
                    />
                    <h1 className="text-[24px] font-bold">{project.title}</h1>
                    <Link
                      href={`/works/${project.id}`}
                      className="flex items-center justify-center bg-[#384654] text-white py-2 px-4 rounded-[6px] w-[300px]  h-[28px] hover:bg-[#556273] transition duration-300 ease-in-out text-[12px] font-bold md:text-base"
                    >
                      View Project
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}
