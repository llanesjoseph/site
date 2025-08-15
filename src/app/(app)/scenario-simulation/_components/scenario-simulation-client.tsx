"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { aiAdvisor, type AiAdvisorOutput } from '@/ai/flows/ai-advisor';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Bot, History, FlaskConical, Sparkles } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

const formSchema = z.object({
  scenario: z.string().min(20, 'Scenario description must be at least 20 characters.'),
});

interface HistoryItem {
    scenario: string;
    results: string;
    advisorOutput: AiAdvisorOutput;
}

export function ScenarioSimulationClient() {
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      scenario: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    try {
      // Mock simulation results for demonstration
      const mockSimulationResults = `Simulation for '${values.scenario}':
      - Projected efficiency gain: ${(Math.random() * 15 + 5).toFixed(1)}%
      - Estimated cost reduction: $${Math.floor(Math.random() * 5000 + 1000)}
      - Potential new bottlenecks: ${Math.random() > 0.5 ? 'None identified.' : 'Risk of overload in the QA stage.'}`;

      const simulationHistory = history.map(h => `Scenario: ${h.scenario}\nResults: ${h.results}\nAdvisor: ${h.advisorOutput.evaluation}`).join('\n\n');
      
      const advisorOutput = await aiAdvisor({
        simulationResults: mockSimulationResults,
        simulationHistory,
      });

      setHistory(prev => [...prev, { scenario: values.scenario, results: mockSimulationResults, advisorOutput }]);
      form.reset();

    } catch (error) {
      console.error('Error running simulation:', error);
      toast({
        variant: 'destructive',
        title: 'Simulation Failed',
        description: 'An error occurred while running the scenario simulation.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
            <Card>
                <CardHeader>
                <CardTitle>Run a New Simulation</CardTitle>
                <CardDescription>
                    Describe a change to your workflow and see the projected impact.
                </CardDescription>
                </CardHeader>
                <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="scenario"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Scenario Description</FormLabel>
                            <FormControl>
                            <Textarea
                                placeholder="e.g., What if we automate the initial data entry step using an OCR tool?"
                                className="min-h-[100px] bg-background"
                                {...field}
                            />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <Button type="submit" disabled={isLoading}>
                        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Run Simulation
                    </Button>
                    </form>
                </Form>
                </CardContent>
            </Card>

            {history.length > 0 && (
                 <div className="space-y-4">
                    <h3 className="text-xl font-semibold font-headline">Latest Simulation Result</h3>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <FlaskConical className="h-5 w-5 text-primary"/>
                                Scenario: {history[history.length - 1].scenario}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground whitespace-pre-wrap">{history[history.length - 1].results}</p>
                            <Separator />
                            <div className="bg-accent/20 p-4 rounded-lg border border-accent">
                                <h4 className="font-semibold flex items-center gap-2 mb-2">
                                    <Bot className="h-5 w-5"/> AI Advisor Evaluation
                                </h4>
                                <p className="text-sm text-muted-foreground">{history[history.length - 1].advisorOutput.evaluation}</p>
                            </div>
                            <div className="bg-accent/20 p-4 rounded-lg border border-accent">
                                <h4 className="font-semibold flex items-center gap-2 mb-2">
                                    <Sparkles className="h-5 w-5 text-accent-foreground"/> Suggested Next Steps
                                </h4>
                                <p className="text-sm text-muted-foreground">{history[history.length - 1].advisorOutput.suggestedNextSteps}</p>
                            </div>
                        </CardContent>
                    </Card>
                 </div>
            )}
        </div>

      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <History className="h-5 w-5" />
            Simulation History
          </CardTitle>
          <CardDescription>Review of past simulations and advice.</CardDescription>
        </CardHeader>
        <CardContent>
            <ScrollArea className="h-[600px] pr-4">
            {history.length === 0 ? (
                <div className="text-center text-muted-foreground py-8">
                    <p>Your simulation history will appear here.</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {history.slice().reverse().map((item, index) => (
                        <div key={index} className="p-4 border rounded-lg bg-background">
                            <p className="font-semibold text-sm truncate">{item.scenario}</p>
                            <p className="text-xs text-muted-foreground mt-1">Evaluation: {item.advisorOutput.evaluation.substring(0, 50)}...</p>
                        </div>
                    ))}
                </div>
            )}
            </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
