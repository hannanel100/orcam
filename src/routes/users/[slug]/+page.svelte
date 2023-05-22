<script lang="ts">
	// if property is null, return string 'N/A'
	import Button from '$lib/Button/Button.svelte';
	import type { PageData } from './$types';
	const formatData = (property: string | null) => {
		return property ? property : 'N/A';
	};
	const formatDate = (date: string | null, includeTime: boolean = false) => {
		if (!date) return 'N/A';
		if (includeTime)
			return new Date(date).toLocaleString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				hour: 'numeric',
				minute: 'numeric',
				second: 'numeric'
			});
		return new Date(date).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	};

	export let data: PageData;

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
	// format data
	const formattedData: Data = {
		createdAt: formatDate(data.createdAt),
		email: formatData(data.email),
		firstName: formatData(data.firstName),
		lastName: formatData(data.lastName),
		country: formatData(data.country),
		phone: formatData(data.phone),
		ipAddress: formatData(data.ipAddress),
		lastAccessTime: formatDate(data.lastAccessTime, true)
	};

	const { createdAt, email, firstName, lastName, country, phone, ipAddress, lastAccessTime } =
		formattedData;
</script>

<div class="page-container">
	<div class="user-container">
		<p><strong>Email:</strong> {email}</p>
		<p><strong>First Name: </strong><span class="capitalize"> {firstName}</span></p>
		<p><strong>Last Name: </strong> <span class="capitalize"> {lastName}</span></p>
		<p><strong>Phone:</strong> {phone}</p>
		<p><strong>Country:</strong> {country}</p>
		<p><strong>Date Created:</strong> {createdAt}</p>
		<p><strong>Last Access Time:</strong> {lastAccessTime}</p>
		<p><strong>Ip Address:</strong> {ipAddress}</p>
	</div>
	<a href="/users"> <Button>Back</Button></a>
</div>

<style>
	.page-container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 2rem;
	}
	.user-container {
		display: flex;
		flex-direction: column;
		background-color: #fff;
		border: 1px solid rgb(99, 96, 96);
		border-radius: 5px;
		padding: 1rem;
		box-shadow: 4px 4px 13px 0px rgba(135, 130, 130, 0.75);
		-webkit-box-shadow: 4px 4px 13px 0px rgba(135, 130, 130, 0.75);
		-moz-box-shadow: 4px 4px 13px 0px rgba(135, 130, 130, 0.75);
	}
	.capitalize {
		text-transform: capitalize;
	}
	.user-container p strong {
		font-weight: 700;
	}
	@media (min-width: 768px) {
		.user-container {
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-between;
		}
		.user-container p {
			width: 48%;
		}
	}
</style>
