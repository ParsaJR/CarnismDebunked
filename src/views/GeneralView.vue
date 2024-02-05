<script setup >
import ArgIntro from '@/components/ArgIntro.vue';
import FaqsComponent from '@/components/faqs-component.vue';
import generalData from '@/data/argument/general.json'

</script>

<template>
    <section class="relative px-8 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl lg:pb-24 lg:pt-12">
        <ArgIntro></ArgIntro>
        <FaqsComponent :data="generalData"></FaqsComponent>
    </section>
</template>


