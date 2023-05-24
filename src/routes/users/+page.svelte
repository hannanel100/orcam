<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import Pagination from '$lib/pagination/Pagination.svelte';
	import UserCard from './UserCard.svelte';

	export let data;
	$: totalItems = data?.total;
	// if no data, then go to page 1
	$: if (data.items.length === 0) {
		goto('/users?page=1&limit=10');
	}
</script>

<div class="users-container">
	<h1>Users</h1>
	{#each data.items as user}
		<UserCard {user} />
	{/each}
</div>
<Pagination {totalItems} />

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
