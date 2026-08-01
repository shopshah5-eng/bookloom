import { EditorBlock } from './document';

export interface OutlineItem {
  id: string;
  title: string;
  level: number;
}

export function generateOutlineFromBlocks(blocks: EditorBlock[]): OutlineItem[] {
  return blocks
    .filter((b) => b.type === 'heading')
    .map((b) => ({
      id: b.id,
      title: b.content || 'Untitled Heading',
      level: b.level || 1,
    }));
}
