import { useColorScheme } from 'react-native';

export type ThemeColors = {
  background: string;
  backgroundSoft: string;
  panel: string;
  panelElevated: string;
  border: string;
  text: string;
  muted: string;
  accent: string;
  accentStrong: string;
  accentWarm: string;
  success: string;
  successSoft: string;
  danger: string;
  selection: string;
  found: string;
  shadow: string;
  foundWordHighlight: string;
  onAccent: string;
  surfaceSubtle: string;
  surfaceSoft: string;
  accentTint: string;
  accentTintStrong: string;
  successTint: string;
  glowAccent: string;
  glowSuccess: string;
  overlay: string;
};

export const lightColors: ThemeColors = {
  background: '#f3f7fb',
  backgroundSoft: '#e6eef6',
  panel: '#ffffff',
  panelElevated: '#f8fbff',
  border: 'rgba(15, 23, 42, 0.10)',
  text: '#0f172a',
  muted: '#475569',
  accent: '#0284c7',
  accentStrong: '#0369a1',
  accentWarm: '#d97706',
  success: '#0f766e',
  successSoft: 'rgba(15, 118, 110, 0.12)',
  danger: '#e11d48',
  selection: 'rgba(2, 132, 199, 0.18)',
  found: 'rgba(15, 118, 110, 0.14)',
  shadow: 'rgba(15, 23, 42, 0.12)',
  foundWordHighlight: '#1d4ed8',
  onAccent: '#f8fafc',
  surfaceSubtle: 'rgba(15, 23, 42, 0.04)',
  surfaceSoft: 'rgba(15, 23, 42, 0.03)',
  accentTint: 'rgba(2, 132, 199, 0.12)',
  accentTintStrong: 'rgba(2, 132, 199, 0.16)',
  successTint: 'rgba(15, 118, 110, 0.12)',
  glowAccent: 'rgba(14, 165, 233, 0.14)',
  glowSuccess: 'rgba(45, 212, 191, 0.12)',
  overlay: 'rgba(15, 23, 42, 0.18)',
} as const;

export const darkColors: ThemeColors = {
  background: '#08111f',
  backgroundSoft: '#0f1c30',
  panel: '#12233a',
  panelElevated: '#18304d',
  border: 'rgba(255,255,255,0.08)',
  text: '#f8fafc',
  muted: '#9fb1c7',
  accent: '#7dd3fc',
  accentStrong: '#38bdf8',
  accentWarm: '#f59e0b',
  success: '#34d399',
  successSoft: 'rgba(52, 211, 153, 0.15)',
  danger: '#fb7185',
  selection: 'rgba(125, 211, 252, 0.28)',
  found: 'rgba(52, 211, 153, 0.24)',
  shadow: 'rgba(2, 6, 23, 0.45)',
  foundWordHighlight: '#60a5fa',
  onAccent: '#08111f',
  surfaceSubtle: 'rgba(255,255,255,0.05)',
  surfaceSoft: 'rgba(255,255,255,0.04)',
  accentTint: 'rgba(125, 211, 252, 0.14)',
  accentTintStrong: 'rgba(125, 211, 252, 0.16)',
  successTint: 'rgba(52, 211, 153, 0.16)',
  glowAccent: 'rgba(125, 211, 252, 0.2)',
  glowSuccess: 'rgba(52, 211, 153, 0.16)',
  overlay: 'rgba(2, 6, 23, 0.72)',
} as const;

export function getThemeColors(colorScheme: ReturnType<typeof useColorScheme>): ThemeColors {
  return colorScheme === 'light' ? lightColors : darkColors;
}

export function useThemeColors(): ThemeColors {
  const colorScheme = useColorScheme();

  return getThemeColors(colorScheme);
}
