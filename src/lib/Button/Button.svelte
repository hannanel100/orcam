<script lang="ts">
	type Variant = 'primary' | 'secondary';
	type ButtonProps = {
		variant?: Variant;
		disabled?: boolean;
		onClick?: () => void;
	};
	export let variant: ButtonProps['variant'] = 'primary';
	export let disabled: ButtonProps['disabled'] = false;
	export let onClick: ButtonProps['onClick'] = () => {};
</script>

<button class={`btn ${variant}`} on:click={onClick} {disabled}>
	<slot>Button</slot>
</button>

<style>
	.btn {
		border: none;
		border-radius: 0.25rem;
		padding: 0.5rem 1rem;
		font-size: var(--font-size);
		cursor: pointer;
		&:first-letter {
			text-transform: capitalize;
		}
		transition: opacity 0.3s ease-in-out;
	}
	.primary {
		background-color: #000;
		color: #fff;
	}
	.secondary {
		background-color: #fff;
		color: #000;
	}
	.btn:hover {
		opacity: 0.8;
	}
</style>
