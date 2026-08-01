'use client';

import React, { useState } from 'react';
import { Sparkles, Send, Bot, X, RefreshCw } from 'lucide-react';
import { Button } from '@bookloom/ui';

export interface AIDrawerProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const AIDrawer: React.FC<AIDrawerProps> = ({ isOpen = true, onClose }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string }>>([
    {
      sender: 'ai',
      text: 'Hello! I am your BookLoom AI writing partner. How can I help with your book today?',
    },
  ]);

  if (!isOpen) return null;

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput('');
    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: userMsg },
      { sender: 'ai', text: `Analyzing "${userMsg}" against manuscript context...` },
    ]);
  };

  return (
    <div className="w-80 border-l border-zinc-800 bg-zinc-950 flex flex-col h-full sticky top-14 right-0 z-20 font-sans">
      <div className="h-12 border-b border-zinc-800 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-semibold text-zinc-200">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>AI Assistant</span>
        </div>
        <button onClick={onClose} className="text-zinc-400 hover:text-zinc-200 p-1">
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`flex gap-2 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {m.sender === 'ai' && (
              <div className="w-6 h-6 rounded-full bg-indigo-600/30 flex items-center justify-center border border-indigo-500/40">
                <Bot className="w-3.5 h-3.5 text-indigo-400" />
              </div>
            )}
            <div
              className={`p-3 rounded-lg max-w-[80%] leading-relaxed ${
                m.sender === 'user'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-zinc-900 border border-zinc-800 text-zinc-300'
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 border-t border-zinc-800 space-y-2">
        <div className="flex items-center gap-1 overflow-x-auto pb-1">
          <button className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] text-zinc-400 hover:text-zinc-200 whitespace-nowrap">
            Continue Scene
          </button>
          <button className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] text-zinc-400 hover:text-zinc-200 whitespace-nowrap">
            Fix Prose
          </button>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask AI..."
            className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-zinc-200 focus:outline-none focus:border-zinc-700"
          />
          <Button variant="primary" size="sm" onClick={handleSend}>
            <Send className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
