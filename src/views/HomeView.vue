<script setup>

</script>

<template>
  <main>
    <div class="mx-auto max-w-screen-xl px-4 py-32 flex h-[calc(100vh-75px)] items-center">
      <div class="mx-auto max-w-3xl text-center">
        <h1
          class="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-5xl font-extrabold text-transparent sm:text-7xl">
          CarnismDebunked
        </h1>

        <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
          سلاخی انسانی استدلال ها علیه گیاه خواری
        </p>

        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <RouterLink to="/Get-Started" class="transition block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            >
            🔥 شروع کنیم
          </RouterLink>

          <a class="transition block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            href="/about">
            منظورت چیه؟
          </a>
        </div>
      </div>
    </div>
  </main>
</template>
