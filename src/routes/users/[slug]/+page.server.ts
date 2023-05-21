import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { fetchUser } from '$lib/fetchUser';
import type { User } from '$lib/types';

export const load = (async ({ params }) => {
	const user: User = await fetchUser(params.slug);

	if (user) {
		return user;
	}

	throw error(404, 'Not found');
}) satisfies PageServerLoad;
