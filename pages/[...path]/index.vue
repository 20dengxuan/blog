<template>
  <ContentQuery :path="$route.path" find="one" v-slot="{ data }">
    <div class="gap-4 max-w-[1200px] mx-auto p-0 md:p-6 flex flex-row">
      <div class="flex-1 bg-white p-6 md:rounded-[8px]">
        <div class="text-2xl font-semibold">{{ (data as any).title }}</div>
        <div class="mt-2 text-14px text-black text-opacity-45">{{ (data as any).create_time }}</div>
        <img :src="(data as any).cover" class="w-full max-h-[440px] mt-10" alt="">
        <ContentRenderer class="prose mt-4" :value="data" />
      </div>
      <div class="lg:block hidden flex-none">
        <NavBar />
      </div>
    </div>
  </ContentQuery>
</template>

<script setup lang="ts">
import NavBar from '~/components/NavBar.vue';
</script>
