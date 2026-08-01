export const DESIGN_TOKENS = {
  colors: {
    background: {
      default: '#0a0a0a',
      surface: '#121212',
      card: '#18181b',
      overlay: 'rgba(0, 0, 0, 0.75)',
    },
    text: {
      primary: '#f4f4f5',
      secondary: '#a1a1aa',
      muted: '#71717a',
    },
    border: {
      subtle: '#27272a',
      default: '#3f3f46',
      focus: '#6366f1',
    },
    brand: {
      primary: '#6366f1',
      secondary: '#8b5cf6',
      accent: '#ec4899',
    },
    status: {
      success: '#22c55e',
      warning: '#f59e0b',
      danger: '#ef4444',
      info: '#3b82f6',
    },
  },
  typography: {
    fonts: {
      heading: 'Inter Tight, sans-serif',
      body: 'Inter, sans-serif',
      mono: 'JetBrains Mono, monospace',
    },
    sizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
    },
  },
  spacing: {
    0: '0px',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    6: '24px',
    8: '32px',
    12: '48px',
    16: '64px',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '9999px',
  },
} as const;

export type DesignTokens = typeof DESIGN_TOKENS;
