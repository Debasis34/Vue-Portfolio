<template>
  <div class="relative overflow-hidden bg-[#D4EBF8] dark:bg-[#080326] min-h-screen">
    <Navbar/>
    <HeroSection/>
    <Counter/>
    <Services/>
    <Skills/>
  </div>
</template>
<script setup>
import { defineAsyncComponent } from 'vue';
const Navbar=defineAsyncComponent(()=>import('@/components/layout/Navbar.vue'));
const HeroSection=defineAsyncComponent(()=>import('@/components/layout/HeroSection.vue'));
const Counter=defineAsyncComponent(()=>import('@/components/layout/Counter.vue'));
const Services=defineAsyncComponent(()=>import('@/components/layout/Services.vue'));
const Skills=defineAsyncComponent(()=>import('@/components/layout/Skills.vue'));
</script>