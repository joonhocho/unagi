(function () {
	'use strict';

	module.exports = {
		// Is Test Functions
		is: require('./is.js'),
		// Array Utility Functions
		a: {
			filter: function filter(arr, fn, that) {
				if (typeof fn === 'string') {
					fn = exports[fn];
				}
				return arr.filter(fn, that);
			}
		},
		// Boolean Utility Functions
		b: {},
		// Date Utility Functions
		d: {
			getYear: function () {
				return new Date().getFullYear();
			}
		},
		// Number Utility Functions
		n: {},
		// String Utility Functions
		s: {
			ucfirst: function ucfirst(str) {
				return str && str.charAt(0).toUpperCase() + str.substring(1);
			},
			lcfirst: function lcfirst(str) {
				return str && str.charAt(0).toLowerCase() + str.substring(1);
			},
			startsWith: function startsWith(str, prefix) {
				return str ? str.lastIndexOf(prefix, 0) === 0 : false;
			},
			endsWith: function (str, suffix) {
				var strLen = str.length,
					suffixLen = suffix.length;
				return strLen >= suffixLen && str.indexOf(suffix, strLen - suffixLen) !== -1;
			},
			camelCase: (function () {
				var DEFAULT_REGEX = /[_\-\s]+(.)?/g;

				function toUpper(match, group1) {
					return group1 ? group1.toUpperCase() : '';
				}
				return function (str, delimiters) {
					return str && str.replace(delimiters ? new RegExp('[' + delimiters + ']+(.)?', 'g') : DEFAULT_REGEX, toUpper);
				};
			})()
		},
		// Object Utility Functions
		o: {
			keys: Object.keys,
			values: (function () {
				function getValue(key) {
					return this[key];
				}
				return function values(obj, keys) {
					return (keys || Object.keys(obj)).map(getValue, obj);
				};
			})(),
			each: function each(obj, fn, that, keys) {
				if (!keys) {
					keys = Object.keys(obj);
				}
				if (keys.length) {
					keys.forEach(function (key) {
						fn.call(that, obj[key], key, obj);
					});
				}
			},
			map: function map(obj, fn, that, keys, to) {
				if (!to) {
					to = {};
				}
				if (!keys) {
					keys = Object.keys(obj);
				}
				if (keys.length) {
					keys.forEach(function (key) {
						to[key] = fn.call(that, obj[key], key, obj);
					});
				}
				return to;
			},
			mapValues: function mapValues(obj, fn, that, keys) {
				return (keys || Object.keys(obj)).map(function (key) {
					return fn.call(that, obj[key], key, obj);
				});
			},
			filter: function filter(obj, fn, that, keys, to) {
				if (typeof fn === 'string') {
					fn = exports[fn];
				}
				if (!to) {
					to = {};
				}
				if (!keys) {
					keys = Object.keys(obj);
				}
				if (keys.length) {
					keys.forEach(function (key) {
						var val = obj[key];
						if (fn.call(that, val, key, obj)) {
							to[key] = val;
						}
					});
				}
				return to;
			},
			copy: function copy(from, to, keys, override) {
				if (!to) {
					to = {};
					override = true;
				}
				if (!keys) {
					keys = Object.keys(from);
				}
				if (keys.length) {
					keys.forEach(override ? function (name) {
						var fromVal = from[name];
						if (fromVal !== void 0) {
							to[name] = fromVal;
						}
					} : function (name) {
						if (to[name] === void 0) {
							var fromVal = from[name];
							if (fromVal !== void 0) {
								to[name] = fromVal;
							}
						}
					});
				}
				return to;
			},
			extend: function extend(to, from, keys) {
				if (!to) {
					return from;
				}
				if (!keys) {
					keys = Object.keys(from);
				}
				if (keys.length) {
					keys.forEach(function (name) {
						var toVal = to[name],
							fromVal = from[name];
						if (toVal === void 0) {
							if (fromVal !== void 0) {
								to[name] = fromVal;
							}
						}
						else if (toVal && fromVal && typeof toVal === 'object' && typeof fromVal === 'object') {
							extend(toVal, fromVal);
						}
					});
				}
				return to;
			}
		}
	};
})();
