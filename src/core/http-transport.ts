import { queryString } from '../utils/mydash';

enum METHODS {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	DELETE = 'DELETE'
}

type OptionsType = {
	method?: keyof typeof METHODS;
	headers?: Record<string, string>;
	data?: unknown;
	timeout?: number;
};

type HTTPMethod = (url: string, options?: OptionsType) => Promise<unknown>

export default class HTTPTransport {
	protected BASE_URL = 'https://ya-praktikum.tech/api/v2';

	protected path: string;

	constructor(path: string) {
		this.path = `${this.BASE_URL}${path}`
	}

	get: HTTPMethod = (url, options = {}) => {
		const data = options?.data;

		if (data) {
			return this.request(`${this.path}${url}?${queryString(options.data as Record<string, unknown>)}`, { ...options, method: METHODS.GET }, options.timeout);
		}

		return this.request(`${this.path}${url}`, { ...options, method: METHODS.GET }, options.timeout);
	};

	post: HTTPMethod = (url, options = {}) => {
		return this.request(`${this.path}${url}`, { ...options, method: METHODS.POST }, options.timeout);
	};

	put: HTTPMethod = (url, options = {}) => {
		return this.request(`${this.path}${url}`, { ...options, method: METHODS.PUT }, options.timeout);
	};

	delete: HTTPMethod = (url, options = {}) => {
		return this.request(`${this.path}${url}`, { ...options, method: METHODS.DELETE }, options.timeout);
	};

	request = (url: string, options: OptionsType, timeout: number = 5000) => {
		const { method, data, headers } = options;

		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();

			if (method) {
				xhr.open(method, url);
			}

			if (headers) {
				for (const key in headers) {
					xhr.setRequestHeader(key, headers[key])
				}
			}

			if (!(data instanceof FormData)) {
				xhr.setRequestHeader('Content-Type', 'application/json');
			}

			xhr.onreadystatechange = () => {
				if (xhr.readyState === XMLHttpRequest.DONE) {
					if (xhr.status === 0 || (xhr.status >= 200 && xhr.status < 400)) {
						resolve(xhr.response);
					} else {
						reject(xhr.response);
					}
				}
			};

			xhr.timeout = timeout;

			xhr.withCredentials = true;
			xhr.responseType = 'json';

			xhr.onerror = reject;
			xhr.onabort = reject;
			xhr.ontimeout = reject;

			if (method === METHODS.GET || !data) {
				xhr.send();
			} else if (data) {
				xhr.send(data instanceof FormData ? data : JSON.stringify(data));
			}
		})
	};
}
