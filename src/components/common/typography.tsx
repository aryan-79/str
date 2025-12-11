import { cn } from '@/lib/cn';

type HeadingVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export function Heading({
  children,
  className,
  variant = 'h1',
}: {
  children: React.ReactNode;
  className?: string;
  variant?: HeadingVariants;
}) {
  const Comp = variant;
  return <Comp className={cn('text-2xl sm:text-3xl font-serif', className)}>{children}</Comp>;
}

export function NormalText({ text, className }: { text: string; className?: string }) {
  return <span className={cn('', className)}>{text} </span>;
}

export function HightlightText({ text, className }: { text: string; className?: string }) {
  return <span className={cn('text-secondary', className)}>{text}</span>;
}
