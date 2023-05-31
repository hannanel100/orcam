import { fetchUsers } from '../../lib/fetchUsers';

import type { PageServerLoad } from './$types';

export const load = (async ({ url }) => {
	const limit = Number(url.searchParams.get('limit')) || 10;
	if (limit > 100) throw new Error('Limit must be less than 100');
	const page = Number(url.searchParams.get('page')) || 0;
	if (page < 0) throw new Error('Page must be greater than 0');

	const sort = url.searchParams.get('sort') || 'email:desc';

	const data = await fetchUsers(limit, page, sort);

	return data;
}) satisfies PageServerLoad;
