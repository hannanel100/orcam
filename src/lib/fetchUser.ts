import { PrismaClient } from '@prisma/client';
export async function fetchUser(hash: string) {
	const prisma = new PrismaClient();
	const user = await prisma.user.findUnique({
		where: {
			hash
		}
	});

	return user;
}
