import type { ThemeConfig } from '../types/theme'

export default {
  name: 'default',
  tokens: {
    light: {
      theme: {
        primary: {
          base: ['--neutral-12', '--neutral-1'],
          soft: ['--neutral-3', '--neutral-10'],
          muted: ['--neutral-6', '--neutral-8'],
          active: ['--neutral-11', '--neutral-1'],
        },
        accent: '--violet',
        info: '--indigo',
        success: '--green',
        warning: '--orange',
        danger: '--ruby',
      },
      background: {
        page: 'white',
        sidebar: '--neutral-3',
        navigator: 'white',
        panel: 'white',
        overlay: '--neutral-a9',
        separator: '--neutral-5',
      },
      foreground: {
        base: '--neutral-12',
        soft: '--neutral-3',
        muted: '--neutral-6',
        active: '--neutral-11',
      },
    },
    dark: {
      background: {
        page: '--neutral-1',
        sidebar: '--neutral-2',
        navigator: '--white-a2',
        panel: '--neutral-2',
        overlay: '--neutral-a4',
        separator: '--neutral-a3',
      },
      foreground: {
        base: '--neutral-12',
        soft: '--neutral-5',
        muted: '--neutral-7',
        active: '--neutral-11',
      },
    },
  },
} satisfies ThemeConfig
