<template>
    <div class=" fixed w-full">
        <div class=" max-w-[1400px] flex mx-auto">
            <div class=" lg:w-3/12 w-[60px] h-[100vh] max-w-[350px] lg:px-4 lg:mx-auto">
                <div class=" flex flex-col justify-between h-full">
                    <div>
                        <TwitterIcon />
                        <MenuItem @click="router.push('/home')" iconString="Home" />
                        <MenuItem iconString="Explore" />
                        <MenuItem iconString="Notifications" />
                        <MenuItem iconString="Messages" />
                        <MenuItem @click="router.push({ name: 'profile', params: { username: profile.username} })" iconString="Profile" />
                        <button @click="tweetButtonClicked"
                            class="lg:w-full mt-8 ml-2 text-white font-extrabold text-[22px] bg-[#1C9CEF] p-3 px-3 rounded-full cursor-pointer">
                            <span class="lg:block hidden">Tweet</span>
                            <span class="block lg:hidden">
                                <Feather />
                            </span>
                        </button>
                    </div>
                    <div class=" mb-5">
                        <ProfileItem @click="logout()" :profile="profile" />
                    </div>
                </div>
            </div>

            <div class=" lg:w-7/12 w-11/12 border-x border-gray-800 relative">
                <slot />
            </div>

            <TrendsComponent />
        </div>
    </div>
    <div v-if="isPostModalEnabled">
        <PostModal @show-post-modal="(b) => isPostModalEnabled = b" />
    </div>
</template>
  
<script setup>
import PostModal from '@/components/common/PostModal.vue'
import MenuItem from '@/components/sidebar/MenuItem.vue'
import ProfileItem from '@/components/sidebar/ProfileItem.vue'
import TwitterIcon from '@/components/sidebar/TwitterIcon.vue'
import TrendsComponent from '@/components/sidebar/TrendsComponent.vue'
import Feather from 'vue-material-design-icons/Feather.vue';
import { ref, onMounted } from 'vue'
import router from "@/router/index.js";
import { useStore } from "vuex";
import { getProfile } from '@/utils/fetch.js'


const profile = ref({})
const store = useStore()

const isPostModalEnabled = ref(false)

const tweetButtonClicked = () => {
    isPostModalEnabled.value = true
}

const logout = () => {
    store.dispatch('logout')
}

onMounted(async () => {
    if(!store.getters.isAuthenticated) {
        router.push('/')
    } 
    const response = await getProfile()
    profile.value = response

})
</script>