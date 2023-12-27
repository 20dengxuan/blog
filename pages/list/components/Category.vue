<template>
  
  <div class="bg-white rounded-[8px] w-[300px] p-[24px] flex flex-col gap-4 items-center shadow-md overflow-hidden">
    <div v-for="item in list" @click="emits('update:value', item.path)" :key="item.path" class="w-full rounded-[4px] h-[48px] cursor-pointer bg-[#f8f8f8] flex items-center justify-between p-[24px]">
      {{ item.title }}
      <img src="/right_arrow.png" alt="">
    </div>
  </div>
</template>

<script lang="ts" setup>
const emits = defineEmits('update:value')

defineProps({
  value: {
    type: String,
    default: ''
  }
})

const list = [
  {title: '全部', path: ''},
  {title: 'typecript', path: '/ts'},
  {title: '其他', path: '/other'},
]
</script>