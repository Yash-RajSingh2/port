export const themes = {
  '/': {
    '--bg': '#f4f9fc',
    '--line': '#7f00e0',
    '--fill': '#aadcec',
    '--text': '#0f1b61',
    '--subtext': '#73bbc5',
    '--duo': '#aadcec',
  },
  '/about': {
    '--bg': '#f7f8f9',
    '--line': '#5269bd',
    '--fill': '#9bdabe',
    '--text': '#1c494c',
    '--subtext': '#73cadc',
    '--duo': '#9bdabe',
  },
  '/projects': {
    '--bg': '#fff7f7',
    '--line': '#7E66C7',
    '--fill': '#FCC5D3',
    '--text': '#021963',
    '--subtext': '#F67796',
    '--duo': '#FCC5D3',
  },
  '/contact': {
    '--bg': '#fdfbf9',
    '--line': '#ff5708',
    '--fill': '#ffdaa5',
    '--text': '#47280b',
    '--subtext': '#ff5708',
    '--duo': '#ffdaa5',
  },
} as const;

export type ThemeKey = keyof typeof themes;
export type Theme = typeof themes[ThemeKey]; 