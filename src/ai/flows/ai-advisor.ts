'use server';

/**
 * @fileOverview AI advisor for scenario simulations, providing evaluations and suggestions for workflow refinement.
 *
 * - aiAdvisor - A function that provides AI-driven advice on scenario simulations.
 * - AiAdvisorInput - The input type for the aiAdvisor function, including simulation results and history.
 * - AiAdvisorOutput - The return type for the aiAdvisor function, providing an evaluation and suggested next steps.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiAdvisorInputSchema = z.object({
  simulationResults: z
    .string()
    .describe('The results of the latest scenario simulation.'),
  simulationHistory: z
    .string()
    .describe(
      'A history of previous simulation results and AI suggestions.'
    ),
});
export type AiAdvisorInput = z.infer<typeof AiAdvisorInputSchema>;

const AiAdvisorOutputSchema = z.object({
  evaluation: z.string().describe('An evaluation of the simulation results.'),
  suggestedNextSteps: z
    .string()
    .describe('Suggested next steps for refining the workflow.'),
});
export type AiAdvisorOutput = z.infer<typeof AiAdvisorOutputSchema>;

export async function aiAdvisor(input: AiAdvisorInput): Promise<AiAdvisorOutput> {
  return aiAdvisorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiAdvisorPrompt',
  input: {schema: AiAdvisorInputSchema},
  output: {schema: AiAdvisorOutputSchema},
  prompt: `You are an AI advisor for workflow optimization. You will evaluate the results of scenario simulations and suggest next steps for refining the workflow.

  Here's the history of simulation results and your suggestions:
  {{simulationHistory}}

  Here are the results of the latest scenario simulation:
  {{simulationResults}}

  Based on this information, provide an evaluation of the latest simulation results and suggest concrete next steps to improve the workflow. Be specific and actionable.
  Evaluation:
  Suggested Next Steps: `,
});

const aiAdvisorFlow = ai.defineFlow(
  {
    name: 'aiAdvisorFlow',
    inputSchema: AiAdvisorInputSchema,
    outputSchema: AiAdvisorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
