<script lang="ts" setup>
defineOptions({
  name: 'SystemUserMenu',
})

const router = useRouter()
const greeting = getGreeting()
const { usermenus } = useApp()

function onSelect(url: string) {
  if (url.startsWith('http'))
    return window.open(url)

  router.push(url)
}
</script>

<template>
  <UiDropdown
    :label="`${greeting}, Allen Luo`"
    position="br"
    @select="onSelect"
  >
    <template #options>
      <template v-for="(menus, key) in usermenus" :key="key">
        <a-doption
          v-for="(menu, index) in menus"
          :key="menu.key"
          :value="menu.url"
          :class="{
            [`${menu.className}`]: menu.className,
            'b-b-(1 solid fill-2)': key !== 'footer' && index === menus.length - 1,
          }"
        >
          <template v-if="menu.icon" #icon>
            <UiIcon :name="menu.icon" class="text-(4 $menu-icon-color)" />
          </template>

          {{ menu.label }}
        </a-doption>
      </template>
    </template>
  </UiDropdown>
</template>
