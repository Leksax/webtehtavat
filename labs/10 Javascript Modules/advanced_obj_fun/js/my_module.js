/*jshint eqeqeq:false */
(function (window) {
	'use strict';

	function id(a) {
		return document.getElementById(a);
	}

	window.$ = window.app || {};
	window.$.id = id;
})(window);
