<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, computed, onMounted } from 'vue'
var dropDown = ref(false);

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
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
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
        <a class="closebtn" @click="closeNav()">&times;</a>
        <div class="overlay-content">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </header>
    <!-- Desktop Header -->
    <header class="w-full text-center p-6 hidden sm:block">
      <div class="header-items">
        <!-- bg-[#2e2e2e] -->
        <RouterLink to="/" class="link-animate">خانه</RouterLink>
        <div class="inline-block dropdown">
          <a class="mr-8 ml-8 hover:cursor-pointer select-none" to="/" v-on:click="dropDown = !dropDown">
            + استدلال ها</a>
          <div class="dropdown-content rounded-2xl" :class="dropdownClass">
            <RouterLink class="hover:text-primary" v-on:click="dropDown = !dropDown" to="general">عمومی</RouterLink>
            <RouterLink class="hover:text-primary" v-on:click="dropDown = !dropDown" to="health">تغذیه</RouterLink>
            <RouterLink class="hover:text-primary" v-on:click="dropDown = !dropDown" to="environment">محیط زیست
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
.overlay {
  height: 0%;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0, 0.9);
  overflow-y: hidden;
  transition: 0.5s;
}

.overlay-content {
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.overlay a:hover, .overlay a:focus {
  color: #f1f1f1;
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}

@media screen and (max-height: 450px) {
  .overlay {overflow-y: auto;}
  .overlay a {font-size: 20px}
  .overlay .closebtn {
  font-size: 40px;
  top: 15px;
  right: 35px;
  }
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
