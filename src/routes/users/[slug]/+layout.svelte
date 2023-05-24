<script>
	import Button from '$lib/button/Button.svelte';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="container">
	<div class="title-container">
		<h1>Single User Page</h1>
		<a href="/users"> <Button><Fa icon={faCaretLeft} />Back</Button></a>
	</div>
	<slot />
</div>

<style>
	.container {
		max-width: 960px;
		margin: 0 auto;
		display: grid;
		place-content: center;
		padding: 1rem;
	}
	.title-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
