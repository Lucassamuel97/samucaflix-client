import Image from 'next/image';


type MovieRowProps = {
  sectionTitle: string;
};

type MovieCardProps = {
  index: number;
};

const MovieCard = ({ index }: MovieCardProps) => {
  return (
    <div
      className='group relative h-28 min-w-[200px] transform bg-gradient-to-t from-transparent to-black transition duration-200 ease-in hover:z-50 hover:scale-110 md:h-48 md:min-w-[300px] lg:h-64 lg:min-w-[400px]'
    >
      <Image
        src={`/item_${index}.png`}
        alt={`Thumbnail ${index}`}
        width={200}
        height={100}
        className='rounded md:h-48 md:min-w-[300px] lg:h-64 lg:min-w-[400px]'
      />
    </div>
  );
};

export function MovieRow({ sectionTitle = "Featured" }: MovieRowProps) {
  return <div className='flex flex-col space-y-4'>
    <div className='flex'>
      <h2 className='-ml-2 inline-flex items-center text-2xl font-bold'>
        {sectionTitle}
      </h2>
    </div>
    <div className='scrollbar-hide -ml-8 flex space-x-4 overflow-x-scroll p-6'>
      {[1, 2, 3, 4, 5].map((item) => (
        <MovieCard key={item} index={item} />

      ))}
    </div>
  </div>;
}
