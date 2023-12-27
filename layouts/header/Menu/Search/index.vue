<template>
  <span @click="isShow = true" class=" cursor-pointer">Search</span>
  <div v-if="isShow" @click="isShow = false" class=" w-screen h-screen fixed bg-[rgba(0,0,0,0.4)] z-[9999] left-0 top-0">
    <div @click.stop class="h-[300px] w-[400px] p-6 rounded-[8px] bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <input v-model="keyword" placeholder="search..." class=" px-1 border-[2px] border-black w-full h-[32px] !rounded-[4px]" />

      <div class="h-[200px] w-full mt-6 overflow-y-auto">
        <ContentList v-if="keyword" v-slot="{ list }">
          <template v-for="item in list" :key="item._path" @click="item._path && router.push(item._path)">
            <div v-if="item.title.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())" class="font-semibold mb-4 cursor-pointer truncate" @click="$router.push(item._path)">
             {{ item.title }}
            </div>
          </template>
      </ContentList>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const isShow = ref(false)
const keyword = ref('')

</script>