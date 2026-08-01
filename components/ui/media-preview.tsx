"use client";

import React from "react";
import { X, Download, Eye } from "lucide-react";
import { Dialog } from "./dialog";
import { Button } from "./button";

export interface MediaPreviewProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  src: string;
  type?: "image" | "pdf";
}

export function MediaPreview({ isOpen, onClose, title, src, type = "image" }: MediaPreviewProps) {
  if (!isOpen) return null;

  return (
    <Dialog isOpen={isOpen} onClose={onClose} title={title || "Media Preview"} className="max-w-3xl">
      <div className="space-y-4">
        <div className="relative rounded-xl border border-white/10 overflow-hidden bg-black/60 flex items-center justify-center min-h-[300px]">
          {type === "image" ? (
            <img src={src} alt={title || "Preview"} className="max-h-[500px] w-auto object-contain" />
          ) : (
            <iframe src={src} className="w-full h-[500px]" title={title || "PDF Preview"} />
          )}
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline" size="sm" onClick={onClose}>Close</Button>
          <a href={src} download>
            <Button variant="gold" size="sm" className="gap-1.5"><Download className="h-4 w-4" /> Download</Button>
          </a>
        </div>
      </div>
    </Dialog>
  );
}
