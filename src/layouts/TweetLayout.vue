<template>
    <div>
        <div class=" bg-black bg-opacity-50 backdrop-blur-md z-10 absolute w-full">
            <div class=" border-gray-800 border-b w-full flex align-middle">
                <div class=" mt-1 ml-1">
                    <ArrowLeft @click="router.push('/home')" fillColor="#FFFFFF" :size="28"
                        class=" hover:bg-gray-800 inline-block p-2 my-2 rounded-full cursor-pointer" />
                </div>
                <div class=" text-white text-[22px] font-bold p-4">
                    Post
                </div>
            </div>
        </div>
        <div class=" absolute top-0 z-0 h-full w-full overflow-auto scrollbar-hide">
            <div class=" mt-16"></div>
            <slot />
            <div class=""></div>
        </div>
    </div>
</template>

<script setup>
import router from "@/router/index.js";
import ArrowLeft from 'vue-material-design-icons/ArrowLeft.vue';
</script>