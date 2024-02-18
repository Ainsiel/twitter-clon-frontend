<template>
    <div v-if="props.isSelected"
        class="flex items-center justify-center w-full h-[60px] text-white text-[17px] font-extrabold p-4 hover:bg-gray-500 hover:bg-opacity-30 cursor-pointer transition duration-200 ease-in-out">
        <div class="inline-block text-center border-b-4 border-b-[#1C9CEF] h-[60px]">
            <div class="my-auto mt-4"> {{ props.name }} </div>
        </div>
    </div>
    <div v-else
        class="w-full h-[60px] text-gray-500 text-[17px] font-extrabold p-4 hover:bg-gray-500 hover:bg-opacity-30 cursor-pointer transition duration-200 ease-in-out">
        <div class="text-center"> {{ props.name }} </div>
    </div>
</template>


<script setup>
const props = defineProps({
    name: String,
    isSelected: Boolean
})
</script>