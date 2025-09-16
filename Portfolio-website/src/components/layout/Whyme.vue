<template>
    <section id="whyme" class="mt-32">
        <SectionHeader title="Why Me?"/>
        <div class="grid grid-cols-1 lg:grid=cols-2 p-12 overflow-hidden"></div>
        <Education data-aos="fade-left"/>
        <Experience data-aos="fade-right"/>
 </section>
</template>
<script setup>
import SectionHeader from '../UI/SectionHeader.vue';
import Education from './Education.vue';
import Experience from './Experience.vue';
</script>
