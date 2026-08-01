export type OAuthScope =
  | 'books.read'
  | 'books.write'
  | 'projects.read'
  | 'publishing.export'
  | 'ai.invoke';

export interface OAuthApplication {
  clientId: string;
  name: string;
  redirectUris: string[];
  allowedScopes: OAuthScope[];
}

export function validateOAuthScopes(requested: OAuthScope[], allowed: OAuthScope[]): boolean {
  return requested.every((scope) => allowed.includes(scope));
}
