<template>
  <div class="max-w-[1200px] mx-auto p-6 flex gap-4">
    <div class="bg-white p-6 rounded-[8px] flex-1">
      <ContentList v-slot="{ list }" :query="{path}">
        <div v-for="item in list" :key="item._path" @click="item._path && router.push(item._path)" class="mb-[24px] flex flex-col md:flex-row gap-[16px] bg-white p-4 rounded-[4px] shadow-sm hover:shadow-md cursor-pointer">
          <img :src="item.cover || '/cover.jpeg'" class="w-full md:w-[248px] md:[h-160px] flex-none rounded-[4px]" alt="" srcset="">
          <div class="overflow-hidden">
            <div class="text-xl font-semibold">{{ item.title }}</div>
            <div class="mt-[8px]">{{ item.create_time }}</div>
            <div class="mt-[20px] truncate-2 md:truncate-3 leading-[24px]">{{ item.des }}</div>
          </div>
        </div>
     </ContentList>
    </div>
    <div  class="lg:block hidden self-start flex-none">
      <NavBar />
      <Category v-model:value="path" class="mt-4" />
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import Category from './components/Category.vue'
const router = useRouter()
const path = ref('')
</script>