<template>
    <div>
        <div class=" bg-black bg-opacity-50 backdrop-blur-md z-10 absolute w-full flex flex-col">
            <div class=" w-full flex">
                <div class=" mt-1 ml-1">
                    <ArrowLeft @click="backToProfile" fillColor="#FFFFFF" :size="28"
                        class=" hover:bg-gray-800 inline-block p-2 rounded-full cursor-pointer" />
                </div>
                <div class=" flex flex-col">
                    <div class=" text-white text-[22px] font-bold px-4">
                        {{ props.profile.name }}
                    </div>
                    <div class=" text-gray-500 font-normal text-sm px-4">
                        @{{ props.profile.username }}
                    </div>
                </div>
            </div>
            <div class=" border-gray-800 border-b w-full flex">
                <TopNavItem @click="topNavSelected(topNavItems[0].id)" :name="topNavItems[0].name"
                    :isSelected="topNavItems[0].isSelected" />
                <TopNavItem @click="topNavSelected(topNavItems[1].id)" :name="topNavItems[1].name"
                    :isSelected="topNavItems[1].isSelected" />
            </div>
        </div>
        <div class=" absolute top-0 z-0 h-full w-full overflow-auto scrollbar-hide">
            <div class=" mt-28"></div>
            <slot />
            <div class=""></div>
        </div>
    </div>
</template>

<script setup>
import TopNavItem from '@/components/common/TopNavItem.vue'
import { ref, onMounted  } from 'vue';
import router from "@/router/index.js";
import ArrowLeft from 'vue-material-design-icons/ArrowLeft.vue';

const props = defineProps({ profile: Object, type: String })

const emit = defineEmits(['topNavClicked'])


const topNavItems = ref([
    {
        id: 1,
        name: 'Followers',
        isSelected: true
    },
    {
        id: 2,
        name: 'Following',
        isSelected: false
    },
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

const backToProfile = () => {
    const url = '/profile/'.concat(props.profile.username)
    router.push(url)
}

onMounted(() => {
    const type = props.type
    topNavItems.value = topNavItems.value.map((item) => {
        item.isSelected = item.name === type;
        return item;
    });
})
</script>