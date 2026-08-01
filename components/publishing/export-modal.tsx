'use client';

import React, { useState } from 'react';
import { ExportFormat } from '@bookloom/publishing';
import { Download, FileCheck, AlertTriangle, X } from 'lucide-react';
import { Button, Card } from '@bookloom/ui';

export interface ExportModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  bookTitle?: string;
}

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen = true,
  onClose,
  bookTitle = 'The Art of AI Product Architecture',
}) => {
  const [selectedFormat, setSelectedFormat] = useState<ExportFormat>('pdf');
  const [isExporting, setIsExporting] = useState(false);

  if (!isOpen) return null;

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      alert(`Exported "${bookTitle}" as ${selectedFormat.toUpperCase()}`);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-zinc-950 border border-zinc-800 rounded-xl max-w-lg w-full overflow-hidden shadow-2xl">
        <div className="px-6 py-4 border-b border-zinc-800 flex items-center justify-between">
          <h2 className="text-base font-semibold text-zinc-100">Export Manuscript</h2>
          <button onClick={onClose} className="text-zinc-400 hover:text-zinc-200">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-2">
              Select Format
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['pdf', 'epub', 'docx', 'html', 'markdown'] as ExportFormat[]).map((fmt) => (
                <button
                  key={fmt}
                  onClick={() => setSelectedFormat(fmt)}
                  className={`p-3 rounded-lg border text-xs font-medium uppercase transition-all ${
                    selectedFormat === fmt
                      ? 'border-indigo-500 bg-indigo-600/10 text-indigo-300'
                      : 'border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-zinc-700'
                  }`}
                >
                  {fmt}
                </button>
              ))}
            </div>
          </div>

          <Card className="bg-zinc-900/40">
            <div className="flex items-center gap-2 text-xs font-medium text-amber-400 mb-1">
              <AlertTriangle className="w-4 h-4" />
              <span>Preflight Status</span>
            </div>
            <p className="text-xs text-zinc-400">
              Passed 4/5 checks. ISBN is not set (commercial print requires ISBN).
            </p>
          </Card>
        </div>

        <div className="px-6 py-4 border-t border-zinc-800 flex justify-end gap-3 bg-zinc-950/50">
          <Button variant="secondary" size="sm" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" size="sm" onClick={handleExport} disabled={isExporting}>
            <Download className="w-3.5 h-3.5 mr-2" />
            {isExporting ? 'Exporting...' : `Export as ${selectedFormat.toUpperCase()}`}
          </Button>
        </div>
      </div>
    </div>
  );
};
