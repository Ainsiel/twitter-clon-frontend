<template>
    <MainLayout>
        <HomeLayout>
            <div class="text-white">
                <div class="flex" v-for="tweet in tweets" :key="tweet.id">
                    <Tweet :tweet="tweet" />
                </div>
            </div>
        </HomeLayout>
    </MainLayout>
</template>
  
<script setup>
import { ref, onMounted  } from 'vue';
import MainLayout from '@/layouts/MainLayout.vue';
import HomeLayout from '@/layouts/HomeLayout.vue';
import Tweet from '@/components/common/TweetComponent.vue';

const tweets = ref([])

onMounted(() => {
    const now = new Date() 
    tweets.value = [
        {
            id: 1,
            profileAvatar: `https://picsum.photos/300`,
            profileName: 'Cristobal Pavez',
            profileUsername: 'MahiruDev',
            createdAt: now.toLocaleDateString(),
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
            createdAt: now.toLocaleDateString(),
            content: 'Tweet 2 Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
            isRetweeted: false,
            isLiked: false,
            replies: 78,
            retweets: 123,
            likes: 456,
            analytics: 123001
        },
    ]
})
</script>