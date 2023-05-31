import { writable } from 'svelte/store';
import type { User } from '@prisma/client';

export const users = writable<User[] | []>([]);
