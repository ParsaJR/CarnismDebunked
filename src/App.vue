<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, computed, onMounted } from 'vue'
var dropDown = ref(false)

const dropdownClass = computed(() => {
  return dropDown.value ? 'dropdownActive' : ''
})

const handleClickOutside = (event) => {
  if (event.target.closest('.dropdown') === null) {
    dropDown.value = false
  }
}

// Add event listener when the component is mounted
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <header class="w-full text-center p-6 sticky z-10 sm:block">
      <div class="header-items">
        <!-- bg-[#2e2e2e] -->
        <RouterLink to="/" class="link-animate">خانه</RouterLink>
        <div class="inline-block dropdown">
          <a
            class="mr-8 ml-8 hover:cursor-pointer select-none"
            to="/"
            v-on:click="dropDown = !dropDown"
          >
            + استدلال ها</a
          >
          <div class="dropdown-content rounded-2xl" :class="dropdownClass">
            <RouterLink class="hover:text-primary" v-on:click="dropDown = !dropDown" to="general"
              >عمومی</RouterLink
            >
            <RouterLink class="hover:text-primary" v-on:click="dropDown = !dropDown" to="health"
              >تغذیه</RouterLink
            >
            <RouterLink
              class="hover:text-primary"
              v-on:click="dropDown = !dropDown"
              to="environment"
              >محیط زیست
            </RouterLink>
          </div>
        </div>
        <RouterLink to="About" class="link-animate">درباره ما</RouterLink>
      </div>
    </header>
    <main class="flex-grow flex">
      <RouterView />
    </main>
    <footer>
      <div class="mx-auto max-w-screen-xl px-4 pb-8 sm:px-6 lg:px-8">
        <div class="mt-16 border-gray-800">
          <div class="text-center flex justify-between">
            <p>
              ایده گرفته از :
              <a class="underline" href="https://www.carnismdebunked.com/">carnismdebunked</a>
            </p>
            <p dir="ltr">© 2024</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
body {
  background-color: #19191c;
}

Header a {
  font-size: 1.4rem;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #414141;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  opacity: 0;
}

.dropdown-content a {
  float: none;
  color: rgb(222, 222, 222);
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: right;
}

.dropdownActive {
  display: block;
  opacity: 1;
  animation: fadeIn 0.2s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
