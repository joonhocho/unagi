(function () {
	'use strict';

	var extend,
		objectKeys = Object.keys;

	module.exports = {
		keys: objectKeys,
		values: (function () {
			function getValue(key) {
				return this[key];
			}
			return function (obj, keys) {
				return (keys || objectKeys(obj)).map(getValue, obj);
			};
		})(),
		each: function (obj, fn, that, keys) {
			if (!keys) {
				keys = objectKeys(obj);
			}
			if (keys.length) {
				keys.forEach(function (key) {
					fn.call(that, obj[key], key, obj);
				});
			}
		},
		map: function (obj, fn, that, keys, to) {
			if (!to) {
				to = {};
			}
			if (!keys) {
				keys = objectKeys(obj);
			}
			if (keys.length) {
				keys.forEach(function (key) {
					to[key] = fn.call(that, obj[key], key, obj);
				});
			}
			return to;
		},
		mapValues: function (obj, fn, that, keys) {
			return (keys || objectKeys(obj)).map(function (key) {
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
			if (!keys) {
				keys = objectKeys(obj);
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
		copy: function (from, to, keys, override) {
			if (!to) {
				to = {};
				override = true;
			}
			if (!keys) {
				keys = objectKeys(from);
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
		extend: extend = function (to, from, keys) {
			if (!to) {
				return from;
			}
			if (!keys) {
				keys = objectKeys(from);
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
	};
})();
