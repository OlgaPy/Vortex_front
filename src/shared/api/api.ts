import type {ApiConfig, Delete, Get, Post, Put, Request} from './types';

let apiConfig: ApiConfig | null = null;

export const setApiConfig = (config: ApiConfig) => {
	apiConfig = config;
}

const refreshTokens = async () => {
	if (!apiConfig) throw new Error('Api config not provided')

	const refreshToken = localStorage.getItem('refresh');

	if (refreshToken) {
		const response: Response = await post(apiConfig.TOKEN_REFRESH_PATH, {
			refresh: localStorage.getItem('refresh')
		});

		if (response.status === 200) {
			const result = await response.json();
			localStorage.setItem('access', result.access);
			localStorage.setItem('refresh', result.refresh);
		} else {
			throw new Error('Failed to update tokens: ' + response.statusText);
		}
	} else {
		throw new Error('Unauthorized');
	}
};

const request: Request = async (url, params, method) => {
	if (!apiConfig) throw new Error('Api config not provided')

	const accessToken = localStorage.getItem('access');
	const options: RequestInit = {
		method,
		// credentials: "include",
		headers: {
			'Content-Type': 'application/json',
			Authorization: accessToken ? apiConfig.authHeader(accessToken) : ''
		}
	};

	if (params) {
		if (method === 'GET') {
			url += '?' + new URLSearchParams(params);
		} else {
			options.body = JSON.stringify(params);
		}
	}

	const response = await fetch(apiConfig.API_URL + url, options);

	if (response.status === 401) {
		await refreshTokens();
		return request(url, params, method);
	}

	return await response.json();
};

const get: Get = (url, params) => {
	return request(url, params, 'GET');
};
const post: Post = (url, params) => {
	return request(url, params, 'POST');
};
const put: Put = (url, params) => {
	return request(url, params, 'PUT');
};
const remove: Delete = (url, params) => {
	return request(url, params, 'DELETE');
};

export default {
	request,
	get,
	post,
	put,
	remove
};
