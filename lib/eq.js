(function () {
	'use strict';

	var is = require('./is.js'),
		obj = require('./obj.js'),
		isNotObj = is.nObj,
		isArray = is.arr,
		isFn = is.fn,
		filterKeys = obj.filterKeys;

	var eqArr,
		eqObj,
		eqVal,
		eqS;

	module.exports = {
		strict: eqS = function (val1, val2) {
			return val1 === val2 || (val1 !== val1 && val2 !== val2);
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
					if (!eqS(arr1[i], arr2[i])) {
						return false;
					}
				}
			}

			return true;
		},
		obj: eqObj = function (obj1, obj2, keys) {
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
		objS: function (obj1, obj2, keys) {
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
				if (!(obj2.hasOwnProperty(key) && eqS(obj1[key], obj2[key]))) {
					return false;
				}
			}

			return true;
		},
		val: eqVal = function (val1, val2) {
			if (eqS(val1, val2)) {
				return true;
			}

			if (isNotObj(val1) || isNotObj(val2) || val1.constructor !== val2.constructor) {
				return false;
			}

			if (isFn(val1.equals)) {
				return val1.equals(val2);
			}

			if (isFn(val1.valueOf) && isFn(val2.valueOf) && eqS(val1.valueOf(), val2.valueOf())) {
				return true;
			}

			if (isArray(val1)) {
				return eqArr(val1, val2);
			}

			return eqObj(val1, val2);
		}
	};
})();
