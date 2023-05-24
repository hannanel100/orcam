<script>
	import Button from '$lib/Button/Button.svelte';
</script>

<h1>Hannanel Gershinsky</h1>

<main>
	<p>This is my solution to the home task for the Frontend developer role in Orcam.</p>
	<p>
		I had a great time working on this, getting to know svelte and sveltekit was definitely on my
		radar, so thanks for the opportunity!
	</p>
	<p>
		The design of the application is heavily inspired by orcams website. I even "stole" some of your
		colors...
	</p>
	<div class="link-container">
		<Button>
			<a href="/users" data-sveltekit-preload-data="hover">users</a>
		</Button>
		<Button>
			<a href="/about" data-sveltekit-preload-data="hover">about</a>
		</Button>
		<Button>
			<a href="https://www.github.com/hannanel100/orcam">Github</a>
		</Button>
	</div>
</main>

<style>
	h1 {
		--bg-size: 400%;
		--color-one: #236cff;
		--color-two: #0044ce;
		font-size: clamp(2rem, 15vmin, 6rem);
		background: linear-gradient(90deg, var(--color-one), var(--color-two), var(--color-one)) 0 0 /
			var(--bg-size) 100%;
		color: transparent;
		background-clip: text;
		-webkit-background-clip: text;
		animation: move-bg 8s infinite linear;
		text-align: center;
	}
	@media (prefers-reduced-motion: no-preference) {
		h1 {
			animation: move-bg 8s linear infinite;
		}
		@keyframes move-bg {
			to {
				background-position: var(--bg-size) 0;
			}
		}
	}
	main {
		margin: 0 auto;
		max-width: 960px;
		padding: 0 1rem;
	}
	main p {
		font-size: clamp(1rem, 5vmin, 1.5rem);
		line-height: 1.5;
	}
	main a {
		text-decoration: none;
		color: #fff;
	}
	main a:hover {
		color: var(--accent-color);
	}
	.link-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: 1rem;
	}
</style>
