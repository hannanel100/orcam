<script lang="ts">
	export let options: string[] | number[] = [];
	// onchange should be optional
	export let onChange: () => void;
	export let value: number | string | undefined;
	$: console.log('value: ', value);
</script>

<select bind:value on:change={onChange} class="select">
	{#each options as option}
		<option value={option}>{option}</option>
	{/each}
</select>

<style>
	.select {
		padding: 0.5rem 1rem;
		border-radius: 5px;
		background-color: #000;
		color: #fff;
		border: none;
	}
	.select:hover {
		color: var(--secondary-accent-color);
	}
</style>
