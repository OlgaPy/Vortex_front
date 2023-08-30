import type {Delete, Get, Post, Put, Request} from "./types";

export const API_URL = '/v1';

const refreshTokens = async () => {
	const refreshToken = localStorage.getItem('refresh');

	if (refreshToken) {
		const response: Response = await post('/token/refresh', {
			refresh: localStorage.getItem('refresh'),
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
	const accessToken = localStorage.getItem('access');
	const options: RequestInit = {
		method,
		// credentials: "include",
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${accessToken}`
		},
	};

	if (params) {
		if (method === 'GET') {
			url += '?' + new URLSearchParams(params);
		} else {
			options.body = JSON.stringify(params);
		}
	}

	const response = await fetch(API_URL + url, options);

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
