import { assert, expect } from 'chai';
import { test } from 'mocha';
import Component from './component.ts';

const template = '{{content}}';

class TestBlock extends Component {
	constructor(props: Record<string, unknown>) {
		super('div', props);
	}

	render() {
		return this.compile(template, this._props);
	}
}

const testBlock = new TestBlock({ content: 'Some message' });

describe('Component', () => {
	describe('Component: render', () => {
		test('Should render correctly', () => {
			assert.equal(testBlock.getContent()?.innerHTML, 'Some message');
		});

		test('Should render with tag', () => {
			assert.equal(testBlock.getContent()?.tagName, 'DIV');
		});
	});

	describe('Component: props', () => {
		test('Should render given props', () => {
			testBlock.setProps({
				content: 'Some important message for future'
			});

			assert.equal(testBlock.getContent()?.innerHTML, 'Some important message for future');
		});
	});

	describe('Component: attributes', () => {
		beforeEach(() => {
			testBlock.setProps({
				attributes: {
					value: '123'
				}
			});
		});

		test('Should set attributes', () => {
			expect(testBlock.getContent()?.getAttribute('value')).to.equal('123');
		});

		test('Should has attributes length equals 2', () => {
			testBlock.setProps({
				attributes: {
					value: '123',
					secondAttr: '123'
				}
			});

			expect(testBlock.getContent()?.attributes.length).to.equal(2);
		});
	});

	describe('Component: classNames', () => {
		test('Should add default class', () => {
			testBlock.setProps({
				classNames: [ 'first-class', { 'second-class': true, 'third-class': false } ]
			});

			expect(testBlock.getContent()?.classList.contains('first-class')).to.equal(true);
		});

		test('Should add class from object', () => {
			testBlock.setProps({
				classNames: [ { 'second-class': true } ]
			});

			expect(testBlock.getContent()?.classList.contains('second-class')).to.equal(true);
		});

		test('Shouldn\'t add the third class', () => {
			testBlock.setProps({
				classNames: [ 'first-class', { 'second-class': true, 'third-class': false } ]
			});

			expect(testBlock.getContent()?.classList.contains('third-class')).not.to.equal(true);
		});
	});
})
