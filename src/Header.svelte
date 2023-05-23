<script lang="ts">
	import { fly } from 'svelte/transition';
	import AnimatedHamburger from './Hamburger.svelte';
	import Button from '$lib/Button/Button.svelte';
	import { page } from '$app/stores';
	export let open = false;
	export let onClick = (): void => {
		open = !open;
	};
</script>

<header class="header">
	<div class="mobile-header">
		<Button variant="secondary">
			<a href="https://www.hannanel.dev">Check me out!</a>
		</Button>
		<a href="/">
			<img src="/logo.png" alt="logo" class="logo" />
		</a>
		<div class="hamburger-container">
			<AnimatedHamburger {open} {onClick} />
		</div>
		{#if open}
			<nav class="mobile-nav" transition:fly={{ y: -200, duration: 400 }}>
				<a href="/" on:click={onClick} class={`${$page.url.pathname === '/' && 'active'}`}>Home</a>
				<div class="spacer" />
				<a href="/users" on:click={onClick} class={`${$page.url.pathname === '/users' && 'active'}`}
					>Users</a
				>
				<div class="spacer" />
				<a href="/about" on:click={onClick} class={`${$page.url.pathname === '/about' && 'active'}`}
					>About</a
				>
				<div class="spacer" />
			</nav>
		{/if}
	</div>
	<div class="desktop-header">
		<a href="/">
			<img src="/logo.png" alt="logo" class="logo" />
		</a>
		<Button variant="secondary">
			<a href="https://www.hannanel.dev">Check me out!</a>
		</Button>
		<nav class="desktop-nav">
			<a href="/users" class={`${$page.url.pathname === '/users' && 'active'}`}>Users</a>
			<a href="/about" class={`${$page.url.pathname === '/about' && 'active'}`}>About</a>
		</nav>
	</div>
</header>

<style>
	:root {
		--white: #fff;
		--black: #000;
		--font-size: 1rem;
	}
	a {
		text-decoration: none;
	}
	.header {
		position: relative;
		width: 100%;
		height: 4rem;
		background-color: var(--black);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.logo {
		width: 6rem;
		aspect-ratio: auto;
	}
	.desktop-nav .active,
	.mobile-nav .active {
		color: var(--secondary-accent-color);
	}
	.mobile-header {
		position: relative;
		font-size: 2rem;
		width: 100%;
		color: var(--accent-color);
		z-index: 2;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 1rem;
	}
	.mobile-header a {
		color: var(--black);
	}
	.desktop-header {
		display: none;
	}
	.desktop-header a {
		color: var(--black);
	}

	.desktop-nav a,
	.mobile-nav a {
		color: var(--white);
		transition: color 0.3s ease-in-out;
	}
	.mobile-nav .spacer {
		width: 100%;
		height: 1px;
		background-color: var(--white);
		opacity: 0.8;
	}

	.mobile-nav {
		position: absolute;
		z-index: -1;
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		align-items: flex-start;
		background-color: var(--black);
		inset: 0;
	}
	.mobile-nav a:first-of-type {
		margin-top: 4rem;
	}
	.mobile-nav a {
		margin-top: 2rem;
		margin-left: 1rem;
		font-size: 1.5rem;
	}
	.mobile-nav a:hover,
	.desktop-nav a:hover {
		color: var(--accent-color);
	}
	.desktop-nav {
		display: flex;
		gap: 1rem;
	}
	@media (min-width: 768px) {
		.mobile-header {
			display: none;
		}
		.desktop-header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: 0 1rem;
			width: 100%;
		}
	}
</style>
