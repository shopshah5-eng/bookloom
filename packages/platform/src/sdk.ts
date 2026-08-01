export interface PluginManifest {
  id: string;
  name: string;
  version: string;
  author: string;
  description: string;
  permissions: string[];
}

export interface ExtensionPoint {
  id: string;
  target: 'editor_toolbar' | 'sidebar' | 'dashboard_widget' | 'command_palette';
  render: () => unknown;
}

export class PluginRuntime {
  private activePlugins: Map<string, PluginManifest> = new Map();

  registerPlugin(manifest: PluginManifest): boolean {
    if (this.activePlugins.has(manifest.id)) return false;
    this.activePlugins.set(manifest.id, manifest);
    return true;
  }

  getActivePlugins(): PluginManifest[] {
    return Array.from(this.activePlugins.values());
  }
}
