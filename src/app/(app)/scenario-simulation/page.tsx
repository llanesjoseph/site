import { ScenarioSimulationClient } from "./_components/scenario-simulation-client";

export default function ScenarioSimulationPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Scenario Simulation</h1>
        <p className="text-muted-foreground">
          Simulate 'what-if' scenarios based on proposed workflow changes and get advice from our AI.
        </p>
      </div>
      <ScenarioSimulationClient />
    </div>
  );
}
