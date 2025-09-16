<template>
  <section class="p-16" id="experience">
    <!-- Section Heading -->
    <header class="text-center">
      <h3
        class="text-4xl font-bold text-primary dark:text-white"
        data-aos="zoom-out-up"
      >
        Experience
      </h3>
    </header>

    <ul class="mt-10 space-y-8">
      <li
        class="w-full rounded-xl shadow-lg border bg-gradient-to-t 
               to-[#acac39] from-[#1f1e1c99]"
        v-for="(item, index) in experience"
        :key="index"
        data-aos="fade-up"         
        data-aos-delay="100"
      >
        <article
          class="flex flex-col lg:flex-row items-center lg:items-start
                 rounded-[12px] bg-primary mt-[3px] p-6 md:p-8 lg:p-10"
        >
          <!-- Icon -->
          <figure
            class="w-full lg:w-1/4 flex justify-center lg:justify-start mb-4 lg:mb-0"
            data-aos="fade-right"
          >
            <Icon
              icon="material-symbols-light:work"
              class="text-4xl md:text-6xl lg:text-7xl text-secondary"
            />
          </figure>

          <!-- Content -->
          <section
            class="w-full lg:w-3/4 lg:pl-4 text-center lg:text-left"
            data-aos="fade-left"
          >
            <header>
              <h3
                class="text-xl md:text-2xl font-semibold uppercase text-secondary"
              >
                {{ item.Title }}
              </h3>
            </header>
            <p class="text-sm md:text-base text-white">{{ item.Company }}</p>
            <p class="text-sm md:text-base text-white">{{ item.duration }}</p>
          </section>
        </article>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const experience = ref([
  {
    duration: '03/2008 - 03/2011',
    Title: 'Frontend Developer',
    Company: 'Computer Science Engineering',
  },
  {
    duration: '04/2011 - 03/2015',
    Title: 'Backend Developer',
    Company: 'Information Technology',
  },
])
</script>
