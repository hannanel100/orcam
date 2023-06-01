import { error } from '@sveltejs/kit';
import type { User } from '@prisma/client';
import { prisma } from '../../prisma/db';

export type Data = {
	total: number;
	items: User[];
	page: string;
	size: string;
};
export async function fetchUsers(limit: number, skip: number, sort: string) {
	const [sortField, sortOrder] = sort.split(':');
	if (limit > 100) {
		throw error(400, 'limit must be less than 100');
	}

	const data: Data = {
		total: 0,
		items: [],
		page: '0',
		size: '0'
	};
	const users = await prisma.user.findMany({
		skip,
		take: limit,
		orderBy: {
			[sortField]: sortOrder
		}
	});
	const totalUsers = await prisma.user.count();
	data.items = users;
	data.total = totalUsers;
	data.page = skip.toString();
	data.size = limit.toString();
	console.log('🚀 ~ file: fetchUsers.ts:35 ~ fetchUsers ~ data:', data);

	return data;
}
