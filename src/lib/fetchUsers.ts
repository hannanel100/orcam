import { error } from '@sveltejs/kit';
import { ORCAM_API_KEY } from '$env/static/private';
import type { User } from '$lib/types';
export type Data = {
	total: number;
	items: User[];
	page: string;
	size: string;
};
export async function fetchUsers(
	limit: number,
	skip: number,
	fetch: (input: URL | RequestInfo, init?: RequestInit | undefined) => Promise<Response>
) {
	if (limit > 100) {
		throw error(400, 'limit must be less than 100');
	}

	const response = await fetch(
		`https://admin.dev.orcam.io/api/v8/users?page=${skip}&size=${limit}&sort=email:desc`,
		{
			method: 'GET',
			headers: {
				Authorization: 'accessKey ' + ORCAM_API_KEY
			}
		}
	);
	const data: Data = await response.json();
	return data;
}
