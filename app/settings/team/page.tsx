import React from 'react';
import { WorkspaceShell } from '@/components/layouts/workspace-shell';
import { Card, Badge, Button } from '@bookloom/ui';
import { Users, UserPlus, Shield, Key } from 'lucide-react';

export default function TeamSettingsPage() {
  const members = [
    { id: '1', name: 'Author Workspace Owner', email: 'owner@bookloom.ai', role: 'Owner' },
    { id: '2', name: 'Sarah Chen', email: 'sarah@bookloom.ai', role: 'Editor' },
    { id: '3', name: 'Alex Rivera', email: 'alex@bookloom.ai', role: 'Reviewer' },
  ];

  return (
    <WorkspaceShell>
      <div className="space-y-8 max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-zinc-100 tracking-tight flex items-center gap-2">
              <Users className="w-6 h-6 text-indigo-400" />
              Team & Permission Management
            </h1>
            <p className="text-sm text-zinc-400 mt-1">
              Invite collaborators, manage RBAC roles, and configure organization access policies.
            </p>
          </div>

          <Button variant="primary" size="sm">
            <UserPlus className="w-3.5 h-3.5 mr-2" /> Invite Member
          </Button>
        </div>

        <Card>
          <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
            <h2 className="text-sm font-semibold text-zinc-200">Workspace Members ({members.length})</h2>
            <Badge variant="info">Pro Enterprise</Badge>
          </div>

          <div className="divide-y divide-zinc-800/60">
            {members.map((m) => (
              <div key={m.id} className="py-3 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-zinc-200">{m.name}</p>
                  <p className="text-[11px] text-zinc-500">{m.email}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium">
                    {m.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </WorkspaceShell>
  );
}
