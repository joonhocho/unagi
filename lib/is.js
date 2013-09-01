(function () {
	'use strict';

	var obj,
		emptyArr,
		json,
		emptyObj,
		empty;

	module.exports = {
		// Is Test Functions
		arr: Array.isArray,
		nArr: function (val) {
			return !Array.isArray(val);
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
			return Array.isArray(val) && val.length === 0;
		},
		json: json = function (val) {
			return val != null && val.constructor === Object;
		},
		nJson: function (val) {
			return !json(val);
		},
		emptyObj: emptyObj = function (val) {
			return json(val) && Object.keys(val).length === 0;
		},
		empty: empty = function (val) {
			return !val || emptyArr(val) || emptyObj(val);
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
