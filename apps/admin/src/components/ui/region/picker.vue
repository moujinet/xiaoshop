<script lang="ts" setup>
import type { ILocationNested, ILocationPath } from '@xiaoshop/shared'
import type { ILocationCode, IUseRegionDataKey } from '~/composables/region'

defineOptions({
  name: 'UiRegionPicker',
})

const props = defineProps<{
  type: IUseRegionDataKey
  banded?: ILocationCode[]
  topOnly?: boolean
}>()

const emit = defineEmits(['ok'])

const visible = ref(false)
const loading = ref(false)
const regions = ref<ILocationNested[]>([])
const selected = ref<ILocationCode[][]>([])

const {
  loadRegion,
  findRegionPath,
  stringify,
} = useRegionData()

const unionSelected = computed(
  () => props.topOnly
    ? withoutIncludes(selected.value)
    : selected.value.map(c => findRegionPath(regions.value, c)),
)

function withoutIncludes(codes: ILocationCode[][]): ILocationPath[] {
  const index: string[] = []

  const join = (codes: string[]) => {
    return codes.join(',')
  }

  codes
    .sort((a, b) => a.length - b.length)
    .forEach((c) => {
      if (!index.includes(join(c)) && !index.some(f => join(c).startsWith(f))) {
        index.push(join(c))
      }
    })

  return index.map(i => findRegionPath(regions.value, i))
}

function handleOk() {
  visible.value = false

  emit('ok', unionSelected.value)
}

watch(visible, (show) => {
  if (show && !regions.value.length) {
    loading.value = true

    loadRegion(props.type, props.banded)
      .then((res) => {
        regions.value = res
      })
      .finally(() => {
        loading.value = false
      })
  }

  if (!show) {
    selected.value = []
    loading.value = false
  }
})
</script>

<template>
  <a-trigger
    v-model:popup-visible="visible"
    trigger="click"
    unmount-on-close
    auto-fit-position
  >
    <slot />

    <template #content>
      <div class="ui-region-picker flex-(~ col gap-4) p-3 bg-$theme-bg-component b-(1 solid $theme-border) rounded shadow">
        <a-cascader-panel
          v-model="selected"
          :loading="loading"
          :options="regions"
          :field-names="{ label: 'name', value: 'code' }"
          check-strictly
          expand-child
          path-mode
          multiple
        />

        <div
          v-if="unionSelected.length"
          class="flex-(~ v-center gap-2) b-t-(1 solid $theme-border) p-t-2"
        >
          <div class="c-$theme-text text-3">
            已选择:
          </div>

          <a-overflow-list class="flex-1">
            <a-tag
              v-for="region in unionSelected"
              :key="stringify(region)"
            >
              {{ stringify(region, '/') }}
            </a-tag>
          </a-overflow-list>
        </div>

        <a-button type="primary" size="large" :loading="loading" @click="handleOk">
          确定
        </a-button>
      </div>
    </template>
  </a-trigger>
</template>

<style lang="less">
.ui-region-picker {
  .arco-cascader-panel {
    border: 0;
    box-shadow: none;
  }
}
</style>
