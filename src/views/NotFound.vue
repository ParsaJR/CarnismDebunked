<template>
    <div class="flex justify-center items-center mx-auto flex-col gap-5 text-center">
        <h1 class="p-4 font-bold"><span>404:</span> صفحه مورد نظر پیدا نشد</h1>
        <router-link to="/"
            class="group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
            href="#">
            <span class="absolute -end-full transition-all group-hover:end-4">
                <svg class="size-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3">
                    </path>
                </svg>
            </span>
            <span class="text-sm font-medium transition-all group-hover:me-4">بازگشت به خانه</span>
        </router-link>
    </div>
</template>