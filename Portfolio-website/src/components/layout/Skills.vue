<template>
    <section class="mt-32" id="skills" >
<SectionHeader title="My Skills"/>
<div class="mt-20 flex justify-center">
    <ul class="flex flex-wrap justify-center items-center">
    <li
    ref="skillsRefs"
     v-for="(element,index) in skills" :key="index"
    :class="'mx-[15px] rounded-[12px] mb-7 bg-gradient-to-t ${element.bgGradient}'">
    <div class="rouded-[12px] bg-primary mt-[3px] p-12 md:p-5 text-center
    ">
        <h3 class="font-bold text-[35px] text-white flex itmes-center
         justify-center">
        <Countup v-if="visibleItems[index]" :endVal="element.percentage" 
        :startVal="0" :duration="2"/>%
        </h3>
        <p class="font-normal text-[16px]" :style="{color:element.textColor}">
            {{ element.title }}
        </p>
    </div>

    </li>
    </ul>
</div>
    </section>
        

</template>
<script setup>
import { ref,onMounted } from 'vue';
import SectionHeader from '@/components/UI/SectionHeader.vue';

const skills=ref([
    {
        percentage:98,
        title:'Figma',
        bgGradient:"to-[#acac39] from-[#1f1e1c99]",
        textColor:'#FFE600'
    },
    {
        percentage:92,
        title:'Java',
        bgGradient:"to-[#59c337899] from-[#1f1e1c99]",
        textColor:'#59c3378'
    },
    {
        percentage:88,
        title:'Photoshop',
        bgGradient:"to-[#dd584f99] from-[#1f1e1c99]",
        textColor:'#dd584f'
    },
    {
        percentage:91,
        title:'Vue.js',
        bgGradient:"to-[#ff9a0099] from-[#1f1e1c99]",
        textColor:'#ff9a00'
    },
    {
        percentage:60,
        title:'SAP',
        bgGradient:"to-[#00a9ff99] from-[#1f1e1c99]",
        textColor:'#00a9ff'
    },
    {
        percentage:58,
        title:'Figma',
        bgGradient:"to-[#9e00ff99] from-[#1f1e1c99]",
        textColor:'#ad00ff'
    },
    {
        percentage:68,
        title:'Figma',
        bgGradient:"to-[#acac39] from-[#1f1e1c99]",
        textColor:'#ffe600'
    },
    {
        percentage:38,
        title:'Figma',
        bgGradient:"to-[#59c37899] from-[#1f1e1c99]",
        textColor:'#59c378'
    },
]);
//Track visibility of items
const visibleItems=ref(skills.value.map(()=>false));
const skillsRefs=ref([]);

//IntersectionObserver logic
onMounted(()=>{
    const observer=new IntersectionObserver(
        (entries)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    const index=skillsRefs.value.indexOf(entry.target);
                    if(index !==-1){
                        visibleItems.value[index]=true; //Mark item as visible
                    }
                }
            })
        },
        {threshold:0.3} //Trigger when 30% of element is visible
    );
    //Observe all skills elements
    skillsRefs.value.forEach((el)=>observer.observe(el));
})
</script>
