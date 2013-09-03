(function () {
	'use strict';

	module.exports = {
		ucfirst: function (str) {
			return str && str.charAt(0).toUpperCase() + str.substring(1);
		},
		lcfirst: function (str) {
			return str && str.charAt(0).toLowerCase() + str.substring(1);
		},
		startsWith: function (str, search) {
			var strLen = str.length,
				searchLen = search.length;
			return searchLen >= 1 && strLen >= searchLen && str.lastIndexOf(search, 0) === 0;
		},
		endsWith: function (str, search) {
			var strLen = str.length,
				searchLen = search.length;
			return searchLen >= 1 && strLen >= searchLen && str.indexOf(search, strLen - searchLen) !== -1;
		},
		camelCase: (function () {
			var DEFAULT_REGEX = /[_\-\s]+(.)?/g;
			function upper(match, group1) {
				return group1 ? group1.toUpperCase() : '';
			}
			return function (str, delimiters) {
				return str && str.replace(delimiters ? new RegExp('[' + delimiters + ']+(.)?', 'g') : DEFAULT_REGEX, upper);
			};
		})()
	};
})();
