<script setup>
import seperator from './separator-component.vue'
defineOptions({
  inheritAttrs: false
})
</script>
<template>
  <div v-bind="$attrs">
    <seperator></seperator>
    <p class="text-center pt-10 text-lg">
      سوالی دارید؟
      <a href="mailto:hi@carnismdebunked.ir" class="underline transition hover:text-primary">برای ما ارسال کنید</a>
    </p>
  </div>
</template>
