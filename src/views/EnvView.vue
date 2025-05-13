<script setup>
import ArgIntro from '@/components/ArgIntro.vue'
import FaqsComponent from '@/components/faqs-component.vue'
import data from '../data/environment.json'
</script>

<template>
  <section class="relative px-8 py-12 mx-auto md:px-12 lg:px-32 w-[80rem] lg:pb-24 lg:pt-12">
    <ArgIntro></ArgIntro>
    <FaqsComponent :data=data></FaqsComponent>
  </section>
</template>
