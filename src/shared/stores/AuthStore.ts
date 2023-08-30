import { ref } from 'vue';
import { defineStore } from 'pinia';
import api from '@/shared/api/api';

export type TokenData = { access: string; refresh: string };

const setTokens = (access: string, refresh: string) => {
	localStorage.setItem('refresh', refresh);
	localStorage.setItem('access', access);
};

export const useAuthStore = defineStore('themeStore', () => {
	const refreshToken = ref(localStorage.getItem('refresh'));
	const accessToken = ref(localStorage.getItem('access'));

	const login = async (username: string, password: string) => {
		const { refresh, access } = await api.post<TokenData>('/token/', {
			username: username,
			password: password
		});

		setTokens(refresh, access);
		refreshToken.value = refresh;
		accessToken.value = access;
	};

	return {
		refreshToken,
		accessToken,
		login
	};
});
