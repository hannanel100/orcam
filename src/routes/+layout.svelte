<script>
	import '@fontsource/roboto';
	import Header from '../Header.svelte';
	import { fly } from 'svelte/transition';
	export let data;
</script>

<div>
	<Header />
	<main>
		{#key data.url}
			<div in:fly={{ x: -200, duration: 300, delay: 300 }} out:fly={{ x: 200, duration: 300 }}>
				<slot />
			</div>
		{/key}
	</main>
</div>

<style>
	:global(body) {
		margin: 0;
		height: 100vh;
		background-color: #fbfbfd;
		--accent-color: #236cff;
		--secondary-accent-color: #4da7e3;
	}
	div {
		font-family: 'Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
	}
	main {
		max-width: 1080px;
		margin: 0 auto;
	}
	@media (max-width: 768px) {
		:global(body) {
			font-size: 12px;
		}
	}
</style>
