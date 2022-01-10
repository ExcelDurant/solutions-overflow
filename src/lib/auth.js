import { writable } from 'svelte/store';

export const isLoggedIn = writable(false);
export const appUser = writable(JSON.parse(sessionStorage.getItem('user') || '{}'));
export const bearerToken = writable(sessionStorage.getItem('token')||'');