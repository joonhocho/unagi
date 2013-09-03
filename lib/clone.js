(function () {
	'use strict';

	var is = require('./is.js'),
		obj = require('./obj.js'),
		isJson = is.json,
		isNotObj = is.nObj,
		isArray = is.arr,
		isFn = is.fn,
		filterKeys = obj.filterKeys;

	var cloneArr,
		cloneJson,
		cloneVal;

	module.exports = {
		arr: cloneArr = function (arr) {
			return arr.length ? arr.map(cloneVal) : [];
		},
		arrS: function (arr) {
			return arr.slice();
		},
		json: cloneJson = function (obj, keys) {
			var clone = {};

			keys = filterKeys(obj, keys);
			var l = keys.length;
			if (!l) {
				return clone;
			}

			for (var i = 0, key, val; i < l; i++) {
				key = keys[i];
				if ((val = obj[key]) !== void 0) {
					clone[key] = cloneVal(val);
				}
			}

			return clone;
		},
		jsonS: function (obj, keys) {
			var clone = {};

			keys = filterKeys(obj, keys);
			var l = keys.length;
			if (!l) {
				return clone;
			}

			for (var i = 0, key, val; i < l; i++) {
				key = keys[i];
				if ((val = obj[key]) !== void 0) {
					clone[key] = val;
				}
			}

			return clone;
		},
		val: cloneVal = function (val) {
			if (isNotObj(val)) {
				return val;
			}

			if (isFn(val.clone)) {
				return val.clone();
			}

			if (isArray(val)) {
				return cloneArr(val);
			}

			if (isJson(val)) {
				return cloneJson(val);
			}

			return val;
		}
	};
})();
