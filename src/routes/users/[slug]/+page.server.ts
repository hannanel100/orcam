import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { fetchUser } from '$lib/fetchUser';
import type { User } from '@prisma/client';
export const load = (async ({ params }) => {
	const user: User | null = await fetchUser(params.slug);

	if (user) {
		return user;
	}

	throw error(404, 'Not found');
}) satisfies PageServerLoad;
