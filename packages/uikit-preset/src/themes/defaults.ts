import type { ThemeConfig } from './types'

/**
 * Default theme
 */
export const defaultTheme: ThemeConfig = {
  name: 'default',
  label: '默认',
  tokens: {
    light: {
      color: {
        primary: {
          base: '141, 141, 141',
          thin: 'var(--neutral-a9)',
          alt: 'var(--black-a12)',
          soft: 'var(--neutral-a3)',
          contrast: 'var(--white-a12)',
        },
        secondary: {
          base: '216, 216, 216',
          thin: 'var(--neutral-a5)',
          alt: 'var(--black-a7)',
          soft: 'var(--neutral-a3)',
          contrast: 'var(--neutral-a12)',
        },
        accent: {
          base: '62, 99, 221',
          thin: 'var(--indigo-a8)',
          alt: 'var(--indigo-a10)',
          soft: 'var(--indigo-a3)',
          contrast: 'var(--white-a12)',
        },
        info: {
          base: '0, 162, 199',
          thin: 'var(--cyan-a8)',
          alt: 'var(--cyan-a10)',
          soft: 'var(--cyan-a3)',
          contrast: 'var(--white-a12)',
        },
        success: {
          base: '48, 164, 108',
          thin: 'var(--green-a8)',
          alt: 'var(--green-a10)',
          soft: 'var(--green-a3)',
          contrast: 'var(--white-a12)',
        },
        warning: {
          base: '255, 197, 61',
          thin: 'var(--amber-a8)',
          alt: 'var(--amber-a10)',
          soft: 'var(--amber-a3)',
          contrast: 'var(--white-a12)',
        },
        danger: {
          base: '229, 70, 102',
          thin: 'var(--ruby-a8)',
          alt: 'var(--ruby-a10)',
          soft: 'var(--ruby-a3)',
          contrast: 'var(--white-a12)',
        },
      },
      background: {
        page: '#f7f8f9',
        panel: 'var(--white-a10)',
        sidebar: 'var(--neutral-a3)',
        navigator: 'var(--white-a2)',
        overlay: 'var(--black-a10)',
      },
      foreground: {
        base: 'var(--neutral-12)',
        thin: 'var(--neutral-10)',
        alt: 'var(--black)',
        soft: 'var(--neutral-7)',
      },
      border: {
        base: 'var(--neutral-5)',
        input: 'var(--neutral-6)',
      },
    },
    dark: {
      background: {
        page: '#0b0b0b',
        panel: 'var(--neutral-a2)',
        sidebar: 'var(--neutral-a3)',
        navigator: 'var(--neutral-a2)',
        overlay: 'var(--black-a7)',
      },
      foreground: {
        base: 'var(--neutral-12)',
        thin: 'var(--neutral-10)',
        alt: 'var(--white-a12)',
        soft: 'var(--neutral-6)',
      },
    },
  },
}

export default [
  defaultTheme,
]
