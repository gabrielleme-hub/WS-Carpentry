import { Work } from '@/types/api/works';
import Image from 'next/image';

export function WorksList(work: Work) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {work?.imagens.map((imagem: string) => (
        <div
          key={imagem}
          className="relative w-full h-[200px] md:h-[300px] rounded-md overflow-hidden"
        >
          <Image
            src={imagem}
            alt={work.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
      ))}
    </div>
  );
}
