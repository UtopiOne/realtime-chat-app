<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	let messages = data.post.data;

	console.log(messages);
</script>

<h1 class="text-5xl text-center">Welcome to realtime chat app</h1>

{#each messages as message, i (message.id)}
	<p>{message.message_contents}</p>
{/each}
