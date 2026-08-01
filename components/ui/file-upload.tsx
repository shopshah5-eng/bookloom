"use client";

import React, { useState } from "react";
import { UploadCloud, CheckCircle2, File } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FileUploadProps {
  onFileSelect?: (file: File) => void;
  accept?: string;
  maxSizeMB?: number;
  className?: string;
}

export function FileUpload({ onFileSelect, accept = "image/*", maxSizeMB = 10, className }: FileUploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setSelectedFile(file);
      onFileSelect?.(file);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      onFileSelect?.(file);
    }
  };

  return (
    <div
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      className={cn(
        "p-8 border-2 border-dashed rounded-2xl text-center transition-all cursor-pointer relative glass-panel flex flex-col items-center justify-center space-y-3",
        dragActive ? "border-[#D4AF37] bg-[#D4AF37]/10" : "border-white/10 hover:border-white/30",
        className
      )}
    >
      <input type="file" accept={accept} onChange={handleChange} className="absolute inset-0 opacity-0 cursor-pointer" />

      {selectedFile ? (
        <div className="flex items-center gap-3 text-emerald-400">
          <CheckCircle2 className="h-6 w-6" />
          <div className="text-left">
            <p className="text-xs font-semibold text-[#FDFBF7]">{selectedFile.name}</p>
            <p className="text-[10px] text-[#A1A1AA]">{(selectedFile.size / (1024 * 1024)).toFixed(2)} MB</p>
          </div>
        </div>
      ) : (
        <>
          <div className="h-12 w-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
            <UploadCloud className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs font-semibold text-[#FDFBF7]">Click to upload or drag & drop</p>
            <p className="text-[10px] text-[#A1A1AA] mt-0.5">Supports images & documents up to {maxSizeMB}MB</p>
          </div>
        </>
      )}
    </div>
  );
}
