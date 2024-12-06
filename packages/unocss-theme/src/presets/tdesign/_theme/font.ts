import type { Theme } from '~/types'

export const fontSize = {
  'link-small': ['var(--td-font-size-link-small)', 'var(--td-line-height-link-small)'],
  'link-medium': ['var(--td-font-size-link-medium)', 'var(--td-line-height-link-medium)'],
  'link-large': ['var(--td-font-size-link-large)', 'var(--td-line-height-link-large)'],

  'mark-small': ['var(--td-font-size-mark-small)', 'var(--td-line-height-mark-small)'],
  'mark-medium': ['var(--td-font-size-mark-medium)', 'var(--td-line-height-mark-medium)'],

  'body-small': ['var(--td-font-size-body-small)', 'var(--td-line-height-body-small)'],
  'body-medium': ['var(--td-font-size-body-medium)', 'var(--td-line-height-body-medium)'],
  'body-large': ['var(--td-font-size-body-large)', 'var(--td-line-height-body-large)'],

  'title-small': ['var(--td-font-size-title-small)', 'var(--td-line-height-title-small)'],
  'title-medium': ['var(--td-font-size-title-medium)', 'var(--td-line-height-title-medium)'],
  'title-large': ['var(--td-font-size-title-large)', 'var(--td-line-height-title-large)'],

  'headline-small': ['var(--td-font-size-headline-small)', 'var(--td-line-height-headline-small)'],
  'headline-medium': ['var(--td-font-size-headline-medium)', 'var(--td-line-height-headline-medium)'],
  'headline-large': ['var(--td-font-size-headline-large)', 'var(--td-line-height-headline-large)'],

  'display-medium': ['var(--td-font-size-display-medium)', 'var(--td-line-height-display-medium)'],
  'display-large': ['var(--td-font-size-display-large)', 'var(--td-line-height-display-large)'],
} satisfies Theme['fontSize']
