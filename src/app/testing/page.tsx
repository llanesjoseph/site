import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const apps = [
  {
    title: 'GAMEPLAN',
    description: 'An AI-powered tool to generate strategic plans and workflows.',
    link: '#',
  },
  {
    title: 'Project Beta',
    description: 'A brief description of Project Beta. What it does and who it is for.',
    link: '#',
  },
  {
    title: 'Project Gamma',
    description: 'A brief description of Project Gamma. What it does and who it is for.',
    link: '#',
  },
];

export default function TestingPage() {
  return (
    <div className="bg-background min-h-screen">
      <header className="py-4 border-b bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" className="text-2xl font-bold font-display text-primary hover:opacity-80 transition-opacity">
                Crucible Analytics
            </Link>
        </div>
      </header>
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-headline tracking-tight">Testing Ground</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of apps and experiments currently in development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app) => (
            <Card key={app.title}>
              <CardHeader>
                <CardTitle>{app.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                  <p className="text-muted-foreground flex-grow">{app.description}</p>
                  <Button asChild className="mt-4 w-full">
                      <Link href={app.link}>
                          Launch App <ArrowRight className="ml-2" />
                      </Link>
                  </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <footer className="py-8 bg-secondary border-t mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground text-sm">
            <p>&copy; {new Date().getFullYear()} Crucible Analytics. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
