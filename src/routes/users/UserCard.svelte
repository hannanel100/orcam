<script lang="ts">
	import type { User } from '$lib/types/';
	import { goto } from '$app/navigation';
	export let user: User;
	console.log({ user });
	const handleNavigation = () => {
		goto(`/users/${user.userId}`);
	};
</script>

<div class="users-card">
	<a href="/users/{user.userId}">
		<p>{user.email}</p>
	</a>
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
		&:hover {
			background-color: #eee;
			scale: 1.1;
		}
	}
	.users-card a {
		text-decoration: none;
		color: #000;
	}
</style>
