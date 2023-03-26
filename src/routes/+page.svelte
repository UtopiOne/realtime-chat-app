<script lang="ts">
	import Message from '$lib/components/Message.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let messages = data.post.data;

	console.log(messages);
</script>

<main>
	<h1 class="text-5xl text-center">Welcome to realtime chat app</h1>

	<div class="flex flex-col gap-4 justify-center m-5">
		{#each messages as message, i (message.id)}
			<Message contents={message.contents} author={message.author} time={message.time} />
		{/each}
	</div>
</main>
