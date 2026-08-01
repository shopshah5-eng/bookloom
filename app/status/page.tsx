import React from 'react';
import { WorkspaceShell } from '@/components/layouts/workspace-shell';
import { Card, Badge } from '@bookloom/ui';
import { Activity, CheckCircle2, Server, Database, Cpu, HardDrive } from 'lucide-react';

export default function SystemStatusPage() {
  const services = [
    { name: 'API Gateway & Auth', status: 'Operational', latency: '24ms' },
    { name: 'Database & Prisma ORM', status: 'Operational', latency: '4ms' },
    { name: 'AI Multi-Provider Router', status: 'Operational', latency: '310ms' },
    { name: 'Publishing & Export Engine', status: 'Operational', latency: '45ms' },
    { name: 'Realtime WebSocket Cluster', status: 'Operational', latency: '12ms' },
  ];

  return (
    <WorkspaceShell>
      <div className="space-y-8 max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-zinc-100 tracking-tight flex items-center gap-2">
              <Activity className="w-6 h-6 text-emerald-400" />
              BookLoom System Status & SRE Operations
            </h1>
            <p className="text-sm text-zinc-400 mt-1">
              Live operational health, service availability, error budget monitoring, and cluster status.
            </p>
          </div>

          <Badge variant="success" className="text-xs px-3 py-1">
            All Systems Operational (99.98% Uptime)
          </Badge>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-zinc-400">SLO Uptime (30d)</span>
              <Server className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-2xl font-bold text-zinc-100 mt-2">99.98%</p>
            <span className="text-[10px] text-emerald-400 font-medium">Target 99.90%</span>
          </Card>

          <Card>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-zinc-400">Error Budget Remaining</span>
              <Activity className="w-4 h-4 text-indigo-400" />
            </div>
            <p className="text-2xl font-bold text-zinc-100 mt-2">92.4%</p>
            <span className="text-[10px] text-zinc-400">Healthy budget balance</span>
          </Card>

          <Card>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-zinc-400">Average API P95 Latency</span>
              <Cpu className="w-4 h-4 text-indigo-400" />
            </div>
            <p className="text-2xl font-bold text-zinc-100 mt-2">142 ms</p>
            <span className="text-[10px] text-zinc-400">Under 250ms target</span>
          </Card>
        </div>

        <Card>
          <h2 className="text-sm font-semibold text-zinc-200 pb-3 border-b border-zinc-800">
            Service Infrastructure Health
          </h2>
          <div className="divide-y divide-zinc-800/60">
            {services.map((s, idx) => (
              <div key={idx} className="py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-medium text-zinc-200">{s.name}</span>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <span className="text-zinc-500 font-mono">{s.latency}</span>
                  <Badge variant="success">{s.status}</Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </WorkspaceShell>
  );
}
