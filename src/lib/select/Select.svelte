<script lang="ts">
	export let options: string[] | number[] = [];
	// onchange should be optional
	export let onChange: () => void;
	export let value: number | string | undefined;
	let formattedValue: string;
	const formatValue = (value: number | string | undefined) => {
		if (typeof value === 'number') {
			formattedValue = value.toString();
		} else if (typeof value === 'string') {
			// value will be like this: 'firstName:asc' turn to this: 'First Name: Ascending'
			let [key, order] = value.split(':');
			let formattedKey = key
				.split(/(?=[A-Z])/)
				.map((word) => word[0].toUpperCase() + word.slice(1))
				.join(' ');
			let formattedOrder = order === 'asc' ? 'Ascending' : 'Descending';
			formattedValue = `${formattedKey}: ${formattedOrder}`;
		} else {
			formattedValue = '';
		}
		return formattedValue;
	};
</script>

<select bind:value on:change={onChange} class="select">
	{#each options as option}
		<option value={option}>{formatValue(option)}</option>
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
