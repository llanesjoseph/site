import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md">
        <div className={cn("flex items-center gap-3 text-2xl font-bold tracking-tight", className)}>
            <Image 
                src="https://res.cloudinary.com/dr0jtjwlh/image/upload/v1755803724/Crucible_nrftmm.png" 
                alt="Crucible Analytics Logo" 
                width={32} 
                height={32}
                className="h-8 w-8 transition-transform group-hover:rotate-12"
            />
            <span className="font-headline">Crucible</span>
        </div>
    </Link>
  );
}
