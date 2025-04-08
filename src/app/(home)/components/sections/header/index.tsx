import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

export function Header() {
  return (
    <main
      className={'flex-1 bg-cover bg-center bg-no-repeat w-full h-[600px]'}
      style={{
        backgroundImage: `url('/Assets/images/logos/foto2.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className={'mt-16 mb-16'}>
        <div
          className={twMerge(
            'flex flex-col items-center gap-4',
            'md:gap-6 md:h-auto md:h-[350px] md:w-full md:max-w-full md:max-w-[800px]',
            'lg:gap-6 lg:h-auto lg:h-[350px] lg:w-full lg:max-w-full lg:max-w-[950px]',
            '2xl:gap-6 2xl:h-auto 2xl:h-[350px] 2xl:w-full 2xl:max-w-full 2xl:max-w-[1000px]',
          )}
        >
          <h1
            className={twMerge(
              'text-[46px] leading-[48px] font-semibold tracking-wide text-[#384654] text-start px-10',
              'md:text-[48px] md:leading-[52px] md:tracking-wider md:px-20',
              'lg:text-[50px] lg:leading-[54px] lg:tracking-widest lg:px-40',
              '2xl:text-[52px] 2xl:leading-[56px] 2xl:tracking-widest 2xl:px-(187px) ]',
            )}
          >
            Custom Woodworking & Interior Design | South River & Region
          </h1>
          <p
            className={twMerge(
              'text-[16px] leading-[18px] tracking-wide text-[#384654]  px-10 text-start',
              'md:text-[18px] md:leading-[20px] md:px-20',
              'lg:text-[20px] lg:leading-[22px] lg:px-40',
              '2xl:text-[22px] 2xl:leading-[24px] 2xl:px-(187px)',
            )}
          >
            Serving South River, NJ, and surrounding areas, we specialize in
            bespoke furniture and innovative interior transformations. With a
            focus on sustainable techniques, WS Interior Carpentry delivers
            tailored wood solutions for every space, from unique furniture to
            custom coverings.
          </p>
          <div
            className={twMerge(
              'flex flex-col gap-4 ',
              'md:flex-row md:gap-4 md:px20',
              'lg:px-40',
              '2xl:px-(187px)',
            )}
          >
            <Link
              href="/contacts"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#384654] rounded-lg py-2 px-6 flex items-center justify-center text-white text-[14px] font-bold hover:bg-[#556273] transition duration-300 ease-in-out"
            >
              Contact Us
            </Link>
            <Link
              href="/about"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg px-6 py-2 border-2 border-[#384654] flex items-center justify-center text-[14px] text-[#384654] font-bold hover:bg-[#faf6f6] transition duration-300 ease-in-out"
            >
              About Our Services
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
