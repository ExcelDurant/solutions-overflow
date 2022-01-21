import { writable } from 'svelte/store';
import { browser } from '$app/env';

export const isLoggedIn = writable(browser? JSON.parse(sessionStorage.getItem('isLoggedIn') || 'true'):false);
export const appUser = writable(browser? JSON.parse(sessionStorage.getItem('user') || '{}') : {});
export const bearerToken = writable(browser? sessionStorage.getItem('token'):'');
export function setAuth(user, loggedIn, token) {
    sessionStorage.setItem('user', JSON.stringify(user));
    appUser.set(user);
    sessionStorage.setItem('isLoggedIn', JSON.stringify(loggedIn));
    isLoggedIn.set(loggedIn);
    sessionStorage.setItem('token', JSON.stringify(token));
    bearerToken.set(token);
}
