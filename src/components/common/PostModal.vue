<template>
    <div class=" absolute w-full h-screen top-0 left-0 bg-black md:bg-gray-400 md:bg-opacity-30 md:p-3 ">
        <div class=" md:max-w-2xl md:mx-auto md:mt-10 md:rounded-xl bg-black">
            <div class=" flex items-center justify-between md:inline-block p-2 m-2 rounded-full cursor-pointer">
                <div @click="$emit('showPostModal',false)" class="hover:bg-gray-800 inline-block p-2 rounded-full cursor-pointer">
                    <Close fillColor="#FFFFFF" :size="28" class="md:block hidden" />
                    <ArrowLeft fillColor="#FFFFFF" :size="28" class="md:hidden block" />
                </div>

                <button :class="tweet ? 'bg-[#1C9CEF] text-white' : 'bg-[#124D77] text-gray-400'" :disabled="!tweet"
                    @click="postTweet" class="md:hidden font-extrabold text-[16px] p-1.5 px-4 rounded-full cursor-pointer">
                    Tweet
                </button>
            </div>
            <div class=" w-full flex">
                <div class=" ml-3.5 mr-2">
                    <img class="rounded-full" width="55" :src="profileAvatar" />
                </div>
                <div class=" w-[calc(100%-100px)]">
                    <div class="inline-block">
                        <div class="flex items-center border border-gray-700 rounded-full">
                            <span class="text-[#1C9CEF] p-0.5 pl-3.5 font-extrabold">Everyone</span>
                            <ChevronDown class="pr-2" fillColor="#1C9CEF" :size="25" />
                        </div>
                    </div>
                    <div>
                        <textarea v-model="tweet" placeholder="What's happening?"
                            cols="30" rows="4" class="
                                w-full
                                bg-black
                                border-0
                                mt-2
                                focus:ring-0
                                text-white
                                text-[19px]
                                font-extrabold
                                min-h-[120px]
                            "></textarea>
                    </div>
                    <div class="flex py-2 items-center text-[#1C9CEF] font-extrabold">
                        <Earth class="pr-2" fillColor="#1C9CEF" :size="20" /> Everyone can reply
                    </div>
                    <div class="border-b border-b-gray-700"></div>
                    <div class=" flex items-center justify-between py-2">
                        <div class="flex items-center">
                            <div class="hover:bg-gray-800 inline-block p-2 rounded-full cursor-pointer">
                                <ImageOutline fillColor="#1C9CEF" :size="25" />
                            </div>
                            <div class="hover:bg-gray-800 inline-block p-2 rounded-full cursor-pointer">
                                <FileGifBox fillColor="#1C9CEF" :size="25" />
                            </div>
                            <div class="hover:bg-gray-800 inline-block p-2 rounded-full cursor-pointer">
                                <Emoticon fillColor="#1C9CEF" :size="25" />
                            </div>
                        </div>
                        <button :class="tweet ? 'bg-[#1C9CEF] text-white' : 'bg-[#124D77] text-gray-400'" :disabled="!tweet"
                            @click="postTweet"
                            class=" hidden md:block font-extrabold text-[16px] p-1.5 px-4 rounded-full cursor-pointer">
                            Tweet
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Close from 'vue-material-design-icons/Close.vue';
import ArrowLeft from 'vue-material-design-icons/ArrowLeft.vue';
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue';
import Earth from 'vue-material-design-icons/Earth.vue';
import ImageOutline from 'vue-material-design-icons/ImageOutline.vue';
import FileGifBox from 'vue-material-design-icons/FileGifBox.vue';
import Emoticon from 'vue-material-design-icons/Emoticon.vue';
import { ref } from 'vue'


const tweet = ref('')
const profileAvatar = ref(`https://picsum.photos/200`)

const postTweet = () => {
    if (!tweet.value) return
    console.log('Post Tweet', tweet.value)
}

</script>