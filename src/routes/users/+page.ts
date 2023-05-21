import { fetchUsers } from '../../lib/fetchUsers';

export async function load({ url, fetch }) {
	const limit = Number(url.searchParams.get('limit')) || 10;
	const page = Number(url.searchParams.get('page')) || 0;

	const data = await fetchUsers(limit, page, fetch);
	return data;
}
