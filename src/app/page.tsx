import Link from 'next/link';
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

      </main>

      <footer className="py-6 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p>&copy; {new Date().getFullYear()} Crucible Analytics. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
