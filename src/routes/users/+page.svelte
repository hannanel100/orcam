<script lang="ts">
	import { page } from '$app/stores';
	export let data;
	let pageSize = 10;
	$: totalItems = data?.total;
	$: totalPages = Math.ceil(totalItems / pageSize);
	$: currentPage = Number($page.url.searchParams.get('page')) || 1;
</script>

<h1>Users</h1>
{#each data.items as user}
	<p>{user.email}</p>
{/each}
<div>
	{#each Array.from({ length: totalPages }) as _, i}
		<a href={`/users?page=${i + 1}&limit=${pageSize}`}>{i + 1}</a>
	{/each}
</div>
<span>current page: {currentPage}</span>
