(function () {
	'use strict';

	var is = require('./is.js'),
		cloneLib = require('./clone.js'),
		util = require('./util.js'),
		isJson = is.json,
		filterKeys = util.filterKeys,
		cloneJsonS = cloneLib.val;

	var extend,
		copy,
		copyR,
		clone,
		objectKeys = Object.keys;

	module.exports = {
		keys: objectKeys,
		filterKeys: filterKeys,
		vals: (function () {
			function get(key) {
				return this[key];
			}
			return function (obj, keys) {
				return filterKeys(obj, keys).map(get, obj);
			};
		})(),
		each: function (obj, fn, that, keys) {
			keys = filterKeys(obj, keys);
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

			keys = filterKeys(obj, keys);
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
			return filterKeys(obj, keys)
				.map(function (key) {
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

			keys = filterKeys(obj, keys);
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
		copy: copy = function (from, to, keys) {
			if (from === to) {
				return to;
			}

			if (!to) {
				to = {};
			}

			keys = filterKeys(from, keys);
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

			keys = filterKeys(from, keys);
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

			keys = filterKeys(from, keys);
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
							to[key] = cloneJsonS(fromVal);
						}
					}
					else {
						to[key] = fromVal;
					}
				}
			}
			return to;
		},
		clone: clone = function (from, keys) {
			var to = {};

			keys = filterKeys(from, keys);
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
		extend: extend = function (to, from, keys) {
			if (!to) {
				return from;
			}

			keys = filterKeys(from, keys);
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
