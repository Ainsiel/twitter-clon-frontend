<template>
    <MainLayout>
        <HomeLayout @top-nav-clicked="getTweets">
            <div class="text-white">
                <div class="flex" v-for="tweet in tweets" :key="tweet.id">
                    <Tweet :tweet="tweet" @show-reply-modal="(b) => isReplyModalEnabled = b" />
                </div>
            </div>
        </HomeLayout>
    </MainLayout>
    <div v-if="isReplyModalEnabled">
        <ReplyModal @show-reply-modal="(b) => isReplyModalEnabled = b" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import MainLayout from '@/layouts/MainLayout.vue';
import HomeLayout from '@/layouts/HomeLayout.vue';
import Tweet from '@/components/common/TweetComponent.vue';
import ReplyModal from '@/components/common/ReplyModal.vue';
import { getForYouTweets, getFollowingTweets } from '@/utils/fetch.js'

const tweets = ref([])
const isReplyModalEnabled = ref(false)

const getTweets = async (type) => {
    if (type === 'For You') {
        const response = await getForYouTweets()
        tweets.value = response
    } else if (type === 'Following') {
        const response = await getFollowingTweets()
        tweets.value = response
    }
}

onMounted(() => {
    getTweets('For You')
})
</script>