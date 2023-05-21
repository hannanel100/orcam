import '@testing-library/jest-dom';
import { it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import UserCard from './UserCard.svelte';
const mockUser = {
	userId: '6120622f-5f71-4002-892e-30446532e180',
	hash: '3246bbee76cb552d304456707fe6fa4abd8b4e5a826f0b734761d569c110b72e',
	email: 'test_user_del_21662288491242@orcam.com',
	phone: '+97252224219',
	identityId: null,
	firstName: null,
	lastName: null,
	ipAddress: null,
	lastAccessTime: null,
	country: 'us',
	customVersion: null,
	acceptedEula: null,
	createdAt: '2022-09-04T10:48:12.4812',
	updatedAt: '2022-09-04T10:48:12.4812',
	sfAccountId: null,
	consent: null,
	rootAccountId: '6120622f-5f71-4002-892e-30446532e180',
	role: null,
	needConsent: false,
	loginToken: '13d398ea-775d-4d67-bee7-7bca1e95be6f',
	details: []
};
it('should show a users email address', () => {
	render(UserCard, { user: mockUser });

	expect(screen.getByText(mockUser.email));
});
