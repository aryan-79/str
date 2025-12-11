import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { Heading, HightlightText, NormalText } from '@/components/common/typography';

const destinations = [
  {
    imageSrc: '/des.jpg',
    title: 'Nepal',
    description: 'Home to Mount Everest and ancient temples',
    tags: ['annapurna', 'pokhara', 'baglung'],
  },
  {
    imageSrc: '/des.jpg',
    title: 'Nepal',
    description: 'Home to Mount Everest and ancient temples',
    tags: ['annapurna', 'pokhara', 'baglung'],
  },
  {
    imageSrc: '/des.jpg',
    title: 'Nepal',
    description: 'Home to Mount Everest and ancient temples',
    tags: ['annapurna', 'pokhara', 'baglung'],
  },
];

export function Destinations() {
  return (
    <div className='container'>
      <div className='text-center space-y-2'>
        <p className='uppercase text-primary font-xs'>Explore Destinations</p>
        <Heading className='text-center font-semibold '>
          <NormalText text='Three Countries.' />
          <HightlightText text='Infinite Adventures.' className='text-secondary' />
        </Heading>
        <p className='text-muted-foreground '>
          Explore countless tours and treks across three mystical lands in the heart of the Himalayas
        </p>
      </div>
      <div className='grid lg:grid-cols-3 gap-4 mt-8'>
        {destinations.map((destination, index) => (
          <DestinationCard key={index} {...destination} />
        ))}
      </div>
    </div>
  );
}

type DestinationCardProps = {
  imageSrc: string;
  title: string;
  description: string;
  tags: string[];
};

function DestinationCard({ imageSrc, title, description, tags }: DestinationCardProps) {
  return (
    <div className='relative px-4 overflow-clip bg-cover bg-center w-full space-y-4 rounded-lg max-h-[400px] sm:max-h-[600px] aspect-9/16 flex flex-col justify-end group cursor-pointer hover:shadow-lg transition-all duration-300'>
      <img
        src={imageSrc}
        alt={title}
        className='absolute inset-0 size-full bg-cover bg-center group-hover:scale-105 transition-transform duration-400 ease-out delay-75 brightness-75'
      />
      <div className='absolute inset-0 size-full bg-linear-to-b from-transparent from-60% to-secondary opacity-15 delay-100' />
      <div className='z-10 translate-y-4/5 group-hover:-translate-y-2 transition-transform duration-300 ease-out flex flex-col gap-2'>
        <p className='text-white font-serif text-3xl xl:text-5xl font-bold'>{title}</p>
        <p className='text-white text-sm xl:text-base font-semibold'>{description}</p>
      </div>
      <div className='opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-75 duration-300 pb-4 space-y-2'>
        <div className='flex gap-2 flex-wrap '>
          {tags.map((tag, index) => (
            <span
              key={`${tag}${index}`}
              className='capitalize text-sm bg-card/20 px-2 py-1 text-card rounded-full backdrop-blur-sm xl:text-base'
            >
              {tag}
            </span>
          ))}
        </div>
        <Link to={'/'} className='pl-1 font-bold text-secondary text-sm flex items-center gap-2'>
          Explore Tours <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
