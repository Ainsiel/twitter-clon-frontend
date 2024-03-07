<template>
    <div class=" w-full lg:inline-block hover:bg-gray-900 p-2 px-4 lg:pr-6 rounded-full cursor-pointer transition duration-200 ease-in-out">
        <div class=" flex items-center">
            <img class="rounded-full" width="55"  :src="props.profile.avatarURL" />
            <div class=" lg:block hidden pl-4 mt-0.5">
                <div class=" flex flex-col">
                    <span class=" text-white font-bold text-[18px]">
                        {{ props.profile.name }}
                    </span>
                    <span class=" text-gray-500 font-normal text-[18px]">
                        @{{ props.profile.username }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({ profile: Object });
</script>