<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
var dropDown = ref(false);



</script>

<template>
  <header class="overflow-hidden w-full text-center p-6 h-[75px]">
    <div> 
      <!-- bg-[#2e2e2e] -->
      <RouterLink to="/" class="link-animate">خانه</RouterLink>
      <div class="inline-block dropdown">
        <a class="mr-8 ml-8 hover:cursor-pointer select-none" to="/" v-on:click="dropDown = !dropDown"> + استدلال ها</a>
        <div class="dropdown-content rounded-2xl" :class="{ dropdownActive: dropDown == true }" >
          <RouterLink class="hover:text-primary" v-on:click="dropDown = !dropDown" to="general">عمومی</RouterLink>
          <RouterLink class="hover:text-primary" v-on:click="dropDown = !dropDown" to="health">تغذیه</RouterLink>
          <RouterLink class="hover:text-primary" v-on:click="dropDown = !dropDown" to="environment">محیط زیست</RouterLink>
        </div>
      </div>
      <RouterLink to="About" class="link-animate">درباره ما</RouterLink>
    </div>
  </header>
  <main class="h-[calc(100vh-75px)] overflow-y-auto">
    <RouterView />
  </main>
  


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
  transition: opacity 0.3s ease;
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
  animation: fadeIn 0.3s ease;
}

.router-link-exact-active::after {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 3px;
  bottom: 0;
  left: 0;
  background-color: #42b883;
  transform: scaleX(1);
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
