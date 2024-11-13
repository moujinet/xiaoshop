<script lang="ts" setup>
import type { IUserMenuGroup } from '~/runtime/usermenu'

defineOptions({
  name: 'SystemUsermenu',
  inheritAttrs: false,
})

const router = useRouter()
const greeting = getGreeting()
const { usermenus, getUrl } = useUserMenu()

function onSelect(key: string) {
  const [group, menuKey] = key.split('.')
  const url = getUrl(group as IUserMenuGroup, menuKey)

  if (url.startsWith('http'))
    return window.open(url)

  router.push(url)
}
</script>

<template>
  <a-dropdown position="br" :popup-max-height="false" @select="onSelect">
    <div class="flex-(~ v-center) gap-$page-gap-sm c-$theme-title cursor-pointer">
      <span>{{ greeting }}, Allen Luo</span>
      <UiIcon name="down" class="c-$theme-text" />
    </div>

    <template #content>
      <template v-for="(menus, key) in usermenus" :key="key">
        <a-doption
          v-for="(menu, index) in menus"
          :key="key + index"
          :value="`${key}.${menu.key}`"
          :class="{
            [`${menu.className}`]: menu.className,
            'b-b-(1 solid $theme-border)': key !== 'footer' && index === menus.length - 1,
          }"
        >
          <template v-if="menu.icon" #icon>
            <UiIcon :name="menu.icon" class="text-(4 $theme-placeholder)" />
          </template>

          {{ menu.label }}
        </a-doption>
      </template>
    </template>
  </a-dropdown>
</template>
