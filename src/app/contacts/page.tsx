import Link from 'next/link';
import MenuNav from '../(home)/components/sections/menu';
import DividerVertical from '@/components/divider/dividerVertical';
import Divider from '@/components/divider';
import Contact from '../(home)/components/sections/contact';
import Footer from '../(home)/components/sections/footer';
import MapWithRadius from './maps/componets';

export default function ContactsPage() {
  return (
    <div className="flex min-h-screen flex-col  bg-white">
      <MenuNav />
      <div className="bg-[#E3E7EC] flex flex-col items-center justify-center h-[300px] py-[60px]">
        <h1 className="text-[#384654] text-[50px] font-bold mb-[12px]">
          Contact Us
        </h1>
        <p className="text-[#556273] text-[18px] ">
          We&apos;re here to help. Choose the contact channel that best suits
          your needs.
        </p>
      </div>

      <section className="flex flex-col justify-center text-[#384654] px-[165px] py-[60px]">
        <div className="flex flex-col items-start justify-start gap-[40px]">
          <h1 className="text-[#384654] text-[36px] font-semibold">
            Our Contact Channels
          </h1>
          <p className="text-[16px] text-[#556273] ">
            Use the following channels to speak directly with our team.
            We&apos;re ready to answer your questions and provide support.
          </p>
        </div>
        <div className="flex flex-row items-center justify-center gap-4 bg-[#D3D3D3] rounded-md px-[60px]  py-[40px] mt-[80px]">
          <div className="flex flex-col items-center justify-center gap-[12px]">
            <img src="/Assets/socialMedia/sms.svg" alt="sms" />
            <h1 className="text-[#384654] text-[24px] font-medium">SMS</h1>
            <p className="text-[#384654] text-[16px]">(732) 210-7667</p>
            <button className="flex items-center justify-center bg-[#384654] text-[#E3E7EC] py-2 px-4 rounded w-[144px] mx-auto h-[30px] hover:bg-[#556273] transition duration-300 ease-in-out text-[12px] font-bold md:text-base">
              <Link href="sms:+1 (732) 210-7667">Send</Link>
            </button>
          </div>
          <DividerVertical />
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
          <DividerVertical />
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
      <section className="flex flex-col justify-center text-[#384654] px-[165px] py-[60px]">
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
