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

export async function load() {
	try {
		const url = 'https://admin.dev.orcam.io/api/v8/users?page=0&size=10&sort=email:desc';
		const headers = {
			Authorization: 'accessKey d5797433-f9e0-4c83-aba4-58cd1e3bab4a'
		};

		const response = await fetch(url, {
			method: 'GET',
			headers: headers
		});

		if (!response.ok) {
			throw new Error('Request failed');
		}

		const data: Data = await response.json();
		// console.log(data);
		return data;
	} catch (error) {
		console.error(error);
	}
}
