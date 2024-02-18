<template>
    <div>
        <div class=" bg-black bg-opacity-50 backdrop-blur-md z-10 absolute w-full">
            <div class=" border-gray-800 border-b w-full">
                <div class=" w-full text-white text-[22px] font-extrabold px-4">
                    {{ props.profile.name }}
                </div>
                <div class=" w-full text-gray-500 font-normal text-[18px] px-4">
                    {{ props.profile.totalTweets }} tweets
                </div>
            </div>
        </div>
        <div class=" absolute top-0 z-0 h-full w-full overflow-auto scrollbar-hide">
            <div class=" mt-[126px]"></div>
            <div class=" text-white">
                {{ props }}
            </div>
            <slot />
            <div class=""></div>
        </div>
    </div>
</template>

<script setup>
//import TopNavItem from '@/components/common/TopNavItem.vue'
//import { ref } from 'vue';

const props = defineProps({ profile: Object })
//const emit = defineEmits(['topNavClicked'])

/*
const topNavItems = ref([
    {
        id: 1,
        name: 'For You',
        isSelected: true
    },
    {
        id: 2,
        name: 'Following',
        isSelected: false
    }
])
*/

/*
const topNavSelected = (id) => {
    topNavItems.value = topNavItems.value.map((item) => {
        item.isSelected = item.id === id;
        return item;
    });

    const itemClicked = topNavItems.value.filter((item) => item.id === id)
    console.log('Item clicked: ', itemClicked[0].name)
    emit('topNavClicked', itemClicked[0].name)
}
*/
</script>