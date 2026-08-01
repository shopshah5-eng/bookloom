import React from 'react';
import { EditorToolbar } from '@/components/editor/editor-toolbar';
import { EditorOutline } from '@/components/editor/editor-outline';
import { WritingCanvas } from '@/components/editor/writing-canvas';

export default function EditorPage() {
  const sampleOutline = [
    { id: '1', title: 'Chapter 1: The AI Paradigm Shift', level: 1 },
    { id: '2', title: 'Section 1.1: Context Engines', level: 2 },
    { id: '3', title: 'Chapter 2: Designing the Writing Canvas', level: 1 },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col">
      <EditorToolbar />
      <div className="flex-1 flex">
        <EditorOutline items={sampleOutline} />
        <WritingCanvas />
      </div>
    </div>
  );
}
