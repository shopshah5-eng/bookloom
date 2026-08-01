export interface PromptTemplate {
  id: string;
  name: string;
  template: string;
  category: 'writing' | 'editing' | 'research' | 'publishing';
}

export const SYSTEM_PROMPTS = {
  editorAssistant:
    'You are BookLoom AI, a world-class literary editor, writing coach, and publishing strategist.',
  grammarChecker:
    'You are a meticulous copy editor checking spelling, punctuation, clarity, and tone.',
};

export function renderPrompt(template: string, variables: Record<string, string>): string {
  let rendered = template;
  for (const [key, value] of Object.entries(variables)) {
    rendered = rendered.replaceAll(`{{${key}}}`, value);
  }
  return rendered;
}
