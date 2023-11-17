import { queryStringify } from './utilities/queryStringify';

const METHODS = {
	GET: 'GET',
	POST: 'POST',
	PUT: 'PUT',
	DELETE: 'DELETE'
};

type OptionsType = {
	method?: string;
	headers?: Record<string, string>;
	data?: unknown;
	timeout?: number;
};

export default class HTTPTransport {
	public get = (url: string, options: OptionsType = {}) => {
		return this.request(url, { ...options, method: METHODS.GET }, options.timeout);
	};

	public post = (url: string, options: OptionsType = {}) => {
		return this.request(url, { ...options, method: METHODS.POST }, options.timeout);
	};

	public put = (url: string, options: OptionsType = {}) => {
		return this.request(url, { ...options, method: METHODS.PUT }, options.timeout);
	};

	public delete = (url: string, options: OptionsType = {}) => {
		return this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);
	};

	request = (url: string, options: OptionsType, timeout: number = 5000) => {
		const { method, data, headers } = options;

		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();

			if (method === METHODS.GET && data) {
				xhr.open(method, `${url}${queryStringify(data as Record<string, unknown>)}`);
			} else if (method) {
				xhr.open(method, url);
			}

			for (const key in headers) {
				xhr.setRequestHeader(key, headers[key])
			}

			xhr.onload = function () {
				resolve(xhr);
			}

			xhr.timeout = timeout;

			xhr.onerror = reject;
			xhr.onabort = reject;
			xhr.ontimeout = reject;

			if (method === METHODS.GET) {
				xhr.send();
			} else if (data) {
				xhr.send(data as XMLHttpRequestBodyInit);
			}
		})
	};
}
