import { generateCompletion } from './provider';

export type AssistantAction =
  | 'continue'
  | 'rewrite'
  | 'expand'
  | 'summarize'
  | 'fix_grammar';

export async function executeAssistantAction(
  action: AssistantAction,
  text: string,
  model = 'gpt-4o'
): Promise<string> {
  const prompts: Record<AssistantAction, string> = {
    continue: `Continue writing seamlessly from this text:\n\n${text}`,
    rewrite: `Rewrite the following section to improve prose flow and engagement:\n\n${text}`,
    expand: `Expand this section with vivid details, dialogue, or deeper explanation:\n\n${text}`,
    summarize: `Provide a concise 2-sentence summary of this passage:\n\n${text}`,
    fix_grammar: `Fix all grammar, spelling, and style issues in this passage:\n\n${text}`,
  };

  const prompt = prompts[action] || text;
  return generateCompletion(prompt, { model });
}
