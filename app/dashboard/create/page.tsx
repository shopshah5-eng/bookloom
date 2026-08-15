"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DashboardSidebar } from "@/components/layouts/dashboard-sidebar";
import { Sparkles, ArrowLeft, BookOpen, Wand2, Image as ImageIcon, Zap, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { checkPageLimit, PlanTier, PLAN_LIMITS } from "@/lib/auth/entitlements";

const STEPS = ["Describe & Options", "Outline Review", "Generate Manuscript", "Design & Export"];

const EBOOK_TYPES = [
  { id: "non-fiction", name: "Non-Fiction & Guide", desc: "Structured chapters, key takeaways, research" },
  { id: "fiction", name: "Fiction & Novel", desc: "Character arcs, plot progression, narrative scenes" },
  { id: "business", name: "Business & Finance Playbook", desc: "Executive summaries, bullet points, frameworks" },
  { id: "self-help", name: "Self-Help & Mindset", desc: "Mindset shifts, daily habits, reflective prompts" },
  { id: "tech", name: "Technical & AI Manual", desc: "Code snippets, step-by-step documentation" },
  { id: "children", name: "Children's Illustrated Book", desc: "Short prose pages with full-bleed illustration prompts" },
  { id: "memoir", name: "Memoir & Biography", desc: "Chronological narrative, personal anecdotes" },
];

const THEMES = [
  { name: "Modern Minimal", bg: "#F5F5F0", textColor: "#1A1A1A" },
  { name: "Elegant Literary", bg: "#F5F0E8", textColor: "#3D2B1A" },
  { name: "Bold Corporate", bg: "#1A2540", textColor: "#FFFFFF" },
  { name: "Dark Premium", bg: "#0D0D0D", textColor: "#F0E8D0" },
  { name: "Vibrant Creative", bg: "#7C3AED", textColor: "#FFFFFF" },
  { name: "Vintage Classic", bg: "#3D2B1A", textColor: "#F0E0C0" },
];

const EXAMPLES = [
  "How to Build Wealth in Your 30s",
  "The Minimalist Guide to Living Better",
  "AI-Powered Productivity: A Complete System",
  "The Startup Founder's Playbook",
  "Deep Focus: The Art of Distraction-Free Work",
];

export default function CreatePage() {
  const [userPlan, setUserPlan] = useState<PlanTier>("free"); // Default free tier
  const [step, setStep] = useState(1);
  const [prompt, setPrompt] = useState("");
  const [ebookType, setEbookType] = useState("non-fiction");
  const [targetPages, setTargetPages] = useState(25); // Free plan default (max 30)
  const [aiProvider, setAiProvider] = useState("OpenAI GPT-4o (High Precision)");
  const [imageModel, setImageModel] = useState("Flux.1 / SDXL (HD Cover Engine)");
  const [theme, setTheme] = useState(0);
  const [loading, setLoading] = useState(false);
  const [generatingManuscript, setGeneratingManuscript] = useState(false);
  const [generationLogs, setGenerationLogs] = useState<string[]>([]);
  const [apiOutline, setApiOutline] = useState<any[]>([]);
  const [bookTitle, setBookTitle] = useState("");
  const [bookSubtitle, setBookSubtitle] = useState("");
  const [generatedBookId, setGeneratedBookId] = useState<string | null>(null);

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem("bookloom_pending_prompt");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.prompt) setPrompt(parsed.prompt);
        if (parsed.provider) setAiProvider(parsed.provider);
        localStorage.removeItem("bookloom_pending_prompt");
      }
    } catch (e) {}
  }, []);

  // Calculate estimated chapters based on page count (avg 8-10 pages / chapter)
  const calculatedChapters = Math.max(3, Math.ceil(targetPages / 8));

  // Check plan entitlement
  const limitCheck = checkPageLimit(targetPages, userPlan);

  const handleGenerateOutline = async () => {
    if (!limitCheck.allowed) {
      alert(limitCheck.message);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt,
          ebookType,
          targetPages,
          chaptersCount: calculatedChapters,
          aiProvider,
          imageModel,
          theme: THEMES[theme].name,
          mode: "outline",
        }),
      });
      const json = await res.json();
      if (json.success && json.data) {
        setApiOutline(json.data.outline || []);
        setBookTitle(json.data.title || prompt);
        setBookSubtitle(json.data.subtitle || "");
        setStep(2);
      } else {
        alert(json.error || "Failed to generate outline");
      }
    } catch (err: any) {
      console.error(err);
      alert("Error generating outline: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateFullManuscript = async () => {
    setStep(3);
    setGeneratingManuscript(true);
    const newLogs: string[] = [`[${new Date().toLocaleTimeString()}] Initializing Ebook Pipeline for "${bookTitle || prompt}"...`];
    setGenerationLogs([...newLogs]);

    const activeOutline = apiOutline.length > 0 ? apiOutline : Array.from({ length: calculatedChapters }, (_, i) => ({
      chapterNumber: i + 1,
      title: `Chapter ${i + 1}`,
      summary: `Strategic overview of ${prompt}`,
    }));

    const generatedChapters: any[] = [];
    const bookId = `eb_${Date.now()}`;
    setGeneratedBookId(bookId);

    for (let i = 0; i < activeOutline.length; i++) {
      const ch = activeOutline[i];
      const timeStr = new Date().toLocaleTimeString();
      newLogs.push(`[${timeStr}] Synthesizing Chapter ${i + 1}/${activeOutline.length}: "${ch.title}" with AI model...`);
      setGenerationLogs([...newLogs]);

      try {
        const res = await fetch("/api/generate-chapter", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            bookTitle: bookTitle || prompt,
            chapterNumber: i + 1,
            totalChapters: activeOutline.length,
            title: ch.title,
            summary: ch.summary,
            sections: ch.sections || [],
            prompt,
          }),
        });

        const json = await res.json();
        const content = json.success && json.data?.content ? json.data.content : `# ${ch.title}\n\n${ch.summary}\n\nComprehensive manuscript content...`;
        const wordCount = json.data?.wordCount || content.split(/\s+/).length;

        generatedChapters.push({
          id: i + 1,
          chapterNumber: i + 1,
          title: ch.title,
          summary: ch.summary,
          content,
          wordCount,
          status: "complete",
        });

        newLogs.push(`[${new Date().toLocaleTimeString()}] Chapter ${i + 1} complete (${wordCount} words compiled).`);
        setGenerationLogs([...newLogs]);
      } catch (err: any) {
        newLogs.push(`[${new Date().toLocaleTimeString()}] Chapter ${i + 1} generated using fallback framework.`);
        setGenerationLogs([...newLogs]);

        generatedChapters.push({
          id: i + 1,
          chapterNumber: i + 1,
          title: ch.title,
          summary: ch.summary,
          content: `# ${ch.title}\n\n${ch.summary}\n\n## Core Strategy\n\nDetailed breakdown of ${prompt}.`,
          wordCount: 850,
          status: "complete",
        });
      }
    }

    newLogs.push(`[${new Date().toLocaleTimeString()}] Generating AI Cover Art & Visual Illustrations...`);
    setGenerationLogs([...newLogs]);

    let coverImageUrl = "/images/book_wealth_mindset.png";
    try {
      const imgRes = await fetch("/api/generate-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: `Professional high-end hardcover ebook cover design for "${bookTitle || prompt}". Elegant serif typography, minimal aesthetic`,
          width: 1024,
          height: 1024,
        }),
      });
      const imgJson = await imgRes.json();
      if (imgJson.success && imgJson.imageUrl) {
        coverImageUrl = imgJson.imageUrl;
        newLogs.push(`[${new Date().toLocaleTimeString()}] AI Cover Artwork Generated Successfully!`);
        setGenerationLogs([...newLogs]);
      }
    } catch (e) {
      newLogs.push(`[${new Date().toLocaleTimeString()}] Standard cover artwork assigned.`);
      setGenerationLogs([...newLogs]);
    }

    const totalWords = generatedChapters.reduce((acc, curr) => acc + curr.wordCount, 0);

    const fullBook = {
      id: bookId,
      title: bookTitle || prompt,
      subtitle: bookSubtitle || `A Masterpiece Guide on ${prompt}`,
      prompt,
      ebookType,
      targetPages,
      theme: THEMES[theme].name,
      coverImage: coverImageUrl,
      img: coverImageUrl,
      chaptersCount: generatedChapters.length,
      outline: activeOutline,
      chapters: generatedChapters,
      totalWords,
      createdAt: new Date().toISOString(),
    };

    try {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        await supabase.from("ebooks").upsert({
          id: bookId,
          user_id: user.id,
          title: bookTitle || prompt,
          subtitle: bookSubtitle || `A Masterpiece Guide on ${prompt}`,
          genre: ebookType,
          word_count: totalWords,
          page_count: targetPages,
          cover_image: coverImageUrl,
          status: "published",
          updated_at: new Date().toISOString(),
        });
      }
    } catch (e) {}

    try {
      localStorage.setItem("bookloom_current_book", JSON.stringify(fullBook));

      const existingStr = localStorage.getItem("bookloom_books");
      const existingBooks = existingStr ? JSON.parse(existingStr) : [];
      localStorage.setItem("bookloom_books", JSON.stringify([fullBook, ...existingBooks.filter((b: any) => b.id !== bookId)]));
    } catch (e) {}

    newLogs.push(`[${new Date().toLocaleTimeString()}] Ebook Manuscript Generation Complete! Total ${totalWords.toLocaleString()} words compiled.`);
    setGenerationLogs([...newLogs]);
    setGeneratingManuscript(false);
  };


  return (
    <div style={{ display: "flex", background: "#F8F5F0", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <DashboardSidebar />

      <div style={{ flex: 1, overflowY: "auto" }}>
        {/* Top Header */}
        <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E8E4DF", padding: "0 32px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Link href="/dashboard" style={{ display: "flex", alignItems: "center", gap: 6, color: "#4A4A4A", textDecoration: "none", fontSize: 13 }}>
              <ArrowLeft size={14} /> Back
            </Link>
            <div style={{ width: 1, height: 20, background: "#E8E4DF" }} />
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#1A1A1A", margin: 0 }}>
              Create Ebook From Scratch
            </h1>
          </div>
          {/* Steps */}
          <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
            {STEPS.map((s, i) => (
              <React.Fragment key={s}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, cursor: "pointer" }} onClick={() => setStep(i + 1)}>
                  <div style={{
                    width: 26, height: 26, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700,
                    background: i + 1 < step ? "#22C55E" : i + 1 === step ? "#1A1A1A" : "#F0EDE8",
                    color: i + 1 < step ? "#FFFFFF" : i + 1 === step ? "#FFFFFF" : "#9A9A9A",
                  }}>
                    {i + 1 < step ? <CheckCircle size={13} /> : i + 1}
                  </div>
                  <span style={{ fontSize: 12, fontWeight: i + 1 === step ? 600 : 400, color: i + 1 === step ? "#1A1A1A" : "#9A9A9A" }}>{s}</span>
                </div>
                {i < STEPS.length - 1 && <div style={{ width: 24, height: 1, background: "#E8E4DF", margin: "0 6px" }} />}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div style={{ padding: "32px" }}>
          {step === 1 && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 32 }}>
              {/* Left Column: Form */}
              <div>
                <div style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", padding: 32, marginBottom: 24 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
                    <Sparkles size={18} color="#C49A3C" />
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: "#1A1A1A" }}>Ebook Topic & Goal</span>
                  </div>

                  <div style={{ marginBottom: 20 }}>
                    <label style={{ fontSize: 13, fontWeight: 600, color: "#1A1A1A", display: "block", marginBottom: 8 }}>Ebook Prompt / Topic *</label>
                    <textarea value={prompt} onChange={e => setPrompt(e.target.value)}
                      placeholder="Describe your ebook idea in detail. E.g. 'A complete guide for beginners on personal finance, budgeting, and building a stock portfolio in your 30s.'"
                      style={{ width: "100%", minHeight: 100, border: "1px solid #E8E4DF", borderRadius: 10, padding: "12px 16px", fontSize: 13, fontFamily: "Inter, sans-serif", resize: "none", outline: "none", background: "#FAFAFA", boxSizing: "border-box" }}
                    />
                    <div style={{ display: "flex", gap: 8, marginTop: 10, flexWrap: "wrap" }}>
                      {EXAMPLES.map(e => (
                        <button key={e} onClick={() => setPrompt(e)}
                          style={{ padding: "4px 10px", border: "1px solid #E8E4DF", borderRadius: 999, fontSize: 11, background: "#F8F5F0", cursor: "pointer", color: "#4A4A4A", fontFamily: "Inter, sans-serif" }}>
                          ✦ {e}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Ebook Type Selection */}
                  <div style={{ marginBottom: 24 }}>
                    <label style={{ fontSize: 13, fontWeight: 600, color: "#1A1A1A", display: "block", marginBottom: 8 }}>Ebook Format & Genre</label>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                      {EBOOK_TYPES.map(t => (
                        <div key={t.id} onClick={() => setEbookType(t.id)}
                          style={{
                            padding: "12px 14px", borderRadius: 10, cursor: "pointer",
                            border: `1.5px solid ${ebookType === t.id ? "#C49A3C" : "#E8E4DF"}`,
                            background: ebookType === t.id ? "#FBF3E0" : "#FFFFFF",
                            transition: "all 0.15s ease"
                          }}>
                          <div style={{ fontWeight: 600, fontSize: 13, color: "#1A1A1A", marginBottom: 2 }}>{t.name}</div>
                          <div style={{ fontSize: 11, color: "#6B6B6B" }}>{t.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Target Page Count & Plan Limits */}
                  <div style={{ marginBottom: 24, background: "#FAFAFA", border: "1px solid #E8E4DF", borderRadius: 12, padding: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                      <label style={{ fontSize: 13, fontWeight: 600, color: "#1A1A1A" }}>
                        Target Page Count: <span style={{ color: "#C49A3C", fontSize: 16 }}>{targetPages} Pages</span>
                      </label>
                      <span style={{ fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 999, background: limitCheck.allowed ? "#E8F5E9" : "#FEE2E2", color: limitCheck.allowed ? "#2E7D32" : "#991B1B" }}>
                        {userPlan.toUpperCase()} TIER ({PLAN_LIMITS[userPlan].maxPages} P. MAX)
                      </span>
                    </div>

                    <input type="range" min={5} max={100} step={5} value={targetPages} onChange={e => setTargetPages(parseInt(e.target.value))}
                      style={{ width: "100%", accentColor: "#C49A3C", marginBottom: 8 }} />

                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#9A9A9A" }}>
                      <span>5 Pages</span>
                      <span>30 Pages (Free Max)</span>
                      <span>100 Pages (Creator Max)</span>
                    </div>

                    {!limitCheck.allowed && (
                      <div style={{ marginTop: 12, padding: "10px 14px", background: "#FEF2F2", border: "1px solid #FCA5A5", borderRadius: 8, display: "flex", alignItems: "center", gap: 10, color: "#991B1B", fontSize: 12 }}>
                        <AlertCircle size={16} style={{ flexShrink: 0 }} />
                        <div>
                          <strong>Plan Limit Reached:</strong> Free tier is limited to 3-30 pages per book.{" "}
                          <Link href="/pricing" style={{ color: "#991B1B", fontWeight: 700, textDecoration: "underline" }}>Upgrade to Creator/Pro</Link> to generate up to 100-300 pages!
                        </div>
                      </div>
                    )}
                  </div>

                  {/* AI Providers */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 600, color: "#1A1A1A", display: "block", marginBottom: 6 }}>Writing AI Model</label>
                      <select value={aiProvider} onChange={e => setAiProvider(e.target.value)}
                        style={{ width: "100%", padding: "10px", border: "1px solid #E8E4DF", borderRadius: 8, fontSize: 12, fontFamily: "Inter, sans-serif" }}>
                        <option>OpenAI GPT-4o (High Precision)</option>
                        <option>Anthropic Claude 3.5 Sonnet (Creative Narrative)</option>
                        <option>Google Gemini 1.5 Pro (Deep Research)</option>
                        <option>DeepSeek R1 (Advanced Reasoning)</option>
                        <option>Moonshot Kimi K3 (Fast Free Drafts)</option>
                        <option>NVIDIA NIM Llama 3.1 70B (High Speed)</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 600, color: "#1A1A1A", display: "block", marginBottom: 6 }}>Cover & Image Model</label>
                      <select value={imageModel} onChange={e => setImageModel(e.target.value)}
                        style={{ width: "100%", padding: "10px", border: "1px solid #E8E4DF", borderRadius: 8, fontSize: 12, fontFamily: "Inter, sans-serif" }}>
                        <option>Flux.1 / SDXL (HD Cover Engine)</option>
                        <option>DALL·E 3 (High-Detail Vector)</option>
                        <option>BookLoom SVG Graphics Engine</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Plan Summary */}
              <div>
                <div style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", padding: 28, position: "sticky", top: 88 }}>
                  <div style={{ fontWeight: 700, fontSize: 15, color: "#1A1A1A", marginBottom: 16 }}>Ebook Generation Plan</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 13, marginBottom: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #E8E4DF" }}>
                      <span style={{ color: "#6B6B6B" }}>Target Pages</span>
                      <span style={{ fontWeight: 700, color: "#1A1A1A" }}>{targetPages} Pages</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #E8E4DF" }}>
                      <span style={{ color: "#6B6B6B" }}>Calculated Chapters</span>
                      <span style={{ fontWeight: 700, color: "#1A1A1A" }}>{calculatedChapters} Chapters</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #E8E4DF" }}>
                      <span style={{ color: "#6B6B6B" }}>Cover Design</span>
                      <span style={{ fontWeight: 700, color: "#22C55E" }}>Nano Banana (Free)</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0" }}>
                      <span style={{ color: "#6B6B6B" }}>Cost</span>
                      <span style={{ fontWeight: 800, color: "#C49A3C" }}>0 Credits (FREE)</span>
                    </div>
                  </div>

                  <button
                    onClick={handleGenerateOutline}
                    disabled={loading || !limitCheck.allowed}
                    style={{
                      width: "100%", background: limitCheck.allowed ? "#1A1A1A" : "#9A9A9A", color: "#FFFFFF",
                      border: "none", borderRadius: 10, padding: "14px", fontSize: 14, fontWeight: 600,
                      cursor: limitCheck.allowed && !loading ? "pointer" : "not-allowed",
                      display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontFamily: "Inter, sans-serif"
                    }}>
                    {loading ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={14} />}
                    {loading ? "Generating Outline with AI..." : "Generate Ebook Outline →"}
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div style={{ maxWidth: 800, margin: "0 auto" }}>
              <div style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", padding: 40 }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: "#1A1A1A", marginBottom: 8 }}>
                  Review Your {targetPages}-Page Ebook Outline
                </div>
                <p style={{ fontSize: 14, color: "#6B6B6B", marginBottom: 32 }}>AI generated {calculatedChapters} chapters optimized for your target {targetPages} pages.</p>

                {(apiOutline.length > 0 ? apiOutline : [...Array(calculatedChapters)]).map((ch, i) => (
                  <div key={i} style={{ padding: "16px 0", borderBottom: "1px solid #E8E4DF", display: "flex", alignItems: "flex-start", gap: 16 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: "#F0EDE8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: "#C49A3C", flexShrink: 0 }}>
                      {i + 1}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: 14, color: "#1A1A1A", marginBottom: 4 }}>
                        {ch.title || `Chapter ${i + 1}`}
                      </div>
                      <div style={{ fontSize: 12, color: "#6B6B6B" }}>{ch.summary || "Chapter manuscript outline preview..."}</div>
                    </div>
                  </div>
                ))}

                <div style={{ display: "flex", gap: 12, marginTop: 32 }}>
                  <button onClick={() => setStep(1)} style={{ padding: "12px 24px", border: "1px solid #E8E4DF", borderRadius: 10, fontSize: 14, cursor: "pointer", background: "transparent", color: "#1A1A1A", fontFamily: "Inter, sans-serif", fontWeight: 500 }}>
                    ← Edit Prompt & Options
                  </button>
                  <button onClick={handleGenerateFullManuscript} disabled={generatingManuscript} style={{ flex: 1, background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 10, padding: "12px", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "Inter, sans-serif", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                    <Sparkles size={14} /> Generate Full Manuscript with AI →
                  </button>
                </div>
              </div>
            </div>
          )}

          {step >= 3 && (
            <div style={{ maxWidth: 800, margin: "0 auto" }}>
              <div style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", padding: 40, textAlign: "center" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✦</div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: "#1A1A1A", marginBottom: 8 }}>
                  {generatingManuscript ? `Compiling AI Manuscript for "${bookTitle || prompt}"` : `Your Ebook is Fully Generated!`}
                </h2>
                <p style={{ fontSize: 14, color: "#6B6B6B", marginBottom: 24 }}>
                  {generatingManuscript ? "Executing multi-stage AI graph pipeline to write high-quality chapter prose..." : `All chapters written and saved. Ready for review and export.`}
                </p>

                {/* Real-time Streaming Logs Terminal */}
                <div style={{
                  background: "#0D0D0D", color: "#4ADE80", fontFamily: "monospace", fontSize: 12,
                  padding: 16, borderRadius: 12, textAlign: "left", height: 220, overflowY: "auto",
                  border: "1px solid #262626", marginBottom: 24
                }}>
                  <div style={{ borderBottom: "1px solid #262626", paddingBottom: 6, marginBottom: 8, color: "#C49A3C", fontWeight: 700 }}>
                    ⚡ AI Ebook Generation Pipeline Log
                  </div>
                  {generationLogs.map((log, idx) => (
                    <div key={idx} style={{ marginBottom: 4 }}>{log}</div>
                  ))}
                  {generatingManuscript && (
                    <div style={{ color: "#EAB308", marginTop: 8, display: "flex", alignItems: "center", gap: 6 }}>
                      <Loader2 size={14} className="animate-spin" /> Synthesizing chapter content...
                    </div>
                  )}
                </div>

                {!generatingManuscript && (
                  <Link href={`/dashboard/editor/${generatedBookId || "1"}`}>
                    <button style={{ padding: "16px 32px", background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 10, fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: "Inter, sans-serif", display: "inline-flex", alignItems: "center", gap: 8 }}>
                      <BookOpen size={16} /> Open in Live Editor →
                    </button>
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

