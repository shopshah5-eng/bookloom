export interface CollaboratorPresence {
  userId: string;
  name: string;
  avatarUrl?: string;
  activeChapterId?: string;
  cursorOffset?: number;
  color: string;
}

export interface CommentThread {
  id: string;
  authorId: string;
  authorName: string;
  text: string;
  resolved: boolean;
  createdAt: Date;
  replies?: Array<{
    id: string;
    authorName: string;
    text: string;
    createdAt: Date;
  }>;
}
