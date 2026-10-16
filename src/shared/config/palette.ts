/**
 * Rose Atelier. Antd tokens and the CSS variables set in `applyPalette`
 * both read from here, so the shell and the component library stay on one palette.
 */
export const palette = {
   primary: '#9E3D5C',
   primaryDeep: '#6E2740',
   gold: '#C6A27A',
   goldSoft: '#E7D3BE',
   ink: '#1A1216',
   inkMuted: '#6E5862',
   canvas: '#FFFCFB',
   surface: '#F3EBE6',
   line: '#E6D9D2',
   sider: '#120E11',
   siderRaised: '#24181D',
   siderText: '#F6EEF1',
   siderMuted: '#C4B0B6',
} as const;

const cssVariables = {
   '--color-primary': palette.primary,
   '--color-primary-deep': palette.primaryDeep,
   '--color-gold': palette.gold,
   '--color-gold-soft': palette.goldSoft,
   '--color-ink': palette.ink,
   '--color-ink-muted': palette.inkMuted,
   '--color-canvas': palette.canvas,
   '--color-surface': palette.surface,
   '--color-line': palette.line,
   '--color-sider': palette.sider,
   '--color-sider-raised': palette.siderRaised,
   '--color-sider-text': palette.siderText,
   '--color-sider-muted': palette.siderMuted,
} as const;

/** Writes the palette onto `:root` before the first paint. */
export const applyPalette = () => {
   const root = document.documentElement;
   for (const [name, value] of Object.entries(cssVariables)) root.style.setProperty(name, value);
};
