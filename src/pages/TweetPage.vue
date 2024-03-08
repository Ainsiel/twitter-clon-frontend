<template>
    <MainLayout>
        <TweetLayout>
            <div class=" flex flex-col text-white mt-1">
                <div>
                    <div class="flex" v-for="parent in parents" :key="parent.id">
                        <Tweet :tweet="parent" @show-reply-modal="(b) => isReplyModalEnabled = b" />
                    </div>
                </div>
                <div>
                    <div class="flex" v-for="tweet in tweets" :key="tweet.id">
                        <TweetDetails :tweet="tweet" @show-reply-modal="(b) => isReplyModalEnabled = b" />
                    </div>
                </div>
                <div>
                    <div class="flex" v-for="reply in replies" :key="reply.id">
                        <Tweet :tweet="reply" @show-reply-modal="(b) => isReplyModalEnabled = b" />
                    </div>
                </div>
            </div>
        </TweetLayout>
    </MainLayout>
    <div v-if="isReplyModalEnabled">
        <ReplyModal @show-reply-modal="(b) => isReplyModalEnabled = b" />
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue';
import TweetLayout from '@/layouts/TweetLayout.vue';
import Tweet from '@/components/common/TweetComponent.vue';
import TweetDetails from '@/components/tweet/TweetDetails.vue';
import ReplyModal from '@/components/common/ReplyModal.vue';
import { getTweetDetails } from '@/utils/fetch.js'

const route = useRoute();
const isReplyModalEnabled = ref(false)
const parents = ref([])
const tweets = ref([])
const replies = ref([])




onMounted(async () => {
    const response = await getTweetDetails(route.params.id)
    console.log("Response: ", response)
    tweets.value = [response]
    replies.value = response.repliesTweets

    if (response.parent !== null) {
        parents.value = [response.parent]
    } else {
        parents.value = []
    }
    
})
</script>