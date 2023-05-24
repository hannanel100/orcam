<script lang="ts">
	import { goto } from '$app/navigation';
	import Pagination from '$lib/Pagination/Pagination.svelte';
	import UserCard from './UserCard.svelte';
	import { users } from '$lib/stores/users';
	import { sort, currentPage, pageSize } from '$lib/stores/pages';
	import Select from '$lib/select/Select.svelte';
	export let data;
	$users;
	$sort;
	$: data.items && users.set([...data.items]);
	$: totalItems = data?.total;
	// if no data, then go to page 1
	$: if ($users.length === 0) {
		goto('/users?page=1&limit=10&sort=email:asc');
	}

	function reloadPage() {
		goto(`/users?page=${$currentPage}&limit=${$pageSize}&sort=${$sort}`);
	}
	let options = [
		{
			value: 'email:asc',
			text: 'Email Ascend',
			selected: true
		},
		{
			value: 'email:desc',
			text: 'Email Desc',
			selected: false
		},
		{
			value: 'createdAt:desc',
			text: 'Created At Desc',
			selected: false
		},
		{
			value: 'createdAt:asc',
			text: 'Created At Ascend',
			selected: false
		},
		{
			value: 'updatedAt:desc',
			text: 'Updated At Desc',
			selected: false
		},
		{
			value: 'updatedAt:asc',
			text: 'Updated At Asc',
			selected: false
		}
	];
</script>

<svelte:window on:change={reloadPage} />
<div class="users-container">
	<h1>Users</h1>
	<!-- sort by email, createdAt, updatedAt, firstName, lastName -->
	<div class="sort-container">
		<span>Sort by</span>
		<Select {options} bind:value={$sort} onChange={() => sort.set($sort)} />
	</div>
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
	.sort-container {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	.sort-container span {
		font-weight: 700;
	}
</style>
