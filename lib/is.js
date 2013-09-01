(function () {
	'use strict';

	var obj,
		emptyArr,
		json,
		emptyJson,
		empty,
		isArray = Array.isArray,
		keys = Object.keys;

	module.exports = {
		// Is Test Functions
		arr: isArray,
		nArr: function (val) {
			return !isArray(val);
		},
		bool: function (val) {
			return typeof val === 'boolean';
		},
		nBool: function (val) {
			return typeof val !== 'boolean';
		},
		num: function (val) {
			return typeof val === 'number';
		},
		nNum: function (val) {
			return typeof val !== 'number';
		},
		str: function (val) {
			return typeof val === 'string';
		},
		nStr: function (val) {
			return typeof val !== 'string';
		},
		fn: function (val) {
			return typeof val === 'function';
		},
		nFn: function (val) {
			return typeof val !== 'function';
		},
		obj: obj = function (val) {
			return val !== null && typeof val === 'object';
		},
		nObj: function (val) {
			return !obj(val);
		},
		emptyObj: function (val) {
			return obj(val) && keys(val).length === 0;
		},
		nul: function (val) {
			return val === null;
		},
		nNul: function (val) {
			return val !== null;
		},
		undef: function (val) {
			return val === void 0;
		},
		nUndef: function (val) {
			return val !== void 0;
		},
		set: function (val) {
			return val != null;
		},
		nSet: function (val) {
			return val == null;
		},
		emptyArr: emptyArr = function (val) {
			return isArray(val) && val.length === 0;
		},
		json: json = function (val) {
			return val != null && val.constructor === Object;
		},
		nJson: function (val) {
			return !json(val);
		},
		emptyJson: emptyJson = function (val) {
			return json(val) && keys(val).length === 0;
		},
		empty: empty = function (val) {
			return !val || emptyArr(val) || emptyJson(val);
		},
		nEmpty: function (val) {
			return !empty(val);
		},
		truthy: function (val) {
			return val ? true : false;
		},
		falsey: function (val) {
			return !val;
		}
	};
})();
