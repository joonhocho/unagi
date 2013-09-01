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
		nArr: function nArr(val) {
			return !Array.isArray(val);
		},
		bool: function bool(val) {
			return typeof val === 'boolean';
		},
		nBool: function nBool(val) {
			return typeof val !== 'boolean';
		},
		num: function num(val) {
			return typeof val === 'number';
		},
		nNum: function nNum(val) {
			return typeof val !== 'number';
		},
		str: function str(val) {
			return typeof val === 'string';
		},
		nStr: function nStr(val) {
			return typeof val !== 'string';
		},
		fn: function fn(val) {
			return typeof val === 'function';
		},
		nFn: function nFn(val) {
			return typeof val !== 'function';
		},
		obj: obj = function obj(val) {
			return val !== null && typeof val === 'object';
		},
		nObj: function nObj(val) {
			return !obj(val);
		},
		nul: function nul(val) {
			return val === null;
		},
		nNul: function nNul(val) {
			return val !== null;
		},
		undef: function undef(val) {
			return val === void 0;
		},
		nUndef: function nUndef(val) {
			return val !== void 0;
		},
		set: function set(val) {
			return val != null;
		},
		nSet: function nSet(val) {
			return val == null;
		},
		emptyArr: emptyArr = function emptyArr(val) {
			return Array.isArray(val) && val.length === 0;
		},
		json: json = function json(val) {
			return val != null && val.constructor === Object;
		},
		nJson: function nJson(val) {
			return !json(val);
		},
		emptyObj: emptyObj = function emptyObj(val) {
			return json(val) && Object.keys(val).length === 0;
		},
		empty: empty = function empty(val) {
			return !val || emptyArr(val) || emptyObj(val);
		},
		nEmpty: function nEmpty(val) {
			return !empty(val);
		},
		truthy: function truthy(val) {
			return val ? true : false;
		},
		falsey: function falsey(val) {
			return !val;
		}
	};
})();
