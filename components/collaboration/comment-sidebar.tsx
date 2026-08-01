'use client';

import React, { useState } from 'react';
import { CommentThread } from '@bookloom/editor';
import { MessageSquare, Check, Send } from 'lucide-react';
import { Button } from '@bookloom/ui';

export interface CommentSidebarProps {
  threads?: CommentThread[];
}

export const CommentSidebar: React.FC<CommentSidebarProps> = ({
  threads = [
    {
      id: 'c1',
      authorId: 'u1',
      authorName: 'Sarah Chen',
      text: 'Consider expanding this section with a practical vector database code sample.',
      resolved: false,
      createdAt: new Date(),
    },
  ],
}) => {
  const [commentText, setCommentText] = useState('');

  return (
    <aside className="w-72 border-l border-zinc-800 bg-zinc-950 p-4 flex flex-col h-full sticky top-14 right-0 z-10 text-xs">
      <div className="flex items-center gap-2 font-semibold text-zinc-200 mb-4 pb-2 border-b border-zinc-800">
        <MessageSquare className="w-4 h-4 text-indigo-400" />
        <span>Editorial Comments</span>
      </div>

      <div className="flex-1 overflow-y-auto space-y-3">
        {threads.map((t) => (
          <div key={t.id} className="bg-zinc-900 border border-zinc-800 rounded-lg p-3 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-zinc-200">{t.authorName}</span>
              <button className="text-zinc-500 hover:text-green-400 p-1" title="Resolve Thread">
                <Check className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-zinc-300 leading-relaxed">{t.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center gap-2">
        <input
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Add a comment..."
          className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-zinc-200 focus:outline-none"
        />
        <Button variant="primary" size="sm">
          <Send className="w-3.5 h-3.5" />
        </Button>
      </div>
    </aside>
  );
};
