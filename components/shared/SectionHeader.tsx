'use client';

import { useTheme } from '@/components/shared/ThemeProvider';

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export function SectionHeader({ label, title, description, align = 'center', dark = false }: SectionHeaderProps) {
  const { theme } = useTheme();
  const isDark = dark || theme === 'dark';
  const textAlign = align === 'center' ? 'center' : 'left';
  const maxWidth  = align === 'center' ? '720px' : '600px';
  const margin    = align === 'center' ? '0 auto 3rem' : '0 0 3rem';

  return (
    <div style={{ textAlign, maxWidth, margin }}>
      {label && (
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          fontFamily: 'var(--font-inter), Inter, sans-serif',
          fontSize: '11px', fontWeight: 700,
          letterSpacing: '0.16em', textTransform: 'uppercase',
          color: isDark ? '#C4B5FD' : '#7C3AED',
          marginBottom: '0.875rem',
        }}>
          {label}
        </span>
      )}
      <h2 style={{
        fontFamily: 'var(--font-outfit), Outfit, sans-serif',
        fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
        fontWeight: 800,
        lineHeight: 1.15,
        letterSpacing: '-0.03em',
        color: isDark ? '#ffffff' : '#09090b',
        marginBottom: description ? '1rem' : '0',
      }}>
        {title}
      </h2>
      {description && (
        <p style={{
          fontFamily: 'var(--font-inter), Inter, sans-serif',
          fontSize: '1.0625rem',
          fontWeight: 400,
          lineHeight: 1.7,
          color: isDark ? 'rgba(255,255,255,0.5)' : '#71717a',
          marginTop: '1rem',
        }}>
          {description}
        </p>
      )}
    </div>
  );
}
