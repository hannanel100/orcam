// function that fetches user data from the API at https://admin.dev.orcam.io/api/v8/users/{userId}
import { ORCAM_API_KEY } from '$env/static/private';
export async function fetchUser(userId: string) {
	const res = await fetch(`https://admin.dev.orcam.io/api/v8/users/${userId}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `accessKey ${ORCAM_API_KEY}`
		}
	});
	const user = await res.json();
	return user;
}
