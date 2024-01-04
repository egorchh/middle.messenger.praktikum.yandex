import { describe, test } from 'mocha';
import sinonChai from 'sinon-chai';
import { use, expect } from 'chai';
import { createSandbox, SinonStub } from 'sinon';
import HTTPTransport from './http-transport.ts';

describe('HTTP-Transport', () => {
	use(sinonChai);
	const sandbox = createSandbox();
	let http: HTTPTransport;
	let request: SinonStub;

	beforeEach(() => {
		http = new HTTPTransport('');
		request = sandbox.stub(http, 'request' as keyof typeof http).callsFake(() => Promise.resolve())
	});

	afterEach(() => {
		sandbox.restore();
	});

	describe('requests', () => {
		test('GET', () => {
			http.get('/test');

			expect(request).to.have.been.calledWith(`${http.BASE_URL}/test`, { method: 'GET' });
		});

		test('POST', () => {
			http.post('/test');

			expect(request).to.have.been.calledWith(`${http.BASE_URL}/test`, { method: 'POST' });
		});

		test('PUT', () => {
			http.put('/test');

			expect(request).to.have.been.calledWith(`${http.BASE_URL}/test`, { method: 'PUT' });
		});

		test('DELETE', () => {
			http.delete('/test');

			expect(request).to.have.been.calledWith(`${http.BASE_URL}/test`, { method: 'DELETE' });
		});
	});

	describe('objectToQuery', () => {
		test('object to query', () => {
			http.get('', { data: { name: 'Egor', nickname: 'egorchh' } });

			expect(request).calledWithMatch('?name=Egor&nickname=egorchh', { method: 'GET' });
		});

		test('object with strings and numbers to query', () => {
			http.get('', { data: { name: 'Egor', age: 22 } });

			expect(request).calledWithMatch('?name=Egor&age=22', { method: 'GET' });
		});

		test('object with characters to query', () => {
			http.get('', { data: { sum: '1 + 1', b: '2 2' } });

			expect(request).calledWithMatch('?sum=1%20%2B%201&b=2%202', { method: 'GET' });
		});

		test('object with special characters to query', () => {
			http.get('', { data: { a: '3=2&1' } });

			expect(request).calledWithMatch('?a=3%3D2%261', { method: 'GET' });
		});

		test('object with special characters as key and value to query', () => {
			http.get('', { data: { '3=2&1': '3=2&1' } });

			expect(request).calledWithMatch('?3%3D2%261=3%3D2%261', { method: 'GET' });
		});

		test('object with russian characters to query', () => {
			http.get('', { data: { name: 'Егор' } });

			expect(request).calledWithMatch('?name=%D0%95%D0%B3%D0%BE%D1%80', { method: 'GET' });
		});
	});
});
