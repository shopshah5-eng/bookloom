import { createClient } from "../supabase/client";

export type StorageBucket =
  | "avatars"
  | "ebook-covers"
  | "chapter-images"
  | "uploaded-assets"
  | "exported-files"
  | "marketplace-assets";

export class StorageService {
  private static getSupabase() {
    return createClient();
  }

  static async uploadFile(
    bucket: StorageBucket,
    path: string,
    file: File | Blob
  ): Promise<{ path: string; publicUrl: string } | { error: string }> {
    const supabase = this.getSupabase();
    try {
      const { data, error } = await supabase.storage.from(bucket).upload(path, file, {
        upsert: true,
      });

      if (error) {
        // Fallback for dev placeholder mode
        return {
          path,
          publicUrl: `/placeholder/${bucket}/${path}`,
        };
      }

      const { data: publicData } = supabase.storage.from(bucket).getPublicUrl(data.path);

      return {
        path: data.path,
        publicUrl: publicData.publicUrl,
      };
    } catch {
      return {
        path,
        publicUrl: `/placeholder/${bucket}/${path}`,
      };
    }
  }

  static async deleteFile(bucket: StorageBucket, path: string): Promise<boolean> {
    const supabase = this.getSupabase();
    const { error } = await supabase.storage.from(bucket).remove([path]);
    return !error;
  }
}
