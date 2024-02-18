<template>
    <div>
        Login Page
    </div>
</template>
  
<script setup>
import { ref, onMounted  } from 'vue';
import router from "@/router/index.js";

const isAuthenticated = ref(false);

onMounted(() => {
    isAuthenticated.value = true
    if (isAuthenticated.value) {
        router.push('/home')
    }
})
</script>
  
<style scoped>

</style>