import Image from 'next/image';
import Link from 'next/link';
import { works } from '@/servicess/api/works';
import { Work } from '@/types/api/works';

interface WorkDetailsPageParams {
  id: string;
}
export default async function WorkDetailsPage({
  params,
}: {
  params: Promise<WorkDetailsPageParams>;
}) {
  const { id: workId } = await params;

  const selectedWork: Work | undefined = works.find(
    (work) => work.id === workId,
  );

  if (!selectedWork) {
    return (
      <div className="flex items-center justify-center flex-grow">
        <p className="text-xl font-bold">Project not found.</p>
      </div>
    );
  }
  return (
    <div className="px-10 py-[60px] md:px-20 lg:px-40 2xl:px-[187px]">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="bg-white w-full">
          <h2 className="text-[#384654] text-[36px] font-semibold mb-[40px]">
            {selectedWork.title}
          </h2>
          <p className="text-[#556273] text-[16px] mb-[40px]">
            {selectedWork.description}
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {selectedWork.imagens.map((imagem: string) => (
              <div
                key={imagem}
                className="relative w-full h-[200px] md:h-[300px] rounded-md overflow-hidden"
              >
                <Image
                  src={imagem}
                  alt={selectedWork.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
          <Link
            href="/works"
            className="mt-10 inline-block bg-[#384654] text-white py-3 px-6 rounded-md hover:bg-[#556273]"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
