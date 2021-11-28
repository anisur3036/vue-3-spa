<template>
	<div class="space-y-10">
		<div class="flex flex-col mb-4" v-for="post in posts" :key="post.uuid">
			<router-link class="block" to="#">
				<h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-10">{{ post.title }}</h2>	
			</router-link>
			<p class="mt-5 text-gray-600">{{post.teaser}}</p>
		</div>
	</div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import usePosts from '../api/usePosts'
export default {
	setup() {

		const { posts, fetchPosts } = usePosts()

		onMounted(fetchPosts)

		return {
			posts
		}
	},
}
</script>