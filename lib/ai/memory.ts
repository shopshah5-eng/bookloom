export interface ProjectAIMemory {
  bookId: string;
  title: string;
  genre: string;
  tone: string;
  targetAudience: string;
  characterNotes?: string;
  generationHistory: Array<{ timestamp: string; task: string; tokensUsed: number }>;
}

export class AIMemoryManager {
  private static memories: Map<string, ProjectAIMemory> = new Map();

  static getMemory(bookId: string): ProjectAIMemory {
    if (!this.memories.has(bookId)) {
      this.memories.set(bookId, {
        bookId,
        title: "The Sovereign Executive",
        genre: "Strategy",
        tone: "Authoritative & Editorial",
        targetAudience: "CTOs and VPs of Engineering",
        generationHistory: [],
      });
    }
    return this.memories.get(bookId)!;
  }

  static updateMemory(bookId: string, updates: Partial<ProjectAIMemory>) {
    const existing = this.getMemory(bookId);
    this.memories.set(bookId, { ...existing, ...updates });
  }

  static logHistory(bookId: string, task: string, tokensUsed: number) {
    const memory = this.getMemory(bookId);
    memory.generationHistory.push({ timestamp: new Date().toISOString(), task, tokensUsed });
  }
}
