export type WorkspaceRole =
  | 'owner'
  | 'admin'
  | 'editor'
  | 'reviewer'
  | 'viewer';

export interface RolePermissions {
  canEditDocument: boolean;
  canManageMembers: boolean;
  canPublishBook: boolean;
  canComment: boolean;
}

export function getPermissionsForRole(role: WorkspaceRole): RolePermissions {
  switch (role) {
    case 'owner':
    case 'admin':
      return { canEditDocument: true, canManageMembers: true, canPublishBook: true, canComment: true };
    case 'editor':
      return { canEditDocument: true, canManageMembers: false, canPublishBook: true, canComment: true };
    case 'reviewer':
      return { canEditDocument: false, canManageMembers: false, canPublishBook: false, canComment: true };
    case 'viewer':
    default:
      return { canEditDocument: false, canManageMembers: false, canPublishBook: false, canComment: false };
  }
}
