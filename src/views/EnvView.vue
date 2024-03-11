<script setup>
import ArgIntro from '@/components/ArgIntro.vue'
import FaqsComponent from '@/components/faqs-component.vue'
import envData from '@/data/argument/environment.json'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
const loaderSize = '75px'
</script>

<template>
  <section class="relative px-8 py-12 mx-auto md:px-12 lg:px-32 w-[80rem] lg:pb-24 lg:pt-12">
    <ArgIntro></ArgIntro>
    <Suspense>
      <FaqsComponent :data="envData"></FaqsComponent>
      <template #fallback>
        <ClipLoader class="h-full flex justify-center items-center" :size="loaderSize"></ClipLoader>
      </template>
    </Suspense>
  </section>
</template>
