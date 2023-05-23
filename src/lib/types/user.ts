export interface User {
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
	consent: string | null;
	rootAccountId: string;
	role: string | null;
	needConsent: boolean;
	loginToken: string;
	details: string[];
}
