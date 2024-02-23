<template>
    <div class=" flex flex-col hover:bg-gray-950 cursor-pointer relative border-b border-b-gray-800 w-full">
        <div class=" flex justify-between">
            <div class=" flex">
                <div class="min-w-[60px]">
                    <img class="rounded-full m-2 mt-3" width="50" :src="props.tweet.profileAvatar">
                </div>
                <div class=" flex flex-col pl-2 mt-0.5 mb-1.5">
                    <div class=" text-white font-bold text-lg"><a :href="'/profile/'.concat(props.tweet.profileUsername)" class="no-underline hover:underline">{{ props.tweet.profileName }}</a></div>
                    <span class=" text-gray-500 font-normal text-base">@{{ props.tweet.profileUsername }}</span>
                </div>
            </div>
            <div class="">
                <button type="button" class="block hover:bg-gray-800 rounded-full cursor-pointer relative p-2">
                    <DotsHorizontal fillColor="#5e5c5c" :size="22" />
                </button>
            </div>
        </div>
        <div class=" px-4 py-2 text-white text-lg">{{ props.tweet.content }}</div>
        <div class=" flex px-4 text-[#5e5c5c] font-normal">
            <div>
                03:08 PM ·
            </div>
            <div class=" pl-1">
                Dec 13, 2023 ·
            </div>
            <div class=" pl-1">
                4.3M Views
            </div>
        </div>
        <div class=" flex items-center justify-around w-full mt-2">
            <div class="flex hover:bg-gray-800 rounded-full cursor-pointer relative m-1">
                <div class=" flex p-2">
                    <MessageOutline fillColor="#5e5c5c" :size="22" />
                    <span class=" text-base font-normal text-[#5e5c5c] ml-1">{{ props.tweet.replies }}</span>
                </div>
            </div>
            <div v-if="isRetweted">
                <div class="flex hover:bg-gray-800 rounded-full cursor-pointer relative">
                    <button @click="onRetweetClicked" type="button" class=" flex p-2">
                        <Sync fillColor="#2ecc71" :size="22" />
                        <span class=" text-base font-normal text-[#2ecc71] ml-1">{{ numRetweets }}</span>
                    </button>
                </div>
            </div>
            <div v-else>
                <div class="flex hover:bg-gray-800 rounded-full cursor-pointer relative">
                    <button @click="onRetweetClicked" type="button" class=" flex p-2">
                        <Sync fillColor="#5e5c5c" :size="22" />
                        <span class=" text-base font-normal text-[#5e5c5c] ml-1">{{ numRetweets }}</span>
                    </button>
                </div>
            </div>
            <div v-if="isLiked">
                <div class="flex hover:bg-gray-800 rounded-full cursor-pointer relative">
                    <button @click="onLikeClicked" type="button" class=" flex p-2">
                        <HeartOutline fillColor="#e74c3c" :size="22" />
                        <span class=" text-base font-normal text-[#e74c3c] ml-1">{{ numLikes }}</span>
                    </button>
                </div>
            </div>
            <div v-else>
                <div class="flex hover:bg-gray-800 rounded-full cursor-pointer relative">
                    <button @click="onLikeClicked" type="button" class=" flex p-2">
                        <HeartOutline fillColor="#5e5c5c" :size="22" />
                        <span class=" text-base font-normal text-[#5e5c5c] ml-1">{{ numLikes }}</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import MessageOutline from 'vue-material-design-icons/MessageOutline.vue'
import DotsHorizontal from 'vue-material-design-icons/DotsHorizontal.vue'
import Sync from 'vue-material-design-icons/Sync.vue'
import HeartOutline from 'vue-material-design-icons/HeartOutline.vue'
import { ref, onMounted } from 'vue';

const props = defineProps({ tweet: Object });

const isRetweted = ref(false)
const numRetweets = ref(0)
let isUserRetweeted = false

const isLiked = ref(false)
const numLikes = ref(0)
let isUserLiked = false

const onRetweetClicked = () => {
    if (isUserRetweeted) {
        numRetweets.value = isRetweted.value ? props.tweet.retweets - 1 : props.tweet.retweets
    } else {
        numRetweets.value = isRetweted.value ? props.tweet.retweets : props.tweet.retweets + 1
    }

    isRetweted.value = !isRetweted.value
    console.log("Retweet Clicked: ", isRetweted.value, numRetweets.value)
}

const onLikeClicked = () => {
    if (isUserLiked) {
        numLikes.value = isLiked.value ? props.tweet.likes - 1 : props.tweet.likes
    } else {
        numLikes.value = isLiked.value ? props.tweet.likes : props.tweet.likes + 1
    }

    isLiked.value = !isLiked.value
    console.log("Like Clicked: ", isLiked.value)
}

onMounted(() => {
    isRetweted.value = props.tweet.isRetweeted
    numRetweets.value = props.tweet.retweets
    isUserRetweeted = props.tweet.isRetweeted

    isLiked.value = props.tweet.isLiked
    numLikes.value = props.tweet.likes
    isUserLiked = props.tweet.isLiked
})

</script>