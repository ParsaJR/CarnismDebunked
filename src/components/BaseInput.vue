<script setup>
const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  modelValue: {
    type: [String, Number],
    default: ''
  }
})
</script>

<template>
  <label class="block text-xs font-medium text-gray-700 dark:text-gray-200">{{
    props.label
  }}</label>

  <input
    :placeholder="props.label"
    class="mt-1 w-[30%] rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
    :value="props.modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
