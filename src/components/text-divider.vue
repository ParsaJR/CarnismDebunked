<script setup>
const props = defineProps({
  text: {
    type: String,
    default: 'lorem'
  }
})
</script>
<template>
  <span class="relative flex justify-center">
    <div
      class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
    ></div>

    <span class="relative z-10 bg-body px-6">{{ props.text }}</span>
  </span>
</template>
