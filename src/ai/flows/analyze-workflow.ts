// This file uses server-side code.
'use server';

/**
 * @fileOverview Workflow Analyzer AI agent.
 *
 * - analyzeWorkflow - A function that handles the workflow analysis process.
 * - AnalyzeWorkflowInput - The input type for the analyzeWorkflow function.
 * - AnalyzeWorkflowOutput - The return type for the analyzeWorkflow function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeWorkflowInputSchema = z.object({
  workflowDocument: z
    .string()
    .describe(
      'A document describing the workflow to be analyzed.  Acceptable formats are .txt, .pdf, .md, and .docx.'
    ),
});
export type AnalyzeWorkflowInput = z.infer<typeof AnalyzeWorkflowInputSchema>;

const AnalyzeWorkflowOutputSchema = z.object({
  summary: z.string().describe('A summary of the workflow.'),
  bottlenecks: z.array(z.string()).describe('A list of bottlenecks in the workflow.'),
  inefficiencies: z.array(z.string()).describe('A list of inefficiencies in the workflow.'),
  recommendations: z.array(z.string()).describe('A list of recommendations to improve the workflow.'),
});
export type AnalyzeWorkflowOutput = z.infer<typeof AnalyzeWorkflowOutputSchema>;

export async function analyzeWorkflow(input: AnalyzeWorkflowInput): Promise<AnalyzeWorkflowOutput> {
  return analyzeWorkflowFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeWorkflowPrompt',
  input: {schema: AnalyzeWorkflowInputSchema},
  output: {schema: AnalyzeWorkflowOutputSchema},
  prompt: `You are an expert workflow analyst.  You will be given a document describing a workflow, and you will analyze it to identify bottlenecks and inefficiencies.

You will then provide a summary of the workflow, a list of bottlenecks, a list of inefficiencies, and a list of recommendations to improve the workflow.

Workflow Document:
{{{workflowDocument}}}`,
});

const analyzeWorkflowFlow = ai.defineFlow(
  {
    name: 'analyzeWorkflowFlow',
    inputSchema: AnalyzeWorkflowInputSchema,
    outputSchema: AnalyzeWorkflowOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
