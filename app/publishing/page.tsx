import React from 'react';
import { WorkspaceShell } from '@/components/layouts/workspace-shell';
import { Card, Badge, Button } from '@bookloom/ui';
import { BookOpen, FileCheck, Layers, Printer, Share2 } from 'lucide-react';

export default function PublishingPage() {
  return (
    <WorkspaceShell>
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-zinc-100 tracking-tight flex items-center gap-2">
              <Printer className="w-6 h-6 text-indigo-400" />
              Publishing Engine & Export Hub
            </h1>
            <p className="text-sm text-zinc-400 mt-1">
              Transform manuscripts into production-ready PDF, EPUB, DOCX, and print assets.
            </p>
          </div>

          <Button variant="primary" size="sm">
            <Share2 className="w-3.5 h-3.5 mr-2" /> Start Publishing Run
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-zinc-400">Rendered Artifacts</span>
              <FileCheck className="w-4 h-4 text-indigo-400" />
            </div>
            <p className="text-2xl font-bold text-zinc-100 mt-2">14</p>
            <span className="text-[10px] text-zinc-400">PDF, EPUB, DOCX available</span>
          </Card>

          <Card>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-zinc-400">Preflight Validation</span>
              <Badge variant="success">Passed</Badge>
            </div>
            <p className="text-2xl font-bold text-zinc-100 mt-2">100%</p>
            <span className="text-[10px] text-zinc-400">Ready for distribution</span>
          </Card>

          <Card>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-zinc-400">Active Theme</span>
              <Layers className="w-4 h-4 text-indigo-400" />
            </div>
            <p className="text-lg font-bold text-zinc-100 mt-2">Classic Novel (6x9")</p>
            <span className="text-[10px] text-zinc-400">Custom drop caps enabled</span>
          </Card>
        </div>
      </div>
    </WorkspaceShell>
  );
}
