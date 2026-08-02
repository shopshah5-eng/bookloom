// Polyfill Node globals for Vercel Edge Runtime compatibility
if (typeof (globalThis as any).__dirname === "undefined") {
  (globalThis as any).__dirname = "";
}
if (typeof (globalThis as any).__filename === "undefined") {
  (globalThis as any).__filename = "";
}
