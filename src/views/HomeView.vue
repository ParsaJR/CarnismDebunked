<script setup>
import VueWriter from 'vue-writer'
const Sentences = [
  'سوالات متداول پیرامون گیاه خواری',
  'تقویت گفتمان سازنده'
]
</script>

<template>
  <div class="mx-auto max-w-screen-xl px-4 flex-1 flex items-center">
    <div class="mx-auto max-w-3xl text-center">
      <h1
        class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-7xl xs:text-5xl"
      >
        CarnismDebunked
      </h1>

      <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
        <!-- cursor blink animation didn't work, so I added it manually ... -->
        <VueWriter :array="Sentences" :typeSpeed="50" :eraseSpeed="50" :delay="1500" />
      </p>

      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <RouterLink
          class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto transition"
          to="general">
          شروع کنیم
        </RouterLink>

        <RouterLink
          class="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto transition"
          to="about">
          درباره ما
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<style>
.cursor {
  animation:
    typing 2.5s steps(20, end),
    blink-caret 0.75s step-end infinite;
  border-right: 1px solid white;
}

/* typing effect */
@keyframes typing {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

/* typewriter cursor effect */
@keyframes blink-caret {

  from,
  to {
    border-color: transparent;
  }

  50% {
    border-color: white;
    font-size: 80%;
  }
}
</style>
