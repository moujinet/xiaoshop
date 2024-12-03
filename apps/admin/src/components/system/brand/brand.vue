<script lang="ts" setup>
defineOptions({
  name: 'SystemBrand',
})

defineProps<{
  logo: string
  name: string
  title?: string
  simple?: boolean
}>()
</script>

<template>
  <RouterLink
    to="/"
    class="flex-(~ center) w-full h-$sidebar-header-height no-underline select-none"
    :class="simple ? 'w-full' : 'flex-1'"
    :title="title"
  >
    <img :src="logo" :alt="name" class="size-5">

    <Transition name="zoom-in-big">
      <div v-if="!simple" class="flex-(~ v-center) m-l-3">
        <h1 class="font-logo text-(xl title) tracking-tighter uppercase">
          {{ name }}
        </h1>
        <SystemBrandVersion />
      </div>
    </Transition>
  </RouterLink>
</template>
