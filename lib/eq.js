(function () {
	'use strict';

	var is = require('./is.js'),
		obj = require('./obj.js'),
		isNotObj = is.nObj,
		isArray = is.arr,
		isFn = is.fn,
		filterKeys = obj.filterKeys,
		objectValueOf = Object.prototype.valueOf;

	var eqArr,
		eqJson,
		eqVal,
		eqValS,
		eqS,
		eqL;

	function areNaNs(val1, val2) {
		return val1 !== val1 && val2 !== val2;
	}

	function eqValueOf(proto, val1, val2) {
		var valueOf = proto.valueOf;
		return valueOf !== objectValueOf && isFn(valueOf) && eqS(valueOf.call(val1), valueOf.call(val2));
	}

	module.exports = {
		strict: eqS = function (val1, val2) {
			return val1 === val2 || areNaNs(val1, val2);
		},
		loose: eqL = function (val1, val2) {
			if (val1 == val2 || areNaNs(val1, val2)) {
				return true;
			}

			var notNull1 = val1 != null,
				notNull2 = val2 != null;

			if (notNull1 && isFn(val1.valueOf)) {
				var v1 = val1.valueOf();
				if (v1 == val2 || notNull2 && isFn(val2.valueOf) && v1 == val2.valueOf()) {
					return true;
				}
			}
			else if (notNull2 && isFn(val2.valueOf) && val1 == val2.valueOf()) {
				return true;
			}

			return notNull1 && isFn(val1.equals) && val1.equals(val2) || notNull2 && isFn(val2.equals) && val2.equals(val1);
		},
		arr: eqArr = function (arr1, arr2) {
			if (arr1 === arr2) {
				return true;
			}

			var l = arr1.length;
			if (l !== arr2.length) {
				return false;
			}

			if (!l) {
				return true;
			}

			for (var i = 0; i < l; i++) {
				if ((i in arr1) !== (i in arr2)) {
					return false;
				}
			}

			for (i = 0; i < l; i++) {
				if ((i in arr1) && !eqVal(arr1[i], arr2[i])) {
					return false;
				}
			}

			return true;
		},
		arrS: function (arr1, arr2) {
			if (arr1 === arr2) {
				return true;
			}

			var l = arr1.length;
			if (l !== arr2.length) {
				return false;
			}

			if (!l) {
				return true;
			}

			for (var i = 0, has; i < l; i++) {
				has = i in arr1;
				if (has !== (i in arr2)) {
					return false;
				}

				if (has) {
					if (!eqValS(arr1[i], arr2[i])) {
						return false;
					}
				}
			}

			return true;
		},
		json: eqJson = function (obj1, obj2, keys) {
			if (obj1 === obj2) {
				return true;
			}

			var keys1 = filterKeys(obj1, keys),
				keys2 = filterKeys(obj2, keys),
				l = keys1.length;
			if (l !== keys2.length) {
				return false;
			}

			if (!l) {
				return true;
			}

			for (var i = 0; i < l; i++) {
				if (!obj2.hasOwnProperty(keys1[i])) {
					return false;
				}
			}

			var key;
			for (i = 0; i < l; i++) {
				key = keys1[i];
				if (!eqVal(obj1[key], obj2[key])) {
					return false;
				}
			}

			return true;
		},
		jsonS: function (obj1, obj2, keys) {
			if (obj1 === obj2) {
				return true;
			}

			var keys1 = filterKeys(obj1, keys),
				keys2 = filterKeys(obj2, keys),
				l = keys1.length;
			if (l !== keys2.length) {
				return false;
			}

			if (!l) {
				return true;
			}

			for (var i = 0, key; i < l; i++) {
				key = keys1[i];
				if (!(obj2.hasOwnProperty(key) && eqValS(obj1[key], obj2[key]))) {
					return false;
				}
			}

			return true;
		},
		val: eqVal = function (val1, val2) {
			if (eqS(val1, val2)) {
				return true;
			}

			if (isNotObj(val1) || isNotObj(val2)) {
				return false;
			}

			var constructor = val1.constructor;
			if (constructor !== val2.constructor) {
				return false;
			}

			if (constructor === Object) {
				return eqJson(val1, val2);
			}

			if (isArray(val1)) {
				return eqArr(val1, val2);
			}

			var proto = Object.getPrototypeOf(val1),
				equals = proto.equals;
			if (isFn(equals)) {
				return equals.call(val1, val2);
			}

			if (eqValueOf(proto, val1, val2)) {
				return true;
			}

			return eqJson(val1, val2);
		},
		valS: eqValS = function (val1, val2) {
			if (eqS(val1, val2)) {
				return true;
			}

			if (isNotObj(val1) || isNotObj(val2)) {
				return false;
			}

			if (val1.constructor !== val2.constructor) {
				return false;
			}

			var proto = Object.getPrototypeOf(val1),
				equals = proto.equals;
			if (isFn(equals)) {
				return equals.call(val1, val2);
			}

			return eqValueOf(proto, val1, val2);
		}
	};
})();
