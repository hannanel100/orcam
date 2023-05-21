import { fetchUsers } from '../../lib/fetchUsers';

import type { PageLoad } from './$types';

export const load = (async ({ fetch, url }) => {
	console.log('🚀 ~ file: +page.server.ts:6 ~ load ~ url:', url.searchParams.get('limit'));
	const limit = Number(url.searchParams.get('limit')) || 10;
	const page = Number(url.searchParams.get('page')) || 0;

	const data = await fetchUsers(limit, page, fetch);
	return data;
}) satisfies PageLoad;
