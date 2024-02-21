<template>
    <div class=" hover:bg-gray-950 cursor-pointer relative flex border-b border-b-gray-800">
        <div class="min-w-[60px]">
            <img class="rounded-full m-2 mt-3" width="50" :src="props.profile.avatarURL">
        </div>
        <div class="p-2 w-full flex flex-col">
            <div class=" flex justify-between mt-0.5 mb-1.5">
                <div class="flex flex-col">
                    <div class=" text-white font-bold text-[15px]">{{ props.profile.name }}</div>
                    <span class=" text-gray-500 font-normal text-[15px]">@{{ props.profile.username }}</span>
                </div>
                <div class="hover:bg-gray-800 rounded-full cursor-pointer relative">
                    <div v-if="isFollowing">
                        <button @click="onFollowingClicked"
                            class=" justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring max-w-max border bg-transparent border-gray-600 text-white hover:bg-gray-900 flex items-center hover:shadow-lg font-bold py-2 px-4 rounded-full mr-0 ml-auto">
                            Following
                        </button>
                    </div>
                    <div v-else>
                        <button @click="onFollowClicked"
                            class=" justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring max-w-max border bg-transparent bg-white text-black hover:bg-slate-200 flex items-center hover:shadow-lg font-bold py-2 px-4 rounded-full mr-0 ml-auto">
                            Follow
                        </button>
                    </div>
                </div>
            </div>
            <div class=" font-normal text-white text-[15px] pb-1">{{ props.profile.bio }}</div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({ profile: Object });
const isFollowing = ref(false)

const onFollowingClicked = () => {
    console.log('Following')
    isFollowing.value = false
}

const onFollowClicked = () => {
    console.log('Follow')
    isFollowing.value = true
}

</script>