<template>
    <MainLayout>
        <ProfileLayout @top-nav-clicked="getTweets" :profile="profile" @show-edit-profile-modal="(b) => isEditProfileModalEnabled = b">
            <div class="text-white">
                <div class="flex" v-for="tweet in tweets" :key="tweet.id">
                    <Tweet :tweet="tweet" />
                </div>
            </div>
        </ProfileLayout>
    </MainLayout>
    <div v-if="isEditProfileModalEnabled">
        <EditProfileModal @show-edit-profile-modal="(b) => isEditProfileModalEnabled = b" />
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue';
import ProfileLayout from '@/layouts/ProfileLayout.vue';
import Tweet from '@/components/common/TweetComponent.vue';
import EditProfileModal from '@/components/profile/EditProfileModal.vue';

const route = useRoute();
const tweets = ref([])
const isEditProfileModalEnabled = ref(false)
const profile = ref({})
const fetchUsername = ref('')

const getTweets = (type) => {
    if (type === 'Tweets') {
        console.log('Fetch Tweets')
        tweets.value = testData.filter((tweet) => tweet.id % 2 === 0)
    } else if (type === 'Replies') {
        console.log('Fetch Replies')
        tweets.value = testData.filter((tweet) => tweet.id % 2 !== 0)
    } else if (type === 'Retweets') {
        console.log('Fetch Retweets')
        tweets.value = testData.filter((tweet) => tweet.id % 3 === 0)
    } else if (type === 'Likes') {
        console.log('Fetch Likes')
        tweets.value = testData.filter((tweet) => tweet.id % 3 !== 0)
    }
}

const getProfile = (username) => {
    console.log('Fetch profile: ', username)
    profile.value = testProfile
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

const testProfile = {
    name: 'Cristobal Pavez',
    username: 'MahiruDev',
    bio: 'Bio Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    location: 'Temuco, Chile',
    website: 'Github.com/MahiruDev',
    proffesional: 'Web developer',
    birthDate: new Date().toLocaleDateString(),
    createdAt: new Date().toLocaleDateString(),
    avatarURL: `https://picsum.photos/400`,
    coverURL: `https://picsum.photos/1000`,
    following: 123,
    followers: 5612,
    totalTweets: 19
}

onMounted(() => {
    fetchUsername.value = route.params.username
    getTweets('Tweets')
    getProfile(fetchUsername.value)
})
</script>