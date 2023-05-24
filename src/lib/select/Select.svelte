<script lang="ts">
	type Option = {
		value: string;
		text: string;
		selected: boolean;
	};
	export let options: Option[] = [];
	export let onChange = () => {};
	export let value: string | number;
</script>

<select bind:value on:change={onChange} class="select">
	{#each options as option}
		<option value={option.value} selected={option.selected}>{option.text}</option>
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
