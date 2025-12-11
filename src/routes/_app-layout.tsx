import { createFileRoute, Outlet } from '@tanstack/react-router';
import Navbar from '@/components/common/navbar';

export const Route = createFileRoute('/_app-layout')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
