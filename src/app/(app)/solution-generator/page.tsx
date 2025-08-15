import { SolutionGeneratorClient } from './_components/solution-generator-client';

export default function SolutionGeneratorPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Solution Generator</h1>
        <p className="text-muted-foreground">
          Generate innovative solutions by combining your workflow analysis with cross-industry data.
        </p>
      </div>

      <SolutionGeneratorClient />
    </div>
  );
}
