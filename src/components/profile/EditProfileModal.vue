<template>
    <div class=" absolute w-full h-screen top-0 left-0 bg-black md:bg-gray-400 md:bg-opacity-30 md:p-3 ">
        <div class=" md:max-w-2xl md:mx-auto md:mt-10 md:rounded-xl bg-black">
            <div class=" flex items-center p-2 m-2 rounded-full cursor-pointer">
                <div @click="$emit('showEditProfileModal', false)"
                    class="hover:bg-gray-800 inline-block p-2 rounded-full cursor-pointer">
                    <Close fillColor="#FFFFFF" :size="28" class="md:block hidden" />
                    <ArrowLeft fillColor="#FFFFFF" :size="28" class="md:hidden block" />
                </div>
                <div class=" font-extrabold text-white text-xl ml-3">
                    Edit Profile
                </div>
            </div>
            <!-- Edit Profile Form -->
            <div class="w-full flex flex-col">
                <div class=" w-[calc(100%-100px)]">
                    <form @submit.prevent="saveProfile" class=" px-5 pb-5 text-white flex flex-col">
                        <div class=" mb-5">
                            <div class=" relative">
                                <input id="coverURL" name="coverURL" type="url" v-model="coverURL"
                                    class=" h-14 w-full px-2 border-2 rounded-md bg-black border-gray-500 text-white focus:border-[#1C9CEF] focus:outline-none focus:border-4 focus:h-16 focus:placeholder-transparent peer"
                                    placeholder="Cover URL"  required/>
                                <label for="coverURL"
                                    class=" absolute left-0 text-sm px-3 text-transparent peer-focus:text-[#1C9CEF] transition-all">
                                    Cover URL
                                </label>
                            </div>
                        </div>
                        <div class=" mb-5">
                            <div class=" relative">
                                <input id="avatarURL" name="avatarURL" type="url" v-model="avatarURL"
                                    class=" h-14 w-full px-2 border-2 rounded-md bg-black border-gray-500 text-white focus:border-[#1C9CEF] focus:outline-none focus:border-4 focus:h-16 focus:placeholder-transparent peer"
                                    placeholder="Avatar URL" required/>
                                <label for="avatarURL"
                                    class=" absolute left-0 text-sm px-3 text-transparent peer-focus:text-[#1C9CEF] transition-all">
                                    Avatar URL
                                </label>
                            </div>
                        </div>
                        <div class=" mb-5">
                            <div class=" relative">
                                <input id="name" name="name" type="text" v-model="name"
                                    class=" h-14 w-full px-2 border-2 rounded-md bg-black border-gray-500 text-white focus:border-[#1C9CEF] focus:outline-none focus:border-4 focus:h-16 focus:placeholder-transparent peer"
                                    placeholder="Name" required />
                                <label for="name"
                                    class=" absolute left-0 text-sm px-3 text-transparent peer-focus:text-[#1C9CEF] transition-all">
                                    Name
                                </label>
                            </div>
                        </div>
                        <div class=" mb-5">
                            <div class=" relative">
                                <textarea id="bio" name="bio" type="text" v-model="bio"
                                    class=" h-20 w-full px-2 border-2 rounded-md bg-black border-gray-500 text-white focus:border-[#1C9CEF] focus:outline-none focus:border-4 focus:h-20 focus:placeholder-transparent peer"
                                    placeholder="Bio" required/>
                            </div>
                        </div>
                        <div class=" mb-5">
                            <div class=" relative">
                                <input id="proffesional" name="proffesional" type="text" v-model="proffesional"
                                    class=" h-14 w-full px-2 border-2 rounded-md bg-black border-gray-500 text-white focus:border-[#1C9CEF] focus:outline-none focus:border-4 focus:h-16 focus:placeholder-transparent peer"
                                    placeholder="Proffesional" required/>
                                <label for="proffesional"
                                    class=" absolute left-0 text-sm px-3 text-transparent peer-focus:text-[#1C9CEF] transition-all">
                                    Proffesional
                                </label>
                            </div>
                        </div>
                        <div class=" mb-5">
                            <div class=" relative">
                                <input id="location" name="location" type="text" v-model="location"
                                    class=" h-14 w-full px-2 border-2 rounded-md bg-black border-gray-500 text-white focus:border-[#1C9CEF] focus:outline-none focus:border-4 focus:h-16 focus:placeholder-transparent peer"
                                    placeholder="Location" required/>
                                <label for="location"
                                    class=" absolute left-0 text-sm px-3 text-transparent peer-focus:text-[#1C9CEF] transition-all">
                                    Location
                                </label>
                            </div>
                        </div>
                        <div class=" mb-5">
                            <div class=" relative">
                                <input id="website" name="website" type="text" v-model="website"
                                    class=" h-14 w-full px-2 border-2 rounded-md bg-black border-gray-500 text-white focus:border-[#1C9CEF] focus:outline-none focus:border-4 focus:h-16 focus:placeholder-transparent peer"
                                    placeholder="Website" required/>
                                <label for="website"
                                    class=" absolute left-0 text-sm px-3 text-transparent peer-focus:text-[#1C9CEF] transition-all">
                                    Website
                                </label>
                            </div>
                        </div>
                        <div class=" mb-5">
                            <div class=" relative">
                                <input id="birthdate" name="birthdate" type="text" v-model="birthdate"
                                    class=" h-14 w-full px-2 border-2 rounded-md bg-black border-gray-500 text-white focus:border-[#1C9CEF] focus:outline-none focus:border-4 focus:h-16 focus:placeholder-transparent peer"
                                    placeholder="Birthdate" required/>
                                <label for="birthdate"
                                    class=" absolute left-0 text-sm px-3 text-transparent peer-focus:text-[#1C9CEF] transition-all">
                                    Birthdate
                                </label>
                            </div>
                        </div>

                        <div class=" w-full flex justify-end">
                            <button type="submit"
                                class=" bg-white text-black font-bold text-[16px] p-1.5 px-4 rounded-full cursor-pointer">
                                Save
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
import { ref, computed } from 'vue';

const coverURL = ref('');
const avatarURL = ref('');
const name = ref('');
const bio = ref('');
const proffesional = ref('');
const location = ref('');
const website = ref('');
const birthdate = ref('');
const emit = defineEmits(['showEditProfileModal'])

const isValidProfile = computed(() => {
    return (
        (name.value.trim() !== '' && name.value.length <= 50) &&
        (bio.value.length <= 160) &&
        (proffesional.value.length <= 50) &&
        (location.value.length <= 30) &&
        (website.value.length <= 100) &&
        (birthdate.value.trim() !== '')
    )
});

const saveProfile = () => {
    if (!isValidProfile.value) return;

    const profile = {
        coverURL: coverURL.value,
        avatarURL: avatarURL.value,
        name: name.value,
        bio: bio.value,
        proffesional: proffesional.value,
        location: location.value,
        website: website.value,
        birthdate: birthdate.value
    };
    console.log('Saved Profile:', profile);
    emit('showEditProfileModal',false)
};
</script>