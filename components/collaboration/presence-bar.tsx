'use client';

import React from 'react';
import { CollaboratorPresence } from '@bookloom/editor';
import { Users } from 'lucide-react';

export interface PresenceBarProps {
  collaborators?: CollaboratorPresence[];
}

export const PresenceBar: React.FC<PresenceBarProps> = ({
  collaborators = [
    { userId: '1', name: 'Sarah Chen', color: '#6366f1' },
    { userId: '2', name: 'Alex Rivera', color: '#10b981' },
  ],
}) => {
  return (
    <div className="flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs">
      <Users className="w-3.5 h-3.5 text-zinc-400" />
      <div className="flex -space-x-1.5 overflow-hidden">
        {collaborators.map((c) => (
          <div
            key={c.userId}
            className="w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] text-white border border-zinc-950"
            style={{ backgroundColor: c.color }}
            title={`${c.name} is currently editing`}
          >
            {c.name[0]}
          </div>
        ))}
      </div>
      <span className="text-zinc-400 font-medium text-[11px]">
        {collaborators.length} active
      </span>
    </div>
  );
};
