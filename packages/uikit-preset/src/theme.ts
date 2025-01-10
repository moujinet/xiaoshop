import type { Theme } from './types'

/**
 * Breakpoints
 *
 * @see {@link https://www.radix-ui.com/themes/docs/theme/breakpoints#available-sizes}
 */
export const breakpoints = {
  // Phones (landscape)
  xs: '520px',
  // Tablets (portrait)
  sm: '768px',
  // Tablets (landscape)
  md: '1024px',
  // Laptops
  lg: '1280px',
  // Desktops
  xl: '1640px',
} satisfies Theme['breakpoints']

export const verticalBreakpoints = { ...breakpoints } satisfies Theme['breakpoints']

/**
 * Font Size
 *
 * @see {@link https://www.radix-ui.com/themes/docs/theme/typography#type-scale}
 */
export const fontSize = {
  'xs': ['12px', '16px', '0.0025em'],
  'sm': ['14px', '20px', '0em'],
  'base': ['16px', '24px', '0em'],
  'lg': ['18px', '26px', '-0.0025em'],
  'xl': ['20px', '28px', '-0.005em'],
  '2xl': ['24px', '30px', '-0.00625em'],
  '3xl': ['28px', '36px', '-0.0075em'],
  '4xl': ['35px', '40px', '-0.01em'],
  '5xl': ['60px', '60px', '-0.025em'],
} satisfies Theme['fontSize']

/**
 * Font Family
 *
 * @see {@link https://www.radix-ui.com/themes/docs/theme/typography#font-family}
 */
export const fontFamily = {
  sans: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    '"Open Sans"',
    'system-ui',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
  ].join(','),

  serif: [
    'ui-serif',
    'Georgia',
    'Cambria',
    '"Times New Roman"',
    'Times',
    'serif',
  ].join(','),

  mono: [
    'Menlo',
    'Consolas',
    '"Bitstream Vera Sans Mono"',
    'monospace',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
  ].join(','),
} satisfies Theme['fontFamily']

/**
 * Spacing
 *
 * @see {@link https://www.radix-ui.com/themes/docs/theme/spacing#space-scale}
 */
export const spacing = {
  'DEFAULT': '16px',
  'none': '0',
  'xs': '4px',
  'sm': '8px',
  'md': '12px',
  'lg': '16px',
  'xl': '24px',
  '2xl': '32px',
  '3xl': '40px',
  '4xl': '48px',
  '5xl': '64px',
} satisfies Theme['spacing']

/**
 * Border Radius
 *
 * @see {@link https://www.radix-ui.com/themes/docs/theme/radius#radius-scale}
 */
export const borderRadius = {
  'DEFAULT': '3px',
  'none': '0px',
  'xs': '3px',
  'sm': '4px',
  'md': '6px',
  'lg': '8px',
  'xl': '12px',
  '2xl': '16px',
  'full': '50%',
} satisfies Theme['borderRadius']

/**
 * Box Shadow
 *
 * @see {@link https://www.radix-ui.com/themes/docs/theme/shadows}
 */
export const boxShadow = {
  'DEFAULT': 'var(--shadow-3)',
  'sm': 'var(--shadow-2)',
  'md': 'var(--shadow-3)',
  'lg': 'var(--shadow-4)',
  'xl': 'var(--shadow-5)',
  '2xl': 'var(--shadow-6)',
  'inner': `var(--shadow-1)`,
} satisfies Theme['boxShadow']

/**
 * @see {@link https://easings.net/}
 */
