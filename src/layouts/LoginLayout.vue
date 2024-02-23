<template>
    <div class=" fixed w-full text-white">
        <div class=" flex">
            <div class=" lg:flex hidden w-full h-screen justify-center items-center"
                style="background-image: url('/twitter-banner.png');">
                <Twitter fillColor="#FFFFFF" size="384" />
            </div>
            <div class=" w-full h-screen flex flex-col p-10">
                <div>
                    <Twitter fillColor="#FFFFFF" size="48" />
                </div>
                <div class=" my-20 max-w-xs lg:max-w-none">
                    <h1 class=" font-extrabold text-3xl lg:text-6xl">Happening now</h1>
                </div>
                <div class=" flex flex-col">
                    <div>
                        <h2 class="hidden text-xl lg:block lg:text-3xl font-extrabold">Join twitter today.</h2>
                    </div>
                    <div class=" flex h-full">
                        <button @click="$emit('signUpGithub')"
                        class=" w-3/4 lg:w-1/2 mt-8 ml-2 text-black
                         font-bold text-[18px] bg-white
                          p-3 px-3 rounded-full
                           cursor-pointer transition
                           hover:bg-[#e6e6e6] focus-visible:bg-[#e6e6e6] active:bg-[#cccccc]">Sign up with
                            Github</button>
                    </div>
                    <div class='flex w-3/4 lg:w-1/2 items-center my-4'>
                        <i class='border-b border-gray-800 w-2/4' />
                        <p class=" font-bold text-[20px] mx-4">or</p>
                        <i class='border-b border-gray-800 w-2/4' />
                    </div>
                    <div>
                        <button @click="$emit('showSignUpModal',true)"
                        class=" w-3/4 lg:w-1/2 mb-8 ml-2 p-3 px-3 cursor-pointer rounded-full bg-[#1C9CEF] font-bold text-[18px] transition hover:brightness-90
                         focus-visible:brightness-90 active:brightness-75">Sign up with email</button>
                    </div>
                    <div>
                        <p class="font-bold text-[18px]">Already have an account?</p>
                    </div>
                    <div>
                        <button @click="$emit('showSignInModal',true)"
                        class=" w-3/4 lg:w-1/2 mt-4 ml-2 p-3 px-3 cursor-pointer rounded-full border
                         border-gray-500 font-bold text-[18px] text-[#1D9BF9] transition hover:bg-[#1C9CEF]/10
                         focus-visible:bg-[#1C9CEF]/10 focus-visible:!ring-[#1C9CEF]/80 active:bg-[#1C9CEF]/20">Sign
                            in</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Twitter from 'vue-material-design-icons/Twitter.vue';

</script>