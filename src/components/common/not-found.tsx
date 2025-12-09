export default function NotFoundBoundary() {
  return (
    <div className='min-h-screen grid place-content-center space-y-3'>
      <h1 className='font-semibold text-3xl'>Page Not Found</h1>
      <a href='/' className='text-center text-primary'>
        Go to Home
      </a>
    </div>
  );
}
