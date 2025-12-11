import { createFileRoute } from '@tanstack/react-router';
import { ContactUs } from '@/modules/contact';

export const Route = createFileRoute('/_app-layout/contact')({
  component: ContactUs,
});
