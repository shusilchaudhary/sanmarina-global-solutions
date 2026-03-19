import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge TailwindCSS class names with clsx.
 * Used by ShadCN components and throughout the app.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a salary range for display.
 * e.g. "€1,800 – €2,400 / month"
 */
export function formatSalary(
  min: number,
  max: number,
  currency: string,
  period: string
): string {
  const symbol = currency === 'EUR' ? '€' : currency;
  const periodLabel =
    period === 'monthly' ? 'month' : period === 'hourly' ? 'hour' : 'year';
  return `${symbol}${min.toLocaleString()} – ${symbol}${max.toLocaleString()} / ${periodLabel}`;
}

/**
 * Format an ISO date string to a human-readable format.
 * e.g. "Mar 1, 2025"
 */
export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

/**
 * Generate a slug from a string.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/**
 * Get country flag emoji from country code.
 */
export function getCountryFlag(countryCode: string): string {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 0x1f1e6 + char.charCodeAt(0) - 65);
  return String.fromCodePoint(...codePoints);
}
