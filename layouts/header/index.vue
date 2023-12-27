<template>
  <div class="header-bg">
    <Logo class="flex-none" />
    <Menu />
  </div>
  <div class="h-[70px]"></div>
</template>

<script lang="ts" setup>
import Logo from "./Logo/index.vue";
import Menu from "./Menu/index.vue";

</script>

<style lang="less" scoped>
.header-bg {
  background: white;
  z-index: 99999;
  height: 70px;
  padding: 0 16px;
  @apply  w-full fixed flex justify-between items-center ;
}
</style>
