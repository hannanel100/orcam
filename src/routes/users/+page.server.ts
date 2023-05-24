import { fetchUsers } from '../../lib/fetchUsers';

import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, url }) => {
	const limit = Number(url.searchParams.get('limit')) || 10;
	console.log('🚀 ~ file: +page.server.ts:7 ~ load ~ limit:', limit);
	const page = Number(url.searchParams.get('page')) || 0;
	console.log('🚀 ~ file: +page.server.ts:9 ~ load ~ page:', page);

	const data = await fetchUsers(limit, page, fetch);
	console.log('🚀 ~ file: +page.server.ts:10 ~ load ~ data:', data);
	return data;
}) satisfies PageServerLoad;
