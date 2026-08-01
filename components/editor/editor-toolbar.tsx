'use client';

import React from 'react';
import { Bold, Italic, Underline, Strikethrough, Code, Heading1, Heading2, Quote, List, Sparkles } from 'lucide-react';

export interface EditorToolbarProps {
  onFormatClick?: (action: string) => void;
  onAIClick?: () => void;
}

export const EditorToolbar: React.FC<EditorToolbarProps> = ({ onFormatClick, onAIClick }) => {
  return (
    <div className="h-12 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md px-4 flex items-center justify-between sticky top-0 z-20">
      <div className="flex items-center gap-1">
        <button
          onClick={() => onFormatClick?.('bold')}
          className="p-1.5 rounded hover:bg-zinc-800 text-zinc-300 transition-colors"
          title="Bold (Ctrl+B)"
        >
          <Bold className="w-4 h-4" />
        </button>
        <button
          onClick={() => onFormatClick?.('italic')}
          className="p-1.5 rounded hover:bg-zinc-800 text-zinc-300 transition-colors"
          title="Italic (Ctrl+I)"
        >
          <Italic className="w-4 h-4" />
        </button>
        <button
          onClick={() => onFormatClick?.('underline')}
          className="p-1.5 rounded hover:bg-zinc-800 text-zinc-300 transition-colors"
          title="Underline"
        >
          <Underline className="w-4 h-4" />
        </button>
        <button
          onClick={() => onFormatClick?.('strikethrough')}
          className="p-1.5 rounded hover:bg-zinc-800 text-zinc-300 transition-colors"
          title="Strikethrough"
        >
          <Strikethrough className="w-4 h-4" />
        </button>
        <span className="w-px h-4 bg-zinc-800 mx-1" />
        <button
          onClick={() => onFormatClick?.('h1')}
          className="p-1.5 rounded hover:bg-zinc-800 text-zinc-300 transition-colors"
          title="Heading 1"
        >
          <Heading1 className="w-4 h-4" />
        </button>
        <button
          onClick={() => onFormatClick?.('h2')}
          className="p-1.5 rounded hover:bg-zinc-800 text-zinc-300 transition-colors"
          title="Heading 2"
        >
          <Heading2 className="w-4 h-4" />
        </button>
        <button
          onClick={() => onFormatClick?.('quote')}
          className="p-1.5 rounded hover:bg-zinc-800 text-zinc-300 transition-colors"
          title="Quote"
        >
          <Quote className="w-4 h-4" />
        </button>
        <button
          onClick={() => onFormatClick?.('list')}
          className="p-1.5 rounded hover:bg-zinc-800 text-zinc-300 transition-colors"
          title="List"
        >
          <List className="w-4 h-4" />
        </button>
        <button
          onClick={() => onFormatClick?.('code')}
          className="p-1.5 rounded hover:bg-zinc-800 text-zinc-300 transition-colors"
          title="Code Block"
        >
          <Code className="w-4 h-4" />
        </button>
      </div>

      <button
        onClick={onAIClick}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 text-indigo-300 text-xs font-medium transition-colors"
      >
        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        <span>Ask AI Assistant</span>
      </button>
    </div>
  );
};