export const easing = {
  'sine-in': 'cubic-bezier(0.12,0,0.39,0)',
  'cubic-in': 'cubic-bezier(0.32,0,0.67,0)',
  'quint-in': 'cubic-bezier(0.64,0,0.78,0)',
  'circ-in': 'cubic-bezier(0.55,0,1,0.45)',
  'quad-in': 'cubic-bezier(0.11,0,0.5,0)',
  'quart-in': 'cubic-bezier(0.5,0,0.75,0)',
  'expo-in': 'cubic-bezier(0.7,0,0.84,0)',
  'back-in': 'cubic-bezier(0.36,0,0.66,-0.56)',

  'sine-out': 'cubic-bezier(0.61,1,0.88,1)',
  'cubic-out': 'cubic-bezier(0.33,1,0.68,1)',
  'quint-out': 'cubic-bezier(0.22,1,0.36,1)',
  'circ-out': 'cubic-bezier(0,0.55,0.45,1)',
  'quad-out': 'cubic-bezier(0.5,1,0.89,1)',
  'quart-out': 'cubic-bezier(0.25,1,0.5,1)',
  'expo-out': 'cubic-bezier(0.16,1,0.3,1)',
  'back-out': 'cubic-bezier(0.34,1.56,0.64,1)',

  'sine-in-out': 'cubic-bezier(0.37,0,0.63,1)',
  'cubic-in-out': 'cubic-bezier(0.65,0,0.35,1)',
  'quint-in-out': 'cubic-bezier(0.83,0,0.17,1)',
  'circ-in-out': 'cubic-bezier(0.85,0,0.15,1)',
  'quad-in-out': 'cubic-bezier(0.45,0,0.55,1)',
  'quart-in-out': 'cubic-bezier(0.76,0,0.24,1)',
  'expo-in-out': 'cubic-bezier(0.87,0,0.13,1)',
  'back-in-out': 'cubic-bezier(0.68,-0.6,0.32,1.6)',
} satisfies Theme['easing']

