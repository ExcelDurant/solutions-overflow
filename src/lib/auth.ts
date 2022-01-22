import { writable } from 'svelte/store';
import { browser } from '$app/env';
import type { User } from './utils';

export const isLoggedIn = writable(browser? JSON.parse(sessionStorage.getItem('isLoggedIn') || 'false'):false);
export const appUser = writable(browser? JSON.parse(sessionStorage.getItem('user') || '{}') : {}  as User);
export const bearerToken = writable(browser? sessionStorage.getItem('token'):'');
export function setAuth(user:User, loggedIn:boolean, token:string) {
    sessionStorage.setItem('user', JSON.stringify(user));
    appUser.set(user);
    sessionStorage.setItem('isLoggedIn', JSON.stringify(loggedIn));
    isLoggedIn.set(loggedIn);
    sessionStorage.setItem('token', JSON.stringify(token));
    bearerToken.set(token);
}
export function setUser(user:User) {
    sessionStorage.setItem('user', JSON.stringify(user));
    appUser.set(user);
}


