"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { ArrowLeft, Calendar, User, Clock, Share2, Sparkles, BookOpen, Twitter, Linkedin, Facebook } from "lucide-react";

const ARTICLES_DATABASE: Record<string, {
  title: string;
  tag: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  img: string;
  intro: string;
  sections: { heading: string; body: string }[];
}> = {
  "kindle-publishing-2026": {
    title: "How to Publish a Kindle Book on Amazon KDP in 2026 (Complete Guide)",
    tag: "KDP PUBLISHING",
    author: "Dr. Evelyn Vance",
    authorRole: "Head of Publishing, BookLoom",
    date: "August 1, 2026",
    readTime: "10 min read",
    img: "/images/laptop_bookloom_mockup.png",
    intro: "Self-publishing on Amazon Kindle Direct Publishing (KDP) has undergone a dramatic evolution in 2026. With AI-assisted writing, automated formatting, and dynamic EPUB 3.0 standards, independent authors can now produce publishing-house-quality ebooks faster than ever.",
    sections: [
      {
        heading: "1. Understanding KDP Requirements in 2026",
        body: "Amazon KDP now enforces strict standards for ebook typography, reflowable EPUB layout, and cover DPI. Rather than uploading raw Word documents, authors must format their manuscripts into clean EPUB files with embedded vector graphics and proper table of contents metadata."
      },
      {
        heading: "2. Structuring Your Book for Maximum Reader Engagement",
        body: "A successful non-fiction or fiction ebook opens with a compelling hook, structured chapters, and visual breaks. Utilizing AI generation tools like BookLoom allows authors to outline 10-15 chapter manuscripts with logical flow and zero plot/concept drift."
      },
      {
        heading: "3. Cover Design That Converts Browsers to Buyers",
        body: "Your book cover is your primary sales asset. In 2026, minimalist cream backgrounds, bold serif typography, and high-contrast focal illustrations outperform busy stock photo covers by 3.4x in click-through rate on Amazon search result grids."
      },
      {
        heading: "4. Pricing Strategy & Royalty Optimization",
        body: "Under KDP's current 70% royalty tier (for ebooks priced between $2.99 and $9.99), pricing your ebook at $4.99 or $6.99 maximizes earnings while keeping barrier to purchase low for impulse buyers."
      }
    ]
  },
  "ai-writing-prompts": {
    title: "Best AI Writing Prompts for Non-Fiction Ebook Authors",
    tag: "AI WRITING",
    author: "James Carter",
    authorRole: "Best-Selling Author & Creator",
    date: "July 28, 2026",
    readTime: "7 min read",
    img: "/images/book_ai_productivity.png",
    intro: "Writing a 30,000-word book no longer takes months. With prompt engineering tailored specifically for long-form publishing, authors can draft, refine, and polish entire books with surgical precision.",
    sections: [
      {
        heading: "1. The Master Outline Prompt",
        body: "Prompt: 'Act as an expert book strategist. Draft a detailed 10-chapter outline for a book titled [TITLE]. For each chapter, provide 3 key sub-topics, a real-world case study example, and an actionable reader takeaway.'"
      },
      {
        heading: "2. The Deep Chapter Expansion Prompt",
        body: "Prompt: 'Expand Chapter 3 into a 2,500-word manuscript section. Use an engaging, conversational tone, incorporate research insights on [TOPIC], and end with 5 practical implementation steps.'"
      },
      {
        heading: "3. The Editorial Polish Prompt",
        body: "Prompt: 'Review the following draft chapter. Remove passive voice, enhance sensory descriptions, ensure smooth paragraph transitions, and highlight key quotes for pull-quote styling.'"
      }
    ]
  },
  "default": {
    title: "The Future of AI Ebook Creation & Digital Publishing",
    tag: "PUBLISHING 2026",
    author: "BookLoom Editorial Team",
    authorRole: "Publishing Research Division",
    date: "August 2026",
    readTime: "6 min read",
    img: "/images/books_stack_with_plant.png",
    intro: "Digital publishing is witnessing a seismic shift. Creators who leverage AI for research, visual generation, and multi-format exports are building sustainable recurring revenue businesses around their knowledge.",
    sections: [
      {
        heading: "1. From Concept to Published Ebook in Minutes",
        body: "Modern AI platforms combine natural language processing with vector design engines, allowing authors to turn simple prompts into print-ready PDFs and EPUB files effortlessly."
      },
      {
        heading: "2. Maintaining Brand Integrity & Human Voice",
        body: "The key to successful AI-assisted publishing is active curation. The best authors use AI to eliminate blank-page syndrome while injecting their unique perspectives, stories, and expertise."
      }
    ]
  }
};

