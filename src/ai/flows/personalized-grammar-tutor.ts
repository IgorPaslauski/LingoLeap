// src/ai/flows/personalized-grammar-tutor.ts
'use server';

/**
 * @fileOverview An AI agent providing personalized grammar explanations and examples.
 *
 * - personalizedGrammarTutor - A function that provides grammar explanations tailored to the student's level.
 * - PersonalizedGrammarTutorInput - The input type for the personalizedGrammarTutor function.
 * - PersonalizedGrammarTutorOutput - The return type for the personalizedGrammarTutor function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedGrammarTutorInputSchema = z.object({
  topic: z.string().describe('The specific grammar topic to explain (e.g., verb conjugation, noun agreement).'),
  studentLevel: z.enum(['beginner', 'intermediate', 'advanced']).describe('The student\u2019s current level of grammar understanding.'),
  example: z.string().optional().describe('An optional specific example or sentence the student is struggling with.'),
});
export type PersonalizedGrammarTutorInput = z.infer<typeof PersonalizedGrammarTutorInputSchema>;

const PersonalizedGrammarTutorOutputSchema = z.object({
  explanation: z.string().describe('A personalized explanation of the grammar topic, tailored to the student\u2019s level.'),
  examples: z.array(z.string()).describe('A list of example sentences illustrating the grammar topic.'),
});
export type PersonalizedGrammarTutorOutput = z.infer<typeof PersonalizedGrammarTutorOutputSchema>;

export async function personalizedGrammarTutor(input: PersonalizedGrammarTutorInput): Promise<PersonalizedGrammarTutorOutput> {
  return personalizedGrammarTutorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedGrammarTutorPrompt',
  input: {schema: PersonalizedGrammarTutorInputSchema},
  output: {schema: PersonalizedGrammarTutorOutputSchema},
  prompt: `You are a helpful and patient grammar tutor.  You provide clear and concise explanations tailored to the student's level.

      Student Level: {{{studentLevel}}}
      Grammar Topic: {{{topic}}}

      {{#if example}}
      The student is struggling with this example: {{{example}}}
      Please provide an explanation that addresses this specific example.
      {{/if}}

      Explanation:
      `, // Missing example generation.  The LLM should generate example.
});

const personalizedGrammarTutorFlow = ai.defineFlow(
  {
    name: 'personalizedGrammarTutorFlow',
    inputSchema: PersonalizedGrammarTutorInputSchema,
    outputSchema: PersonalizedGrammarTutorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
