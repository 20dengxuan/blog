<template>
  <article>
    <Header />
    <main class="overflow-hidden">
        <slot></slot> 
    </main>
  </article>
</template>

<script lang="ts" setup>
import Header from "./header/index.vue";
</script>
