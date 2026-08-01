import React from 'react';

export interface AIChatBubbleProps {
  role: 'user' | 'assistant' | 'system';
  content: string;
  isStreaming?: boolean;
}

export const AIChatBubble: React.FC<AIChatBubbleProps> = ({ role, content, isStreaming = false }) => {
  const isUser = role === 'user';

  return (
    <div className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'} my-2`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
          isUser
            ? 'bg-indigo-600 text-white rounded-br-none'
            : 'bg-zinc-800/90 text-zinc-100 border border-zinc-700/60 rounded-bl-none'
        }`}
      >
        <p className="whitespace-pre-wrap leading-relaxed">{content}</p>
        {isStreaming && (
          <span className="inline-block w-2 h-4 ml-1 bg-indigo-400 animate-pulse align-middle" />
        )}
      </div>
    </div>
  );
};
