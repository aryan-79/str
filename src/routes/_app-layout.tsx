import { createFileRoute, Outlet } from '@tanstack/react-router';
import { Footer } from '@/components/common/footer';
import Navbar from '@/components/common/navbar';

export const Route = createFileRoute('/_app-layout')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className='flex flex-col gap-2 grow'>
      <Navbar />
      <main className='flex-1'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
