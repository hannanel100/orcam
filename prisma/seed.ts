// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
import userData from './users.json' assert { type: 'json' };

const prisma = new PrismaClient();

async function main() {
	console.log(`Start seeding ...`);

	for (const p of userData) {
		const user = await prisma.user.create({
			data: {
				userId: p.userId,
				hash: p.hash,
				email: p.email,
				phone: p.phone,
				identityId: p.identityId,
				firstName: p.firstName,
				lastName: p.lastName,
				ipAddress: p.ipAddress,
				lastAccessTime: p.lastAccessTime,
				country: p.country,
				customVersion: p.customVersion,
				acceptedEula: p.acceptedEula,
				createdAt: p.createdAt,
				updatedAt: p.updatedAt,
				sfAccountId: p.sfAccountId,
				consent: p.consent,
				rootAccountId: p.rootAccountId,
				role: p.role,
				needConsent: p.needConsent,
				loginToken: p.loginToken,
				details: {
					create: p.details.map((d) => ({
						userId: d.userId,
						createdAt: d.createdAt,
						updatedAt: d.updatedAt,
						key: d.key,
						value: d.value
					}))
				}
			}
		});
		console.log(`Created user with id: ${user.userId}`);
	}
	console.log(`Seeding finished.`);
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
