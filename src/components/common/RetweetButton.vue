<template>
    <div v-if="isRetweted">
        <div class="flex hover:bg-gray-800 rounded-full cursor-pointer relative">
            <button @click="onRetweetClicked" type="button" class=" flex p-2">
                <Sync fillColor="#2ecc71" :size="18" />
                <span class=" text-sm font-normal text-[#2ecc71] ml-1">{{ numRetweets }}</span>
            </button>
        </div>
    </div>
    <div v-else>
        <div class="flex hover:bg-gray-800 rounded-full cursor-pointer relative">
            <button @click="onRetweetClicked" type="button" class=" flex p-2">
                <Sync fillColor="#5e5c5c" :size="18" />
                <span class=" text-sm font-normal text-[#5e5c5c] ml-1">{{ numRetweets }}</span>
            </button>
        </div>
    </div>
</template>

<script setup>
import Sync from 'vue-material-design-icons/Sync.vue'
import { ref, onMounted } from 'vue';
import { postRetweet, deleteRetweet } from '@/utils/fetch.js'

const props = defineProps({
    retweeted: Boolean,
    retweets: Number,
    tweetId: Number
})

const isRetweted = ref(false)
const numRetweets = ref(0)
let isUserRetweeted = false

const onRetweetClicked = async () => {
    if (isUserRetweeted) {
        numRetweets.value = isRetweted.value ? props.retweets - 1 : props.retweets
    } else {
        numRetweets.value = isRetweted.value ? props.retweets : props.retweets + 1
    }
    
    if (isRetweted.value) {
        const response = await deleteRetweet(props.tweetId)
        console.log("Delete retweet: ", response)
    } else {
        const response = await postRetweet(props.tweetId)
        console.log("Post retweet: ", response)
    }

    isRetweted.value = !isRetweted.value
    console.log("Retweet Clicked: ", isRetweted.value, numRetweets.value)
}

onMounted(() => {
    isRetweted.value = props.retweeted
    numRetweets.value = props.retweets
    isUserRetweeted = props.retweeted
})
</script>