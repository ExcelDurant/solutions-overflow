import { writable } from 'svelte/store';
import { browser } from '$app/env';
import type { User } from './utils';

export const isLoggedIn = writable(browser? JSON.parse(localStorage.getItem('isLoggedIn') || 'false'):false);
export const appUser = writable(browser? JSON.parse(localStorage.getItem('user') || '{}') : {}  as User);
export const bearerToken = writable(browser? JSON.parse(localStorage.getItem('token')):'');
export const profileUser = writable({} as User);
export function setAuth(user:User, loggedIn:boolean, token:string) {
    localStorage.setItem('user', JSON.stringify(user));
    appUser.set(user);
    localStorage.setItem('isLoggedIn', JSON.stringify(loggedIn));
    isLoggedIn.set(loggedIn);
    localStorage.setItem('token', JSON.stringify(token));
    bearerToken.set(token);
}
export function setUser(user:User) {
    localStorage.setItem('user', JSON.stringify(user));
    appUser.set(user);
}


