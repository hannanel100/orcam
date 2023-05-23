<script>
	import '@fontsource/roboto';
	import Header from '../Header.svelte';
</script>

<div>
	<Header />
	<main>
		<slot />
	</main>
</div>

<style>
	:global(body) {
		margin: 0;
		height: 100vh;
		background-color: #fbfbfd;
		--accent-color: #236cff;
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
