<script lang="ts">
	import { page } from '$app/stores';
	import UserCard from './UserCard.svelte';
	export let data;
	let pageSize = 10;
	$: totalItems = data?.total;
	$: totalPages = Math.ceil(totalItems / pageSize);
	$: currentPage = Number($page.url.searchParams.get('page')) || 1;
</script>

<h1>Users</h1>
<div class="users-container">
	{#each data.items as user}
		<UserCard {user} />
	{/each}
</div>
<div class="pagination-container">
	{#each Array.from({ length: totalPages }) as _, i}
		<!-- only show the previous 5 if they exist and the next five if they exist, and an arrow to go forward by one or 2 arrow to go forward by 10 -->
		{#if i + 1 >= currentPage - 4 && i + 1 <= currentPage + 4}
			<a
				href={`/users?page=${i + 1}&limit=${pageSize}`}
				class={`${currentPage === i + 1 ? 'active' : ''}`}>{i + 1}</a
			>
		{/if}
	{/each}
</div>

<style>
	.users-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.pagination-container {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		margin-top: 20px;
	}
	.pagination-container a {
		text-decoration: none;
		color: #000;
		display: grid;
		place-items: center;
		width: 2rem;
		height: 2rem;
		border: 1px solid #000;
		border-radius: 5px;
	}
	/* class to highlight current page*/
	.pagination-container a.active {
		background-color: #000;
		color: #fff;
	}
</style>
