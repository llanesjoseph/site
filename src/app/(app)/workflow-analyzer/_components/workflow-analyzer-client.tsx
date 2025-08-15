"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  analyzeWorkflow,
  type AnalyzeWorkflowOutput,
} from '@/ai/flows/analyze-workflow';

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
import { Loader2, AlertTriangle, Lightbulb, ListChecks, FileText } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const formSchema = z.object({
  workflowDocument: z.string().min(50, 'Workflow document must be at least 50 characters long.'),
});

export function WorkflowAnalyzerClient() {
  const [isLoading, setIsLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalyzeWorkflowOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      workflowDocument: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setAnalysisResult(null);
    try {
      const result = await analyzeWorkflow(values);
      setAnalysisResult(result);
    } catch (error) {
      console.error('Error analyzing workflow:', error);
      toast({
        variant: 'destructive',
        title: 'Analysis Failed',
        description: 'An error occurred while analyzing the workflow. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Submit Workflow for Analysis</CardTitle>
          <CardDescription>
            Provide a detailed description of the workflow you want to analyze.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="workflowDocument"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Workflow Document</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., Describe the entire process from customer request to final delivery..."
                        className="min-h-[200px] bg-background"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Analyze Workflow
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {isLoading && (
        <div className="flex items-center justify-center rounded-lg border p-8 text-center">
            <Loader2 className="mr-4 h-8 w-8 animate-spin text-primary" />
            <p className="text-muted-foreground">AI is analyzing your workflow...</p>
        </div>
      )}

      {analysisResult && (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold font-headline">Analysis Results</h2>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                  <FileText className="w-6 h-6 text-primary" />
                  <CardTitle>Summary</CardTitle>
              </CardHeader>
              <CardContent>
                  <p className="text-muted-foreground">{analysisResult.summary}</p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                        <AlertTriangle className="w-6 h-6 text-destructive" />
                        <CardTitle>Bottlenecks</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                            {analysisResult.bottlenecks.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                        <AlertTriangle className="w-6 h-6 text-amber-500" />
                        <CardTitle>Inefficiencies</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                            {analysisResult.inefficiencies.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </CardContent>
                </Card>
            </div>
            
            <Card className="bg-accent/20 border-accent">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                    <Lightbulb className="w-6 h-6 text-accent-foreground" />
                    <CardTitle>Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                        {analysisResult.recommendations.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </CardContent>
            </Card>
        </div>
      )}
    </>
  );
}
