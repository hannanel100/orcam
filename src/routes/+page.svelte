<h1>Hannanel Gershinsky</h1>

<main>
	<p>This is my solution to the home task for the Frontend developer role in Orcam.</p>
	<p>
		I had a great time working on this, getting to know svelte and sveltekit was definitely on my
		radar, so thanks for the opportunity!
	</p>
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
</style>
