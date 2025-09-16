<template>
    <section id="projects" class="relative w-11/12 px-16 mx-auto">
        <SectionHeader title="My Projects"/>
        <!--Custom Navigation Buttons-->
       

    <!--Swiper Component -->
    <swiper
  :spaceBetween="30"
  :centeredSlides="true"
  :autoplay="{
    delay: 2500,
    disableOnInteraction: false,
  }"
  :pagination="{
    clickable: true,
  }"
  :navigation="true"
  :modules="modules"
  @autoplayTimeLeft="onAutoplayTimeLeft"
  class="max-w-full mt-32"
>
  <swiper-slide
    class="max-w-[300px]"
    v-for="(project,index) in projects"
    :key="index"
  >
    <ProjectCard 
      :title="project.title"
      :description="project.description"
      :image="project.image"
      :tags="project.tags"
      :liveLink="project.liveLink"
      :codeLink="project.codeLink"
    />
  </swiper-slide>
</swiper>

    </section>
</template>
<script setup>
import SectionHeader from '../UI/SectionHeader.vue';
import ProjectCard from '../UI/ProjectCard.vue';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import {ref} from 'vue';

//Define navigation options
const navigationOptions={
    prevEl:'.swiper-prev',
    nextEl:'.swiper-next'
};
const projects=ref([
    {
        title:'Portfolio Website',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sint quos, cumque ipsa, illo blanditiis mollitia dolorum numquam incidunt temporibus sed deserunt eaque nemo accusantium sequi provident maiores. Quis, nesciunt?',
        image: new URL('../assets/images/profile.jpg', import.meta.url).href,
        tags:['HTML','CSS','Javascript'],
        liveLink:'/',
        codeLink:"/"
    },
    {
        title:'Portfolio Website',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sint quos, cumque ipsa, illo blanditiis mollitia dolorum numquam incidunt temporibus sed deserunt eaque nemo accusantium sequi provident maiores. Quis, nesciunt?',
        image: new URL('../assets/images/profile.jpg', import.meta.url).href,
        tags:['HTML','CSS','Javascript'],
        liveLink:'/',
        codeLink:"/"
    },
    {
        title:'Portfolio Website',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sint quos, cumque ipsa, illo blanditiis mollitia dolorum numquam incidunt temporibus sed deserunt eaque nemo accusantium sequi provident maiores. Quis, nesciunt?',
        image: new URL('../assets/images/profile.jpg', import.meta.url).href,
        tags:['HTML','CSS','Javascript'],
        liveLink:'/',
        codeLink:"/"
    },
])
const modules = [Autoplay, Pagination, Navigation, EffectCoverflow];

const onAutoplayTimeLeft = () => {};
</script>

<style>
.swiper-button-prev,
.swiper-button-next{
    cursor:pointer;
}
.swiper-slide{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>