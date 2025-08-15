"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateSolutions, type GenerateSolutionsOutput } from '@/ai/flows/generate-solutions';

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
import { Loader2, Lightbulb, BrainCircuit } from 'lucide-react';

const formSchema = z.object({
  workflowAnalysis: z.string().min(50, 'Workflow analysis must be at least 50 characters long.'),
  crossIndustryData: z.string().min(50, 'Cross-industry data must be at least 50 characters long.'),
});

export function SolutionGeneratorClient() {
  const [isLoading, setIsLoading] = useState(false);
  const [solutionResult, setSolutionResult] = useState<GenerateSolutionsOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      workflowAnalysis: '',
      crossIndustryData: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setSolutionResult(null);
    try {
      const result = await generateSolutions(values);
      setSolutionResult(result);
    } catch (error) {
      console.error('Error generating solutions:', error);
      toast({
        variant: 'destructive',
        title: 'Solution Generation Failed',
        description: 'An error occurred while generating solutions. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Generate Optimized Solutions</CardTitle>
          <CardDescription>
            Provide your workflow analysis and relevant cross-industry data to generate ideas.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="workflowAnalysis"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Workflow Analysis</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Paste the summary, bottlenecks, and inefficiencies from the Workflow Analyzer..."
                        className="min-h-[150px] bg-background"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="crossIndustryData"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cross-Industry Data</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Provide examples or data from other industries. e.g., 'In logistics, companies use automated routing to reduce delivery times...'"
                        className="min-h-[150px] bg-background"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Generate Solutions
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {isLoading && (
         <div className="flex items-center justify-center rounded-lg border p-8 text-center">
            <Loader2 className="mr-4 h-8 w-8 animate-spin text-primary" />
            <p className="text-muted-foreground">AI is generating solutions...</p>
        </div>
      )}

      {solutionResult && (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold font-headline">Generated Solutions</h2>
            <Card className="bg-accent/20 border-accent">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                    <Lightbulb className="w-6 h-6 text-accent-foreground" />
                    <CardTitle>Potential Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                        {solutionResult.solutions.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                    <BrainCircuit className="w-6 h-6 text-primary" />
                    <CardTitle>Reasoning</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{solutionResult.reasoning}</p>
                </CardContent>
            </Card>
        </div>
      )}
    </>
  );
}
