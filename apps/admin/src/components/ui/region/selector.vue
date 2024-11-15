<script lang="ts" setup>
import type { ILocationNested, ILocationPath } from '@xiaoshop/shared'
import type { ILocationCode, IUseRegionDataKey } from '~/composables/region'

defineOptions({
  name: 'UiRegionSelector',
  inheritAttrs: false,
})

const props = withDefaults(defineProps<{
  type?: IUseRegionDataKey
}>(), {
  type: 'areas',
})

const modelValue = defineModel<ILocationPath>('modelValue', {
  type: Array as PropType<ILocationPath>,
  default: () => [],
})

const loading = ref(false)
const selected = ref<ILocationCode[]>([])
const regions = ref<ILocationNested[]>([])

const { loadRegion, findRegionPath } = useRegionData()

onBeforeMount(() => {
  loading.value = true

  loadRegion(props.type)
    .then((res) => {
      regions.value = res
    })
    .catch(() => {
      regions.value = []
    })
    .finally(() => {
      loading.value = false
    })
})

watch(modelValue, (val) => {
  const codes = val.map(item => item.code)

  if (codes.join(',') !== selected.value.join(','))
    selected.value = codes
}, {
  immediate: true,
})

watch(selected, (newVal) => {
  const path = findRegionPath(regions.value, newVal)

  if (path !== modelValue.value)
    modelValue.value = path
})
</script>

<template>
  <a-cascader
    v-model="selected"
    :loading="loading"
    :options="regions"
    :field-names="{ label: 'name', value: 'code' }"
    :virtual-list-props="{ height: 200 }"
    :allow-search="false"
    :fallback="false"
    placeholder="请选择"
    expand-child
    allow-clear
    path-mode
  />
</template>
