import type {ApiConfig} from "../api/types";

export const apiConfig: ApiConfig = {
	API_URL: '/v1',
	TOKEN_REFRESH_PATH: '/token/refresh',
	authHeader: (accessToken: string) => `Bearer ${accessToken}`
};
