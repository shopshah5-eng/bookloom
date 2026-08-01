export type BlockType =
  | 'paragraph'
  | 'heading'
  | 'quote'
  | 'code'
  | 'list_item'
  | 'callout'
  | 'table';

export interface EditorBlock {
  id: string;
  type: BlockType;
  content: string;
  level?: number; // For headings 1-6
  attributes?: Record<string, unknown>;
}

export interface ManuscriptDocument {
  id: string;
  title: string;
  blocks: EditorBlock[];
  wordCount: number;
  readingTimeMinutes: number;
}

export function createEmptyDocument(id: string, title = 'Untitled Book'): ManuscriptDocument {
  return {
    id,
    title,
    blocks: [
      {
        id: 'block-1',
        type: 'heading',
        level: 1,
        content: title,
      },
      {
        id: 'block-2',
        type: 'paragraph',
        content: 'Begin writing your story here...',
      },
    ],
    wordCount: 7,
    readingTimeMinutes: 1,
  };
}

export function calculateWordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}
