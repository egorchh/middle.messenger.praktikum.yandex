const { JSDOM } = require('jsdom');
const sinon = require('sinon');

const { window } = new JSDOM('<body><div id="app"></div></body>', { url: 'http://localhost/' });

global.window = window;
global.document = window.document;
global.window.sessionStorage = window.sessionStorage;

