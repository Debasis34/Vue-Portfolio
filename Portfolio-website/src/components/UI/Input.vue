<template>
    <div class="relative z-10">
        <lablel
        :for="id"
        class="block mb-2 text-sm font-medium text-grey-900 dark:text-gray-300">
    {{ label }}
    </lablel>
        <component :is="type==='textarea'?'textarea':'input'"
        :id="id"
        :rows="type==='textarea'? rows:undefined "
        :placeholder="placeholder"
        class="shadow-sm text-gray-900 text-sm rounded-lg block w-full p-2.5
        focus:ring-primary-500 focus:border-primary-500 border border-secondary
        dark:bg-[#fffffff29] bg-primary"
        ></component>
    </div>
</template>
<script setup>
defineProps({
    id:{type:String,required:true},
    label:{type:String,required:true},
    type:{type:String,default:'text'},
    placeholder:{type:String,default:''},
    rows:{type:String,default:4},
})
</script>
