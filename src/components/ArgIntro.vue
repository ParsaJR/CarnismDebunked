<script setup>
import { watchEffect, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
var FaqIntroName = ref("");
onMounted(() => {
  const route = useRoute(); //return route location
  watchEffect(() => {
    const meta = route.meta;
    console.log(meta.breadcrumb[0].name);
    FaqIntroName.value = meta.breadcrumb[0].name;
  });
});
</script>

<template>
  <article class="flex gap-y-8 flex-col p-2">
    <h1>{{ FaqIntroName }}</h1>
  </article>
</template>
