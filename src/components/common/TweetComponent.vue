<template>
    <div class=" hover:bg-gray-950 cursor-pointer relative flex border-b border-b-gray-800 w-full">
        <div class="min-w-[60px]">
            <img class="rounded-full m-2 mt-3" width="50" :src="props.tweet.profileAvatar">
        </div>
        <div class="p-2 w-full">
            <div class="font-extrabold flex items-center justify-between mt-0.5 mb-1.5">
                <div class="flex items-center">
                    <div class=" text-white font-bold text-[15px]"><a :href="'/profile/'.concat(props.tweet.profileUsername)" class="no-underline hover:underline">{{ props.tweet.profileName }}</a></div>
                    <span class=" text-gray-500 font-normal text-[15px] pl-2">@{{ props.tweet.profileUsername }}</span>
                    <span class=" text-gray-500 font-normal text-[15px] pl-2"> · {{ props.tweet.tweetedAt }}</span>
                </div>
                <div class="hover:bg-gray-800 rounded-full cursor-pointer relative">
                    <button type="button" class="block p-2">
                        <DotsHorizontal fillColor="#5e5c5c" :size="18" />
                    </button>
                </div>
            </div>
            <div @click="goToTweetPage" class=" pb-1">{{ props.tweet.content }}</div>
            <div class="flex items-center justify-between w-4/5">
                <div class="flex hover:bg-gray-800 rounded-full cursor-pointer relative m-1">
                    <div @click="$emit('showReplyModal',true)" class=" flex p-2">
                        <MessageOutline fillColor="#5e5c5c" :size="18" />
                        <span class=" text-sm font-normal text-[#5e5c5c] ml-1">{{ props.tweet.replies }}</span>
                    </div>
                </div>
                <RetweetButton :retweeted="props.tweet.isRetweeted" :retweets="props.tweet.retweets" :tweetId="props.tweet.id" />
                <LikeButton :liked="props.tweet.isLiked" :likes="props.tweet.likes" :tweetId="props.tweet.id" />
                <div class="flex hover:bg-gray-800 rounded-full cursor-pointer relative">
                    <div class=" flex p-2">
                        <ChartBar fillColor="#5e5c5c" :size="18" />
                        <span class=" text-sm font-normal text-[#5e5c5c] ml-1">{{ props.tweet.analytics }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ChartBar from 'vue-material-design-icons/ChartBar.vue'
import MessageOutline from 'vue-material-design-icons/MessageOutline.vue'
import DotsHorizontal from 'vue-material-design-icons/DotsHorizontal.vue'
import RetweetButton from '@/components/common/RetweetButton.vue';
import LikeButton from '@/components/common/LikeButton.vue';
import router from "@/router/index.js";

const props = defineProps({ tweet: Object });

const goToTweetPage = () => {
    console.log('Tweet Page: ', props.tweet.id)
    const url = '/tweet/'.concat(String(props.tweet.id))
    router.push(url)
}

</script>