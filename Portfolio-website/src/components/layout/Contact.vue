<template>
    <section class="mt-32 id=contact">
<SectionHeader title="Contact Me"/>
<div data-aos="zoom-out-up" class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
    <form class-space-y-8>
        <div v-for="(item,index) in input" :key="index">
            <Input :id="item.id"  
            :label="item.label" 
            :type="item.type"
            :placeholder="placeholder"
            :rows="rows" />
        </div>
        <br/>
        <div class="flex justify-between">
            <Button label="Send"/>
            <div class="met-2 flex justify-center space-x-3 md:space-x-8">
                <a href="" class="text-gray-600 hover:text-blue-500">
                    <Icon icon="fa-brands:twitter" style="font-size:2rem"/>
                </a>
                 <a href="https://www.linkedin.com/in/debasis-bada" class="text-gray-600 hover:text-blue-700">
                    <Icon icon="fa-brands:linkedin" style="font-size:2rem"/>
                </a>
                 <a href="https://github.com/Debasis34" class="text-gray-600 hover:text-white">
                    <Icon icon="fa-brands:github" style="font-size:2rem"/>
                </a>
                 <a href="" class="text-gray-600 hover:text-pink-500">
                    <Icon icon="fa-brands:instagram" style="font-size:2rem"/>
                </a>
            </div>

        </div>
    </form>
</div>
    </section>
    <div>
        
    </div>
</template>
<script setup>
import SectionHeader from '../UI/SectionHeader.vue';
import Input from '../UI/Input.vue';
import Button from '../UI/Button.vue';
import {ref} from "vue";

const input=ref([
    {id:'emial', label:'Your Email', type:'email', placeholder:'email@example.com'}, 

{id:'subject', label:'Subject', type:'text', placeholder:'let us knwo how we can help you'},
{id:'message', label:'Message', type:'textarea', placeholder:'leave a message'},


]) 


</script>