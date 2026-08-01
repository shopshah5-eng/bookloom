import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, glass = false, className = '', ...props }) => {
  return (
    <div
      className={`rounded-xl border border-zinc-800 bg-zinc-900/80 p-5 shadow-md ${
        glass ? 'backdrop-blur-md bg-zinc-900/40 border-zinc-800/60' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
