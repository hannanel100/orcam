import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { fetchUser } from '$lib/fetchUser';

export const load = (async ({ params }) => {
    const post = await fetchUser(params.slug);

    if (post) {
        return post;
    }

    throw error(404, 'Not found');
}) satisfies PageServerLoad;