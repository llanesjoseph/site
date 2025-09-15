import Link from 'next/link';

export default function ScorePage() {
  return (
    <div className="bg-background min-h-screen">
      <header className="py-4 border-b bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold font-display text-primary hover:opacity-80 transition-opacity">
                Crucible Analytics
            </Link>
            <Link href="/testing" className="text-sm text-muted-foreground hover:text-primary">
                &larr; Back to Testing Ground
            </Link>
        </div>
      </header>
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold font-headline tracking-tight">SCORE</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            This is the dedicated page for the SCORE application.
          </p>
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
