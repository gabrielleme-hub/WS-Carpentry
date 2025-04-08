import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

export default function MyWorks() {
  return (
    <div
      className={twMerge(
        ' w-full mt-12 flex flex-col items-center justify-center px-10 py-[60px]',
        ' md:px-20 ',
        ' lg:px-41 ',
        ' 2xl:px-(187px) ',
      )}
    >
      <div className="bg-white w-full  ">
        <h2 className="text-[#384654] text-[36px]  font-semibold mb-[40px]">
          Latest Works
        </h2>
        <p className="text-[#384654] text-[16px] mb-[80px]">
          Below you can see my most recent works.
        </p>
        <div className="flex flex-col justify-around items-center gap-4 ">
          <div
            className={twMerge(
              'flex flex-col items-center w-full justify-around gap-4 mb-[80px] ',
              'md:flex-row justify-around   ',
            )}
          >
            <div className="bg-gray-400 w-full h-52  rounded-md "></div>
            <div className="bg-gray-400 w-full h-52  rounded-md "></div>
            <div className="bg-gray-400 w-full h-52  rounded-md "></div>
            <div className="bg-gray-400 w-full h-52  rounded-md "></div>
          </div>
          <Link
            href="/works"
            className="flex items-center justify-center bg-[#384654] text-white py-2 px-4 rounded-[8px]  mx-auto
             w-[200px] h-[40px] hover:bg-[#556273] transition duration-300 ease-in-out text-[14px] font-bold md:text-base"
          >
            Visit Works
          </Link>
        </div>
      </div>
    </div>
  );
}
