"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { DashboardSidebar } from "@/components/layouts/dashboard-sidebar";
import { Bell, ChevronDown, Plus, Search, MoreHorizontal, Download, Edit3, Eye, Trash2, Grid3x3, List, ArrowUpRight } from "lucide-react";

import { createClient } from "@/lib/supabase/client";

export default function LibraryPage() {
  const [view, setView] = useState<"grid" | "list">("list");
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    async function loadBooks() {
      try {
        const supabase = createClient();
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          const { data: userEbooks } = await supabase
            .from("ebooks")
            .select("*")
            .eq("user_id", user.id)
            .order("updated_at", { ascending: false });

          if (userEbooks && userEbooks.length > 0) {
            setBooks(userEbooks.map((b: any) => ({
              id: b.id,
              title: b.title || "Untitled Ebook",
              format: "PDF / EPUB",
              category: b.genre || b.ebook_type || "Non-Fiction",
              words: b.word_count ? b.word_count.toLocaleString() : "5,400",
              pages: String(b.page_count || b.target_pages || 25),
              updated: new Date(b.updated_at).toLocaleDateString(),
              status: b.status || "Complete",
              img: b.cover_image || "/images/book_wealth_mindset.png",
            })));
            return;
          }
        }
      } catch (e) {}

      try {
        const stored = localStorage.getItem("bookloom_books");
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed) && parsed.length > 0) {
            const formatted = parsed.map((b: any) => ({
              id: b.id,
              title: b.title || "Untitled Ebook",
              format: "PDF",
              category: b.ebookType || "Non-Fiction",
              words: b.totalWords ? b.totalWords.toLocaleString() : "5,400",
              pages: String(b.targetPages || 25),
              updated: "Just now",
              status: "Complete",
              img: b.coverImage || "/images/book_wealth_mindset.png",
            }));
            setBooks(formatted);
            return;
          }
        }
      } catch (e) {}

      setBooks([]);
    }

    loadBooks();
  }, []);

  const filtered = books.filter(b =>
    b.title.toLowerCase().includes(search.toLowerCase()) ||
    b.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleDeleteBook = (id: string) => {
    const updated = books.filter(b => b.id !== id);
    setBooks(updated);
    try {
      const stored = localStorage.getItem("bookloom_books");
      if (stored) {
        const parsed = JSON.parse(stored);
        localStorage.setItem("bookloom_books", JSON.stringify(parsed.filter((b: any) => b.id !== id)));
      }
    } catch (e) {}
  };

  return (
    <div style={{ display: "flex", background: "#F8F5F0", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <DashboardSidebar />

      <div style={{ flex: 1, overflowY: "auto" }}>
        {/* Top Header */}
        <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E8E4DF", padding: "0 32px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 20 }}>
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A", margin: 0 }}>My Library</h1>
            <p style={{ fontSize: 13, color: "#9A9A9A", margin: 0 }}>All your created ebooks in one place.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Link href="/dashboard/create">
              <button style={{ background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 8, padding: "10px 20px", fontSize: 13, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, fontFamily: "Inter, sans-serif" }}>
                <Plus size={14} /> New Ebook
              </button>
            </Link>
            <Bell size={20} color="#4A4A4A" style={{ cursor: "pointer" }} />
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#E8E4DF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, cursor: "pointer" }}>R</div>
          </div>
        </div>

        <div style={{ padding: "28px 32px" }}>
          {/* Stats row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 28 }}>
            {[
              { label: "Total Ebooks", value: books.length, icon: "📚" },
              { label: "Words Written", value: "1.28M", icon: "📄" },
              { label: "Pages Generated", value: "950", icon: "📋" },
              { label: "Exports Done", value: "16", icon: "⬆" },
            ].map(s => (
              <div key={s.label} style={{ background: "#FFFFFF", borderRadius: 12, border: "1px solid #E8E4DF", padding: "20px 24px", display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "#F8F5F0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{s.icon}</div>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 800, color: "#1A1A1A" }}>{s.value}</div>
                  <div style={{ fontSize: 12, color: "#9A9A9A" }}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Toolbar */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ position: "relative" }}>
                <Search size={14} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#9A9A9A" }} />
                <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search ebooks..."
                  style={{ padding: "9px 12px 9px 34px", border: "1px solid #E8E4DF", borderRadius: 8, fontSize: 13, background: "#FFFFFF", outline: "none", width: 200, fontFamily: "Inter, sans-serif" }} />
              </div>
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <div style={{ display: "flex", background: "#FFFFFF", border: "1px solid #E8E4DF", borderRadius: 8, overflow: "hidden" }}>
                <button onClick={() => setView("list")} style={{ padding: "7px 12px", border: "none", cursor: "pointer", background: view === "list" ? "#1A1A1A" : "transparent", color: view === "list" ? "#FFFFFF" : "#4A4A4A" }}>
                  <List size={16} />
                </button>
                <button onClick={() => setView("grid")} style={{ padding: "7px 12px", border: "none", cursor: "pointer", background: view === "grid" ? "#1A1A1A" : "transparent", color: view === "grid" ? "#FFFFFF" : "#4A4A4A" }}>
                  <Grid3x3 size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Ebook List */}
          {view === "list" ? (
            <div style={{ background: "#FFFFFF", borderRadius: 12, border: "1px solid #E8E4DF", overflow: "hidden" }}>
              {/* Header row */}
              <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr 1fr 1fr 1fr 1fr auto", padding: "12px 24px", borderBottom: "1px solid #E8E4DF", background: "#FAFAFA" }}>
                {["Ebook Title", "Format", "Category", "Words", "Pages", "Last Updated", "Actions"].map(col => (
                  <span key={col} style={{ fontSize: 11, fontWeight: 600, color: "#9A9A9A", textTransform: "uppercase", letterSpacing: "0.05em" }}>{col}</span>
                ))}
              </div>
              {filtered.map((book, i) => (
                <div key={book.id || i} style={{ display: "grid", gridTemplateColumns: "3fr 1fr 1fr 1fr 1fr 1fr auto", padding: "16px 24px", borderBottom: i < filtered.length - 1 ? "1px solid #E8E4DF" : "none", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 36, height: 48, borderRadius: 4, background: "#1A1A1A", display: "flex", alignItems: "center", justifyContent: "center", color: "#C49A3C", fontWeight: 700, fontSize: 12, flexShrink: 0 }}>
                      📖
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 14, color: "#1A1A1A" }}>{book.title}</div>
                      <div style={{ fontSize: 11, color: "#22C55E", fontWeight: 600 }}>● {book.status}</div>
                    </div>
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 700, padding: "3px 8px", borderRadius: 4, background: "#FEE2E2", color: "#991B1B", width: "fit-content" }}>{book.format}</span>
                  <span style={{ fontSize: 12, color: "#4A4A4A" }}>{book.category}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#1A1A1A" }}>{book.words}</span>
                  <span style={{ fontSize: 13, color: "#4A4A4A" }}>{book.pages}</span>
                  <span style={{ fontSize: 12, color: "#9A9A9A" }}>{book.updated}</span>
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <Link href={`/dashboard/editor/${book.id}`}>
                      <button style={{ padding: "7px 14px", background: "transparent", border: "1px solid #E8E4DF", borderRadius: 8, fontSize: 12, fontWeight: 500, cursor: "pointer", color: "#1A1A1A", display: "flex", alignItems: "center", gap: 5, fontFamily: "Inter, sans-serif" }}>
                        <Edit3 size={12} /> Edit
                      </button>
                    </Link>
                    <button onClick={() => handleDeleteBook(book.id)} title="Delete Ebook" style={{ padding: "7px", background: "transparent", border: "1px solid #E8E4DF", borderRadius: 8, cursor: "pointer", color: "#EF4444" }}>
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
              {filtered.map((book, i) => (
                <div key={book.id || i} style={{ background: "#FFFFFF", borderRadius: 12, border: "1px solid #E8E4DF", overflow: "hidden" }}>
                  <div style={{ width: "100%", height: 160, background: "#1A1A1A", display: "flex", alignItems: "center", justifyContent: "center", color: "#C49A3C", fontSize: 48, fontWeight: 700 }}>
                    📖
                  </div>
                  <div style={{ padding: 16 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 14, color: "#1A1A1A" }}>{book.title}</div>
                        <div style={{ fontSize: 11, color: "#9A9A9A" }}>{book.category}</div>
                      </div>
                      <span style={{ fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 4, background: "#FEE2E2", color: "#991B1B" }}>{book.format}</span>
                    </div>
                    <div style={{ fontSize: 11, color: "#9A9A9A", marginBottom: 12 }}>{book.words} words · {book.pages} pages</div>
                    <div style={{ display: "flex", gap: 8 }}>
                      <Link href={`/dashboard/editor/${book.id}`} style={{ flex: 1 }}>
                        <button style={{ width: "100%", background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 6, padding: "8px", fontSize: 12, cursor: "pointer", fontFamily: "Inter, sans-serif" }}>Edit</button>
                      </Link>
                      <button onClick={() => handleDeleteBook(book.id)} style={{ padding: "8px", border: "1px solid #E8E4DF", borderRadius: 6, cursor: "pointer", background: "transparent", color: "#EF4444" }}><Trash2 size={14} /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

