import React from 'react';
import { WorkspaceShell } from '@/components/layouts/workspace-shell';
import { Card, Badge, Button } from '@bookloom/ui';
import { Code, Terminal, Key, Webhook, Box, ExternalLink } from 'lucide-react';

export default function DeveloperPortalPage() {
  return (
    <WorkspaceShell>
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-zinc-100 tracking-tight flex items-center gap-2">
              <Code className="w-6 h-6 text-indigo-400" />
              Developer Portal & Platform Hub
            </h1>
            <p className="text-sm text-zinc-400 mt-1">
              Build extensions, manage REST/GraphQL API keys, configure webhooks, and register OAuth applications.
            </p>
          </div>

          <Button variant="primary" size="sm">
            <Key className="w-3.5 h-3.5 mr-2" /> + Create API Key
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-zinc-400">Registered OAuth Apps</span>
              <Box className="w-4 h-4 text-indigo-400" />
            </div>
            <p className="text-2xl font-bold text-zinc-100 mt-2">2</p>
            <span className="text-[10px] text-zinc-400">Production client IDs</span>
          </Card>

          <Card>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-zinc-400">Active Webhooks</span>
              <Webhook className="w-4 h-4 text-indigo-400" />
            </div>
            <p className="text-2xl font-bold text-zinc-100 mt-2">5</p>
            <span className="text-[10px] text-emerald-400">100% delivery rate</span>
          </Card>

          <Card>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-zinc-400">Plugin SDK Version</span>
              <Terminal className="w-4 h-4 text-indigo-400" />
            </div>
            <p className="text-lg font-bold text-zinc-100 mt-2">v1.2.0-stable</p>
            <span className="text-[10px] text-zinc-400">Sandboxed TS runtime</span>
          </Card>
        </div>
      </div>
    </WorkspaceShell>
  );
}
