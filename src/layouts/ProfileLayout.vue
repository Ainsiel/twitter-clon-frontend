<template>
    <div>
        <div class=" bg-black bg-opacity-50 backdrop-blur-md z-10 absolute w-full">
            <div class=" border-gray-800 border-b w-full flex">
                <div class=" mt-1 ml-1">
                    <ArrowLeft fillColor="#FFFFFF" :size="28"
                        class=" hover:bg-gray-800 inline-block p-2 rounded-full cursor-pointer" />
                </div>
                <div class=" flex flex-col">
                    <div class=" text-white text-[22px] font-bold px-4">
                        {{ props.profile.name }}
                    </div>
                    <div class=" text-gray-500 font-normal text-sm px-4">
                        {{ props.profile.totalTweets }} tweets
                    </div>
                </div>
            </div>
        </div>
        <div class=" absolute top-0 z-0 h-full w-full overflow-auto scrollbar-hide">
            <div class=" mt-14"></div>
            <div class=" text-white border-gray-800 border-b w-full">
                <ProfileComponent :profile="props.profile" />
                <div class=" flex w-full">
                    <TopNavItem @click="topNavSelected(topNavItems[0].id)" :name="topNavItems[0].name"
                        :isSelected="topNavItems[0].isSelected" />
                    <TopNavItem @click="topNavSelected(topNavItems[1].id)" :name="topNavItems[1].name"
                        :isSelected="topNavItems[1].isSelected" />
                    <TopNavItem @click="topNavSelected(topNavItems[2].id)" :name="topNavItems[2].name"
                        :isSelected="topNavItems[2].isSelected" />
                    <TopNavItem @click="topNavSelected(topNavItems[3].id)" :name="topNavItems[3].name"
                        :isSelected="topNavItems[3].isSelected" />
                </div>
            </div>
            <slot />
            <div class=""></div>
        </div>
    </div>
</template>

<script setup>
import TopNavItem from '@/components/common/TopNavItem.vue'
import { ref } from 'vue';
import ArrowLeft from 'vue-material-design-icons/ArrowLeft.vue';
import ProfileComponent from '@/components/profile/ProfileComponent.vue'

const props = defineProps({ profile: Object })
const emit = defineEmits(['topNavClicked'])


const topNavItems = ref([
    {
        id: 1,
        name: 'Tweets',
        isSelected: true
    },
    {
        id: 2,
        name: 'Replies',
        isSelected: false
    },
    {
        id: 3,
        name: 'Retweets',
        isSelected: false
    },
    {
        id: 4,
        name: 'Likes',
        isSelected: false
    }
])



const topNavSelected = (id) => {
    topNavItems.value = topNavItems.value.map((item) => {
        item.isSelected = item.id === id;
        return item;
    });

    const itemClicked = topNavItems.value.filter((item) => item.id === id)
    console.log('Item clicked: ', itemClicked[0].name)
    emit('topNavClicked', itemClicked[0].name)
}

</script>