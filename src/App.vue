<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, computed, onMounted } from 'vue'
var dropDown = ref(false)

const dropdownClass = computed(() => {
  return dropDown.value ? 'dropdownActive' : ''
})

// close dropdown if user clicked outside of dropdown
const handleClickOutside = (event) => {
  if (event.target.closest('.dropdown') === null) {
    dropDown.value = false
  }
}
function openNav() {
  document.getElementById('myNav').style.height = '100%'
}

function closeNav() {
  document.getElementById('myNav').style.height = '0%'
}

// Add event listener when the component is mounted
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- Mobile Header -->
    <header class="sm:hidden flex p-7">
      <button @click="openNav()" class="flex flex-col justify-center items-center">
        <svg viewBox="0 0 100 80" width="40" height="40" fill="#dedede">
          <rect width="100" height="20" rx="8"></rect>
          <rect y="30" width="100" height="20" rx="8"></rect>
          <rect y="60" width="100" height="20" rx="8"></rect>
        </svg>
        فهرست
      </button>
      <!--grey overlay-->
      <div id="myNav" class="overlay">
        <a class="closebtn cursor-pointer" @click="closeNav()">&times;</a>
        <div class="overlay-content">
          <a href="#">لینک اول</a>
          <a href="#">لینک دوم</a>
          <a href="#">لینک سوم</a>
          <a href="#">لینک چهارم</a>
        </div>
      </div>
    </header>
    <!-- Desktop Header -->
    <header class="w-full text-center p-6 hidden sm:block">
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
            <p dir="ltr" id="copyright-year">© {{ new Date().getFullYear() }}</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>

</style>
