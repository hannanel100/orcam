<script lang="ts">
	import { page } from '$app/stores';
	import Pagination from '$lib/Pagination/Pagination.svelte';
	import UserCard from './UserCard.svelte';
	export let data;
	console.log('🚀 ~ file: +page.svelte:6 ~ data:', data);
	let pageSize = 10;
	$: totalItems = data?.total;
	$: totalPages = Math.ceil(totalItems / pageSize) - 1;
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
		width: 90%;
		gap: 1rem;
		margin: auto;
	}
</style>
