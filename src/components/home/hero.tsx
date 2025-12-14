import heroImage from '@/assets/hero-mountains.jpg';

export function Hero() {
  return (
    <div className='h-screen'>
      <div
        className='absolute h-screen inset-0 size-full pt-8'
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        {/* <div className='absolute inset-0 size-full bg-linear-30 from-background/30 from-50% via-background/15 via-55% to-background'></div> */}
        <div className='hero-gradient absolute inset-0 size-full'></div>
        <div className='flex flex-col gap-6 justify-center size-full container relative'>
          <p className='uppercase text-secondary text-sm'>Luxury Himalayan Expeditions</p>

          <h1 className='font-playfair capitalize text-3xl sm:text-4xl md:text-6xl lg:text-7xl'>
            Where The <br />
            <span className='italic text-secondary'>Earth</span>
            <br />
            Meets The Sky
          </h1>

          <p className='leading-loose text-muted-foreground'>
            Bespoke journeys through Nepal, Bhutan, and Tibet.
            <br /> Crafted for those who seek extraordinary experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
