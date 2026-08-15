'use client';

import React from 'react';
import Link from 'next/link';
import { Search, Bell, Command, ChevronDown } from 'lucide-react';
import { Button } from '@bookloom/ui';

export interface WorkspaceHeaderProps {
  currentWorkspaceName?: string;
  onSearchClick?: () => void;
}

export const WorkspaceHeader: React.FC<WorkspaceHeaderProps> = ({
  currentWorkspaceName = 'Default Workspace',
  onSearchClick,
}) => {
  return (
    <header className="h-14 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md px-4 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-800 hover:bg-zinc-900 transition-colors text-xs font-medium text-zinc-200">
          <span className="w-2 h-2 rounded-full bg-indigo-500" />
          <span>{currentWorkspaceName}</span>
          <ChevronDown className="w-3.5 h-3.5 text-zinc-400" />
        </button>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={onSearchClick}
          className="flex items-center gap-2 px-3 py-1.5 w-64 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 hover:border-zinc-700 transition-colors text-left"
        >
          <Search className="w-3.5 h-3.5 text-zinc-400" />
          <span className="flex-1">Search books, projects...</span>
          <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono bg-zinc-800 text-zinc-400 rounded">
            <Command className="w-2.5 h-2.5" /> K
          </kbd>
        </button>

        <button className="relative p-2 text-zinc-400 hover:text-zinc-200 rounded-lg hover:bg-zinc-900 transition-colors">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-500 rounded-full" />
        </button>

        <Link href="/dashboard/create">
          <Button variant="primary" size="sm">
            + New Book
          </Button>
        </Link>
      </div>
    </header>
  );
};
