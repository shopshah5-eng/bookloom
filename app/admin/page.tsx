import React from 'react';
import { WorkspaceShell } from '@/components/layouts/workspace-shell';
import { Card, Badge, Button } from '@bookloom/ui';
import { ShieldAlert, Building2, Globe, FileText, CheckCircle2, Lock, Users } from 'lucide-react';

export default function EnterpriseAdminDashboardPage() {
  const policies = [
    { name: 'Enforce MFA for All Org Users', category: 'Authentication', status: 'Enforced' },
    { name: 'Data Residency - EU West (Frankfurt)', category: 'Compliance', status: 'Enforced' },
    { name: 'AI Zero-Data-Retention Pipeline', category: 'Privacy', status: 'Enforced' },
    { name: 'Automated 15-Min Database Backups', category: 'Infrastructure', status: 'Enforced' },
  ];

  return (
    <WorkspaceShell>
      <div className="space-y-8 max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-zinc-100 tracking-tight flex items-center gap-2">
              <ShieldAlert className="w-6 h-6 text-indigo-400" />
              Enterprise Control Plane & Global Administration
            </h1>
            <p className="text-sm text-zinc-400 mt-1">
              Centralized organization policy management, tenant isolation controls, and compliance audits.
            </p>
          </div>

          <Badge variant="success" className="text-xs px-3 py-1">
            <Lock className="w-3.5 h-3.5 mr-1" /> SOC2 Type II Certified
          </Badge>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-zinc-400">Total Managed Tenants</span>
              <Building2 className="w-4 h-4 text-indigo-400" />
            </div>
            <p className="text-2xl font-bold text-zinc-100 mt-2">142</p>
            <span className="text-[10px] text-zinc-400">Isolated enterprise cells</span>
          </Card>

          <Card>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-zinc-400">Active Governance Policies</span>
              <FileText className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-2xl font-bold text-zinc-100 mt-2">18</p>
            <span className="text-[10px] text-emerald-400 font-medium">100% Policy Compliance</span>
          </Card>

          <Card>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-zinc-400">Active Regions</span>
              <Globe className="w-4 h-4 text-indigo-400" />
            </div>
            <p className="text-2xl font-bold text-zinc-100 mt-2">3 Regions</p>
            <span className="text-[10px] text-zinc-400">US-East, EU-Central, AP-East</span>
          </Card>
        </div>

        <Card>
          <h2 className="text-sm font-semibold text-zinc-200 pb-3 border-b border-zinc-800">
            Enterprise Security & Governance Policies
          </h2>
          <div className="divide-y divide-zinc-800/60">
            {policies.map((p, idx) => (
              <div key={idx} className="py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <div>
                    <p className="text-xs font-semibold text-zinc-200">{p.name}</p>
                    <p className="text-[10px] text-zinc-500">{p.category}</p>
                  </div>
                </div>
                <Badge variant="success">{p.status}</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </WorkspaceShell>
  );
}
