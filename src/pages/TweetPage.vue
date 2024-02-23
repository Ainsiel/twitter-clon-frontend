<template>
    <MainLayout>
        <TweetLayout>
            <div class=" flex flex-col text-white">
                <div>
                    <div class="flex" v-for="parent in parents" :key="parent.id">
                        <Tweet :tweet="parent" @show-reply-modal="(b) => isReplyModalEnabled = b" />
                    </div>
                </div>
                <div>
                    <div class="flex" v-for="tweet in tweets" :key="tweet.id">
                        <TweetDetails :tweet="tweet" @show-reply-modal="(b) => isReplyModalEnabled = b" />
                    </div>
                </div>
                <div>
                    <div class="flex" v-for="reply in replies" :key="reply.id">
                        <Tweet :tweet="reply" @show-reply-modal="(b) => isReplyModalEnabled = b" />
                    </div>
                </div>
            </div>
        </TweetLayout>
    </MainLayout>
    <div v-if="isReplyModalEnabled">
        <ReplyModal @show-reply-modal="(b) => isReplyModalEnabled = b" />
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue';
import TweetLayout from '@/layouts/TweetLayout.vue';
import Tweet from '@/components/common/TweetComponent.vue';
import TweetDetails from '@/components/tweet/TweetDetails.vue';
import ReplyModal from '@/components/common/ReplyModal.vue';

const route = useRoute();
const isReplyModalEnabled = ref(false)
const parents = ref({})
const tweets = ref({})
const replies = ref([])

const fetchTweet = () => {
    console.log('Fetch Tweet: ', parseInt(route.params.id))
}

const getParent = () => {
    console.log('Get Parent')
    parents.value = testParent
}
const getTweet = () => {
    console.log('Get tweet')
    tweets.value = testTweet
}
const getReplies = () => {
    console.log('Get Replies')
    replies.value = testData
}

const testParent = [{
    id: 8,
    profileAvatar: `https://picsum.photos/300`,
    profileName: 'Cristobal Pavez',
    profileUsername: 'MahiruDev',
    createdAt: new Date().toLocaleDateString(),
    content: 'Parent 8 Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
    isRetweeted: true,
    isLiked: true,
    replies: 288,
    retweets: 1498,
    likes: 9768,
    analytics: 98234
}]

const testTweet = [{
    id: 9,
    profileAvatar: `https://picsum.photos/300`,
    profileName: 'Cristobal Pavez',
    profileUsername: 'MahiruDev',
    createdAt: new Date().toLocaleDateString(),
    content: 'Tweet 9 Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
    isRetweeted: true,
    isLiked: true,
    replies: 289,
    retweets: 1499,
    likes: 9769,
    analytics: 98234
}]

const testData = [
    {
        id: 1,
        profileAvatar: `https://picsum.photos/300`,
        profileName: 'Cristobal Pavez',
        profileUsername: 'MahiruDev',
        createdAt: new Date().toLocaleDateString(),
        content: 'Replies 1 Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
        isRetweeted: true,
        isLiked: true,
        replies: 28,
        retweets: 149,
        likes: 976,
        analytics: 98234
    },
    {
        id: 2,
        profileAvatar: `https://picsum.photos/300`,
        profileName: 'Cristobal Pavez',
        profileUsername: 'MahiruDev',
        createdAt: new Date().toLocaleDateString(),
        content: 'Tweet 2 Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
        isRetweeted: false,
        isLiked: false,
        replies: 78,
        retweets: 123,
        likes: 456,
        analytics: 123001
    },
    {
        id: 3,
        profileAvatar: `https://picsum.photos/300`,
        profileName: 'Cristobal Pavez',
        profileUsername: 'MahiruDev',
        createdAt: new Date().toLocaleDateString(),
        content: 'Tweet 3 Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
        isRetweeted: false,
        isLiked: false,
        replies: 123,
        retweets: 456,
        likes: 789,
        analytics: 1230011
    },
    {
        id: 4,
        profileAvatar: `https://picsum.photos/300`,
        profileName: 'Cristobal Pavez',
        profileUsername: 'MahiruDev',
        createdAt: new Date().toLocaleDateString(),
        content: 'Tweet 4 Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
        isRetweeted: false,
        isLiked: false,
        replies: 7823,
        retweets: 12322,
        likes: 4565,
        analytics: 12300100
    },
    {
        id: 5,
        profileAvatar: `https://picsum.photos/300`,
        profileName: 'Cristobal Pavez',
        profileUsername: 'MahiruDev',
        createdAt: new Date().toLocaleDateString(),
        content: 'Tweet 6 Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
        isRetweeted: false,
        isLiked: false,
        replies: 781,
        retweets: 1231,
        likes: 4561,
        analytics: 1230011
    },
    {
        id: 6,
        profileAvatar: `https://picsum.photos/300`,
        profileName: 'Cristobal Pavez',
        profileUsername: 'MahiruDev',
        createdAt: new Date().toLocaleDateString(),
        content: 'Tweet 6 Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
        isRetweeted: false,
        isLiked: false,
        replies: 780,
        retweets: 1230,
        likes: 4560,
        analytics: 1230010
    },
    {
        id: 7,
        profileAvatar: `https://picsum.photos/300`,
        profileName: 'Cristobal Pavez',
        profileUsername: 'MahiruDev',
        createdAt: new Date().toLocaleDateString(),
        content: 'Tweet 7 Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
        isRetweeted: false,
        isLiked: false,
        replies: 787,
        retweets: 1237,
        likes: 4567,
        analytics: 1230017
    },
]


onMounted(() => {
    fetchTweet()
    getParent()
    getTweet()
    getReplies()
})
</script>