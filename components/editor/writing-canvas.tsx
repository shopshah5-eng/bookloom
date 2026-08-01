'use client';

import React, { useState } from 'react';
import { EditorBlock, calculateWordCount } from '@bookloom/editor';

export interface WritingCanvasProps {
  initialTitle?: string;
  initialBlocks?: EditorBlock[];
}

export const WritingCanvas: React.FC<WritingCanvasProps> = ({
  initialTitle = 'The Art of AI Architecture',
  initialBlocks,
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(
    'Building modern AI-native applications requires clean modularity, continuous state persistence, and a decoupled context retrieval pipeline. Every block in BookLoom is designed for sub-16ms editing performance.'
  );

  const wordCount = calculateWordCount(title + ' ' + content);
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <div className="flex-1 flex flex-col justify-between bg-zinc-950 text-zinc-100 min-h-screen">
      <div className="max-w-[760px] w-full mx-auto px-6 py-12 flex-1 space-y-6 font-serif">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full bg-transparent text-4xl font-bold font-sans text-zinc-100 placeholder-zinc-600 focus:outline-none tracking-tight border-b border-transparent focus:border-zinc-800 pb-2 transition-all"
          placeholder="Book Title..."
        />

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={18}
          className="w-full bg-transparent text-lg text-zinc-300 leading-relaxed font-sans placeholder-zinc-600 focus:outline-none resize-none"
          placeholder="Begin writing..."
        />
      </div>

      {/* Editor Footer Status Bar */}
      <footer className="h-9 border-t border-zinc-900 bg-zinc-950 px-6 flex items-center justify-between text-[11px] text-zinc-500 font-sans sticky bottom-0">
        <div className="flex items-center gap-4">
          <span>Autosaved</span>
          <span>•</span>
          <span>{wordCount} words</span>
          <span>•</span>
          <span>{readingTime} min read</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>Sync Ready</span>
        </div>
      </footer>
    </div>
  );
};
