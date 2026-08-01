'use client';

import React from 'react';
import { OutlineItem } from '@bookloom/editor';
import { ListTree } from 'lucide-react';

export interface EditorOutlineProps {
  items: OutlineItem[];
  onSelectHeading?: (id: string) => void;
}

export const EditorOutline: React.FC<EditorOutlineProps> = ({ items, onSelectHeading }) => {
  return (
    <aside className="w-56 border-r border-zinc-800 bg-zinc-950 p-4 hidden lg:block overflow-y-auto">
      <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">
        <ListTree className="w-4 h-4 text-indigo-400" />
        <span>Outline</span>
      </div>

      <div className="space-y-1">
        {items.length === 0 ? (
          <p className="text-xs text-zinc-600 italic">No headings yet</p>
        ) : (
          items.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelectHeading?.(item.id)}
              className={`w-full text-left truncate text-xs py-1.5 px-2 rounded hover:bg-zinc-900 transition-colors ${
                item.level === 1
                  ? 'font-medium text-zinc-200'
                  : item.level === 2
                  ? 'pl-4 text-zinc-400'
                  : 'pl-6 text-zinc-500'
              }`}
            >
              {item.title}
            </button>
          ))
        )}
      </div>
    </aside>
  );
};
