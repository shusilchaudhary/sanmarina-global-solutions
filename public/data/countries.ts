export interface Country {
  name: string;
  code: string;
  flag: string;
  jobCount: number;
  coordinates: { x: number; y: number }; // Relative position on SVG map (percentage)
}

export const countries: Country[] = [
  { name: 'Germany', code: 'DE', flag: '🇩🇪', jobCount: 45, coordinates: { x: 52, y: 35 } },
  { name: 'Poland', code: 'PL', flag: '🇵🇱', jobCount: 32, coordinates: { x: 58, y: 30 } },
  { name: 'Czech Republic', code: 'CZ', flag: '🇨🇿', jobCount: 18, coordinates: { x: 55, y: 36 } },
  { name: 'Romania', code: 'RO', flag: '🇷🇴', jobCount: 24, coordinates: { x: 62, y: 42 } },
  { name: 'Croatia', code: 'HR', flag: '🇭🇷', jobCount: 15, coordinates: { x: 55, y: 43 } },
  { name: 'Portugal', code: 'PT', flag: '🇵🇹', jobCount: 12, coordinates: { x: 38, y: 45 } },
  { name: 'Malta', code: 'MT', flag: '🇲🇹', jobCount: 8, coordinates: { x: 55, y: 52 } },
  { name: 'Hungary', code: 'HU', flag: '🇭🇺', jobCount: 14, coordinates: { x: 58, y: 38 } },
  { name: 'Slovakia', code: 'SK', flag: '🇸🇰', jobCount: 10, coordinates: { x: 58, y: 34 } },
  { name: 'Lithuania', code: 'LT', flag: '🇱🇹', jobCount: 7, coordinates: { x: 62, y: 24 } },
  { name: 'Latvia', code: 'LV', flag: '🇱🇻', jobCount: 6, coordinates: { x: 62, y: 22 } },
  { name: 'Cyprus', code: 'CY', flag: '🇨🇾', jobCount: 5, coordinates: { x: 68, y: 52 } },
];
