import React from 'react';
import { WorkspaceShell } from '@/components/layouts/workspace-shell';
import { Card, Badge, Button } from '@bookloom/ui';
import { Box, CheckCircle2, Download, ShieldCheck, Sparkles } from 'lucide-react';

export default function PluginMarketplacePage() {
  const plugins = [
    {
      id: 'p1',
      name: 'Zotero Citation Sync',
      author: 'Academic Tools Inc',
      version: 'v2.1.0',
      installed: true,
      description: 'Automatically synchronizes reference libraries, DOIs, and bibliography footnotes into the BookLoom editor.',
    },
    {
      id: 'p2',
      name: 'Grammarly Pro Integrator',
      author: 'Grammarly Platform Team',
      version: 'v1.4.2',
      installed: true,
      description: 'Real-time tone analysis and advanced clarity suggestions rendered inside the review sidebar.',
    },
  ];

  return (
    <WorkspaceShell>
      <div className="space-y-8 max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-zinc-100 tracking-tight flex items-center gap-2">
              <Box className="w-6 h-6 text-indigo-400" />
              Plugin Marketplace & Extensions
            </h1>
            <p className="text-sm text-zinc-400 mt-1">
              Browse verified third-party extensions, editor plugins, and publishing connectors.
            </p>
          </div>

          <Button variant="secondary" size="sm">
            <Download className="w-3.5 h-3.5 mr-2" /> Install Custom Plugin (.zip)
          </Button>
        </div>

        <div className="space-y-4">
          {plugins.map((p) => (
            <Card key={p.id} className="p-5">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-base font-semibold text-zinc-100">{p.name}</h2>
                    <Badge variant="success">
                      <CheckCircle2 className="w-3 h-3 mr-1" /> Installed
                    </Badge>
                  </div>
                  <p className="text-xs text-zinc-500 mt-0.5">By {p.author} • {p.version}</p>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed">{p.description}</p>
                </div>
                <Button variant="secondary" size="sm">
                  Configure
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </WorkspaceShell>
  );
}
