<template>
    <div v-if="isLiked">
        <div class="flex hover:bg-gray-800 rounded-full cursor-pointer relative">
            <button @click="onLikeClicked" type="button" class=" flex p-2">
                <HeartOutline fillColor="#e74c3c" :size="18" />
                <span class=" text-sm font-normal text-[#e74c3c] ml-1">{{ numLikes }}</span>
            </button>
        </div>
    </div>
    <div v-else>
        <div class="flex hover:bg-gray-800 rounded-full cursor-pointer relative">
            <button @click="onLikeClicked" type="button" class=" flex p-2">
                <HeartOutline fillColor="#5e5c5c" :size="18" />
                <span class=" text-sm font-normal text-[#5e5c5c] ml-1">{{ numLikes }}</span>
            </button>
        </div>
    </div>
</template>

<script setup>
import HeartOutline from 'vue-material-design-icons/HeartOutline.vue'
import { ref, onMounted } from 'vue';
import { postLike, deleteLike } from '@/utils/fetch.js'

const props = defineProps({
    liked: Boolean,
    likes: Number,
    tweetId: Number
})

const isLiked = ref(false)
const numLikes = ref(0)
let isUserLiked = false

const onLikeClicked = async () => {
    if (isUserLiked) {
        numLikes.value = isLiked.value ? props.likes - 1 : props.likes
    } else {
        numLikes.value = isLiked.value ? props.likes : props.likes + 1
    }

    if (isLiked.value) {
        const response = await deleteLike(props.tweetId)
        console.log("Delete like: ", response)
    } else {
        const response = await postLike(props.tweetId)
        console.log("Post like: ", response)
    }

    isLiked.value = !isLiked.value
    console.log("Like Clicked: ", isLiked.value)
}

onMounted(() => {
    isLiked.value = props.liked
    numLikes.value = props.likes
    isUserLiked = props.liked
})
</script>