import { fetchUsers } from '../../lib/fetchUsers';

import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, url }) => {
	const limit = Number(url.searchParams.get('limit')) || 10;

	const page = Number(url.searchParams.get('page')) || 0;

	const sort = url.searchParams.get('sort') || 'email:desc';

	const data = await fetchUsers(limit, page, sort, fetch);

	return data;
}) satisfies PageServerLoad;
