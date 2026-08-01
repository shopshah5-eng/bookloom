import React from 'react';
import { WorkspaceShell } from '@/components/layouts/workspace-shell';
import { Card, Badge, Button } from '@bookloom/ui';
import { CreditCard, Zap, CheckCircle2, ShieldCheck, Sparkles, Download } from 'lucide-react';

export default function BillingSettingsPage() {
  const plans = [
    {
      name: 'Starter',
      price: '$19 / mo',
      description: 'Ideal for independent authors and creators.',
      features: ['Up to 10 active books', '500k AI tokens / mo', 'PDF, EPUB, DOCX exports'],
      current: false,
    },
    {
      name: 'Professional',
      price: '$49 / mo',
      description: 'For publishing teams and professional writers.',
      features: ['Up to 50 active books', '2.5M AI tokens / mo', 'Custom plugin SDK access', 'Realtime team co-authoring'],
      current: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Dedicated infrastructure, custom SLAs, and SAML SSO.',
      features: ['Unlimited books & seats', 'Dedicated AI model routing', 'SOC2 compliance reports', '24/7 SRE priority support'],
      current: false,
    },
  ];

  return (
    <WorkspaceShell>
      <div className="space-y-8 max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-zinc-100 tracking-tight flex items-center gap-2">
              <CreditCard className="w-6 h-6 text-indigo-400" />
              Subscription, Billing & Plan Entitlements
            </h1>
            <p className="text-sm text-zinc-400 mt-1">
              Manage workspace plans, billing invoices, seat licensing, and AI token quotas.
            </p>
          </div>

          <Button variant="secondary" size="sm">
            <Download className="w-3.5 h-3.5 mr-2" /> Download Invoices
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, idx) => (
            <Card key={idx} className={`p-6 border ${p.current ? 'border-indigo-500 bg-indigo-950/20' : 'border-zinc-800'}`}>
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-zinc-100">{p.name}</h2>
                {p.current && <Badge variant="success">Current Plan</Badge>}
              </div>
              <p className="text-2xl font-bold text-zinc-100 mt-3">{p.price}</p>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{p.description}</p>

              <div className="mt-6 pt-4 border-t border-zinc-800 space-y-2">
                {p.features.map((f, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Button variant={p.current ? 'secondary' : 'primary'} className="w-full text-xs" disabled={p.current}>
                  {p.current ? 'Active Plan' : 'Upgrade Plan'}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </WorkspaceShell>
  );
}
