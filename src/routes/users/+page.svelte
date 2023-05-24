<script lang="ts">
	import { goto } from '$app/navigation';
	import Pagination from '$lib/Pagination/Pagination.svelte';
	import UserCard from './UserCard.svelte';
	import { users } from '$lib/stores/users';
	export let data;
	$users;
	$: data.items && users.set([...data.items]);
	$: console.log('🚀 ~ file: +page.svelte:8 ~ users:', $users);
	$: totalItems = data?.total;
	// if no data, then go to page 1
	$: if ($users.length === 0) {
		goto('/users?page=1&limit=10');
	}
</script>

<div class="users-container">
	<h1>Users</h1>
	{#each $users as user}
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
