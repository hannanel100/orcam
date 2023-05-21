import { error } from '@sveltejs/kit';
interface User {
	userId: string;
	hash: string;
	email: string;
	phone: string;
	identityId: string | null;
	firstName: string | null;
	lastName: string | null;
	ipAddress: string | null;
	lastAccessTime: string | null;
	country: string;
	customVersion: string | null;
	acceptedEula: boolean | null;
	createdAt: string;
	updatedAt: string;
	sfAccountId: string | null;
	consent: any; // Replace 'any' with the actual type if known
	rootAccountId: string;
	role: string | null;
	needConsent: boolean;
	loginToken: string;
	details: any[]; // Replace 'any' with the actual type if known
}
type Data = {
	total: number;
	items: User[];
	page: string;
	size: string;
};
export async function load({ url, fetch }) {
	const limit = Number(url.searchParams.get('limit')) || 10;
	const page = Number(url.searchParams.get('page')) || 0;
	async function fetchUsers(limit: number, skip: number) {
		if (limit > 100) {
			throw error(400, 'limit must be less than 100');
		}
		const response = await fetch(
			`https://admin.dev.orcam.io/api/v8/users?page=${skip}&size=${limit}&sort=email:desc`,
			{
				method: 'GET',
				headers: {
					Authorization: 'accessKey d5797433-f9e0-4c83-aba4-58cd1e3bab4a'
				}
			}
		);
		const data = await response.json();
		return data;
	}
	const data: Data = await fetchUsers(limit, page);
	return data;
}