export default function SingleBlogPostPage() {
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : "default";
  const article = ARTICLES_DATABASE[slug] || ARTICLES_DATABASE["default"];

  return (
    <div style={{ background: "#F8F5F0", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <Navbar />

      <article style={{ maxWidth: 860, margin: "0 auto", padding: "56px 24px 80px" }}>
        {/* Back Link */}
        <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, color: "#4A4A4A", textDecoration: "none", fontWeight: 500, marginBottom: 28 }}>
          <ArrowLeft size={15} /> Back to Blog Articles
        </Link>

        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "inline-flex", padding: "4px 12px", borderRadius: 999, background: "#FBF3E0", color: "#9A6F1A", fontSize: 11, fontWeight: 700, letterSpacing: "0.05em", marginBottom: 16 }}>
            {article.tag}
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 44, fontWeight: 800, color: "#1A1A1A", lineHeight: 1.15, marginBottom: 20 }}>
            {article.title}
          </h1>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #E8E4DF", borderBottom: "1px solid #E8E4DF", padding: "16px 0", fontSize: 13, color: "#6B6B6B" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#1A1A1A", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14 }}>
                {article.author.charAt(0)}
              </div>
              <div>
                <div style={{ fontWeight: 600, color: "#1A1A1A" }}>{article.author}</div>
                <div style={{ fontSize: 11, color: "#9A9A9A" }}>{article.authorRole}</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <span>📅 {article.date}</span>
              <span>⏱ {article.readTime}</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #E8E4DF", marginBottom: 40, background: "#FFFFFF" }}>
          <img src={article.img} alt={article.title} style={{ width: "100%", height: 380, objectFit: "cover" }} />
        </div>

        {/* Article Body */}
        <div style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", padding: "48px 56px", boxShadow: "0 4px 16px rgba(0,0,0,0.03)" }}>
          <p style={{ fontSize: 18, color: "#1A1A1A", lineHeight: 1.7, fontFamily: "'Playfair Display', serif", fontWeight: 500, marginBottom: 32, borderLeft: "3px solid #C49A3C", paddingLeft: 20 }}>
            {article.intro}
          </p>

          {article.sections.map((sec, i) => (
            <div key={i} style={{ marginBottom: 32 }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: "#1A1A1A", marginBottom: 12 }}>
                {sec.heading}
              </h2>
              <p style={{ fontSize: 15, color: "#4A4A4A", lineHeight: 1.8 }}>
                {sec.body}
              </p>
            </div>
          ))}

          {/* Social Share Footer */}
          <div style={{ borderTop: "1px solid #E8E4DF", paddingTop: 24, marginTop: 40, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontWeight: 600, fontSize: 13, color: "#1A1A1A" }}>Share this article</span>
            <div style={{ display: "flex", gap: 10 }}>
              {[<Twitter size={16} />, <Linkedin size={16} />, <Facebook size={16} />].map((icon, i) => (
                <button key={i} style={{ width: 36, height: 36, borderRadius: 8, border: "1px solid #E8E4DF", background: "#F8F5F0", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#4A4A4A" }}>
                  {icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Card */}
        <div style={{ marginTop: 40, background: "#1A1A1A", color: "#FFFFFF", borderRadius: 16, padding: "36px 48px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, margin: "0 0 6px" }}>Ready to Publish Your Book?</h3>
            <p style={{ fontSize: 13, color: "#9A9A9A", margin: 0 }}>Turn your ideas into a published ebook in minutes with BookLoom AI.</p>
          </div>
          <Link href="/auth/signup">
            <button style={{ background: "#C49A3C", color: "#FFFFFF", border: "none", borderRadius: 8, padding: "12px 24px", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "Inter, sans-serif", display: "flex", alignItems: "center", gap: 6, whiteSpace: "nowrap" }}>
              <Sparkles size={14} /> Start Free
            </button>
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  );
}
