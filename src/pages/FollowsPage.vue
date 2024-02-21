<template>
    <MainLayout>
        <FollowsLayout @top-nav-clicked="getFollows" :profile="profile" :type="route.params.type">
            <div class="text-white">
                <div class="flex" v-for="follow in follows" :key="follow.id">
                    <Follow :profile="follow.profile" :isFollowing="follow.isFollowing" />
                </div>
            </div>
        </FollowsLayout>
    </MainLayout>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue';
import FollowsLayout from '@/layouts/FollowsLayout.vue';
import Follow from '@/components/follows/FollowComponent.vue';

const route = useRoute();
const follows = ref([])
const profile = ref({})
const fetchUsername = ref('')

const getFollows = (type) => {
    if (type === 'Followers') {
        console.log('Fetch Followers')
        //follows.value = testData.filter((follow) => follow.id % 2 === 0)
        follows.value = testData
    } else if (type === 'Following') {
        console.log('Fetch Following')
        follows.value = testData.filter((follow) => follow.id % 2 !== 0)
    }
}

const getProfile = (username) => {
    console.log('Fetch profile: ', username)
    profile.value = testProfile
}

const testData = [
    {
        id: 1,
        profile: {
            name: 'Cristobal Pavez',
            username: 'MahiruDev',
            bio: 'Bio 1 Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
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
        },
        isFollowing: true,
    },
    {
        id: 2,
        profile: {
            name: 'Cristobal Pavez',
            username: 'MahiruDev',
            bio: 'Bio 2 Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
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
        },
        isFollowing: false,
    },
    {
        id: 3,
        profile: {
            name: 'Cristobal Pavez',
            username: 'MahiruDev',
            bio: 'Bio 3 Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
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
        },
        isFollowing: false,
    },
    {
        id: 4,
        profile: {
            name: 'Cristobal Pavez',
            username: 'MahiruDev',
            bio: 'Bio 4 Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
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
        },
        isFollowing: false,
    },
    {
        id: 5,
        profile: {
            name: 'Cristobal Pavez',
            username: 'MahiruDev',
            bio: 'Bio 5 Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
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
        },
        isFollowing: false,
    },
    {
        id: 6,
        profile: {
            name: 'Cristobal Pavez',
            username: 'MahiruDev',
            bio: 'Bio 6 Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
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
        },
        isFollowing: false,
    },
    {
        id: 7,
        profile: {
            name: 'Cristobal Pavez',
            username: 'MahiruDev',
            bio: 'Bio 7 Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
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
        },
        isFollowing: false,
    },
    {
        id: 8,
        profile: {
            name: 'Cristobal Pavez',
            username: 'MahiruDev',
            bio: 'Bio 8 Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
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
        },
        isFollowing: false,
    },
    {
        id: 9,
        profile: {
            name: 'Cristobal Pavez',
            username: 'MahiruDev',
            bio: 'Bio 9 Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
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
        },
        isFollowing: false,
    },
    {
        id: 10,
        profile: {
            name: 'Cristobal Pavez',
            username: 'MahiruDev',
            bio: 'Bio 10 Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
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
        },
        isFollowing: false,
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
    getFollows(route.params.type)
    getProfile(fetchUsername.value)
})
</script>