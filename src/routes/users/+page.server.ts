import { fetchUsers } from '../../lib/fetchUsers';

import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, url }) => {
	const limit = Number(url.searchParams.get('limit')) || 10;

	const page = Number(url.searchParams.get('page')) || 0;

	const data = await fetchUsers(limit, page, fetch);

	return data;
}) satisfies PageServerLoad;
