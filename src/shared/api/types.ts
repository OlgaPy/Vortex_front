export type Request = <T> (url: string, params: any, method: string) => Promise<T>;
export type Get = <T> (url: string, params?: Record<string, string>) => Promise<T>;
export type Post = <T> (url: string, params: Object) => Promise<T>;
export type Put = <T> (url: string, params: Object) => Promise<T>;
export type Delete = <T> (url: string, params: Object) => Promise<T>;
