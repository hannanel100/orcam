<script>
	export let currentPage = 1;
	export let pageSize = 10;
	export let totalPages = 0;
</script>

<div class="pagination-container">
	{#if currentPage - 50 > 0}
		<a href={`/users?page=${currentPage - 50}&limit=${pageSize}`} class="tooltip"
			>&#8592;&#8592;
			<span class="tooltiptext">Back 50 pages</span></a
		>
	{/if}
	{#if currentPage - 10 > 0}
		<a href={`/users?page=${currentPage - 10}&limit=${pageSize}`} class="tooltip"
			>&#8592;
			<span class="tooltiptext">Back 10 pages</span></a
		>
	{/if}
	{#each Array.from({ length: totalPages }) as _, i}
		<!-- only show the previous 5 if they exist and the next five if they exist -->
		{#if i + 1 >= currentPage - 5 && i + 1 <= currentPage + 5}
			<a
				href={`/users?page=${i + 1}&limit=${pageSize}`}
				class={`${currentPage === i + 1 ? 'active' : ''}`}>{i + 1}</a
			>
		{/if}
	{/each}
	<!-- add an arrow if not in the end of the list, arrow will skip 10 pages -->
	{#if currentPage + 10 < totalPages}
		<a href={`/users?page=${currentPage + 10}&limit=${pageSize}`} class="tooltip"
			>&#8594;
			<span class="tooltiptext">Skip 10 pages</span></a
		>
	{/if}
	{#if currentPage + 50 < totalPages}
		<a href={`/users?page=${currentPage + 50}&limit=${pageSize}`} class="tooltip">
			&#8594;&#8594;
			<span class="tooltiptext">Skip 50 pages</span></a
		>
	{/if}
</div>

<style>
	.pagination-container {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		padding-top: 4rem;
		padding-bottom: 4rem;
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
	.tooltip {
		position: relative;
		display: inline-block;
		border-bottom: 1px dotted black;
	}

	.tooltip .tooltiptext {
		visibility: hidden;
		width: 120px;
		background-color: black;
		color: #fff;
		text-align: center;
		border-radius: 6px;
		padding: 5px 0;

		/* Position the tooltip */
		position: absolute;
		top: -40px;
		left: -40px;
		z-index: 1;
	}

	.tooltip:hover .tooltiptext {
		visibility: visible;
	}
</style>
