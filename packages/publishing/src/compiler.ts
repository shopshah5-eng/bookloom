export interface IntermediatePublication {
  id: string;
  title: string;
  subtitle?: string;
  author: string;
  isbn?: string;
  chapters: Array<{
    title: string;
    content: string;
  }>;
  metadata: Record<string, string>;
}

export function compileManuscriptToPublication(
  bookId: string,
  title: string,
  author: string,
  chapters: Array<{ title: string; content: string }>
): IntermediatePublication {
  return {
    id: bookId,
    title,
    author,
    chapters,
    metadata: {
      compiledAt: new Date().toISOString(),
      compilerVersion: '1.0.0',
    },
  };
}
