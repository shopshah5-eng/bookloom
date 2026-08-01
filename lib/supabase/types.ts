export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          avatar_url: string | null;
          role: "user" | "admin" | "author" | "editor";
          plan: "free" | "creator" | "pro" | "enterprise";
          stripe_customer_id: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          avatar_url?: string | null;
          role?: "user" | "admin" | "author" | "editor";
          plan?: "free" | "creator" | "pro" | "enterprise";
          stripe_customer_id?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          avatar_url?: string | null;
          role?: "user" | "admin" | "author" | "editor";
          plan?: "free" | "creator" | "pro" | "enterprise";
          stripe_customer_id?: string | null;
          updated_at?: string;
        };
      };
      teams: {
        Row: {
          id: string;
          name: string;
          slug: string;
          owner_id: string;
          logo_url: string | null;
          plan: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          owner_id: string;
          logo_url?: string | null;
          plan?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          name?: string;
          slug?: string;
          logo_url?: string | null;
          plan?: string;
          updated_at?: string;
        };
      };
      ebooks: {
        Row: {
          id: string;
          title: string;
          subtitle: string | null;
          description: string | null;
          author_id: string;
          team_id: string | null;
          cover_image_url: string | null;
          genre: string | null;
          language: string;
          status: "draft" | "generating" | "completed" | "published" | "archived";
          is_public: boolean;
          page_count: number;
          word_count: number;
          metadata: Json;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          subtitle?: string | null;
          description?: string | null;
          author_id: string;
          team_id?: string | null;
          cover_image_url?: string | null;
          genre?: string | null;
          language?: string;
          status?: "draft" | "generating" | "completed" | "published" | "archived";
          is_public?: boolean;
          page_count?: number;
          word_count?: number;
          metadata?: Json;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          title?: string;
          subtitle?: string | null;
          description?: string | null;
          cover_image_url?: string | null;
          genre?: string | null;
          language?: string;
          status?: "draft" | "generating" | "completed" | "published" | "archived";
          is_public?: boolean;
          page_count?: number;
          word_count?: number;
          metadata?: Json;
          updated_at?: string;
        };
      };
      chapters: {
        Row: {
          id: string;
          ebook_id: string;
          title: string;
          order_index: number;
          content: Json;
          plain_text: string | null;
          word_count: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          ebook_id: string;
          title: string;
          order_index: number;
          content?: Json;
          plain_text?: string | null;
          word_count?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          title?: string;
          order_index?: number;
          content?: Json;
          plain_text?: string | null;
          word_count?: number;
          updated_at?: string;
        };
      };
      exports: {
        Row: {
          id: string;
          ebook_id: string;
          user_id: string;
          format: "pdf" | "epub" | "docx" | "markdown" | "html" | "txt" | "zip";
          status: "pending" | "processing" | "completed" | "failed";
          file_url: string | null;
          file_size_bytes: number | null;
          error_message: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          ebook_id: string;
          user_id: string;
          format: "pdf" | "epub" | "docx" | "markdown" | "html" | "txt" | "zip";
          status?: "pending" | "processing" | "completed" | "failed";
          file_url?: string | null;
          file_size_bytes?: number | null;
          error_message?: string | null;
          created_at?: string;
        };
        Update: {
          status?: "pending" | "processing" | "completed" | "failed";
          file_url?: string | null;
          file_size_bytes?: number | null;
          error_message?: string | null;
        };
      };
      credit_balances: {
        Row: {
          user_id: string;
          balance: number;
          updated_at: string;
        };
        Insert: {
          user_id: string;
          balance?: number;
          updated_at?: string;
        };
        Update: {
          balance?: number;
          updated_at?: string;
        };
      };
    };
  };
}
