<template>
  <section class="p-16" id="education">
    <!-- Section Heading -->
    <header class="text-center mb-10">
      <h3
        class="text-4xl font-bold text-primary dark:text-white"
        data-aos="zoom-out-up"
      >
        Education
      </h3>
    </header>

    <ul class="space-y-8">
      <li
        v-for="(item, index) in education"
        :key="index"
        class="w-full rounded-xl shadow-lg border bg-gradient-to-t 
               to-[#acac39] from-[#1f1e1c99]"
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
              icon="hugeicons:university"
              class="text-4xl md:text-6xl lg:text-7xl text-secondary"
            />
          </figure>

          <!-- Content -->
          <section
            class="w-full lg:w-3/4 lg:pl-4 text-center lg:text-left"
            data-aos="fade-left"      
          >
            <header>
              <h4
                class="text-xl md:text-2xl font-semibold uppercase text-secondary"
              >
                {{ item.school }}
              </h4>
            </header>
            <p class="text-sm md:text-base text-white">{{ item.degree }}</p>
            <p class="text-sm md:text-base text-white">{{ item.duration }}</p>
          </section>
        </article>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const education = ref([
  {
    duration: '03/2008 - 03/2011',
    school: 'School 1',
    degree: 'Computer Science Engineering',
  },
  {
    duration: '04/2011 - 03/2015',
    school: 'School 2',
    degree: 'Information Technology',
  },
])
</script>
