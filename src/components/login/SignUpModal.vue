<template>
    <div class=" absolute w-full h-screen top-0 left-0 bg-black md:bg-gray-400 md:bg-opacity-30 md:p-3 ">
        <div class=" md:max-w-2xl md:mx-auto md:mt-10 md:rounded-xl bg-black">
            <div class=" flex items-center p-2 m-2 rounded-full cursor-pointer">
                <div @click="$emit('showSignUpModal', false)"
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
                        Create your account
                    </div>
                    <form @submit.prevent="createAccount"
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
                                    <input id="email" name="email" type="email" v-model="email"
                                        class=" h-14 w-full px-2 border-2 rounded-md bg-black border-gray-500 text-white focus:border-[#1C9CEF] focus:outline-none focus:border-4 focus:h-16 focus:placeholder-transparent peer"
                                        placeholder="Email" required />
                                    <label for="email"
                                        class=" absolute left-0 text-sm px-3 text-transparent peer-focus:text-[#1C9CEF] transition-all">
                                        Email
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
                            <div class=" w-full mb-5">
                                <div class=" relative">
                                    <input id="confirmPassword" name="confirmPassword" type="password"
                                        v-model="confirmPassword"
                                        class=" h-14 w-full px-2 border-2 rounded-md bg-black border-gray-500 text-white focus:border-[#1C9CEF] focus:outline-none focus:border-4 focus:h-16 focus:placeholder-transparent peer"
                                        placeholder="Confirm Password" required />
                                    <label for="confirmPassword"
                                        class=" absolute left-0 text-sm px-3 text-transparent peer-focus:text-[#1C9CEF] transition-all">
                                        Confirm Password
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
                                Create account
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
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const emit = defineEmits(['showSignUpModal'])
const store = useStore()

const isValidAccount = computed(() => {
    return (
        (username.value.trim() !== '' && username.value.length <= 25) &&
        (email.value.trim() !== '') &&
        (password.value.trim() !== '' && password.value.length <= 25) &&
        (confirmPassword.value.trim() !== '' && confirmPassword.value === password.value)
    )
});

const createAccount = async () => {
    if (!isValidAccount.value) return;

    const user = {
        username: username.value,
        email: email.value,
        password: password.value,
    };

    await store.dispatch('registerUser', user)
    emit('showSignUpModal', false)
};
</script>