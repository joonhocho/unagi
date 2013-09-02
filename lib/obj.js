(function () {
	'use strict';

	var extend,
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
			if (keys.length) {
				for (var i = 0, l = keys.length, key; i < l; i++) {
					key = keys[i];
					fn.call(that, obj[key], key, obj);
				}
			}
		},
		map: function (obj, fn, that, keys, to) {
			if (!to) {
				to = {};
			}
			keys = getKeys(obj, keys);
			if (keys.length) {
				for (var i = 0, l = keys.length, key; i < l; i++) {
					key = keys[i];
					to[key] = fn.call(that, obj[key], key, obj);
				}
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
			if (keys.length) {
				for (var i = 0, l = keys.length, key, val; i < l; i++) {
					key = keys[i];
					val = obj[key];
					if (fn.call(that, val, key, obj)) {
						to[key] = val;
					}
				}
			}
			return to;
		},
		copy: function (from, to, keys, override) {
			if (!to) {
				to = {};
				override = true;
			}
			keys = getKeys(from, keys);
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
			keys = getKeys(from, keys);
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
