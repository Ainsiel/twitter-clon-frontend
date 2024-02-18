<template>
    <MainLayout>
        <HomeLayout @top-nav-clicked="getTweets">
            <div class="text-white">
                <div class="flex" v-for="tweet in tweets" :key="tweet.id">
                    <Tweet :tweet="tweet" />
                </div>
            </div>
        </HomeLayout>
    </MainLayout>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import MainLayout from '@/layouts/MainLayout.vue';
import HomeLayout from '@/layouts/HomeLayout.vue';
import Tweet from '@/components/common/TweetComponent.vue';

const tweets = ref([])

const getTweets = (type) => {
    if (type === 'For You') {
        console.log('Fetch For you')
        tweets.value = testData.filter((tweet) => tweet.id % 2 === 0)
    } else if (type === 'Following') {
        console.log('Fetch Following')
        tweets.value = testData.filter((tweet) => tweet.id % 2 != 0)
    }
}

const testData = [
    {
        id: 1,
        profileAvatar: `https://picsum.photos/300`,
        profileName: 'Cristobal Pavez',
        profileUsername: 'MahiruDev',
        createdAt: new Date().toLocaleDateString(),
        content: 'Tweet 1 Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
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
    getTweets('For You')
})
</script>