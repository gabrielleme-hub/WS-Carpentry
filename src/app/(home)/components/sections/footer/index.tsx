/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
export default function Footer() {
  return (
    <footer
      className={twMerge(
        'bg-[#384654] text-white flex flex-col items-center justify-center py-10 px-10 gap-4',
        'md:px-20',
        'lg:px-40',
        '2xl:px-(187px)',
      )}
    >
      <div
        className={twMerge(
          'flex flex-col items-center justify-between w-full mb-[24px] gap-4',
          'md:flex-row',
        )}
      >
        <Image
          src="/Assets/images/logos/Logo-footer.svg"
          alt="logo-footer"
          width={150}
          height={100}
        />
        <p className="copyright text-[14px]">
          ©2025 WS Interior Carpentry LLC
        </p>
      </div>
      <div
        className={twMerge(
          'border-t h-[3px] border-[#E3E7EC] w-full px-10 opacity-20',
          'md:px-20',
          'lg:px-40',
          '2xl:px-(187px)',
        )}
      />
      <div
        className={twMerge(
          'flex flex-col gap-6 items-center justify-between w-full  mt-[24px]',
          'md:flex-row ',
        )}
      >
        <nav className="flex items-center justify-between gap-4 text-[#E3E7EC]">
          <Link
            href="/"
            className="transition duration-300 ease-in-out hover:scale-110 text-[14px]"
          >
            Home
          </Link>
          <Link
            href="/works"
            className="transition duration-300 ease-in-out hover:scale-110 text-[14px]"
          >
            Works
          </Link>
          <Link
            href="/contacts"
            className="transition duration-300 ease-in-out hover:scale-110 text-[14px]"
          >
            Contact
          </Link>
          <Link
            href="/about"
            className="transition duration-300 ease-in-out hover:scale-110 text-[14px]"
          >
            About
          </Link>
        </nav>
        <div className="flex gap-4">
          <Link href="linkedin">
            <img
              src="/Assets/socialMedia/linkdin.svg"
              alt="linkedin"
              className="w-6 h-6 transition duration-300 ease-in-out hover:scale-110"
            />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=61574973485210">
            <img
              src="/Assets/socialMedia/facebook.svg"
              alt="facebook"
              className="w-6 h-6 transition duration-300 ease-in-out hover:scale-110"
            />
          </Link>
          <Link href="https://www.instagram.com/wsinteriorcarpentry/">
            <img
              src="/Assets/socialMedia/instagram.svg"
              alt="instagram"
              className="w-6 h-6 transition duration-300 ease-in-out hover:scale-110"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
