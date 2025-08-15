import { WorkflowAnalyzerClient } from "./_components/workflow-analyzer-client";

export default function WorkflowAnalyzerPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold font-headline">Workflow Analyzer</h1>
                <p className="text-muted-foreground">
                    Paste your team's workflow document to identify bottlenecks and inefficiencies using AI.
                </p>
            </div>

            <WorkflowAnalyzerClient />
        </div>
    );
}
