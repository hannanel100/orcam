<script lang="ts">
	export let data;
	console.log(data);
	let { items: users } = data;
</script>

<h1>users</h1>

<p>
	{#if !users}
		<p>no users</p>
	{:else if users}
		{#each users as user}
			<p>{user.email}</p>
		{/each}
	{/if}
</p>
