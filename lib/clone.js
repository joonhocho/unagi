(function () {
	'use strict';

	var is = require('./is.js'),
		isJson = is.json;

	var cloneArr,
		cloneObj,
		isArray = Array.isArray,
		keys = Object.keys;

	module.exports = {
		arr: cloneArr = function () {},
		obj: cloneObj = function () {},
		it: function (val) {
			if (!(val && typeof val === 'object')) {
				return val;
			}
			if (isArray(val)) {
				return cloneArr(val);
			}
			if (isJson(val)) {
				return cloneObj(val);
			}
			return val;
		}
	};
})();
