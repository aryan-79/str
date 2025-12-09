import { type ErrorComponentProps, Link } from '@tanstack/react-router';
import { AlertCircleIcon } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';

export default function ErrorBoundary({ error, info, reset }: ErrorComponentProps) {
  return (
    <div className='grid min-h-screen place-content-center'>
      <div className='w-full max-w-xl items-start gap-4'>
        <Alert variant='destructive'>
          <AlertCircleIcon />
          <AlertTitle>{error.name}</AlertTitle>
          <AlertDescription>
            <p>{error.message}</p>
            {info?.componentStack && (
              <>
                <p className='font-semibold'>Error Stack</p>
                <p>{info.componentStack}</p>
              </>
            )}
            <div className='my-8 flex gap-4'>
              <Button variant='link' asChild>
                <Link to='/'>Go to Home</Link>
              </Button>
              <Button onClick={() => reset()}>Refresh</Button>
            </div>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
