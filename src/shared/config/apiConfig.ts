export const API_URL = '/v1';

export const tokenRefreshPath = '/token/refresh'

export const authorizationHeader = (accessToken: string) => `Bearer ${accessToken}`
