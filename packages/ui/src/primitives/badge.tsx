import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', className = '', ...props }) => {
  const variants = {
    default: 'bg-zinc-800 text-zinc-300 border-zinc-700',
    success: 'bg-green-950/60 text-green-400 border-green-800/50',
    warning: 'bg-amber-950/60 text-amber-400 border-amber-800/50',
    danger: 'bg-red-950/60 text-red-400 border-red-800/50',
    info: 'bg-blue-950/60 text-blue-400 border-blue-800/50',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};
