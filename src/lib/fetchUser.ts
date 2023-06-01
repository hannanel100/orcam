import { prisma } from '../../prisma/db';
export async function fetchUser(hash: string) {
	const user = await prisma.user.findUnique({
		where: {
			hash
		}
	});

	return user;
}
