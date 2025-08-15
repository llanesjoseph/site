import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  GitFork,
  LayoutDashboard,
  Lightbulb,
  TestTube2,
  Workflow,
} from 'lucide-react';
import { Logo } from '@/components/logo';

const features = [
  {
    icon: <Workflow className="h-8 w-8 text-primary" />,
    title: 'Workflow Analyzer',
    description: 'AI-powered analysis to identify bottlenecks and inefficiencies in your documented workflows.',
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: 'Solution Generator',
    description: 'Generates optimized solutions using cross-industry data and insights from workflow analysis.',
  },
  {
    icon: <LayoutDashboard className="h-8 w-8 text-primary" />,
    title: 'Team Dashboard',
    description: 'Track improvements, inefficiencies, and team analytics in a clear, actionable dashboard.',
  },
  {
    icon: <GitFork className="h-8 w-8 text-primary" />,
    title: 'Workflow Visualizer',
    description: 'Visualize existing and proposed workflows to easily share and collaborate with your team.',
  },
  {
    icon: <TestTube2 className="h-8 w-8 text-primary" />,
    title: 'Scenario Simulation',
    description: 'Simulate what-if scenarios with predictive analytics and get AI-driven advice for refinement.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Logo />
      </header>
      <main className="flex-grow">
        <section className="text-center py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-headline">
              Optimize Your Team's Workflow with AI
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground">
              Crucible Analytics leverages generative AI to analyze your processes,
              uncover inefficiencies, and simulate improvements for peak
              performance.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/dashboard">Get Started</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 lg:py-24 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight font-headline">
                Powerful Features for Modern Teams
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Everything you need to transform your team's productivity.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <Card key={feature.title} className="bg-background/50 transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      {feature.icon}
                      <CardTitle className="font-headline">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
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
