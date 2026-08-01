export type ExportFormat = "pdf" | "epub" | "docx" | "markdown" | "html" | "txt" | "zip";

export interface ExportOptions {
  format: ExportFormat;
  includeCover?: boolean;
  includeIllustrations?: boolean;
  typographyStyle?: "classic" | "modern" | "editorial" | "luxury";
  fontSize?: number;
  lineSpacing?: number;
  marginSize?: "compact" | "standard" | "wide";
}

export interface ExportJobResult {
  jobId: string;
  format: ExportFormat;
  status: "pending" | "processing" | "completed" | "failed";
  downloadUrl?: string;
  fileSizeBytes?: number;
  error?: string;
}
