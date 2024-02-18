<template>
    <div>
        <div class=" bg-black bg-opacity-50 backdrop-blur-md z-10 absolute w-full">
            <div class=" border-gray-800 border-b w-full">
                <div class=" w-full text-white text-[22px] font-extrabold p-4">
                    Home
                </div>
                <div class="flex">
                    <TopNavItem @click="topNavSelected(topNavItems[0].id)" :name="topNavItems[0].name"
                        :isSelected="topNavItems[0].isSelected" />
                    <TopNavItem @click="topNavSelected(topNavItems[1].id)" :name="topNavItems[1].name"
                        :isSelected="topNavItems[1].isSelected" />
                </div>
            </div>
        </div>
        <div class=" absolute top-0 z-0 h-full w-full overflow-auto scrollbar-hide">
            <div class=" mt-[126px]"></div>
            <slot />
            <div class=""></div>
        </div>
    </div>
</template>

<script setup>
import TopNavItem from '@/components/common/TopNavItem.vue'
import { ref } from 'vue';

const emit = defineEmits(['topNavClicked'])

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