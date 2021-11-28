<template>
    <div>
        <h2 class="text-4xl text-center sm:text-6xl font-extrabold text-gray-900 tracking-tight leading-10">{{ post.title }}</h2>
        <div class="mt-4 prose lg:prose-xl" v-html="post.body"></div>
    </div>
</template>

<script>
import { onMounted } from 'vue'
import { useRoute } from "vue-router";
import usePosts from '../api/usePosts'
export default {
    setup() {
        const route =useRoute()

        const { post, fetchPost } = usePosts()

        onMounted(fetchPost(route.params.slug))

        return {
            post
        } 
    },
}
</script>