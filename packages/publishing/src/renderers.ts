import { IntermediatePublication } from './compiler';

export type ExportFormat = 'pdf' | 'epub' | 'docx' | 'html' | 'markdown';

export interface RenderResult {
  format: ExportFormat;
  content: string | Uint8Array;
  mimeType: string;
  filename: string;
}

export async function renderPublication(
  pub: IntermediatePublication,
  format: ExportFormat
): Promise<RenderResult> {
  const sanitizedTitle = pub.title.toLowerCase().replace(/[^a-z0-9]/g, '_');

  switch (format) {
    case 'html':
      return {
        format: 'html',
        content: `<!DOCTYPE html><html><head><title>${pub.title}</title></head><body><h1>${pub.title}</h1><h2>by ${pub.author}</h2>${pub.chapters.map((c) => `<section><h3>${c.title}</h3><p>${c.content}</p></section>`).join('')}</body></html>`,
        mimeType: 'text/html',
        filename: `${sanitizedTitle}.html`,
      };

    case 'markdown':
      return {
        format: 'markdown',
        content: `# ${pub.title}\n\n**Author:** ${pub.author}\n\n` +
          pub.chapters.map((c) => `## ${c.title}\n\n${c.content}`).join('\n\n'),
        mimeType: 'text/markdown',
        filename: `${sanitizedTitle}.md`,
      };

    case 'epub':
      return {
        format: 'epub',
        content: `[EPUB Binary Stream for ${pub.title}]`,
        mimeType: 'application/epub+zip',
        filename: `${sanitizedTitle}.epub`,
      };

    case 'pdf':
    default:
      return {
        format: 'pdf',
        content: `[PDF Print Stream for ${pub.title}]`,
        mimeType: 'application/pdf',
        filename: `${sanitizedTitle}.pdf`,
      };
  }
}
