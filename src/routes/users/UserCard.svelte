<script lang="ts">
	import type { User } from '$lib/types/';
	export let user: User;
	console.log({ user });
</script>

<div class="users-card">
	<p>{user.email}</p>
</div>

<style>
	.users-card {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50%;
		height: 100px;
		border: 1px solid #000;
		border-radius: 5px;
		margin: auto;
	}
</style>
