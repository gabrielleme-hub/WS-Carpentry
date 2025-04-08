import { Hammer, Home, Layers, RefreshCw, Ruler } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const specialties = [
  {
    title: 'Rough Carpentry',
    desc: 'Structural work like framing and roofing.',
    icon: <Hammer className="w-15 h-15" />,
  },
  {
    title: 'Finish Carpentry',
    desc: 'Detailed interior work, moldings, and trims.',
    icon: <Ruler className="w-15 h-15" />,
  },
  {
    title: 'Cabinet Making & Woodworking',
    desc: 'Custom cabinets and fine wood furniture.',
    icon: <Layers className="w-15 h-15" />,
  },
  {
    title: 'Framing Carpentry',
    desc: 'Building frameworks for homes and buildings.',
    icon: <Home className="w-15 h-15" />,
  },
  {
    title: 'Remodeling & Restoration',
    desc: 'Renovating and restoring old structures.',
    icon: <RefreshCw className="w-15 h-15" />,
  },
];

export default function Specialties() {
  return (
    <div
      className={twMerge(
        'flex flex-col items-center justify-center w-full px-[40px] py-[60px]',
        'md:w-full md:px-[80px]',
        'lg:w-full lg:px-[165px] items-start ',
        '2xl:px-[187px]',
      )}
    >
      <h1 className="text-[36px]  font-semibold text-[#384654] text-start  mb-[40px] ">
        Crafting Excellence: Our Carpentry Specialties
      </h1>
      <p className="text-[16px] text-[#384654] text-start mb-[80px] max-w-[800px] ">
        At WS Interior Carpentry, we bring expertise and precision to every
        project. From rough carpentry that forms the foundation of structures to
        intricate finish carpentry that adds the perfect touch, our skilled
        craftsmen deliver top-tier results. Whether it’s custom cabinet making,
        home framing, or restoring timeless spaces, we transform wood into
        masterpieces.
      </p>
      <div className=" text-[#384654] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] mb-[60px] ">
        {specialties.map((item, index) => (
          <div
            key={index}
            className={twMerge(
              'flex flex-col  items-center px-10 gap-4 text-center',
              'md:w-full ',
              'lg:w-full lg:px-0 lg:items-start lg:text-start',
              '2xl:px-[187px]',
            )}
          >
            <div className="text-4xl text-[#384654]">{item.icon}</div>
            <h1 className="text-[18px] font-bold mt-2">{item.title}</h1>
            <p className="text-[14px]">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
