import { createFileRoute } from '@tanstack/react-router';
import AboutUs from '@/modules/about';

export const Route = createFileRoute('/_app-layout/about')({
  component: AboutUs,
});
