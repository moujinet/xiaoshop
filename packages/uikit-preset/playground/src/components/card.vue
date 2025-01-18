<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>

<template>
  <section class="flex">
    <header class="w-50 text-2xl font-bold">
      {{ title }}
    </header>
    <div class="b-separator flex-1 b-1 rounded-lg b-solid bg-white p-8">
      <slot />
    </div>
  </section>
</template>
