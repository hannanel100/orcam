import { it, expect, vi } from 'vitest';
import { fetchUsers } from './fetchUsers';
import { PUBLIC_ORCAM_API_KEY } from '$env/static/public';

function createFetchResponse(data: any) {
	return { json: () => new Promise((resolve) => resolve(data)) };
}

it('should fetch users', async () => {
	const usersRespone = {
		total: 1,
		items: [
			{
				userId: '1',
				hash: '1',
				email: '1',
				phone: '1',
				identityId: null,
				firstName: null,
				lastName: null,
				ipAddress: null,
				lastAccessTime: null,
				country: '1',
				customVersion: null,
				acceptedEula: null,
				createdAt: '1',
				updatedAt: '1',
				sfAccountId: null,
				consent: {},
				rootAccountId: '1',
				role: null,
				needConsent: false,
				loginToken: '1',
				details: []
			}
		],
		page: '1',
		size: '1'
	};
	const fetch = vi.fn().mockResolvedValue(createFetchResponse(usersRespone));

	const users = await fetchUsers(10, 0, fetch);
	expect(fetch).toHaveBeenCalledWith(
		`https://admin.dev.orcam.io/api/v8/users?page=0&size=10&sort=email:desc`,
		{
			method: 'GET',
			headers: {
				Authorization: 'accessKey ' + PUBLIC_ORCAM_API_KEY
			}
		}
	);
});
