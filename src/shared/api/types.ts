export type Request = (url: string, params: any, method: string) => Promise<Response>;
export type Get = (url: string, params: Record<string, string>) => Promise<Response>;
export type Post = (url: string, params: Object) => Promise<Response>;
export type Put = (url: string, params: Object) => Promise<Response>;
export type Delete = (url: string, params: Object) => Promise<Response>;

export type TokenData = {
    access: string,
    refresh: string,
}
