<script lang="ts">
	import { page } from '$app/stores';
	import Pagination from '$lib/Pagination/Pagination.svelte';
	import UserCard from './UserCard.svelte';
	export let data;
	let pageSize = 10;
	$: totalItems = data?.total;
	$: totalPages = Math.ceil(totalItems / pageSize);
	$: currentPage = Number($page.url.searchParams.get('page')) || 1;
</script>

<div class="users-container">
	<h1>Users</h1>
	{#each data.items as user}
		<UserCard {user} />
	{/each}
</div>
<Pagination {currentPage} {pageSize} {totalPages} />

<style>
	.users-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		gap: 1rem;
		margin: auto;
		overflow: hidden;
		white-space: nowrap;
	}

	@media (min-width: 768px) {
		.users-container {
			width: 90%;
		}
	}
</style>
