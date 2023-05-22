<script lang="ts">
	interface Data {
		createdAt: string;
		email: string;
		firstName: string;
		lastName: string;
		country: string;
		phone: string;
		ipAddress: string;
		lastAccessTime: string;
	}
	export let data: Data;
</script>

<div class="card">
	<h2 class="title">User Info</h2>
	<p class="content">Created At: {data.createdAt}</p>
	<p class="content">Email: {data.email}</p>
	<p class="content">Name: {data.firstName} {data.lastName}</p>
	<p class="content">Country: {data.country}</p>
	<p class="content">Phone: {data.phone}</p>
	<p class="content">IP Address: {data.ipAddress}</p>
	<p class="content">Last Access Time: {data.lastAccessTime}</p>
</div>

<style>
	.card {
		background-color: #fff;
		border-radius: 10px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		padding: 20px;
		margin: 10px;
		max-width: 400px;
		width: 100%;
	}

	.title {
		font-size: 24px;
		font-weight: bold;
		margin-bottom: 10px;
	}

	.content {
		font-size: 16px;
		line-height: 1.6;
	}
</style>
