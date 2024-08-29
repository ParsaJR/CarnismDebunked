<script setup>
import { computed, ref } from 'vue'
import { marked } from 'marked'
import matter from "front-matter";
import FaqFooter from './FaqFooter.vue'

const FaqsCategory = defineProps(['data']);
// const baseUrl = `/answers/${FaqsCategory.data}`;
const faqs = ref([]);

const searchQuery = ref('')
// Computed property to filter FAQs based on the search query
const filteredFaqs = computed(() => {
  const query = searchQuery.value.toLowerCase().trim()

  if (!query) {
    return faqs.value
  }

  return faqs.value.filter((faq) => faq.attributes.question?.toLowerCase().includes(query));
})

async function fetchMarkdowns() {
  const Urls = await fetch(`/answers/${FaqsCategory.data}/fileList.json`);
  const result = await Urls.json();
  for (let index = 0; index < result.length; index++) {
    const faqReq = await fetch(result[index].path);
    const faqRes = await faqReq.text();
    faqs.value.push(faqRes);
  }
}

async function ParseMarkdowns() {
  for (let index = 0; index < faqs.value.length; index++) {
    faqs.value[index] = matter(faqs.value[index])
    faqs.value[index].body = marked(faqs.value[index].body);
  }
  console.log(faqs.value);
  
}

await fetchMarkdowns();
await ParseMarkdowns();
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
    <div class="space-y-4" v-for="faq in filteredFaqs" :key="faq.id">
      <details class="group [&_summary::-webkit-details-marker]:hidden">
        <summary class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-600 p-4">
          <h4 class="font-medium select-none">{{ faq.attributes.question }}</h4>

          <svg class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <p class="mt-4 px-4 leading-relaxed whitespace-pre-wrap" v-if="faq.body" v-html="faq.body">
        </p>
      </details>
    </div>
  </section>
  <FaqFooter class="mt-20"></FaqFooter>
</template>

<style scoped>
p :deep(a) {
  text-decoration: none;
  box-shadow:
    inset 0 -2px 0 #42b883,
    0 1px 0 #42b883;
  transition: box-shadow 0.3s;
  color: inherit;
  overflow: hidden;
  font-weight: bold;
}

p :deep(a:hover) {
  box-shadow:
    inset 0 -30px 0 #42b883,
    0 1px 0 #42b883;
}

ul {
  list-style: circle;
}
</style>
