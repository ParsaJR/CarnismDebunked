<script setup>
const props = defineProps(['question', 'answer']);
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
</script>
<template>
    <Disclosure v-slot="{ open }">
        <DisclosureButton class="bg-gray-600 p-4 rounded-lg gap-2 justify-between items-center flex w-full text-right"
            v-slot="{ open }">
            {{ props.question }}
            <svg :class="open ? 'rotate-180 transform' : ''" class=" w-5 h-5 min-h-5 min-w-5 transition"
                xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path fill="currentColor" fill-rule="evenodd"
                    d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06z"
                    clip-rule="evenodd" />
            </svg>
        </DisclosureButton>
        <transition v-show="open" class="overflow-hidden"
            enter-active-class="transition transition-[max-height] duration-400 ease-in"
            enter-from-class="transform max-h-0" enter-to-class="transform max-h-screen"
            leave-active-class="transition transition-[max-height] duration-400 ease-out"
            leave-from-class="transform max-h-screen" leave-to-class="transform max-h-0">
            <DisclosurePanel class="mt-4 px-4 leading-relaxed whitespace-pre-wrap" static>
                <div class="answer" v-html="props.answer"></div>
            </DisclosurePanel>
        </transition>
    </Disclosure>
</template>
<style scoped>
.answer :deep(a) {
    text-decoration: none;
    box-shadow:
        inset 0 -2px 0 #42b883,
        0 1px 0 #42b883;
    transition: box-shadow 0.3s;
    color: inherit;
    overflow: hidden;
    font-weight: bold;
}

.answer :deep(a:hover) {
    box-shadow:
        inset 0 -30px 0 #42b883,
        0 1px 0 #42b883;
}

ul {
    list-style: circle;
}
</style>