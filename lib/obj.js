(function () {
	'use strict';

	var is = require('./is.js'),
		isJson = is.json;

	var extend,
		copy,
		copyR,
		clone,
		cloneR,
		isArray = Array.isArray,
		objectKeys = Object.keys;

	function hasKey(key) {
		return key in this;
	}

	function getKeys(obj, keys) {
		return keys ? keys.filter(hasKey, obj) : objectKeys(obj);
	}

	module.exports = {
		keys: objectKeys,
		vals: (function () {
			function getVal(key) {
				return this[key];
			}
			return function (obj, keys) {
				return getKeys(obj, keys).map(getVal, obj);
			};
		})(),
		each: function (obj, fn, that, keys) {
			keys = getKeys(obj, keys);
			var l = keys.length;
			if (!l) {
				return;
			}

			for (var i = 0, key; i < l; i++) {
				key = keys[i];
				fn.call(that, obj[key], key, obj);
			}
		},
		map: function (obj, fn, that, keys, to) {
			if (!to) {
				to = {};
			}

			keys = getKeys(obj, keys);
			var l = keys.length;
			if (!l) {
				return to;
			}

			for (var i = 0, key; i < l; i++) {
				key = keys[i];
				to[key] = fn.call(that, obj[key], key, obj);
			}
			return to;
		},
		mapVals: function (obj, fn, that, keys) {
			return getKeys(obj, keys).map(function (key) {
				return fn.call(that, obj[key], key, obj);
			});
		},
		filter: function (obj, fn, that, keys, to) {
			if (typeof fn === 'string') {
				fn = exports[fn];
			}

			if (!to) {
				to = {};
			}

			keys = getKeys(obj, keys);
			var l = keys.length;
			if (!l) {
				return to;
			}

			for (var i = 0, key, val; i < l; i++) {
				key = keys[i];
				val = obj[key];
				if (fn.call(that, val, key, obj)) {
					to[key] = val;
				}
			}
			return to;
		},
		clone: clone = function (from, keys) {
			var to = {};

			keys = getKeys(from, keys);
			var l = keys.length;
			if (!l) {
				return to;
			}

			for (var i = 0, key, fromVal; i < l; i++) {
				key = keys[i];
				if ((fromVal = from[key]) !== void 0) {
					to[key] = fromVal;
				}
			}
			return to;
		},
		cloneR: cloneR = function (from, keys) {
			var to = {};

			keys = getKeys(from, keys);
			var l = keys.length;
			if (!l) {
				return to;
			}

			for (var i = 0, key, fromVal; i < l; i++) {
				key = keys[i];
				if ((fromVal = from[key]) !== void 0) {
					if (isArray(fromVal)) {
						to[key] = fromVal.map(cloneR);
					}
					else if (isJson(fromVal)) {
					}
					else {
						to[key] = fromVal;
					}
				}
			}
			return to;
		},
		copy: copy = function (from, to, keys) {
			if (from === to) {
				return to;
			}

			if (!to) {
				to = {};
			}

			keys = getKeys(from, keys);
			var l = keys.length;
			if (!l) {
				return to;
			}

			for (var i = 0, key, fromVal; i < l; i++) {
				key = keys[i];
				if ((fromVal = from[key]) !== void 0) {
					to[key] = fromVal;
				}
			}
			return to;
		},
		add: function (from, to, keys) {
			if (from === to) {
				return to;
			}

			if (!to) {
				return copy(from, to, keys);
			}

			keys = getKeys(from, keys);
			var l = keys.length;
			if (!l) {
				return to;
			}

			for (var i = 0, key, fromVal; i < l; i++) {
				key = keys[i];
				if (to[key] === void 0 && (fromVal = from[key]) !== void 0) {
					to[key] = fromVal;
				}
			}
			return to;
		},
		copyR: copyR = function (from, to, keys) {
			if (from === to) {
				return to;
			}

			if (!to) {
				to = {};
			}

			keys = getKeys(from, keys);
			var l = keys.length;
			if (!l) {
				return to;
			}

			for (var i = 0, key, fromVal, toVal; i < l; i++) {
				key = keys[i];
				if ((fromVal = from[key]) !== void 0) {
					toVal = to[key];
					if (isJson(fromVal)) {
						if (isJson(toVal)) {
							copyR(fromVal, toVal);
						}
						else {
							to[key] = cloneR(fromVal);
						}
					}
					else {
						to[key] = fromVal;
					}
				}
			}
			return to;
		},
		extend: extend = function (to, from, keys) {
			if (!to) {
				return from;
			}

			keys = getKeys(from, keys);
			var l = keys.length;
			if (!l) {
				return to;
			}

			keys.forEach(function (key) {
				var toVal = to[key],
					fromVal = from[key];
				if (toVal === void 0) {
					if (fromVal !== void 0) {
						to[key] = fromVal;
					}
				}
				else if (toVal && fromVal && typeof toVal === 'object' && typeof fromVal === 'object') {
					extend(toVal, fromVal);
				}
			});
			return to;
		}
	};
})();