export const animation = {
  keyframes: {
    'zoom-from-top': '{from{transform:scale(0.8);transform-origin:50% 0;opacity:0}to{transform:scale(1);transform-origin:50% 0}}',
    'zoom-to-top': '{from{transform:scale(1);transform-origin:50% 0}to{transform:scale(0.8);transform-origin:50% 0;opacity:0}}',
    'zoom-from-bottom': '{from{transform:scale(0.8);transform-origin:50% 100%;opacity:0}to{transform:scale(1);transform-origin:50% 100%}}',
    'zoom-to-bottom': '{from{transform:scale(1);transform-origin:50% 100%}to{transform:scale(0.8);transform-origin:50% 100%;opacity:0}}',
    'zoom-from-left': '{from{transform:scale(0.8);transform-origin:0 50%;opacity:0}to{transform:scale(1);transform-origin:0 50%}}',
    'zoom-to-left': '{from{transform:scale(1);transform-origin:0 50%}to{transform:scale(0.8);transform-origin:0 50%;opacity:0}}',
    'zoom-from-right': '{from{transform:scale(0.8);transform-origin:100% 50%;opacity:0}to{transform:scale(1);transform-origin:100% 50%}}',
    'zoom-to-right': '{from{transform:scale(1);transform-origin:100% 50%}to{transform:scale(0.8);transform-origin:100% 50%;opacity:0}}',

    'slide-from-top': '{from{transform:scaleY(0.8);transform-origin:0 0;opacity:0}to{transform:scaleY(1);transform-origin:0 0;opacity:1}}',
    'slide-to-top': '{from{transform:scaleY(1);transform-origin:0 0;opacity:1}to{transform:scaleY(0.8);transform-origin:0 0;opacity:0}}',
    'slide-from-bottom': '{from{transform:scaleY(0.8);transform-origin:0 100%;opacity:0}to{transform:scaleY(1);transform-origin:0 100%}}',
    'slide-to-bottom': '{from{transform:scaleY(1);transform-origin:0 100%;opacity:1}to{transform:scaleY(0.8);transform-origin:0 100%;opacity:0}}',
    'slide-from-left': '{from{transform:scaleX(0.8);transform-origin:0 0;opacity:0}to{transform:scaleX(1);transform-origin:0 0;opacity:1}}',
    'slide-to-left': '{from{transform:scaleX(1);transform-origin:0 0;opacity:1}to{transform:scaleX(0.8);transform-origin:0 0;opacity:0}}',
    'slide-from-right': '{from{transform:scaleX(0.8);transform-origin:100% 0;opacity:0}to{transform:scaleX(1);transform-origin:100% 0;opacity:1}}',
    'slide-to-right': '{from{transform:scaleX(1);transform-origin:100% 0;opacity:1}to{transform:scaleX(0.8);transform-origin:100% 0;opacity:0}}',

    'move-from-top': '{from{transform:translate3d(0,-100%,0);transform-origin:0 100%;opacity:0}to{transform:translate3d(0,0,0);transform-origin:0 100%;opacity:1}}',
    'move-to-top': '{from{transform:translate3d(0,0,0);transform-origin:0 100%;opacity:1}to{transform:translate3d(0,-100%,0);transform-origin:0 100%;opacity:0}}',
    'move-from-bottom': '{from{transform:translate3d(0,100%,0);transform-origin:0 0;opacity:0}to{transform:translate3d(0,0,0);transform-origin:0 0;opacity:1}}',
    'move-to-bottom': '{from{transform:translate3d(0,0,0);transform-origin:0 0;opacity:1}to{transform:translate3d(0,100%,0);transform-origin:0 0;opacity:0}}',
    'move-from-left': '{from{transform:translate3d(-100%,0,0);transform-origin:100% 0;opacity:0}to{transform:translate3d(0,0,0);transform-origin:100% 0;opacity:1}}',
    'move-to-left': '{from{transform:translate3d(0,0,0);transform-origin:100% 0;opacity:1}to{transform:translate3d(-100%,0,0);transform-origin:100% 0;opacity:0}}',
    'move-from-right': '{from{transform:translate3d(100%,0,0);transform-origin:0 0;opacity:0}to{transform:translate3d(0,0,0);transform-origin:0 0;opacity:1}}',
    'move-to-right': '{from{transform:translate3d(0,0,0);transform-origin:0 0;opacity:1}to{transform:translate3d(100%,0,0);transform-origin:0 0;opacity:0}}',
  },
  timingFns: {
    'zoom-from-top': 'cubic-bezier(0.22,1,0.36,1)',
    'zoom-to-top': 'cubic-bezier(0,0.55,0.45,1)',
    'zoom-from-bottom': 'cubic-bezier(0.22,1,0.36,1)',
    'zoom-to-bottom': 'cubic-bezier(0,0.55,0.45,1)',
    'zoom-from-left': 'cubic-bezier(0.22,1,0.36,1)',
    'zoom-to-left': 'cubic-bezier(0,0.55,0.45,1)',
    'zoom-from-right': 'cubic-bezier(0.22,1,0.36,1)',
    'zoom-to-right': 'cubic-bezier(0,0.55,0.45,1)',

    'slide-from-top': 'cubic-bezier(0.22,1,0.36,1)',
    'slide-to-top': 'cubic-bezier(0,0.55,0.45,1)',
    'slide-from-bottom': 'cubic-bezier(0.22,1,0.36,1)',
    'slide-to-bottom': 'cubic-bezier(0,0.55,0.45,1)',
    'slide-from-left': 'cubic-bezier(0.22,1,0.36,1)',
    'slide-to-left': 'cubic-bezier(0,0.55,0.45,1)',
    'slide-from-right': 'cubic-bezier(0.22,1,0.36,1)',
    'slide-to-right': 'cubic-bezier(0,0.55,0.45,1)',

    'move-from-top': 'cubic-bezier(0.22,1,0.36,1)',
    'move-to-top': 'cubic-bezier(0,0.55,0.45,1)',
    'move-from-bottom': 'cubic-bezier(0.22,1,0.36,1)',
    'move-to-bottom': 'cubic-bezier(0,0.55,0.45,1)',
    'move-from-left': 'cubic-bezier(0.22,1,0.36,1)',
    'move-to-left': 'cubic-bezier(0,0.55,0.45,1)',
    'move-from-right': 'cubic-bezier(0.22,1,0.36,1)',
    'move-to-right': 'cubic-bezier(0,0.55,0.45,1)',
  },

  durations: {
    'zoom-from-top': '650ms',
    'zoom-to-top': '450ms',
    'zoom-from-bottom': '650ms',
    'zoom-to-bottom': '450ms',
    'zoom-from-left': '650ms',
    'zoom-to-left': '450ms',
    'zoom-from-right': '650ms',
    'zoom-to-right': '450ms',

    'slide-from-top': '650ms',
    'slide-to-top': '450ms',
    'slide-from-bottom': '650ms',
    'slide-to-bottom': '450ms',
    'slide-from-left': '650ms',
    'slide-to-left': '450ms',
    'slide-from-right': '650ms',
    'slide-to-right': '450ms',

    'move-from-top': '650ms',
    'move-to-top': '450ms',
    'move-from-bottom': '650ms',
    'move-to-bottom': '450ms',
    'move-from-left': '650ms',
    'move-to-left': '450ms',
    'move-from-right': '450ms',
    'move-to-right': '450ms',
  },
} satisfies Theme['animation']
