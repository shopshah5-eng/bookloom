"use client";

import React, { useState } from "react";
import { Sparkles, Wand2, RefreshCw, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface AICopilotPanelProps {
  onInsertText: (text: string) => void;
}

export function AICopilotPanel({ onInsertText }: AICopilotPanelProps) {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedResult, setGeneratedResult] = useState<string | null>(null);

  const presets = [
    { title: "Continue Writing", action: "Continue writing the next 2 paragraphs maintaining editorial tone." },
    { title: "Expand Section", action: "Expand this chapter section with practical enterprise case studies." },
    { title: "Improve Clarity", action: "Rewrite for maximum editorial readability and concise phrasing." },
    { title: "Executive Tone", action: "Transform tone into authoritative executive prose." },
    { title: "Generate Summary", action: "Synthesize a 3-bullet executive summary of this chapter." },
  ];

  const handleGenerate = (actionPrompt: string) => {
    setIsGenerating(true);
    setGeneratedResult(null);

    setTimeout(() => {
      setIsGenerating(false);
      const mockResult = `In strategic digital transformation, executive leadership must align core AI infrastructure with long-term enterprise goals. Modern organizations leveraging decoupled AI pipelines experience 4x faster iteration cycles and reduced architectural technical debt.`;
      setGeneratedResult(mockResult);
    }, 1200);
  };

  return (
    <div className="space-y-4 text-xs text-[#FDFBF7]">
      <div className="flex items-center gap-2 border-b border-white/10 pb-3">
        <div className="h-7 w-7 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
          <Wand2 className="h-4 w-4" />
        </div>
        <div>
          <h3 className="font-serif font-bold text-sm">AI Editorial Copilot</h3>
          <p className="text-[10px] text-[#A1A1AA]">GPT-4o Stream Active</p>
        </div>
      </div>

      {/* Preset Action Buttons */}
      <div className="space-y-1.5">
        <span className="text-[10px] font-mono text-[#71717A] uppercase">SMART PRESETS</span>
        {presets.map((p, idx) => (
          <button
            key={idx}
            disabled={isGenerating}
            onClick={() => handleGenerate(p.action)}
            className="w-full text-left p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-[#A1A1AA] hover:text-[#FDFBF7] transition-all flex items-center justify-between group"
          >
            <span>{p.title}</span>
            <Sparkles className="h-3.5 w-3.5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
          </button>
        ))}
      </div>

      {/* Custom Prompt Input */}
      <div className="space-y-2 pt-2 border-t border-white/10">
        <span className="text-[10px] font-mono text-[#71717A] uppercase">CUSTOM AI INSTRUCTION</span>
        <div className="flex gap-2">
          <input
            placeholder="Ask AI to generate or rewrite..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-[#FDFBF7] placeholder-[#71717A] focus:outline-none focus:border-[#D4AF37]"
          />
          <Button
            variant="gold"
            size="sm"
            disabled={!prompt || isGenerating}
            onClick={() => handleGenerate(prompt)}
            className="px-3"
          >
            {isGenerating ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Send className="h-3.5 w-3.5" />}
          </Button>
        </div>
      </div>

      {/* Result Stream Box */}
      {isGenerating && (
        <div className="p-4 rounded-xl bg-black/60 border border-[#D4AF37]/30 text-center space-y-2 animate-pulse">
          <Sparkles className="h-5 w-5 text-[#D4AF37] mx-auto animate-spin" />
          <p className="text-xs text-[#A1A1AA]">Synthesizing text with editorial voice...</p>
        </div>
      )}

      {generatedResult && (
        <div className="p-4 rounded-xl glass-panel-gold border border-[#D4AF37]/40 space-y-3">
          <div className="flex justify-between items-center text-[10px] text-[#D4AF37] font-semibold">
            <span>AI Output Result</span>
            <CheckCircle2 className="h-3.5 w-3.5" />
          </div>
          <p className="text-xs text-[#FDFBF7] font-serif leading-relaxed italic">&quot;{generatedResult}&quot;</p>
          <Button
            variant="gold"
            size="sm"
            onClick={() => {
              onInsertText(generatedResult);
              setGeneratedResult(null);
            }}
            className="w-full text-xs gap-1.5"
          >
            Insert Into Document Block
          </Button>
        </div>
      )}
    </div>
  );
}
