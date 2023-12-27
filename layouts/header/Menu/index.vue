<template>
  <nav>
    <ul class="flex gap-[30px] font-semibold">
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/list">Docs</NuxtLink></li>
      <li><Search /></li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import Search from './Search/index.vue'
</script>
