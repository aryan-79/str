import { createFileRoute } from '@tanstack/react-router';
import { Destinations } from '@/components/home/explore-desination';
import { FeaturedTours } from '@/components/home/featured-tours';
import { WhyChooseUs } from '@/components/home/why-choose-us';

export const Route = createFileRoute('/_app-layout/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Destinations />
      <FeaturedTours />
      <WhyChooseUs />
    </>
  );
}
