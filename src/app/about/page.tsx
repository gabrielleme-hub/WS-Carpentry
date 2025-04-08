import Divider from '@/components/divider';
import Contact from '../(home)/components/sections/contact';
import Footer from '../(home)/components/sections/footer';
import MenuNav from '../(home)/components/sections/menu';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col  bg-white">
      <MenuNav />
      <div
        className={twMerge(
          'bg-[#E3E7EC] flex flex-col items-center justify-center h-[300px] px-10',
          'md:px-20',
          'lg:px-40',
          '2xl:px-[187px]',
        )}
      >
        <h1
          className={twMerge(
            'text-[#384654] text-[36px] font-bold mb-4',
            'md:text:[50px] ',
          )}
        >
          About WS Interior Carpentry
        </h1>
        <p className="text-[#556273] text-[18px] mb-6">
          Discover our story, our journey, and what drives our passion.
        </p>
      </div>
      {/* Journey */}
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
            Our Journey
          </h1>
          <p className="text-[16px] text-[#556273]">
            From humble beginnings to crafting exceptional woodwork, we&apos;ve
            grown through dedication and a commitment to quality.
          </p>
        </div>
        <div
          className={twMerge(
            'flex flex-col items-center justify-around gap-4 bg-[#D3D3D3] rounded-md p-10 mt-[80px]',
            'lg:flex-row ',
            '2xl:gap-10',
          )}
        >
          {[
            {
              year: '2022',
              title: 'Foundation Established',
              description:
                'WS Carpentry was founded with a vision for excellence.',
            },
            {
              year: '2023',
              title: 'Growth and Expansion',
              description:
                'Expanded our team and capabilities to serve more clients.',
            },
            {
              year: '2024',
              title: 'Innovation and Craftsmanship',
              description: 'Introduced new techniques and design approaches.',
            },
            {
              year: '2025',
              title: 'Future Vision',
              description:
                'Looking forward to continuing to build lasting relationships.',
            },
          ].map(({ year, title, description }, index) => (
            <React.Fragment key={index}>
              <div className={twMerge('flex flex-col  gap-4')}>
                <h1 className="text-[16px] font-bold text-[#384654]">{year}</h1>
                <h2 className="text-[16px] font-medium text-[#384654]">
                  {title}
                </h2>
                <p className="text-[12px] text-[#556273]">{description}</p>
              </div>
              {index < 3 && (
                <div
                  className={twMerge(
                    'bg-[#AFAFAF] my-[30px] mx-[30px] h-[1px] w-full',
                    'lg:w-[2px] lg:h-[200px] lg:bg-[#AFAFAF] ',
                  )}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      <Divider />

      {/* Mission, Vision, and Values */}
      <section
        className={twMerge(
          'flex flex-col justify-center text-[#384654] px-10 py-[4%]',
          'md:px-20',
          'lg:px-40',
          '2xl:px-[187px]',
        )}
      >
        <div className="flex flex-col items-start justify-start ">
          <h1 className="text-[#384654] text-[36px] semi-bold mb-[16px]">
            Mission, Vision, and Values
          </h1>
          <p className="text-[16px] mb-[80px] text-[#556273]">
            Our fundamental principles guide every job we do and every
            relationship we build.
          </p>
        </div>
        <div className="flex flex-col items-start justify-start gap-[20px]">
          <h2 className="text-[24px] font-semibold">Mission</h2>
          <p className="text-[#556273]  text-[16px]">
            To craft exceptional, durable, and beautiful woodwork that exceeds
            our clients&apos; expectations, enhancing their spaces with quality
            and elegance.
          </p>
          <h2 className="text-[24px] font-semibold">Vision</h2>
          <p className="text-[#556273] text-[16px]">
            To be recognized as the leading carpentry company, known for our
            innovative designs, superior craftsmanship, and unwavering
            commitment to customer satisfaction.
          </p>
          <h2 className="text-[24px] font-semibold">Values</h2>
          <ul className="list-disc list-inside">
            <li className="text-[#556273]  text-[16px]">
              Quality Craftsmanship: We take pride in our meticulous attention
              to detail.
            </li>
            <li className="text-[#556273]  text-[16px]">
              Integrity: We conduct our business with honesty and transparency.
            </li>
            <li className="text-[#556273]  text-[16px]">
              Innovation: We continuously seek new and creative solutions.
            </li>
            <li className="text-[#556273]  text-[16px]">
              Customer Focus: We prioritize our clients&apos; needs and strive
              to build lasting relationships.
            </li>
            <li className="text-[#556273]  text-[16px]">
              Sustainability: We are committed to responsible and eco-friendly
              practices.
            </li>
          </ul>
        </div>
      </section>

      <Divider />

      {/* Work Line */}
      <section
        className={twMerge(
          'flex flex-col justify-center text-[#384654] px-10 py-[4%]',
          'md:px-20',
          'lg:px-40',
          '2xl:px-[187px]',
        )}
      >
        <div className="flex flex-col items-start justify-start gap-[40px]">
          <h1 className="text-[#384654] text-[36px] font-semibold">
            Work Line
          </h1>
          <p className="text-[16px] text-[#556273] mb-[80px]">
            Explore the range of our woodworking services and specialties.
          </p>
        </div>
        <div
          className={twMerge(
            'flex flex-col gap-10  items-center justify-around ',
            'md:flex-row md:text-center',
          )}
        >
          <div className="flex flex-col items-center justify-center bg-[#384654] w-full h-52 rounded-md gap-[10px]">
            <img
              src="/Assets/workLine/constructionPlanning.svg"
              alt="planning"
              width={100}
              height={100}
            />
            <h1 className="text-[#E3E7EC] text-[24px] font-bold">
              Construction planning
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center bg-[#384654] w-full h-52 rounded-md gap-[10px]">
            <img
              src="/Assets/workLine/payvector.svg"
              alt="planning"
              width={100}
              height={100}
            />
            <h1 className="text-[#E3E7EC] text-[24px] font-bold">
              Acquisition of resources
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center bg-[#384654] w-full h-52 rounded-md gap-[10px]">
            <img
              src="/Assets/workLine/execution.svg"
              alt="planning"
              width={100}
              height={100}
            />
            <h1 className="text-[#E3E7EC] text-[24px] font-bold">
              Implementation
            </h1>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </div>
  );
}
