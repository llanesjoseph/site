import { cn } from '@/lib/utils';
import Link from 'next/link';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md">
      <div className={cn("flex items-center gap-3 text-2xl font-bold tracking-tight", className)}>
        <svg viewBox="0 0 800 220" xmlns="http://www.w3.org/2000/svg" width="750" height="auto">
          <defs>
            <linearGradient id="edge" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#00E5FF"/>
              <stop offset="100%" stopColor="#FF8A00"/>
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="blur"/>
              <feMerge>
                <feMergeNode in="blur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Badge (hex with synapses) */}
          <g transform="translate(110,110)">
            {/* Hex frame */}
            <polygon points="0,-100 86,-50 86,50 0,100 -86,50 -86,-50"
                     fill="none" stroke="url(#edge)" strokeWidth="6" filter="url(#glow)"/>

            {/* Synapse paths */}
            <g fill="none" strokeLinecap="round">
              <path className="pulse" d="M-40,-20 C-10,-40 10,-40 40,-20" />
              <path className="pulse delay1" d="M-50,20 C-10,0 10,0 50,20" />
              <path className="pulse delay2" d="M-30,45 C-10,25 10,25 30,45" />
              <path className="pulse delay3" d="M-40,0 C-10,10 10,10 40,0" />
            </g>

            {/* Firing nodes */}
            <g className="nodes">
              <circle cx="-40" cy="-20" r="3" />
              <circle cx="0" cy="-30" r="3" />
              <circle cx="40" cy="-20" r="3" />
              <circle cx="-50" cy="20" r="3" />
              <circle cx="0" cy="10" r="3" />
              <circle cx="50" cy="20" r="3" />
              <circle cx="-30" cy="45" r="3" />
              <circle cx="30" cy="45" r="3" />
            </g>
          </g>

          {/* Wordmark */}
          <g transform="translate(250,140)" fill="hsl(var(--foreground))">
            {/* CRUCIBLE (stylized bold) */}
            <text x="0" y="0" fontSize="72" fontFamily="Orbitron, sans-serif" fontWeight="700" letterSpacing="6">
              CRUCIBLE
            </text>
            {/* ANALYTICS (lighter, monospaced feel) */}
            <text x="0" y="50" fontSize="28" fontFamily="Consolas, monospace" fontWeight="400" letterSpacing="10" fill="hsl(var(--muted-foreground))">
              ANALYTICS
            </text>
          </g>

          {/* Animations */}
          <style>
            {`
              .nodes circle {
                fill: #FF8A00;
                filter: url(#glow);
                animation: blink 2.4s infinite ease-in-out;
              }
              .nodes circle:nth-child(2) { animation-delay: .3s; }
              .nodes circle:nth-child(3) { animation-delay: .6s; }
              .nodes circle:nth-child(4) { animation-delay: .9s; }
              .nodes circle:nth-child(5) { animation-delay: 1.2s; }
              .nodes circle:nth-child(6) { animation-delay: 1.5s; }
              .nodes circle:nth-child(7) { animation-delay: 1.8s; }
              .nodes circle:nth-child(8) { animation-delay: 2.1s; }

              .pulse {
                stroke: #19D4FF;
                stroke-width: 2.2;
                stroke-dasharray: 1 120;
                animation: travel 2.4s infinite linear;
                filter: url(#glow);
                opacity: .9;
              }
              .delay1 { animation-delay: .4s; }
              .delay2 { animation-delay: .8s; }
              .delay3 { animation-delay: 1.2s; }

              @keyframes travel {
                0%   { stroke-dasharray: 1 120; stroke-dashoffset: 0; opacity: .2; }
                10%  { stroke-dasharray: 18 103; opacity: .9; }
                90%  { stroke-dashoffset: 120; }
                100% { stroke-dashoffset: 120; opacity: 0; }
              }

              @keyframes blink {
                50% { opacity: 0.3; }
              }
            `}
          </style>
        </svg>
      </div>
    </Link>
  );
}
