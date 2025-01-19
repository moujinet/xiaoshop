import { type ClassValue, clsx } from 'clsx'
import { omit } from 'es-toolkit/object'
import { twMerge } from 'tailwind-merge'
import { cva } from 'class-variance-authority'

export type { VariantProps } from 'class-variance-authority'

type CvaConfig<T> = Parameters<typeof cva<T>>[1]
type CvaReturn<T> = ReturnType<typeof cva<T>>
type CvaConfigSchema = Record<string, Record<string, ClassValue>>

type VariantsProps<T> = Parameters<CvaReturn<T>>[0]

type VariantsMerge<T> = (props: VariantsProps<T>, ...extras: ClassValue[]) => string

type UseVariantsOptions<T> = {
  [key: string]: ClassValue
} & CvaConfig<T>

export type UserClassValues = Record<string, ClassValue>

export interface UseVariantsReturn<T> {
  [key: string]: ClassValue
  variants: VariantsMerge<T>
  merge: (...extras: ClassValue[]) => string
}

/**
 * 定义 Css Class 变体
 *
 * @usage
 * ```vue
 * <script setup lang="ts">
 * const ui = createVariants({
 *   base: 'flex-(~ center) ring-(1 inset gray-300) text-gray-900 rounded',
 *   inner: 'p-(x-2 y-1.5)',
 *   icon: 'flex-(inline center) c-red-500',
 *   variants: {
 *     size: {
 *       sm: 'h-4 min-w-[16px] text-[10px]',
 *     }
 *   },
 *   compoundVariants: [],
 *   defaultVariants: {
 *     size: 'md',
 *   },
 * })
 * </script>
 *
 * <template>
 *   <UiButton :class="ui.variants({ size: 'sm' }, props.class )">
 *     <UiIcon :class="ui.merge(ui.icon, 'animate-spin')" />
 *     <span :class="ui.inner">Button</span>
 *   </UiButton>
 * </template>
 * ```
 */
export function createVariants<T extends CvaConfigSchema>(options: UseVariantsOptions<T>): UseVariantsReturn<T> {
  const {
    base = '',
    variants,
    defaultVariants,
    compoundVariants,
  } = options

  const ui = omit(options, [
    'base',
    'variants',
    'defaultVariants',
    'compoundVariants',
  ]) satisfies UserClassValues

  const cv = cva(base, {
    variants,
    defaultVariants,
    compoundVariants,
  })

  const cn = (...extras: ClassValue[]) => {
    return twMerge(
      clsx(
        ...extras,
      ),
    )
  }

  const variantsMerge = (props: VariantsProps<T>, ...extras: ClassValue[]): string => {
    return cn(
      cv(props),
      ...extras,
    )
  }

  return {
    ...ui,
    variants: variantsMerge,
    merge: cn,
  }
}
