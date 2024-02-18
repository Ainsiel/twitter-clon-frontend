<template>
    <div class=" lg:block hidden lg:w-4/12 h-screen border-l border-gray-800 pl-4">
        <div class=" w-full p-1 mt-2 px-4 lg:flex items-center rounded-full hidden bg-[#212327]">
            <Magnify fillColor="#5e5c5c" :size="25" />
            <input class="
                            appearance-none
                            w-full
                            border-0
                            py-2
                            bg-[#212327]
                            text-gray-100
                            placeholder-gray-500
                            leading-tight
                            focus:ring-0
                        " type="text" placeholder="Search">
        </div>

        <div class=" w-full mt-4 rounded-lg lg:block hidden bg-[#212327]">
            <div class=" w-full p-4 text-white font-extrabold mb-6 text-[20px]">Trends for you</div>

            <div class=" h-[80px] hover:bg-gray-800 cursor-pointer transition duration-200 ease-in-out">
                <div class=" flex p-3 justify-between h-[80px] py-3">
                    <div>
                        <div class=" text-[14px] text-gray-400">Tennis Tournament LIVE</div>
                        <div class=" w-full text-white font-extrabold mb-6 text-[17px]">Australian Open 2023</div>
                    </div>
                    <img class=" rounded-xl" :src="randImg2" alt="" />
                </div>
            </div>

            <div class=" hover:bg-gray-800 cursor-pointer transition duration-200 ease-in-out">
                <div class=" flex p-3 justify-between">
                    <div>
                        <div class=" text-[14px] text-gray-400">Trending in United Kingdom</div>
                        <div class=" w-full text-white font-extrabold text-[17px]">Doomsday Clock</div>
                        <div class=" text-[14px] text-gray-400">5,923 Tweets</div>
                    </div>
                    <DotsHorizontal fillColor="#5e5c5c" />
                </div>
            </div>

            <div class=" hover:bg-gray-800 cursor-pointer transition duration-200 ease-in-out">
                <div class=" flex p-3 justify-between">
                    <div>
                        <div class=" text-[14px] text-gray-400">Sports · Trending</div>
                        <div class=" w-full text-white font-extrabold text-[17px]">Poro</div>
                        <div class=" text-[14px] text-gray-400">12,432 Tweets</div>
                    </div>
                    <DotsHorizontal fillColor="#5e5c5c" />
                </div>
            </div>

            <div class=" hover:bg-gray-800 cursor-pointer transition duration-200 ease-in-out">
                <div class=" flex p-3 justify-between">
                    <div>
                        <div class=" text-[14px] text-gray-400">Politics · Trending</div>
                        <div class=" w-full text-white font-extrabold text-[17px]">Sunak</div>
                        <div class=" text-[14px] text-gray-400">98,745 Tweets</div>
                    </div>
                    <DotsHorizontal fillColor="#5e5c5c" />
                </div>
            </div>



            <div class=" hover:bg-gray-800 rounded-b-xl cursor-pointer transition duration-200 ease-in-out">
                <div class=" text-blue-500 p-4">Show more</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Magnify from 'vue-material-design-icons/Magnify.vue';
import DotsHorizontal from 'vue-material-design-icons/DotsHorizontal.vue';

let randImg2 = ref(`https://picsum.photos/200`)
</script>