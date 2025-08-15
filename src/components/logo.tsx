import { Hexagon } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md">
        <div className={cn("flex items-center gap-2 text-xl font-bold tracking-tight", className)}>
            <Hexagon className="h-6 w-6 text-primary transition-transform group-hover:rotate-12" />
            <span className="font-headline">Crucible Analytics</span>
        </div>
    </Link>
  );
}
