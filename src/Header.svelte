<script lang="ts">
	import { fly } from 'svelte/transition';

	import AnimatedHamburger from './Hamburger.svelte';

	export let open = false;
	export let onClick = (): void => {
		open = !open;
	};
</script>

<header>
	<header class="main">
		<AnimatedHamburger {open} {onClick} />
	</header>

	{#if open}
		<nav class="mobile-nav" transition:fly={{ y: -200, duration: 400 }}>
			<a href="/">Home</a>
			<a href="/about">About</a>
		</nav>
	{/if}
</header>

<style>
	header {
		position: relative;
		font-size: 2rem;
		color: var(--accent-color);
		background-color: var(--white);
		z-index: 2;
	}   
    

	.main {
		display: flex;
		justify-content: space-between;
	}

	nav {
		position: absolute;
		z-index: -1;
		width: 100%;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		align-items: center;
		background-color: var(--white);
	}
</style>
