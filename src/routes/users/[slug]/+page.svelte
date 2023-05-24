<script lang="ts">
	import type { ComponentProps } from 'svelte';

	import SingleUserCard from '$lib/single-user-card/SingleUserCard.svelte';
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
	// format data
	export const formattedData: Data = {
		userId: formatData(data.userId),
		hash: formatData(data.hash),
		createdAt: formatDate(data.createdAt),
		email: formatData(data.email),
		firstName: formatData(data.firstName),
		lastName: formatData(data.lastName),
		country: formatData(data.country),
		phone: formatData(data.phone),
		ipAddress: formatData(data.ipAddress),
		lastAccessTime: formatDate(data.lastAccessTime, true),
		identityId: formatData(data.identityId),
		customVersion: formatData(data.customVersion),
		updatedAt: formatDate(data.updatedAt, true),
		sfAccountId: formatData(data.sfAccountId),
		consent: formatData(data.consent),
		rootAccountId: formatData(data.rootAccountId),
		role: formatData(data.role),
		needConsent: data.needConsent,
		loginToken: formatData(data.loginToken)
	};
</script>

<div class="page-container">
	<SingleUserCard {formattedData} />
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
