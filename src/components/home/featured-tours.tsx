import { Mountain, User } from 'lucide-react';
import { Heading, HightlightText, NormalText } from '../common/typography';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

export function FeaturedTours() {
  return (
    <div className='container my-20'>
      <div className='space-y-2'>
        <p className='uppercase text-primary font-xs'>Featured Tours</p>
        <Heading className='font-semibold '>
          <NormalText text='Our Best Selling' />
          <HightlightText text='Adventures' className='text-secondary' />
        </Heading>
        <p className='text-muted-foreground '>Handpicked experiences loved by thousands of adventurers worldwide</p>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8'>
        <TourCard />
        <TourCard />
        <TourCard />
      </div>
    </div>
  );
}
function TourCard() {
  return (
    <Card className='p-0 overflow-hidden'>
      <img src='/des.jpg' alt='tour' className='w-full h-60 object-cover' />
      <div className='px-2 pb-2'>
        <p className='font-semibold mt-2'>Everest Base Camp Trek</p>
        <p className='flex gap-2'>
          <p>
            <Mountain className='inline-block mr-1 mb-1 text-secondary' /> 2-15
          </p>
          <p>
            <User className='inline-block mr-1 mb-1 text-secondary' /> 2-15
          </p>
        </p>
        <div className='flex justify-between items-center'>
          <p className='font-bold text-lg'> From $1200</p>
          <Button className='bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition'>
            Book Now
          </Button>
        </div>
      </div>
    </Card>
  );
}
