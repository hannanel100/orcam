import { writable } from 'svelte/store';

export const totalPages = writable(1);

export const currentPage = writable(1);

export const pageSize = writable(10);
