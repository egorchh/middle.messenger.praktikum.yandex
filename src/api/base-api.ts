import HTTPTransport from '../core/http-transport';

export abstract class BaseApi {
	protected http: HTTPTransport;

	protected constructor(path: string) {
		this.http = new HTTPTransport(path);
	}
}
