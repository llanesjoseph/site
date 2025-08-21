import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { Compass, Wrench, BarChart, Rocket } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: <Compass className="h-10 w-10 text-primary" />,
    title: 'Discover (reveal cost)',
    description: 'Map the workflow and measure where time and money leak.',
  },
  {
    icon: <Wrench className="h-10 w-10 text-primary" />,
    title: 'Design (expand options)',
    description: 'Introduce fixes your team has not considered.',
  },
  {
    icon: <BarChart className="h-10 w-10 text-primary" />,
    title: 'Build & Launch',
    description: 'Deliver live tools and integrations, not slide decks.',
  },
  {
    icon: <Rocket className="h-10 w-10 text-primary" />,
    title: 'Optimize (stay ahead)',
    description: 'Keep improving while others settle for standard.',
  },
];

const benefits = [
    {
      icon: '🛡️',
      title: 'Cross‑industry insight',
      description: 'See opportunities your competition cannot.',
    },
    {
      icon: '🏗️',
      title: 'Custom‑built tools',
      description: 'Immediate impact without off the shelf limits.',
    },
    {
      icon: '📚',
      title: 'Measured outcomes',
      description: 'Track savings in time, cost, and morale.',
    },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Logo />
      </header>
      <main className="flex-grow">
        <section className="text-center py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-headline">
              Unlock Your Team's True Potential
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground">
              Crucible Analytics uses AI to analyze your workflows, generate optimized solutions, and provide actionable insights to boost efficiency.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/dashboard">Go to Dashboard</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} className="text-center bg-card">
                            <CardHeader className="items-center">
                                {feature.icon}
                            </CardHeader>
                            <CardContent>
                                <CardTitle className="text-xl font-headline mb-2">{feature.title}</CardTitle>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold font-headline">A better way to build</h2>
                <p className="text-lg text-muted-foreground">
                    Crucible is not just another analytics tool. We provide a comprehensive platform to transform your operations from the ground up.
                </p>
              </div>
              <div className="space-y-8">
                {benefits.map((benefit) => (
                    <div key={benefit.title} className="flex items-start gap-4">
                        <div className="text-4xl">{benefit.icon}</div>
                        <div>
                            <h3 className="text-xl font-semibold">{benefit.title}</h3>
                            <p className="text-muted-foreground mt-1">{benefit.description}</p>
                        </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <Image 
                  src="https://placehold.co/400x400.png"
                  alt="Joseph M. Llanes" 
                  width={400} 
                  height={400} 
                  className="rounded-full object-cover"
                  data-ai-hint="portrait man"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold font-headline">About the Founder</h2>
                <h3 className="text-2xl font-semibold text-primary">Joseph M. Llanes</h3>
                <p className="text-lg text-muted-foreground">
                    Founder of Crucible Analytics. Master’s in crime analysis. Fifteen years solving operational problems in high stakes environments.
                </p>
                <p className="text-lg text-muted-foreground">
                    I bring methods you will not find in your field’s handbook. Then I build and deploy the tools that make the change stick.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="py-6 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p>&copy; {new Date().getFullYear()} Crucible Analytics. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
