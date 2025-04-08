'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
export default function MenuNav() {
  const router = useRouter();
  const handleLogoClick = () => {
    router.push('/');
  };
  return (
    <header
      className={twMerge(
        // static styles
        'flex flex-col  justify-center  items-center py-4 gap-4',
        'md:justify-between',
        'lg:px-40 lg:flex-row ',
        '2xl:mx-(187px) 2xl:flex-row  ',
      )}
    >
      <Image
        src="/Assets/images/logos/logo-header.svg"
        alt="logo-header"
        width={140}
        height={150}
        onClick={handleLogoClick}
        className="cursor-pointer transition duration-300 ease-in-out hover:scale-105"
      />
      <nav className="flex gap-6 text-[#384654]">
        <Link
          href="/"
          className="text-[14px] font-semibold transition duration-300 ease-in-out hover:scale-110"
        >
          Home
        </Link>
        <Link
          href="/works"
          className="text-[14px] font-semibold transition duration-300 ease-in-out hover:scale-110"
        >
          Works
        </Link>
        <Link
          href="/contacts"
          className="text-[14px] font-semibold transition duration-300 ease-in-out hover:scale-110"
        >
          Contact
        </Link>
        <Link
          href="/about"
          className="text-[14px] font-semibold transition duration-300 ease-in-out hover:scale-110"
        >
          About
        </Link>
      </nav>
    </header>
  );
}
