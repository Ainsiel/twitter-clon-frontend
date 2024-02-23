<template>
    <LoginLayout @sign-up-github="signUpGithub" @show-sign-up-modal="(b) => isSignUpModalEnabled = b"
        @show-sign-in-modal="(b) => isSignInModalEnabled = b" />
</template>
  
<script setup>
import LoginLayout from "@/layouts/LoginLayout.vue"
import { ref, onMounted } from 'vue';
import router from "@/router/index.js";

const isAuthenticated = ref(false);
const isSignUpModalEnabled = ref(false)
const isSignInModalEnabled = ref(false)

const signUpGithub = () => {
    console.log('Sign up with Github')
    isAuthenticated.value = true
    goToHome()
}

const goToHome = () => {
    if (isAuthenticated.value) {
        router.push('/home')
    }
}

onMounted(() => {
    //isAuthenticated.value = true
    goToHome()
})
</script>
  
<style scoped></style>