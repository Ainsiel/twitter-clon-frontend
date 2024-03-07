<template>
    <LoginLayout @sign-up-github="signUpGithub" @show-sign-up-modal="(b) => isSignUpModalEnabled = b"
        @show-sign-in-modal="(b) => isSignInModalEnabled = b" />
    <div v-if="isSignUpModalEnabled">
        <SignUpModal @show-sign-up-modal="(b) => isSignUpModalEnabled = b" />
    </div>
    <div v-if="isSignInModalEnabled">
        <SignInModal @show-sign-in-modal="(b) => isSignInModalEnabled = b" />
    </div>
</template>
  
<script setup>
import LoginLayout from "@/layouts/LoginLayout.vue"
import SignUpModal from "@/components/login/SignUpModal.vue"
import SignInModal from "@/components/login/SignInModal.vue"
import { ref, onMounted } from 'vue';
import router from "@/router/index.js";
import { useStore } from "vuex";

const isAuthenticated = ref(false);
const isSignUpModalEnabled = ref(false)
const isSignInModalEnabled = ref(false)

const store = useStore()

const signUpGithub = () => {
    console.log('Sign up with Github')
}

const goToHome = () => {
    if (isAuthenticated.value) {
        router.push('/home')
    }
}

onMounted(() => {
    isAuthenticated.value = store.getters.isAuthenticated
    goToHome()
})
</script>
  
<style scoped></style>