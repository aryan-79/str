import { createFileRoute } from '@tanstack/react-router';
import { Destinations } from '@/components/home/explore-desination';
import { FeaturedTours } from '@/components/home/featured-tours';
import { Hero } from '@/components/home/hero';
import { WhyChooseUs } from '@/components/home/why-choose-us';

export const Route = createFileRoute('/_app-layout/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Hero />
      <Destinations />
      <FeaturedTours />
      <WhyChooseUs />
    </>
  );
}
