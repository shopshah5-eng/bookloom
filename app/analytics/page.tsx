import React from 'react';
import { WorkspaceShell } from '@/components/layouts/workspace-shell';
import { Card, Badge } from '@bookloom/ui';
import { BarChart3, TrendingUp, Sparkles, DollarSign, Users, BookOpen } from 'lucide-react';

export default function AnalyticsDashboardPage() {
  const metrics = [
    { label: 'Monthly Recurring Revenue (MRR)', value: '$42,850', change: '+14.2% mo/mo', isPositive: true },
    { label: 'Active Workspaces', value: '1,280', change: '+8.4% mo/mo', isPositive: true },
    { label: 'Books Published (30d)', value: '3,450', change: '+22.1% mo/mo', isPositive: true },
    { label: 'AI Cost per Manuscript', value: '$1.42', change: '-8.5% mo/mo', isPositive: true },
  ];

  return (
    <WorkspaceShell>
      <div className="space-y-8 max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-zinc-100 tracking-tight flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-indigo-400" />
              Executive Analytics & Business Intelligence
            </h1>
            <p className="text-sm text-zinc-400 mt-1">
              Platform telemetry, cohort retention, AI token efficiency, and commercial performance.
            </p>
          </div>

          <Badge variant="info" className="text-xs px-3 py-1">
            Data Warehouse Sync: Realtime
          </Badge>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, idx) => (
            <Card key={idx}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-zinc-400">{m.label}</span>
                <TrendingUp className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-2xl font-bold text-zinc-100 mt-2">{m.value}</p>
              <span className="text-[10px] text-emerald-400 font-medium">{m.change}</span>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <h2 className="text-sm font-semibold text-zinc-200 pb-3 border-b border-zinc-800 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              AI Intelligence & Routing Efficiency
            </h2>
            <div className="mt-4 space-y-3 text-xs">
              <div className="flex justify-between items-center text-zinc-300">
                <span>GPT-4o (Reasoning & Generation)</span>
                <span className="font-semibold text-zinc-100">65% traffic ($0.012 / req)</span>
              </div>
              <div className="flex justify-between items-center text-zinc-300">
                <span>Claude 3.5 Sonnet (Prose Style)</span>
                <span className="font-semibold text-zinc-100">25% traffic ($0.015 / req)</span>
              </div>
              <div className="flex justify-between items-center text-zinc-300">
                <span>Gemini 1.5 Pro (Long Context)</span>
                <span className="font-semibold text-zinc-100">10% traffic ($0.008 / req)</span>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-sm font-semibold text-zinc-200 pb-3 border-b border-zinc-800 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-400" />
              Publishing Funnel Conversion
            </h2>
            <div className="mt-4 space-y-3 text-xs">
              <div className="flex justify-between items-center text-zinc-300">
                <span>New Book Started → Chapter 1 Completed</span>
                <span className="font-semibold text-emerald-400">84.2%</span>
              </div>
              <div className="flex justify-between items-center text-zinc-300">
                <span>Draft Completed → Preflight Validation</span>
                <span className="font-semibold text-emerald-400">71.8%</span>
              </div>
              <div className="flex justify-between items-center text-zinc-300">
                <span>Validation Passed → PDF/EPUB Export</span>
                <span className="font-semibold text-emerald-400">93.5%</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </WorkspaceShell>
  );
}
