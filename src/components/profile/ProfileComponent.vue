<template>
    <div class=" w-full">
        <!-- Cover -->
        <div class=" w-full bg-gray-800">
            <img class=" w-full h-[200px] object-cover object-center" :src="props.profile.coverURL"
                :alt="props.profile.name">
        </div>

        <div class=" p-4">
            <!-- Avatar and Button -->
            <div class=" relative flex w-full">
                <!-- Avatar -->
                <div class=" flex flex-1">
                    <div style="margin-top: -6rem;">
                        <div style="height:9rem; width:9rem;" class=" rounded-full relative">
                            <img style="height:9rem; width:9rem;" class=" rounded-full relative border-4 border-gray-900"
                                :src="props.profile.avatarURL" :alt="props.profile.name">
                            <div class="absolute"></div>
                        </div>
                    </div>
                </div>
                <!-- Button -->
                <div class="flex flex-col text-right">
                    <div v-if="isUserProfile">
                        <button @click="$emit('showEditProfileModal')"
                            class=" justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring max-w-max border bg-transparent border-gray-600 text-white hover:bg-gray-900 flex items-center hover:shadow-lg font-bold py-2 px-4 rounded-full mr-0 ml-auto">
                            Edit Profile
                        </button>
                    </div>
                    <div v-else>
                        <div v-if="isFollowing">
                            <button @click="onFollowingClicked"
                                class=" justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring max-w-max border bg-transparent border-gray-600 text-white hover:bg-gray-900 flex items-center hover:shadow-lg font-bold py-2 px-4 rounded-full mr-0 ml-auto">
                                Following
                            </button>
                        </div>
                        <div v-else>
                            <button @click="onFollowClicked"
                                class=" justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring max-w-max border bg-transparent bg-white text-black hover:bg-slate-200 flex items-center hover:shadow-lg font-bold py-2 px-4 rounded-full mr-0 ml-auto">
                                Follow
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Profile Info -->
            <div class=" space-y-1 justify-center w-full mt-3 ml-3">
                <!-- Profile basic-->
                <div>
                    <h2 class=" text-xl leading-6 font-bold text-white">{{ props.profile.name }}</h2>
                    <p class=" text-base leading-5 text-gray-600">@{{ props.profile.username }}</p>
                </div>
                <!-- Description and others -->
                <div class="mt-3">
                    <p class="text-white leading-tight mb-2">{{ props.profile.bio }}</p>
                </div>
                <div class=" text-gray-600 flex">
                    <div class=" flex mx-1 " v-if="props.profile.proffesional && props.profile.proffesional !== ''">
                        <ProffesionalIcon fillColor="#5e5c5c" :size="18" />
                        <span class=" text-sm font-normal text-[#5e5c5c] ml-1">{{ props.profile.proffesional }}</span>
                    </div>
                    <div class=" flex mx-1 " v-if="props.profile.location && props.profile.location !== ''">
                        <LocationIcon fillColor="#5e5c5c" :size="18" />
                        <span class=" text-sm font-normal text-[#5e5c5c] ml-1">{{ props.profile.location }}</span>
                    </div>
                    <div class=" flex mx-1 " v-if="props.profile.website && props.profile.website !== ''">
                        <WebsiteIcon fillColor="#5e5c5c" :size="18" />
                        <span class=" text-sm font-normal text-[#5e5c5c] ml-1">{{ props.profile.website }}</span>
                    </div>
                    <div class=" flex mx-1 " v-if="props.profile.birthDate && props.profile.birthDate !== ''">
                        <BirthdateIcon fillColor="#5e5c5c" :size="18" />
                        <span class=" text-sm font-normal text-[#5e5c5c] ml-1">{{ props.profile.birthDate }}</span>
                    </div>
                    <div class=" flex mx-1 " v-if="props.profile.createdAt && props.profile.createdAt !== ''">
                        <JoinedIcon fillColor="#5e5c5c" :size="18" />
                        <span class=" text-sm font-normal text-[#5e5c5c] ml-1">{{ props.profile.createdAt }}</span>
                    </div>
                </div>
                <div class="pt-3 flex space-x-4 w-full">
                    <div @click="onFollowingClick" class="text-center hover:border-b hover:border-white cursor-pointer"><span class="font-bold text-white">{{ props.profile.following }}</span><span
                            class="text-gray-600">
                            Following</span></div>
                    <div @click="onFollowersClick" class="text-center hover:border-b hover:border-white cursor-pointer"><span class="font-bold text-white">{{ props.profile.followers }}</span><span
                            class="text-gray-600"> Followers</span></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ProffesionalIcon from 'vue-material-design-icons/BriefcaseOutline.vue';
import LocationIcon from 'vue-material-design-icons/MapMarker.vue';
import WebsiteIcon from 'vue-material-design-icons/LinkVariant.vue';
import BirthdateIcon from 'vue-material-design-icons/CakeVariant.vue';
import JoinedIcon from 'vue-material-design-icons/CalendarMonthOutline.vue';
import { ref } from 'vue';


const props = defineProps({
    profile: Object
})

const isUserProfile = ref(true)
const isFollowing = ref(false)


const onFollowingClicked = () => {
    console.log('Following')
    isFollowing.value = false
}

const onFollowClicked = () => {
    console.log('Follow')
    isFollowing.value = true
}

const onFollowingClick = () => {
    console.log('Following page')
}

const onFollowersClick = () => {
    console.log('Followers page')
}
</script>