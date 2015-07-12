"use strict";

if (!_sj) {
	var _sj = {};
}

// No jQuery required

_sj.currentScale = function(element) {
	if (!element) {
		throw new Error('Expecting HTMLElement or string (query selector) as first argument.');
	}
	
	var el = typeof element == 'string' ?
		document.querySelector(element) :
		element;

	if (!el.getBoundingClientRect || !el.offsetWidth || !el.offsetHeight) {
		throw new TypeError('First argument is not HTMLElement');
	}

	var clientRect = el.getBoundingClientRect();

	return {
		x: clientRect.width / el.offsetWidth,
		y: clientRect.height / el.offsetHeight
	}
}