// src/ai/flows/generate-solutions.ts
'use server';
/**
 * @fileOverview A flow that generates potential solutions based on workflow analysis and cross-industry data.
 *
 * - generateSolutions - A function that generates potential solutions.
 * - GenerateSolutionsInput - The input type for the generateSolutions function.
 * - GenerateSolutionsOutput - The return type for the generateSolutions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSolutionsInputSchema = z.object({
  workflowAnalysis: z
    .string()
    .describe('The analysis of the current workflow, including identified bottlenecks and inefficiencies.'),
  crossIndustryData: z
    .string()
    .describe(
      'Data from various industries that can be used to suggest innovative solutions.'
    ),
});
export type GenerateSolutionsInput = z.infer<typeof GenerateSolutionsInputSchema>;

const GenerateSolutionsOutputSchema = z.object({
  solutions: z
    .array(z.string())
    .describe('A list of potential solutions to improve the workflow.'),
  reasoning: z
    .string()
    .describe(
      'The AI’s reasoning for suggesting these solutions, based on the workflow analysis and cross-industry data.'
    ),
});
export type GenerateSolutionsOutput = z.infer<typeof GenerateSolutionsOutputSchema>;

export async function generateSolutions(
  input: GenerateSolutionsInput
): Promise<GenerateSolutionsOutput> {
  return generateSolutionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateSolutionsPrompt',
  input: {schema: GenerateSolutionsInputSchema},
  output: {schema: GenerateSolutionsOutputSchema},
  prompt: `You are an expert business analyst tasked with generating potential solutions to improve workflow efficiency.

  Based on the provided workflow analysis and cross-industry data, suggest innovative approaches to optimize the workflow.

  Workflow Analysis: {{{workflowAnalysis}}}
  Cross-Industry Data: {{{crossIndustryData}}}

  Provide a list of potential solutions and your reasoning for suggesting them.
  Solutions should be specific and actionable.
  Reasoning should explain how the solution addresses the identified bottlenecks and inefficiencies, and how it is informed by the cross-industry data.
  Format the output as a list of solutions, followed by the reasoning.
  `,
});

const generateSolutionsFlow = ai.defineFlow(
  {
    name: 'generateSolutionsFlow',
    inputSchema: GenerateSolutionsInputSchema,
    outputSchema: GenerateSolutionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
