'use client';

import React from 'react';
import { WorkspaceHeader } from './workspace-header';
import { BookOpen, FolderKanban, LayoutDashboard, Settings, Sparkles, Layers } from 'lucide-react';
import Link from 'next/link';

export interface WorkspaceShellProps {
  children: React.ReactNode;
}

export const WorkspaceShell: React.FC<WorkspaceShellProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans">
      <WorkspaceHeader />

      <div className="flex-1 flex">
        {/* Sidebar Navigation */}
        <aside className="w-60 border-r border-zinc-800/80 bg-zinc-950 p-4 hidden md:flex flex-col justify-between">
          <div className="space-y-6">
            <div className="space-y-1">
              <Link
                href="/dashboard"
                className="flex items-center gap-3 px-3 py-2 text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
              >
                <LayoutDashboard className="w-4 h-4 text-indigo-400" />
                Dashboard
              </Link>
              <Link
                href="/projects"
                className="flex items-center gap-3 px-3 py-2 text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
              >
                <FolderKanban className="w-4 h-4 text-zinc-400" />
                Projects
              </Link>
              <Link
                href="/books"
                className="flex items-center gap-3 px-3 py-2 text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
              >
                <BookOpen className="w-4 h-4 text-zinc-400" />
                Books
              </Link>
              <Link
                href="/ai"
                className="flex items-center gap-3 px-3 py-2 text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                AI Assistant
              </Link>
            </div>

            <div>
              <div className="px-3 text-[10px] font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                Workspace
              </div>
              <div className="space-y-1">
                <Link
                  href="/templates"
                  className="flex items-center gap-3 px-3 py-2 text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
                >
                  <Layers className="w-4 h-4 text-zinc-400" />
                  Templates
                </Link>
                <Link
                  href="/settings"
                  className="flex items-center gap-3 px-3 py-2 text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
                >
                  <Settings className="w-4 h-4 text-zinc-400" />
                  Settings
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-zinc-900 flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-xs text-white">
              B
            </div>
            <div className="flex-1 truncate">
              <p className="text-xs font-medium text-zinc-200 truncate">Author Workspace</p>
              <p className="text-[10px] text-zinc-500 truncate">pro_plan@bookloom.ai</p>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-6 overflow-y-auto max-w-7xl mx-auto w-full">{children}</main>
      </div>
    </div>
  );
};
