<template>
    <div class=" absolute w-full h-screen top-0 left-0 bg-black md:bg-gray-400 md:bg-opacity-30 md:p-3 ">
        <div class=" md:max-w-2xl md:mx-auto md:mt-10 md:rounded-xl bg-black">
            <div class=" flex items-center p-2 m-2 rounded-full cursor-pointer">
                <div @click="$emit('showSignInModal', false)"
                    class="hover:bg-gray-800 inline-block p-2 rounded-full cursor-pointer">
                    <Close fillColor="#FFFFFF" :size="28" class="md:block hidden" />
                    <ArrowLeft fillColor="#FFFFFF" :size="28" class="md:hidden block" />
                </div>
                <div class=" mx-auto lg:ml-60">
                    <Twitter fillColor="#FFFFFF" size="48" />
                </div>
            </div>
            <!-- Edit Profile Form -->
            <div class="w-full flex flex-col">
                <div class=" w-full px-20 py-4 flex flex-col">
                    <div class=" px-5 pb-5 font-bold text-white text-3xl">
                        Sign in to Twitter
                    </div>
                    <form @submit.prevent="signIn"
                        class=" w-full px-5 pb-5 text-white flex flex-col justify-between items-center">
                        <div class=" w-full flex flex-col items-center">
                            <div class=" w-full mb-5">
                                <div class=" relative">
                                    <input id="username" name="username" type="text" v-model="username"
                                        class=" h-14 w-full px-2 border-2 rounded-md bg-black border-gray-500 text-white focus:border-[#1C9CEF] focus:outline-none focus:border-4 focus:h-16 focus:placeholder-transparent peer"
                                        placeholder="Username" required />
                                    <label for="username"
                                        class=" absolute left-0 text-sm px-3 text-transparent peer-focus:text-[#1C9CEF] transition-all">
                                        Username
                                    </label>
                                </div>
                            </div>
                            <div class=" w-full mb-5">
                                <div class=" relative">
                                    <input id="password" name="password" type="password" v-model="password"
                                        class=" h-14 w-full px-2 border-2 rounded-md bg-black border-gray-500 text-white focus:border-[#1C9CEF] focus:outline-none focus:border-4 focus:h-16 focus:placeholder-transparent peer"
                                        placeholder="Password" required />
                                    <label for="password"
                                        class=" absolute left-0 text-sm px-3 text-transparent peer-focus:text-[#1C9CEF] transition-all">
                                        Password
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class=" w-full">
                            <button type="submit" class="w-full text-black
                                font-bold text-[18px] bg-white
                                p-3 px-3 rounded-full
                                cursor-pointer transition
                                hover:bg-[#e6e6e6] focus-visible:bg-[#e6e6e6] active:bg-[#cccccc]">
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Close from 'vue-material-design-icons/Close.vue';
import ArrowLeft from 'vue-material-design-icons/ArrowLeft.vue';
import Twitter from 'vue-material-design-icons/Twitter.vue';
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const username = ref('');
const password = ref('');
const emit = defineEmits(['showSignInModal'])
const store = useStore()

const isValidAccount = computed(() => {
    return (
        (username.value.trim() !== '' && username.value.length <= 25) &&
        (password.value.trim() !== '' && password.value.length <= 25)
    )
});

const signIn = async () => {
    if (!isValidAccount.value) return;

    const user = {
        username: username.value,
        password: password.value,
    };

    await store.dispatch('loginUser', user)
    emit('showSignInModal', false)
};
</script>