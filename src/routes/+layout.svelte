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
	}
	div {
		font-family: 'Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
	}
</style>
