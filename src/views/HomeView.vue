<script setup>
import VueWriter from 'vue-writer'
const Sentences = [
  'سلاخیِ انسانی استدلال ها علیه گیاه خواری',
  'تقویت گفتمان سازنده',
  'سوالات متداول درباره گیاه خواری'
]
</script>

<template>
  <div class="mx-auto max-w-screen-xl px-4 flex-1 flex items-center">
    <div class="mx-auto max-w-3xl text-center">
      <h1
        class="animate-gradient bg-300% bg-gradient-to-r from-orange-500 via-blue-500 to-green-400 bg-clip-text text-4xl font-extrabold text-transparent sm:text-7xl xs:text-5xl"
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
.animate-gradient {
  background-size: 300%;
  -webkit-animation: animatedgradient 6s ease infinite alternate;
  -moz-animation: animatedgradient 6s ease infinite alternate;
  animation: animatedgradient 6s ease infinite alternate;
}

@keyframes animatedgradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
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
