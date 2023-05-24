<script lang="ts">
	type Variant = 'primary' | 'secondary';
	type ButtonProps = {
		variant?: Variant;
		disabled?: boolean;
		onClick?: () => void;
		onMouseover?: () => void;
		onMouseleave?: () => void;
		onFocus?: () => void;
		onBlur?: () => void;
		size?: 'sm' | 'md' | 'lg' | 'default';
	};
	export let variant: ButtonProps['variant'] = 'primary';
	export let disabled: ButtonProps['disabled'] = false;
	export let onClick: ButtonProps['onClick'] = () => {};
	export let onMouseover: ButtonProps['onMouseover'] = () => {};
	export let onMouseleave: ButtonProps['onMouseleave'] = () => {};
	export let onFocus: ButtonProps['onFocus'] = () => {};
	export let onBlur: ButtonProps['onBlur'] = () => {};
	export let size: ButtonProps['size'] = 'default';
</script>

<button
	class={`btn ${variant} ${size}`}
	on:click={onClick}
	{disabled}
	on:mouseover={onMouseover}
	on:mouseleave={onMouseleave}
	on:focus={onFocus}
	on:blur={onBlur}
>
	<slot>Button</slot>
</button>

<style>
	.btn {
		border: none;
		border-radius: 1.25rem;
		padding: 0.5rem 1rem;
		font-size: var(--font-size);
		cursor: pointer;
		&:first-letter {
			text-transform: capitalize;
		}
		transition: all 0.3s ease-in-out;
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
		color: var(--accent-color);
	}
	.btn.sm {
		width: 60px;
	}
	.btn.md {
		width: 80px;
	}
	.btn.lg {
		width: 100px;
	}
</style>
