<script lang="ts">
	import { goto } from '$app/navigation';
	import { totalPages, currentPage, pageSize } from '$lib/stores/pages';
	import { page } from '$app/stores';
	import Fa from 'svelte-fa/src/fa.svelte';
	import {
		faArrowLeft,
		faArrowLeftLong,
		faArrowRight,
		faArrowRightLong
	} from '@fortawesome/free-solid-svg-icons';
	$totalPages;
	$currentPage;
	$pageSize;
	export let totalItems: number;
	$: totalPages.set(Math.ceil(totalItems / $pageSize) - 1);
	$: currentPage.set(Number($page.url.searchParams.get('page')) || 1);
	let numOfPagesLinks = 5;
	let innerWidth = 0;
	$: {
		if (innerWidth < 768) {
			numOfPagesLinks = 2;
		} else {
			numOfPagesLinks = 5;
		}
	}
	function reloadPage() {
		goto(`/users?page=${$currentPage}&limit=${$pageSize}`);
	}
</script>

<svelte:window bind:innerWidth on:change={reloadPage} />
<div class="pagination-select-container">
	<select bind:value={$pageSize} on:change={() => pageSize.set($pageSize)}>
		{#each [10, 20, 50, 100] as _, i}
			<option value={_}>{_}</option>
		{/each}
	</select>
	<div class="pagination-container">
		{#if $currentPage - 50 > 0}
			<a href={`/users?page=${$currentPage - 50}&limit=${$pageSize}`} class="tooltip">
				<Fa icon={faArrowLeftLong} />

				<span class="tooltiptext">Back 50 pages</span></a
			>
		{/if}
		{#if $currentPage - 10 > 0}
			<a href={`/users?page=${$currentPage - 10}&limit=${$pageSize}`} class="tooltip">
				<Fa icon={faArrowLeft} />
				<span class="tooltiptext">Back 10 pages</span></a
			>
		{/if}
		{#if $currentPage > 5}
			<a href={`/users?page=1&limit=${$pageSize}`} class="tooltip"
				>1
				<span class="tooltiptext">First page</span></a
			>
			<span>...</span>
		{/if}
		{#each Array.from({ length: $totalPages }) as _, i}
			<!-- only show the previous 5 if they exist and the next five if they exist -->
			{#if i + 1 >= $currentPage - numOfPagesLinks && i + 1 <= $currentPage + numOfPagesLinks}
				<a
					href={`/users?page=${i + 1}&limit=${$pageSize}`}
					data-sveltekit-preload-data="hover"
					class={`${$currentPage === i + 1 ? 'active' : ''}`}>{i + 1}</a
				>
			{/if}
		{/each}
		<!-- last page, if not currently on it or within range to show it -->
		{#if $currentPage < $totalPages - 5}
			<span>...</span>
			<a href={`/users?page=${$totalPages}&limit=${$pageSize}`} class="tooltip"
				>{$totalPages}
				<span class="tooltiptext">Last page</span></a
			>
		{/if}
		<!-- add an arrow if not in the end of the list, arrow will skip 10 pages -->
		{#if $currentPage + 10 < $totalPages}
			<a href={`/users?page=${$currentPage + 10}&limit=${$pageSize}`} class="tooltip">
				<Fa icon={faArrowRight} />
				<span class="tooltiptext">Skip 10 pages</span></a
			>
		{/if}
		{#if $currentPage + 50 < $totalPages}
			<a href={`/users?page=${$currentPage + 50}&limit=${$pageSize}`} class="tooltip">
				<Fa icon={faArrowRightLong} />
				<span class="tooltiptext">Skip 50 pages</span></a
			>
		{/if}
	</div>
</div>

<style>
	.pagination-select-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 1rem;
		padding-top: 4rem;
		padding-bottom: 4rem;
	}
	.pagination-select-container select {
		padding: 0.5rem 1rem;
		border-radius: 5px;
		background-color: #000;
		color: #fff;
		border: none;
	}
	.pagination-select-container select:hover {
		color: var(--secondary-accent-color);
	}
	.pagination-container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 1rem;
	}
	.pagination-container a {
		text-decoration: none;
		color: #000;
		display: grid;
		place-items: center;
		width: 2rem;
		height: 2rem;

		border-radius: 5px;
		transition: all 0.2s ease-in-out;
	}
	.pagination-container a:hover {
		background-color: #000;
		color: #fff;
	}
	/* class to highlight current page*/
	.pagination-container a.active {
		background-color: #000;
		color: #fff;
	}
	.tooltip {
		position: relative;
		display: inline-block;
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
	@media (max-width: 768px) {
		.pagination-container {
			justify-content: start;
			gap: 0.5rem;
			padding-left: 1rem;
		}
		.pagination-container a {
			width: 1.25rem;
			height: 1.25rem;
			padding: 0.15rem;
		}
	}
</style>
