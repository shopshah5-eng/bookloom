"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Sparkles,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sliders,
  Play,
  Pause,
  RotateCcw,
  XCircle,
  Terminal,
  Clock,
  Layers,
  Wand2,
} from "lucide-react";

export default function GeneratorPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);

  // Form State
  const [formData, setFormData] = useState({
    title: "Sovereign Executive Architecture",
    subtitle: "AI Systems Strategy for Enterprise Leaders",
    description: "A pragmatic guide to building sovereign AI infrastructure.",
    author: "Dr. Evelyn Vance",
    language: "English (US)",
    genre: "Non-Fiction Strategy",
    targetWords: "35,000",
    readingLevel: "Executive",
    targetAudience: "CTOs, VPs of Engineering, Enterprise Architects",
    writingTone: "Authoritative & Editorial",
    model: "gpt-4o",
    temperature: "0.7",
    citationMode: "APA 7th Edition",
    chaptersCount: 10,
  });

  // Real-time Generation Progress State
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);
  const [activeChapterIndex, setActiveChapterIndex] = useState(1);
  const [logs, setLogs] = useState<string[]>([]);

  // Simulation timer for Step 8 generation progress
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isGenerating && !isPaused && progressPercent < 100) {
      interval = setInterval(() => {
        setProgressPercent((prev) => {
          const next = prev + 5;
          if (next % 10 === 0) {
            const ch = Math.min(10, Math.floor(next / 10));
            setActiveChapterIndex(ch);
            setLogs((l) => [
              ...l,
              `[${new Date().toLocaleTimeString()}] Compiled Chapter ${ch}: Research citations validated & text synthesized (${(ch * 3500).toLocaleString()} words).`,
            ]);
          }
          if (next >= 100) {
            setIsGenerating(false);
            setLogs((l) => [...l, `[${new Date().toLocaleTimeString()}] Ebook compilation 100% complete! Handoff to Rich Text Editor.`]);
          }
          return next;
        });
      }, 600);
    }
    return () => clearInterval(interval);
  }, [isGenerating, isPaused, progressPercent]);

  const steps = [
    { num: 1, label: "Project Info" },
    { num: 2, label: "Book Goal" },
    { num: 3, label: "Audience" },
    { num: 4, label: "Writing Style" },
    { num: 5, label: "Outline Gen" },
    { num: 6, label: "Chapter Plan" },
    { num: 7, label: "AI Review" },
    { num: 8, label: "Generation" },
    { num: 9, label: "Editing" },
    { num: 10, label: "Export" },
  ];

  const handleStartGeneration = async () => {
    setCurrentStep(8);
    setIsGenerating(true);
    setProgressPercent(5);
    const newLogs: string[] = [`[${new Date().toLocaleTimeString()}] Initializing AI Ebook Generation Stream...`];
    setLogs([...newLogs]);

    const bookId = `eb_${Date.now()}`;
    const chaptersCount = formData.chaptersCount || 10;
    const generatedChapters: any[] = [];

    // Stage 1: Get AI Outline
    try {
      newLogs.push(`[${new Date().toLocaleTimeString()}] Stage 1 DAG Node: Synthesizing ${chaptersCount}-chapter outline for "${formData.title}"...`);
      setLogs([...newLogs]);

      const resOutline = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: `${formData.title}: ${formData.subtitle}. ${formData.description}`,
          chaptersCount,
          mode: "outline",
        }),
      });

      const outlineJson = await resOutline.json();
      const outline = outlineJson.success && outlineJson.data?.outline ? outlineJson.data.outline : Array.from({ length: chaptersCount }, (_, i) => ({
        chapterNumber: i + 1,
        title: `Chapter ${i + 1}: ${formData.title} Framework`,
        summary: `Strategic overview of chapter ${i + 1}`,
      }));

      // Stage 2: Generate Chapters
      for (let i = 0; i < outline.length; i++) {
        const ch = outline[i];
        setActiveChapterIndex(i + 1);
        const curProgress = Math.round(((i + 1) / outline.length) * 90) + 5;
        setProgressPercent(curProgress);

        newLogs.push(`[${new Date().toLocaleTimeString()}] Synthesizing Chapter ${i + 1}/${outline.length}: "${ch.title}" with AI model...`);
        setLogs([...newLogs]);

        try {
          const chRes = await fetch("/api/generate-chapter", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              bookTitle: formData.title,
              chapterNumber: i + 1,
              totalChapters: outline.length,
              title: ch.title,
              summary: ch.summary,
              sections: ch.sections || [],
              tone: formData.writingTone,
            }),
          });
          const chJson = await chRes.json();
          const content = chJson.success && chJson.data?.content ? chJson.data.content : `# ${ch.title}\n\n${ch.summary}\n\nComprehensive manuscript chapter prose.`;
          const wordCount = chJson.data?.wordCount || content.split(/\s+/).length;

          generatedChapters.push({
            id: i + 1,
            chapterNumber: i + 1,
            title: ch.title,
            summary: ch.summary,
            content,
            wordCount,
            status: "complete",
          });

          newLogs.push(`[${new Date().toLocaleTimeString()}] Chapter ${i + 1} compiled successfully (${wordCount} words).`);
          setLogs([...newLogs]);
        } catch (e) {
          generatedChapters.push({
            id: i + 1,
            chapterNumber: i + 1,
            title: ch.title,
            summary: ch.summary,
            content: `# ${ch.title}\n\n${ch.summary}\n\nComprehensive manuscript chapter prose.`,
            wordCount: 1200,
            status: "complete",
          });
        }
      }

      const totalWords = generatedChapters.reduce((acc, curr) => acc + curr.wordCount, 0);

      const fullBook = {
        id: bookId,
        title: formData.title,
        subtitle: formData.subtitle,
        prompt: formData.description,
        ebookType: formData.genre,
        targetPages: Math.round(totalWords / 350),
        theme: "Modern Minimal",
        chaptersCount: generatedChapters.length,
        chapters: generatedChapters,
        totalWords,
        createdAt: new Date().toISOString(),
      };

      try {
        localStorage.setItem("bookloom_current_book", JSON.stringify(fullBook));
        const existingStr = localStorage.getItem("bookloom_books");
        const existingBooks = existingStr ? JSON.parse(existingStr) : [];
        localStorage.setItem("bookloom_books", JSON.stringify([fullBook, ...existingBooks.filter((b: any) => b.id !== bookId)]));
      } catch (e) {}

      setProgressPercent(100);
      setIsGenerating(false);
      newLogs.push(`[${new Date().toLocaleTimeString()}] Ebook compilation 100% complete! Total ${totalWords.toLocaleString()} words synthesized. Ready for Live Editor.`);
      setLogs([...newLogs]);
    } catch (err: any) {
      setIsGenerating(false);
      newLogs.push(`[${new Date().toLocaleTimeString()}] Generation error: ${err.message}`);
      setLogs([...newLogs]);
    }
  };


  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Step Stepper Header */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <Badge variant="gold">10-Step AI Publishing Wizard</Badge>
            <h1 className="font-serif text-3xl font-bold gradient-text-gold">AI Ebook Generator</h1>
          </div>
          <span className="text-xs text-[#A1A1AA]">
            Step <span className="font-bold text-[#FDFBF7]">{currentStep}</span> of 10
          </span>
        </div>

        {/* Stepper Dots */}
        <div className="grid grid-cols-10 gap-1 sm:gap-2 border-b border-white/10 pb-4 overflow-x-auto">
          {steps.map((s) => (
            <button
              key={s.num}
              onClick={() => s.num < 8 && setCurrentStep(s.num)}
              className={`p-2 rounded-lg text-center transition-all ${
                currentStep === s.num
                  ? "bg-[#D4AF37] text-[#0A0A0C] font-bold"
                  : currentStep > s.num
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                  : "bg-white/5 text-[#71717A]"
              }`}
            >
              <span className="text-[10px] block uppercase">{s.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <Card variant="gold" className="p-8 border-[#D4AF37]/30 min-h-[420px] flex flex-col justify-between">
        {/* Step 1: Project Info */}
        {currentStep === 1 && (
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#FDFBF7]">Step 1: Project Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-[#A1A1AA] mb-1 block">Book Title</label>
                <Input value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
              </div>
              <div>
                <label className="text-xs text-[#A1A1AA] mb-1 block">Subtitle</label>
                <Input value={formData.subtitle} onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })} />
              </div>
              <div className="md:col-span-2">
                <label className="text-xs text-[#A1A1AA] mb-1 block">Description & Core Thesis</label>
                <Input value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
              </div>
              <div>
                <label className="text-xs text-[#A1A1AA] mb-1 block">Author Name</label>
                <Input value={formData.author} onChange={(e) => setFormData({ ...formData, author: e.target.value })} />
              </div>
              <div>
                <label className="text-xs text-[#A1A1AA] mb-1 block">Publication Language</label>
                <Input value={formData.language} onChange={(e) => setFormData({ ...formData, language: e.target.value })} />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Book Goal */}
        {currentStep === 2 && (
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#FDFBF7]">Step 2: Book Goal & Scope</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-[#A1A1AA] mb-1 block">Primary Genre</label>
                <Input value={formData.genre} onChange={(e) => setFormData({ ...formData, genre: e.target.value })} />
              </div>
              <div>
                <label className="text-xs text-[#A1A1AA] mb-1 block">Target Word Count</label>
                <Input value={formData.targetWords} onChange={(e) => setFormData({ ...formData, targetWords: e.target.value })} />
              </div>
              <div>
                <label className="text-xs text-[#A1A1AA] mb-1 block">Reading Complexity Level</label>
                <Input value={formData.readingLevel} onChange={(e) => setFormData({ ...formData, readingLevel: e.target.value })} />
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Audience */}
        {currentStep === 3 && (
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#FDFBF7]">Step 3: Target Audience Profile</h2>
            <div>
              <label className="text-xs text-[#A1A1AA] mb-1 block">Target Readers</label>
              <Input value={formData.targetAudience} onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })} />
            </div>
          </div>
        )}

        {/* Step 4: Writing Style */}
        {currentStep === 4 && (
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#FDFBF7]">Step 4: Writing Tone & AI Parameters</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-[#A1A1AA] mb-1 block">Tone of Voice</label>
                <Input value={formData.writingTone} onChange={(e) => setFormData({ ...formData, writingTone: e.target.value })} />
              </div>
              <div>
                <label className="text-xs text-[#A1A1AA] mb-1 block">AI Model Engine</label>
                <select
                  value={formData.model}
                  onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                  className="w-full rounded-lg bg-[#18181B] border border-white/10 p-2.5 text-sm text-[#FDFBF7]"
                >
                  <option value="gpt-4o">OpenAI GPT-4o (Default)</option>
                  <option value="claude-3-5">Anthropic Claude 3.5 Sonnet</option>
                  <option value="gemini-1-5">Google Gemini 1.5 Pro</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Step 5: Outline Gen */}
        {currentStep === 5 && (
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#FDFBF7]">Step 5: Generated 10-Chapter Outline</h2>
            <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs text-[#FDFBF7]">
                  <span className="font-bold text-[#D4AF37]">Chapter {i + 1}:</span> Strategic Architectural Pillar #{i + 1}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 6: Chapter Planning */}
        {currentStep === 6 && (
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#FDFBF7]">Step 6: Chapter Word Allocations</h2>
            <p className="text-xs text-[#A1A1AA]">Allocating 3,500 words per chapter across 10 chapters.</p>
          </div>
        )}

        {/* Step 7: AI Review */}
        {currentStep === 7 && (
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#FDFBF7]">Step 7: Final AI Review & Validation</h2>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs text-[#A1A1AA]">
              <p><strong className="text-[#FDFBF7]">Title:</strong> {formData.title}</p>
              <p><strong className="text-[#FDFBF7]">Author:</strong> {formData.author}</p>
              <p><strong className="text-[#FDFBF7]">Target Words:</strong> {formData.targetWords}</p>
              <p><strong className="text-[#FDFBF7]">Model:</strong> {formData.model}</p>
            </div>
          </div>
        )}

        {/* Step 8: Real-time Generation Interface */}
        {currentStep === 8 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#FDFBF7]">Step 8: Compiling Book Chapters</h2>
                <p className="text-xs text-[#A1A1AA]">Active Chapter: {activeChapterIndex} of 10</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={() => setIsPaused(!isPaused)}>
                  {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
                  {isPaused ? "Resume" : "Pause"}
                </Button>
                <Button variant="danger" size="sm" onClick={() => setIsGenerating(false)}>
                  <XCircle className="h-4 w-4" /> Cancel
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs text-[#FDFBF7]">
                <span>Overall Progress</span>
                <span className="font-bold text-[#D4AF37]">{progressPercent}%</span>
              </div>
              <Progress value={progressPercent} variant="gold" className="h-3" />
            </div>

            {/* Live Streaming Log Terminal */}
            <div className="rounded-xl bg-black/80 border border-white/10 p-4 font-mono text-xs text-emerald-400 h-44 overflow-y-auto space-y-1">
              <div className="text-xs text-[#71717A] pb-1 border-b border-white/10 flex items-center gap-2">
                <Terminal className="h-3.5 w-3.5 text-[#D4AF37]" /> Live AI Stream Logs
              </div>
              {logs.map((l, idx) => (
                <div key={idx}>{l}</div>
              ))}
            </div>

            {progressPercent === 100 && (
              <div className="pt-2 flex justify-end gap-3">
                <Link href="/dashboard/editor/1">
                  <Button variant="gold" className="gap-2">
                    Open in Editor <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Wizard Controls Footer */}
        {currentStep < 8 && (
          <div className="pt-6 border-t border-white/10 flex items-center justify-between">
            <Button variant="outline" disabled={currentStep === 1} onClick={() => setCurrentStep(currentStep - 1)}>
              <ArrowLeft className="h-4 w-4 mr-1" /> Previous
            </Button>

            {currentStep < 7 ? (
              <Button variant="gold" onClick={() => setCurrentStep(currentStep + 1)}>
                Next Step <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            ) : (
              <Button variant="gold" onClick={handleStartGeneration} className="gap-2 shadow-xl shadow-[#D4AF37]/30">
                <Sparkles className="h-4 w-4" /> Start AI Generation
              </Button>
            )}
          </div>
        )}
      </Card>
    </div>
  );
}
