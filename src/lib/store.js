import { writable } from 'svelte/store';

export const showLogin = writable(false);
export const showSignup = writable(false);
export const showSuccess = writable(false);
export const successMessage = writable("");
export const showFailure = writable(false);
export const failureMessage = writable("");