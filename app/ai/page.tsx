import React from 'react';
import { WorkspaceShell } from '@/components/layouts/workspace-shell';
import { Card, Badge, Button } from '@bookloom/ui';
import { Sparkles, Bot, Cpu, Zap, ShieldCheck } from 'lucide-react';

export default function AIPage() {
  return (
    <WorkspaceShell>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-zinc-100 tracking-tight flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-amber-400" />
            AI Intelligence Hub
          </h1>
          <p className="text-sm text-zinc-400 mt-1">
            Manage provider connections, context memory, and writing assistants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-zinc-400">Primary Model</span>
              <Badge variant="info">Active</Badge>
            </div>
            <p className="text-lg font-bold text-zinc-100 mt-2">OpenAI GPT-4o</p>
            <p className="text-[10px] text-zinc-500 mt-1">128k Context Window</p>
          </Card>

          <Card>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-zinc-400">Secondary Model</span>
              <Badge variant="success">Standby</Badge>
            </div>
            <p className="text-lg font-bold text-zinc-100 mt-2">Claude 3.5 Sonnet</p>
            <p className="text-[10px] text-zinc-500 mt-1">200k Context Window</p>
          </Card>

          <Card>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-zinc-400">RAG Index Status</span>
              <Badge variant="success">Synchronized</Badge>
            </div>
            <p className="text-lg font-bold text-zinc-100 mt-2">1,420 Vectors</p>
            <p className="text-[10px] text-zinc-500 mt-1">3 Manuscripts indexed</p>
          </Card>
        </div>

        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 space-y-4">
          <h2 className="text-base font-semibold text-zinc-200">AI Safety & Governance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-zinc-950/60 border border-zinc-800">
              <ShieldCheck className="w-5 h-5 text-indigo-400 mt-0.5" />
              <div>
                <p className="font-medium text-zinc-200">Zero Data Retention</p>
                <p className="text-zinc-500 mt-0.5">Manuscripts are never used for model training.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-zinc-950/60 border border-zinc-800">
              <Zap className="w-5 h-5 text-amber-400 mt-0.5" />
              <div>
                <p className="font-medium text-zinc-200">Cost & Budget Limiters</p>
                <p className="text-zinc-500 mt-0.5">Workspace budget cap set to $50/month.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WorkspaceShell>
  );
}
