<script lang="ts">
	interface Data {
		userId: string;
		hash: string;
		createdAt: string;
		email: string;
		firstName: string;
		lastName: string;
		country: string;
		phone: string;
		ipAddress: string;
		lastAccessTime: string;
		identityId: string;
		customVersion: string;
		updatedAt: string;
		sfAccountId: string;
		consent: string;
		rootAccountId: string;
		role: string;
		needConsent: boolean;
		loginToken: string;
	}
	export let formattedData: Data;
</script>

<h2 class="title">User Info</h2>
<div class="card">
	<p class="content">
		<strong>User Id:</strong>
		{formattedData.userId}
	</p>
	<p class="content">
		<strong>Hash:</strong>
		{formattedData.hash}
	</p>
	<p class="content">
		<strong>Created At:</strong>
		{formattedData.createdAt}
	</p>
	<p class="content">
		<strong>Email:</strong>
		{formattedData.email}
	</p>
	<p class="content">
		<strong>First Name:</strong>
		{formattedData.firstName}
	</p>
	<p class="content">
		<strong>Last Name:</strong>
		{formattedData.lastName}
	</p>
	<p class="content">
		<strong>Country:</strong>
		{formattedData.country}
	</p>
	<p class="content">
		<strong>Phone:</strong>
		{formattedData.phone}
	</p>
	<p class="content">
		<strong>IP Address:</strong>
		{formattedData.ipAddress}
	</p>
	<p class="content">
		<strong>Last Access Time:</strong>
		{formattedData.lastAccessTime}
	</p>
	<p class="content">
		<strong>Identity Id:</strong>
		{formattedData.identityId}
	</p>
	<p class="content">
		<strong>custom Version:</strong>
		{formattedData.customVersion}
	</p>
	<p class="content">
		<strong>Updated At:</strong>
		{formattedData.updatedAt}
	</p>
	<p class="content">
		<strong>sf Account Id:</strong>
		{formattedData.sfAccountId}
	</p>
	<p class="content">
		<strong>Consent:</strong>
		{formattedData.consent}
	</p>
	<p class="content">
		<strong>Root Account Id:</strong>
		{formattedData.rootAccountId}
	</p>
	<p class="content">
		<strong>Role:</strong>
		{formattedData.role}
	</p>
	<p class="content">
		<strong>Need Consent:</strong>
		{formattedData.needConsent}
	</p>
	<p class="content">
		<strong>Login Token:</strong>
		{formattedData.loginToken}
	</p>
</div>

<style>
	.card {
		background-color: #fff;
		border-radius: 10px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		padding: 20px;

		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0 2rem;
	}

	.title {
		font-size: 24px;
		font-weight: bold;
		margin-bottom: 10px;
	}

	.content {
		font-size: clamp(12px, 1.5vw, 16px);
		line-height: 1.6;
		display: flex;
		gap: 1rem;
	}
	@media (max-width: 768px) {
		.card {
			grid-template-columns: 1fr;
		}
		.content {
			flex-direction: column;
			overflow: hidden;
			word-wrap: break-word;
		}
	}
</style>
