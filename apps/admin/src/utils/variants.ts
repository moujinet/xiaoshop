import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * 合并 className
 *
 * @param inputs
 * @returns 合并后的 className
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
