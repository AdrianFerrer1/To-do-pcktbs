import { writable } from 'svelte/store';
import { pb } from '.././lib/pocketbase';
import { goto } from '$app/navigation';

export const myAuthStore = writable({
	user: null,
	loading: true,
	data: {}
});

pb.collection('users');
export const authHandlers = {
	signup: async (email: string, pass: string) => {
		await pb.collection('users').authWithPassword(email, pass); //o tambien goto("/register")
	},
	login: async () => {
		await goto('/login');
	},
	logout: async () => {
		await goto('/logout');
	}
};
