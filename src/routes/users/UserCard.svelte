<script lang="ts">
	import Button from '$lib/Button/Button.svelte';
	import type { User } from '$lib/types/';

	export let user: User;
	let { firstName, lastName, email, createdAt, updatedAt } = user;
	$: ({ firstName, lastName, email, createdAt, updatedAt } = user);
	$: createdAt = new Intl.DateTimeFormat('en-GB').format(new Date(createdAt));
	$: updatedAt = new Intl.DateTimeFormat('en-GB').format(new Date(updatedAt));
	let text = 'more';
</script>

<div class="users-card">
	<div class="name-container">
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
	<div class="email-container">
		{#if user.email}
			<p class="email">{email}</p>
		{:else}
			<p class="email">Email N/A</p>
		{/if}
	</div>
	<div class="date-container">
		{#if user.createdAt}
			<p class="createdAt">Created: {createdAt}</p>
		{:else}
			<p class="createdAt">Created At N/A</p>
		{/if}
		{#if user.createdAt}
			<p class="updatedAt">Updated: {updatedAt}</p>
		{:else}
			<p class="updatedAt">Updated At N/A</p>
		{/if}
	</div>

	<div class="button-container">
		<a href="/users/{user.userId}" data-sveltekit-preload-data="hover">
			<Button size="lg" onMouseover={() => (text = 'details')} onMouseleave={() => (text = 'more')} onFocus={() => (text = 'details')} onBlur={() => (text = 'more')}
				>{text}</Button
			></a
		>
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
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 1fr);
		gap: 0.5rem;
		width: 100%;
		border-bottom: 1px solid #cdc2c2;
		margin: auto;
	}
	.users-card .name-container {
		grid-column-start: 1;
		grid-column-end: 3;
		display: flex;
		justify-content: space-between;
		gap: 0.5rem;
	}

	.users-card .firstName,
	.users-card .lastName {
		font-size: clamp(1rem, 5vmin, 1.5rem);
		font-weight: 700;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.users-card .firstName::first-letter,
	.users-card .lastName::first-letter {
		text-transform: uppercase;
	}
	.email-container {
		grid-row-start: 2;
		grid-column-start: 1;
		grid-column-end: 3;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
	}

	.email-container .email {
		font-size: var(--font-size-sm);
		color: #848383;
	}
	a {
		text-decoration: none;
		width: 100%;
		color: inherit;
	}
	.email {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.button-container {
		margin-bottom: 0.5rem;
		grid-row-start: 3;
		grid-column-start: 2;
		grid-column-end: 3;
		grid-row-end: 4;
		display: grid;
		place-items: center;
	}
	.button-container a {
		width: 100%;
		display: grid;
		place-content: end;
	}
	@media (max-width: 768px) {
		.users-card {
			gap: 0.5rem;
			display: grid;
			padding: 0;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: auto;
		}
		/* .users-card .firstName,
		.users-card .lastName {
			font-size: var(--font-size-sm);
		} */
		.email {
			font-size: clamp(0.8rem, 1vw, 1rem);
		}

		.name-container {
			display: block;
		}
		.email-container {
			display: flex;
			align-items: center;
			justify-content: space-between;
			grid-row-start: 2;
			grid-column-start: 1;
			grid-column-end: 3;
			grid-row-end: 3;
		}
		.button-container {
			grid-row-start: 3;
			grid-column-start: 2;
			grid-column-end: 3;
			grid-row-end: 4;
		}
		.button-container a {
			width: 100%;
			display: flex;
			justify-content: flex-end;
		}
		@media (max-width: 480px) {
			.users-card {
				grid-template-columns: 1fr;
				grid-template-rows: repeat(3, 1fr);
				margin: 0 auto;
			}

			.email-container {
				grid-row-start: 2;
				grid-column-start: 1;
				grid-column-end: 3;
				grid-row-end: 3;
			}
			.button-container {
				grid-row-start: 3;
				grid-column-start: 2;
				grid-column-end: 3;
				grid-row-end: 4;
			}
			.email {
				width: 10rem;
			}
		}
	}
</style>
