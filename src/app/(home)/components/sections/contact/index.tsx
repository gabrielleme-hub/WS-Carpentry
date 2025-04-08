import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

export default function Contact() {
  return (
    <div className="bg-[#E3E7EC] w-full flex flex-col items-center justify-center h-[350px] py-[60px] gap-[40px]">
      <h2 className="text-[#384654] text-[36px] font-bold  text-center ">
        Get in touch today!
      </h2>
      <p
        className={twMerge(
          'text-[#384654]  text-center text-[16px] px-10',
          'md:px-20',
          'lg:px-40',
          '2xl:px-[187px]',
        )}
      >
        For more information about our services, please contact us.
      </p>
      <button
        className="flex items-center justify-center bg-[#384654] text-white py-2 px-4 rounded-[8px]  mx-auto
      w-[200px] h-[40px] hover:bg-[#556273] transition duration-300 ease-in-out text-[14px] font-bold md:text-base"
      >
        <Link href="sms:+1 (732) 210-7667">Send SMS</Link>
      </button>
    </div>
  );
}
