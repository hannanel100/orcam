<script>
	import '@fontsource/roboto';
	import Header from '../Header.svelte';
</script>

<div>
	<Header />
	<div>
		<slot />
	</div>
</div>

<style>
	:global(body) {
		margin: 0;
		height: 100vh;
		background-color: #fbfbfd;
		--accent-color: #ff6f61;
	}
	div {
		font-family: 'Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
	}
	@media (max-width: 768px) {
		:global(body) {
			font-size: 12px;
		}
	}
</style>
