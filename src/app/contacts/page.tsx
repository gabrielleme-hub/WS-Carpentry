import Link from 'next/link';
import MenuNav from '../(home)/components/sections/menu';
import Divider from '@/components/divider';
import Contact from '../(home)/components/sections/contact';
import Footer from '../(home)/components/sections/footer';
import MapWithRadius from './maps/componets';
import { twMerge } from 'tailwind-merge';

export default function ContactsPage() {
  return (
    <div className="flex min-h-screen flex-col  bg-white">
      <MenuNav />
      <div
        className={twMerge(
          'bg-[#E3E7EC] flex flex-col items-center justify-center h-[300px] py-[60px] px-10',
          'md:px-20 ',
          ' lg:px-40 ',
          ' 2xl:px-(187px) ',
        )}
      >
        <h1 className="text-[#384654] text-[50px] font-bold mb-[12px]">
          Contact Us
        </h1>
        <p className="text-[#556273] text-center text-[18px] ">
          We&apos;re here to help. Choose the contact channel that best suits
          your needs.
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
        <div className="flex flex-col items-start justify-start gap-[40px]">
          <h1 className="text-[#384654] text-[36px] font-semibold">
            Our Contact Channels
          </h1>
          <p className="text-[16px] text-[#556273] ">
            Use the following channels to speak directly with our team.
            We&apos;re ready to answer your questions and provide support.
          </p>
        </div>
        <div
          className={twMerge(
            'flex flex-col items-center justify-center gap-4 bg-[#D3D3D3] rounded-md p-10 mt-[80px]',
            'md:flex-row',
          )}
        >
          <div className="flex flex-col items-center justify-center gap-[12px]">
            <img src="/Assets/socialMedia/sms.svg" alt="sms" />
            <h1 className="text-[#384654] text-[24px] font-medium">SMS</h1>
            <p className="text-[#384654] text-[16px]">(732) 210-7667</p>
            <button className="flex items-center justify-center bg-[#384654] text-[#E3E7EC] py-2 px-4 rounded w-[144px] mx-auto h-[30px] hover:bg-[#556273] transition duration-300 ease-in-out text-[12px] font-bold md:text-base">
              <Link href="sms:+1 (732) 210-7667">Send</Link>
            </button>
          </div>
          <div
            className={twMerge(
              'bg-[#AFAFAF] my-[30px] mx-[30px] h-[1px] w-full',
              'lg:w-[2px] lg:h-[200px] lg:bg-[#AFAFAF] ',
            )}
          />
          <div className="flex flex-col items-center justify-center gap-[12px]">
            <img src="/Assets/socialMedia/instagram-azul.svg" alt="instagram" />
            <h1 className="text-[#384654] text-[24px] font-medium">
              Instagram
            </h1>
            <p className="text-[#384654] text-[16px]">@wsinteriorcarpentry</p>
            <button className="flex items-center justify-center bg-[#384654] text-[#E3E7EC] py-2 px-4 rounded w-[180px] mx-auto h-[30px] hover:bg-[#556273] transition duration-300 ease-in-out text-[12px] font-bold md:text-base">
              <Link
                href="https://www.instagram.com/wsinteriorcarpentry"
                target="_blank"
                rel="noreferrer"
              >
                Visit
              </Link>
            </button>
          </div>
          <div
            className={twMerge(
              'bg-[#AFAFAF] my-[30px] mx-[30px] h-[1px] w-full',
              'lg:w-[2px] lg:h-[200px] lg:bg-[#AFAFAF] ',
            )}
          />
          <div className="flex flex-col items-center justify-center gap-[12px]">
            <img src="/Assets/socialMedia/email.svg" alt="e-mail" />
            <h1 className="text-[#384654] text-[24px] font-medium">E-mail</h1>
            <p className="text-[#384654] text-[16px]">
              wsinteriorcarpentry@gmail.com
            </p>
            <button className="flex items-center justify-center bg-[#384654] text-[#E3E7EC] py-2 px-4 rounded w-[144px] mx-auto h-[30px] hover:bg-[#556273] transition duration-300 ease-in-out text-[12px] font-bold md:text-base">
              <Link href="mailto:wsinteriorcarpentry@gmail.com">Send</Link>
            </button>
          </div>
        </div>
      </section>
      <Divider />
      <section
        className={twMerge(
          'flex flex-col justify-center text-[#384654] px-10 py-[60px]',
          'md:px-20',
          'lg:px-40',
          '2xl:px-[187px]',
        )}
      >
        <div className="flex flex-col items-start justify-start gap-[40px]">
          <h1 className="text-[#384654] text-[36px] font-semibold">
            Service Area
          </h1>
          <p className="text-[16px] text-[#384654] mb-[80px]">
            We serve a 100km radius from South River, New Jersey. Check our
            coverage area on the map.
          </p>
        </div>

        <MapWithRadius />
      </section>
      <Contact />
      <Footer />
    </div>
  );
}
