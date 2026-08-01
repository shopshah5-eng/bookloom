export interface User {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
  createdAt: Date;
}

export interface Workspace {
  id: string;
  name: string;
  slug: string;
  ownerId: string;
  icon?: string;
  memberCount: number;
}

export interface Project {
  id: string;
  workspaceId: string;
  name: string;
  slug: string;
  description?: string;
  bookCount: number;
  updatedAt: Date;
}

export interface Book {
  id: string;
  projectId: string;
  workspaceId: string;
  title: string;
  subtitle?: string;
  author: string;
  wordCount: number;
  readingTimeMinutes: number;
  coverUrl?: string;
  status: 'draft' | 'in_progress' | 'editing' | 'ready' | 'published';
  updatedAt: Date;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  read: boolean;
  category: 'workspace' | 'comment' | 'publishing' | 'system';
  createdAt: Date;
}
