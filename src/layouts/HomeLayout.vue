<template>
    <div>
        <div class=" bg-black bg-opacity-50 backdrop-blur-md z-10 absolute w-full">
            <div class=" border-gray-800 border-b w-full">
                <div class=" w-full text-white text-[22px] font-extrabold p-4">
                    Home
                </div>
                <div class=" flex">
                    <ForYouClickable />
                    <FollowingClickable />
                </div>
            </div>
        </div>
        <div class=" absolute top-0 z-0 h-full w-full overflow-auto scrollbar-hide">
            <div class=" mt-[126px]"></div>
            <slot />
            <div class=" pb-4"></div>
        </div>
    </div>
</template>

<script setup>
import FollowingClickable from '@/components/home/FollowingClickable.vue'
import ForYouClickable from '@/components/home/ForYouClickable.vue'
</script>