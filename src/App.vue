<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, computed, onMounted } from 'vue'
var dropDown = ref(false)

const dropdownClass = computed(() => {
  return dropDown.value ? 'dropdownActive' : ''
})
const mobileDropdown = ref(false)

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
      <div class="grid grid-cols-2 gap-4 w-full">
        <div class="flex text-center flex-col justify-center items-start">
          <RouterLink class="cursor-pointer" to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-10 h-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <p>خانه</p>
          </RouterLink>
        </div>
        <div class="flex justify-end">
          <div>
            <button @click="openNav()" class="flex flex-col justify-center items-center">
              <svg viewBox="0 0 100 80" width="40" height="40" fill="#dedede">
                <rect width="100" height="10" rx="8"></rect>
                <rect y="30" width="100" height="10" rx="8"></rect>
                <rect y="60" width="100" height="10" rx="8"></rect>
              </svg>
              فهرست
            </button>
          </div>
        </div>
      </div>
      <!--grey overlay-->
      <div id="myNav" class="overlay">
        <a class="closebtn cursor-pointer" @click="closeNav()">&times;</a>
        <div class="overlay-content">
          <RouterLink to="/" class="text-3xl" @click="closeNav()">خانه</RouterLink>
          <a class="text-3xl cursor-pointer" @click="mobileDropdown = !mobileDropdown"
            >استدلال ها +</a
          >
          <ul class="bg-[#414141] p-6 list-none" :class="{ hidden: mobileDropdown == false }">
            <li class="text-2xl my-2">
              <RouterLink to="general" @click="closeNav()">عمومی / اخلاقی</RouterLink>
            </li>
            <li class="text-2xl my-2">
              <RouterLink to="health" @click="closeNav()">تغذیه</RouterLink>
            </li>
            <li class="text-2xl my-2">
              <RouterLink to="environment" @click="closeNav()">محیط زیست</RouterLink>
            </li>
          </ul>
          <RouterLink to="About" class="text-3xl" @click="closeNav()">درباره ما</RouterLink>
          <a href="#" class="text-3xl">تماس با ما</a>
        </div>
      </div>
    </header>
    <!-- Desktop Header -->
    <header class="w-full text-center p-6 hidden sm:block">
      <div class="header-items">
        <!-- bg-[#2e2e2e] -->
        <RouterLink to="/" class="link-underline-animate text-2xl">خانه</RouterLink>
        <div class="inline-block dropdown">
          <a
            class="mr-8 ml-8 hover:cursor-pointer select-none text-2xl"
            to="/"
            v-on:click="dropDown = !dropDown"
          >
            + استدلال ها</a
          >
          <div class="dropdown-content rounded-2xl" :class="dropdownClass">
            <RouterLink
              class="hover:text-primary text-xl"
              v-on:click="dropDown = !dropDown"
              to="general"
              >عمومی</RouterLink
            >
            <RouterLink
              class="hover:text-primary text-xl"
              v-on:click="dropDown = !dropDown"
              to="health"
              >تغذیه</RouterLink
            >
            <RouterLink
              class="hover:text-primary text-xl"
              v-on:click="dropDown = !dropDown"
              to="environment"
              >محیط زیست
            </RouterLink>
          </div>
        </div>
        <RouterLink to="About" class="link-underline-animate text-2xl">درباره ما</RouterLink>
      </div>
    </header>
    <main class="flex-grow flex">
      <RouterView />
    </main>
    <footer>
      <div class="container py-6 mx-auto">
        <div class="mt-16 border-gray-800">
          <div class="text-center flex justify-between">
            <div>
              <a href="https://github.com/ParsaJR">
                <img
                  src="/src/assets/img/github-mark-white.svg"
                  class="hover:invert transition"
                  width="30"
                  height="30"
                />
              </a>
            </div>
            <p dir="ltr" id="copyright-year">© {{ new Date().getFullYear() }}</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style></style>
