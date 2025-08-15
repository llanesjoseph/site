import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GitFork } from "lucide-react";

export default function WorkflowVisualizerPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Workflow Visualizer</h1>
        <p className="text-muted-foreground">
          Visualize your current and proposed workflows.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Workflow Map</CardTitle>
          <CardDescription>
            An interactive visualization of your process flow.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center text-center text-muted-foreground h-96 border-2 border-dashed rounded-lg bg-background">
            <GitFork className="w-16 h-16 mb-4 text-primary" />
            <p className="text-lg font-semibold">Workflow Visualization Coming Soon</p>
            <p className="max-w-md">This feature will allow you to see your existing and proposed workflows in an easy-to-understand visual format, perfect for sharing with your team.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
