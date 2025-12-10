import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/cn';

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
      <div className='grid grid-cols-3 gap-4 mt-8'>
        <DestinationCard />
        <DestinationCard />
        <DestinationCard />
      </div>
    </div>
  );
}

export function Heading({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h1 className={cn('text-3xl font-serif', className)}>{children}</h1>;
}

export function NormalText({ text, className }: { text: string; className?: string }) {
  return <span className={cn('', className)}>{text} </span>;
}

export function HightlightText({ text, className }: { text: string; className?: string }) {
  return <span className={cn('text-secondary', className)}>{text}</span>;
}

function DestinationCard() {
  return (
    <div className='bg-[url(/des.jpg)] bg-cover bg-center h-80 w-full space-y-4 p-3 rounded-lg flex flex-col justify-end group cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300'>
      <p className='text-white font-serif text-3xl font-bold'>Nepal</p>
      <p className='text-white text-sm font-semibold'>Home to Mount Everest and ancient temples</p>
      <div className='opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300'>
        <div className='flex gap-2 flex-wrap '>
          <span className='bg-card/20  px-4 py-1 text-card rounded-full'>Annapurna</span>
          <span className='bg-card/20  px-4 py-1 text-card rounded-full'>Pokhara</span>
          <span className='bg-card/20  px-4 py-1 text-card rounded-full'>Baglung</span>
        </div>
        <Link to={'/'} className='font-bold text-secondary text-sm flex gap-2'>
          Explore Tours <ArrowRight />
        </Link>
      </div>
    </div>
  );
}
