import { Button } from '../ui/button';

export function CTA() {
  return (
    <div className='bg-cta py-28 text-center my-20'>
      <h2 className='text-3xl font-semibold mb-4 text-white'>Ready to Start Your Adventure?</h2>
      <p className=' mb-6 text-white'>
        Join thousands of adventurers who trust us for unforgettable Himalayan experiences.
      </p>
      <div className='flex gap-4 justify-center flex-wrap'>
        <Button className='bg-secondary p-6 text-md text-secondary-foreground px-6 py-5 rounded-lg hover:bg-secondary/90 transition'>
          Explore Tours
        </Button>
        <Button
          variant={'outline'}
          className='bg-transparent text-primary-foreground px-6 py-5 text-md  rounded-lg hover:bg-background/10 hover:text-white transition'
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
}
