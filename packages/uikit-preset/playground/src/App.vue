<script lang="ts" setup>
import {
  DEFAULT_ACCENT_COLORS,
  DEFAULT_GRAY_COLORS,
} from '../../src/colors'
</script>

<template>
  <main class="py-8 text-sm">
    <div class="flex gap-12 px-12">
      <h2 class="w-30">
        Colors
      </h2>

      <div class="flex-1 rounded-lg bg-white p-8 shadow-sm">
        <template v-for="color in DEFAULT_ACCENT_COLORS" :key="color">
          <div class="pb-3 font-semibold">
            {{ color }}
          </div>
          <div class="grid grid-cols-12 place-items-center gap-2">
            <div v-for="scale in 12" :key="scale" class="mb-2 flex flex-col gap-2">
              <div :style="`background-color: var(--${color}-${scale})`" class="size-6 rounded-full shadow-inner" />
              <div :style="`background-color: var(--${color}-a${scale})`" class="size-6 rounded-full shadow-inner" />
              <div class="py-1 text-center text-3">
                {{ scale }}
              </div>
            </div>
          </div>
        </template>

        <template v-for="color in DEFAULT_GRAY_COLORS" :key="color">
          <div class="pb-3 font-semibold">
            {{ color }}
          </div>
          <div class="grid grid-cols-12 place-items-center gap-2">
            <div v-for="scale in 12" :key="scale" class="mb-2 flex flex-col gap-2">
              <div :style="`background-color: var(--${color}-${scale})`" class="size-6 rounded-full shadow-inner" />
              <div :style="`background-color: var(--${color}-a${scale})`" class="size-6 rounded-full shadow-inner" />
              <div class="py-1 text-center text-3">
                {{ scale }}
              </div>
            </div>
          </div>
        </template>

        <div class="pb-3 font-semibold">
          neutral
        </div>
        <div class="grid grid-cols-12 place-items-center gap-2">
          <div v-for="scale in 12" :key="scale" class="mb-2 flex flex-col gap-2">
            <div :style="`background-color: var(--neutral-${scale})`" class="size-6 rounded-full shadow-inner" />
            <div class="py-1 text-center text-3">
              {{ scale }}
            </div>
          </div>
          <div v-for="scale in 12" :key="scale" class="mb-2 flex flex-col gap-2">
            <div :style="`background-color: var(--neutral-a${scale})`" class="size-6 rounded-full shadow-inner" />
            <div class="py-1 text-center text-3">
              {{ scale }}
            </div>
          </div>
        </div>

        <div class="pb-3 font-semibold">
          black
        </div>
        <div class="grid grid-cols-12 place-items-center gap-2">
          <div v-for="scale in 12" :key="scale" class="mb-2 flex flex-col gap-2">
            <div :style="`background-color: var(--black-a${scale})`" class="size-6 rounded-full shadow-inner" />
            <div class="py-1 text-center text-3">
              {{ scale }}
            </div>
          </div>
        </div>
      </div>

      <div class="dark flex-1 rounded-lg bg-[#0b0b0b] p-8 text-white shadow-sm">
        <template v-for="color in DEFAULT_ACCENT_COLORS" :key="color">
          <div class="pb-3 font-semibold">
            {{ color }}
          </div>
          <div class="grid grid-cols-12 place-items-center gap-2">
            <div v-for="scale in 12" :key="scale" class="mb-2 flex flex-col gap-2">
              <div :style="`background-color: var(--${color}-${scale})`" class="size-6 rounded-full shadow-inner" />
              <div :style="`background-color: var(--${color}-a${scale})`" class="size-6 rounded-full shadow-inner" />
              <div class="py-1 text-center text-3">
                {{ scale }}
              </div>
            </div>
          </div>
        </template>

        <template v-for="color in DEFAULT_GRAY_COLORS" :key="color">
          <div class="pb-3 font-semibold">
            {{ color }}
          </div>
          <div class="grid grid-cols-12 place-items-center gap-2">
            <div v-for="scale in 12" :key="scale" class="mb-2 flex flex-col gap-2">
              <div :style="`background-color: var(--${color}-${scale})`" class="size-6 rounded-full shadow-inner" />
              <div :style="`background-color: var(--${color}-a${scale})`" class="size-6 rounded-full shadow-inner" />
              <div class="py-1 text-center text-3">
                {{ scale }}
              </div>
            </div>
          </div>
        </template>

        <div class="pb-3 font-semibold">
          neutral
        </div>
        <div class="grid grid-cols-12 place-items-center gap-2">
          <div v-for="scale in 12" :key="scale" class="mb-2 flex flex-col gap-2">
            <div :style="`background-color: var(--neutral-${scale})`" class="size-6 rounded-full shadow-inner" />
            <div class="py-1 text-center text-3">
              {{ scale }}
            </div>
          </div>
          <div v-for="scale in 12" :key="scale" class="mb-2 flex flex-col gap-2">
            <div :style="`background-color: var(--neutral-a${scale})`" class="size-6 rounded-full shadow-inner" />
            <div class="py-1 text-center text-3">
              {{ scale }}
            </div>
          </div>
        </div>

        <div class="pb-3 font-semibold">
          white
        </div>
        <div class="grid grid-cols-12 place-items-center gap-2">
          <div v-for="scale in 12" :key="scale" class="mb-2 flex flex-col gap-2">
            <div :style="`background-color: var(--white-a${scale})`" class="size-6 rounded-full shadow-inner" />
            <div class="py-1 text-center text-3">
              {{ scale }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex gap-12 px-12 pt-12">
      <h2 class="w-30">
        Shadows
      </h2>

      <div class="flex-1 rounded-lg bg-white p-8 shadow-sm">
        <div class="grid grid-cols-6 place-items-center gap-2">
          <template
            v-for="shadow in [
              'shadow-inner',
              'shadow-sm',
              'shadow-md',
              'shadow-lg',
              'shadow-xl',
              'shadow-2xl',
            ]"
            :key="shadow"
          >
            <div :class="shadow" class="size-14 flex flex-center rounded-xl text-3">
              {{ shadow.split('-').pop() }}
            </div>
          </template>
        </div>
      </div>

      <div class="dark flex-1 rounded-lg bg-[#0b0b0b] p-8 shadow-sm">
        <div class="grid grid-cols-6 place-items-center gap-2">
          <template
            v-for="shadow in [
              'shadow-inner',
              'shadow-sm',
              'shadow-md',
              'shadow-lg',
              'shadow-xl',
              'shadow-2xl',
            ]"
            :key="shadow"
          >
            <div :class="shadow" class="size-14 flex flex-center rounded-xl bg-white/90 text-3">
              {{ shadow.split('-').pop() }}
            </div>
          </template>
        </div>
      </div>
    </div>

    <div class="flex gap-12 px-12 pt-12">
      <h2 class="w-30">
        Typography
      </h2>

      <div class="flex flex-1 flex-col gap-6 rounded-lg bg-white p-8 shadow-sm">
        <div class="flex flex-col">
          <div class="pb-6 font-semibold">
            Font Family
          </div>

          <div class="py-4 text-4 font-sans">
            The quick brown fox jumps over the lazy dog.
          </div>

          <div class="py-4 text-4 font-serif">
            The quick brown fox jumps over the lazy dog.
          </div>

          <div class="py-4 text-4 font-mono">
            The quick brown fox jumps over the lazy dog.
          </div>
        </div>

        <div class="flex flex-col">
          <div class="pb-6 font-semibold">
            Font Size
          </div>

          <template
            v-for="size in [
              'text-sm',
              'text-base',
              'text-lg',
              'text-xl',
              'text-2xl',
              'text-3xl',
              'text-4xl',
              'text-5xl',
            ]"
            :key="size"
          >
            <div :class="size" class="py-4">
              The quick brown fox jumps over the lazy dog.
            </div>
          </template>
        </div>
      </div>
    </div>

    <div class="flex gap-12 px-12 pt-12">
      <h2 class="w-30">
        Radius
      </h2>

      <div class="flex flex-1 flex-col gap-6 rounded-lg bg-white p-8 shadow-sm">
        <div class="grid grid-cols-6 place-items-center gap-2">
          <template
            v-for="rounded in [
              'rounded',
              'rounded-sm',
              'rounded-md',
              'rounded-lg',
              'rounded-xl',
              'rounded-2xl',
            ]"
            :key="rounded"
          >
            <div :class="rounded" class="size-14 flex flex-center bg-slate/40 text-3 shadow-inner">
              {{ rounded.split('-').pop() }}
            </div>
          </template>
        </div>
      </div>
    </div>

    <div class="flex gap-12 px-12 pt-12">
      <h2 class="w-30">
        Animation
      </h2>

      <div class="flex flex-1 flex-col gap-6 rounded-lg bg-white p-8 shadow-sm">
        <div class="flex flex-col">
          <div class="pb-6 font-semibold">
            Zoom
          </div>
          <div class="grid grid-cols-8 place-items-center gap-2">
            <template
              v-for="(animate, index) in [
                'hover:animate-zoom-from-top',
                'hover:animate-zoom-to-top',
                'hover:animate-zoom-from-bottom',
                'hover:animate-zoom-to-bottom',
                'hover:animate-zoom-from-left',
                'hover:animate-zoom-to-left',
                'hover:animate-zoom-from-right',
                'hover:animate-zoom-to-right',
              ]"
              :key="animate"
            >
              <div :class="animate" class="size-20 flex flex-center rounded-xl text-3 shadow-inner">
                {{ index % 2 === 0 ? 'from' : 'to' }} {{ animate.split('-').pop() }}
              </div>
            </template>
          </div>
        </div>

        <div class="flex flex-col">
          <div class="pb-6 font-semibold">
            Slide
          </div>
          <div class="grid grid-cols-8 place-items-center gap-2">
            <template
              v-for="(animate, index) in [
                'hover:animate-slide-from-top',
                'hover:animate-slide-to-top',
                'hover:animate-slide-from-bottom',
                'hover:animate-slide-to-bottom',
                'hover:animate-slide-from-left',
                'hover:animate-slide-to-left',
                'hover:animate-slide-from-right',
                'hover:animate-slide-to-right',
              ]"
              :key="animate"
            >
              <div :class="animate" class="size-20 flex flex-center rounded-xl text-3 shadow-inner">
                {{ index % 2 === 0 ? 'from' : 'to' }} {{ animate.split('-').pop() }}
              </div>
            </template>
          </div>
        </div>

        <div class="flex flex-col">
          <div class="pb-6 font-semibold">
            Move
          </div>
          <div class="grid grid-cols-8 place-items-center gap-2">
            <template
              v-for="(animate, index) in [
                'hover:animate-move-from-top',
                'hover:animate-move-to-top',
                'hover:animate-move-from-bottom',
                'hover:animate-move-to-bottom',
                'hover:animate-move-from-left',
                'hover:animate-move-to-left',
                'hover:animate-move-from-right',
                'hover:animate-move-to-right',
              ]"
              :key="animate"
            >
              <div :class="animate" class="size-20 flex flex-center rounded-xl text-3 shadow-inner">
                {{ index % 2 === 0 ? 'from' : 'to' }} {{ animate.split('-').pop() }}
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #f7f8f9;
}
</style>
