<script setup lang="ts">
import { computed, ref, type Ref } from 'vue'
import FaqFooter from './FaqFooter.vue'
import FaqComponent from './faqComponent.vue';
import type { Markdown } from '@parsajr/mdcompiler'
const props = defineProps(['data']);

const searchQuery = ref('')

interface Frontmatter {
  claim: string
}

// let's type the frontmatter.
interface ExtendedMD extends Markdown {
  frontmatter: Frontmatter
}
const data: ExtendedMD[] = props.data
// Computed property to filter FAQs based on the search query
const filteredFaqs = computed(() => {
  return data.filter(markdown => markdown.frontmatter.claim.includes(searchQuery.value))
})
</script>

<template>
  <section class="pt-10 flex gap-y-8 flex-col p-2">
    <div class="relative">
      <label for="Search" class="sr-only"> جستجو کنید </label>
      <input type="text" id="Search" placeholder="جستجو" v-model="searchQuery"
        class="w-full rounded-md py-2.5 px-2.5 pe-10 shadow-sm border-gray-700 bg-gray-800 text-white sm:text-sm border" />

      <span class="absolute inset-y-0 end-0 grid w-10 place-content-center">
        <button type="button" class="text-gray-400 hover:text-gray-300">
          <span class="sr-only">جستجو</span>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="h-4 w-4">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </button>
      </span>
    </div>
    <div class="space-y-4" v-for="(faq, index) in filteredFaqs" :key="index">
      <FaqComponent :question=faq.frontmatter.claim :answer=faq.body></FaqComponent>
    </div>
  </section>
  <FaqFooter class="mt-20"></FaqFooter>
</template>

<style scoped></style>
