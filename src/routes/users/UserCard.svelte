<script lang="ts">
	import Button from '$lib/Button/Button.svelte';
	import type { User } from '$lib/types/';

	export let user: User;
	let { firstName, lastName, email, createdAt } = user;
	createdAt = new Intl.DateTimeFormat('en-GB').format(new Date(createdAt));
	let text = 'more';
</script>

<div class="users-card">
	<div class="left-container">
		{#if user.firstName}
			<p class="firstName">{firstName}</p>
		{:else}
			<p class="firstName">First Name N/A</p>
		{/if}
		{#if user.lastName}
			<p class="lastName">{lastName}</p>
		{:else}
			<p class="lastName">Last Name N/A</p>
		{/if}
	</div>
	<div class="right-container">
		<div class="email-date-container">
			{#if user.email}
				<p class="email">{email}</p>
			{:else}
				<p class="email">Email N/A</p>
			{/if}
			{#if user.createdAt}
				<p class="createdAt">{createdAt}</p>
			{:else}
				<p class="createdAt">Created At N/A</p>
			{/if}
			{#if user.createdAt}
				<p class="createdAt">{createdAt}</p>
			{:else}
				<p class="createdAt">Created At N/A</p>
			{/if}
		</div>
		<div>
			<Button size="lg" onMouseover={() => (text = 'details')} onMouseleave={() => (text = 'more')}
				><a href="/users/{user.userId}" data-sveltekit-preload-data="hover">{text}</a></Button
			>
		</div>
	</div>
</div>

<style>
	:root {
		/* variable for font size */
		--font-size: 16px;
		--font-size-sm: 14px;
		--font-siz-xs: 12px;
		--font-size-md: 18px;
		--font-size-lg: 20px;
		--font-size-xxs: 10px;
	}
	.users-card {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		width: 100%;
		height: 100px;
		border-bottom: 1px solid #cdc2c2;
		margin: auto;
	}
	.users-card .left-container {
		display: flex;
		gap: 0.5rem;
	}

	.users-card .firstName,
	.users-card .lastName {
		font-size: var(--font-size-lg);
		font-weight: 700;
	}
	.users-card .firstName::first-letter,
	.users-card .lastName::first-letter {
		text-transform: uppercase;
	}
	.right-container {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	.email-date-container {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	.email-date-container .email {
		font-size: var(--font-size-sm);
		color: #848383;
	}
	a {
		text-decoration: none;
		width: 100%;
		color: inherit;
	}
	@media (max-width: 768px) {
		.users-card {
			gap: 0.5rem;
			display: grid;
			padding: 0;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: auto;
		}
		.users-card .firstName,
		.users-card .lastName {
			font-size: var(--font-size-sm);
		}
		.email {
			font-size: var(--font-size-xxs);
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		.createdAt {
			display: none;
		}
		.left-container {
			display: block;
		}
		.right-container {
			display: block;
		}
		@media (max-width: 480px) {
			.users-card {
				grid-template-columns: 1fr;
				grid-template-rows: 1fr 1fr;
			}
			.left-container,
			.right-container {
				display: flex;
				align-items: flex-start;
				justify-content: space-between;
			}
			.email {
				width: 10rem;
			}
		}
	}
</style>
