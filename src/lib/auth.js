import { writable } from 'svelte/store';

export const isLoggedIn = writable(true);
export const appUser = writable({});