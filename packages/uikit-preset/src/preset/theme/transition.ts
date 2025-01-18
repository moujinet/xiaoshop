import type { Theme } from '../../types'

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
