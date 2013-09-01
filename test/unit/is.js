(function () {
	'use strict';

	var unagi = require('../../lib/index.js');

	describe('is', function () {
		describe('#isArray', function () {
			it('should return true only when the value is array', function () {
				unagi.isArray(void 0).should.equal(false);
				unagi.isArray(null).should.equal(false);
				unagi.isArray(NaN).should.equal(false);
				unagi.isArray(0).should.equal(false);
				unagi.isArray(1).should.equal(false);
				unagi.isArray(true).should.equal(false);
				unagi.isArray(false).should.equal(false);
				unagi.isArray('').should.equal(false);
				unagi.isArray('str').should.equal(false);
				unagi.isArray(/regexp/).should.equal(false);
				unagi.isArray(new Date()).should.equal(false);
				unagi.isArray(function () {}).should.equal(false);
				unagi.isArray(Object).should.equal(false);
				unagi.isArray([]).should.equal(true);
				unagi.isArray([1]).should.equal(true);
				unagi.isArray({}).should.equal(false);
				unagi.isArray({
					a: 1
				}).should.equal(false);
			});
		});

		describe('#isNotArray', function () {
			it('should return false only when the value is array', function () {
				unagi.isNotArray(void 0).should.equal(true);
				unagi.isNotArray(null).should.equal(true);
				unagi.isNotArray(NaN).should.equal(true);
				unagi.isNotArray(0).should.equal(true);
				unagi.isNotArray(1).should.equal(true);
				unagi.isNotArray(true).should.equal(true);
				unagi.isNotArray(false).should.equal(true);
				unagi.isNotArray('').should.equal(true);
				unagi.isNotArray('str').should.equal(true);
				unagi.isNotArray(/regexp/).should.equal(true);
				unagi.isNotArray(new Date()).should.equal(true);
				unagi.isNotArray(function () {}).should.equal(true);
				unagi.isNotArray(Object).should.equal(true);
				unagi.isNotArray([]).should.equal(false);
				unagi.isNotArray([1]).should.equal(false);
				unagi.isNotArray({}).should.equal(true);
				unagi.isNotArray({
					a: 1
				}).should.equal(true);
			});
		});

		describe('#isBoolean', function () {
			it('should return true only when the value is boolean', function () {
				unagi.isBoolean(void 0).should.equal(false);
				unagi.isBoolean(null).should.equal(false);
				unagi.isBoolean(NaN).should.equal(false);
				unagi.isBoolean(0).should.equal(false);
				unagi.isBoolean(1).should.equal(false);
				unagi.isBoolean(true).should.equal(true);
				unagi.isBoolean(false).should.equal(true);
				unagi.isBoolean('').should.equal(false);
				unagi.isBoolean('str').should.equal(false);
				unagi.isBoolean(/regexp/).should.equal(false);
				unagi.isBoolean(new Date()).should.equal(false);
				unagi.isBoolean(function () {}).should.equal(false);
				unagi.isBoolean(Object).should.equal(false);
				unagi.isBoolean([]).should.equal(false);
				unagi.isBoolean([1]).should.equal(false);
				unagi.isBoolean({}).should.equal(false);
				unagi.isBoolean({
					a: 1
				}).should.equal(false);
			});
		});

		describe('#isNotBoolean', function () {
			it('should return false only when the value is boolean', function () {
				unagi.isNotBoolean(void 0).should.equal(true);
				unagi.isNotBoolean(null).should.equal(true);
				unagi.isNotBoolean(NaN).should.equal(true);
				unagi.isNotBoolean(0).should.equal(true);
				unagi.isNotBoolean(1).should.equal(true);
				unagi.isNotBoolean(true).should.equal(false);
				unagi.isNotBoolean(false).should.equal(false);
				unagi.isNotBoolean('').should.equal(true);
				unagi.isNotBoolean('str').should.equal(true);
				unagi.isNotBoolean(/regexp/).should.equal(true);
				unagi.isNotBoolean(new Date()).should.equal(true);
				unagi.isNotBoolean(function () {}).should.equal(true);
				unagi.isNotBoolean(Object).should.equal(true);
				unagi.isNotBoolean([]).should.equal(true);
				unagi.isNotBoolean([1]).should.equal(true);
				unagi.isNotBoolean({}).should.equal(true);
				unagi.isNotBoolean({
					a: 1
				}).should.equal(true);
			});
		});

		describe('#isNumber', function () {
			it('should return true only when the value is number', function () {
				unagi.isNumber(void 0).should.equal(false);
				unagi.isNumber(null).should.equal(false);
				unagi.isNumber(NaN).should.equal(true);
				unagi.isNumber(0).should.equal(true);
				unagi.isNumber(1).should.equal(true);
				unagi.isNumber(true).should.equal(false);
				unagi.isNumber(false).should.equal(false);
				unagi.isNumber('').should.equal(false);
				unagi.isNumber('str').should.equal(false);
				unagi.isNumber(/regexp/).should.equal(false);
				unagi.isNumber(new Date()).should.equal(false);
				unagi.isNumber(function () {}).should.equal(false);
				unagi.isNumber(Object).should.equal(false);
				unagi.isNumber([]).should.equal(false);
				unagi.isNumber([1]).should.equal(false);
				unagi.isNumber({}).should.equal(false);
				unagi.isNumber({
					a: 1
				}).should.equal(false);
			});
		});

		describe('#isNotNumber', function () {
			it('should return false only when the value is number', function () {
				unagi.isNotNumber(void 0).should.equal(true);
				unagi.isNotNumber(null).should.equal(true);
				unagi.isNotNumber(NaN).should.equal(false);
				unagi.isNotNumber(0).should.equal(false);
				unagi.isNotNumber(1).should.equal(false);
				unagi.isNotNumber(true).should.equal(true);
				unagi.isNotNumber(false).should.equal(true);
				unagi.isNotNumber('').should.equal(true);
				unagi.isNotNumber('str').should.equal(true);
				unagi.isNotNumber(/regexp/).should.equal(true);
				unagi.isNotNumber(new Date()).should.equal(true);
				unagi.isNotNumber(function () {}).should.equal(true);
				unagi.isNotNumber(Object).should.equal(true);
				unagi.isNotNumber([]).should.equal(true);
				unagi.isNotNumber([1]).should.equal(true);
				unagi.isNotNumber({}).should.equal(true);
				unagi.isNotNumber({
					a: 1
				}).should.equal(true);
			});
		});

		describe('#isString', function () {
			it('should return true only when the value is string', function () {
				unagi.isString(void 0).should.equal(false);
				unagi.isString(null).should.equal(false);
				unagi.isString(NaN).should.equal(false);
				unagi.isString(0).should.equal(false);
				unagi.isString(1).should.equal(false);
				unagi.isString(true).should.equal(false);
				unagi.isString(false).should.equal(false);
				unagi.isString('').should.equal(true);
				unagi.isString('str').should.equal(true);
				unagi.isString(/regexp/).should.equal(false);
				unagi.isString(new Date()).should.equal(false);
				unagi.isString(function () {}).should.equal(false);
				unagi.isString(Object).should.equal(false);
				unagi.isString([]).should.equal(false);
				unagi.isString([1]).should.equal(false);
				unagi.isString({}).should.equal(false);
				unagi.isString({
					a: 1
				}).should.equal(false);
			});
		});

		describe('#isNotString', function () {
			it('should return false only when the value is string', function () {
				unagi.isNotString(void 0).should.equal(true);
				unagi.isNotString(null).should.equal(true);
				unagi.isNotString(NaN).should.equal(true);
				unagi.isNotString(0).should.equal(true);
				unagi.isNotString(1).should.equal(true);
				unagi.isNotString(true).should.equal(true);
				unagi.isNotString(false).should.equal(true);
				unagi.isNotString('').should.equal(false);
				unagi.isNotString('str').should.equal(false);
				unagi.isNotString(/regexp/).should.equal(true);
				unagi.isNotString(new Date()).should.equal(true);
				unagi.isNotString(function () {}).should.equal(true);
				unagi.isNotString(Object).should.equal(true);
				unagi.isNotString([]).should.equal(true);
				unagi.isNotString([1]).should.equal(true);
				unagi.isNotString({}).should.equal(true);
				unagi.isNotString({
					a: 1
				}).should.equal(true);
			});
		});

		describe('#isFunction', function () {
			it('should return true only when the value is function', function () {
				unagi.isFunction(void 0).should.equal(false);
				unagi.isFunction(null).should.equal(false);
				unagi.isFunction(NaN).should.equal(false);
				unagi.isFunction(0).should.equal(false);
				unagi.isFunction(1).should.equal(false);
				unagi.isFunction(true).should.equal(false);
				unagi.isFunction(false).should.equal(false);
				unagi.isFunction('').should.equal(false);
				unagi.isFunction('str').should.equal(false);
				unagi.isFunction(/regexp/).should.equal(false);
				unagi.isFunction(new Date()).should.equal(false);
				unagi.isFunction(function () {}).should.equal(true);
				unagi.isFunction(Object).should.equal(true);
				unagi.isFunction([]).should.equal(false);
				unagi.isFunction([1]).should.equal(false);
				unagi.isFunction({}).should.equal(false);
				unagi.isFunction({
					a: 1
				}).should.equal(false);
			});
		});

		describe('#isNotFunction', function () {
			it('should return false only when the value is function', function () {
				unagi.isNotFunction(void 0).should.equal(true);
				unagi.isNotFunction(null).should.equal(true);
				unagi.isNotFunction(NaN).should.equal(true);
				unagi.isNotFunction(0).should.equal(true);
				unagi.isNotFunction(1).should.equal(true);
				unagi.isNotFunction(true).should.equal(true);
				unagi.isNotFunction(false).should.equal(true);
				unagi.isNotFunction('').should.equal(true);
				unagi.isNotFunction('str').should.equal(true);
				unagi.isNotFunction(/regexp/).should.equal(true);
				unagi.isNotFunction(new Date()).should.equal(true);
				unagi.isNotFunction(function () {}).should.equal(false);
				unagi.isNotFunction(Object).should.equal(false);
				unagi.isNotFunction([]).should.equal(true);
				unagi.isNotFunction([1]).should.equal(true);
				unagi.isNotFunction({}).should.equal(true);
				unagi.isNotFunction({
					a: 1
				}).should.equal(true);
			});
		});

		describe('#isObject', function () {
			it('should return true only when the value is object', function () {
				unagi.isObject(void 0).should.equal(false);
				unagi.isObject(null).should.equal(false);
				unagi.isObject(NaN).should.equal(false);
				unagi.isObject(0).should.equal(false);
				unagi.isObject(1).should.equal(false);
				unagi.isObject(true).should.equal(false);
				unagi.isObject(false).should.equal(false);
				unagi.isObject('').should.equal(false);
				unagi.isObject('str').should.equal(false);
				unagi.isObject(/regexp/).should.equal(true);
				unagi.isObject(new Date()).should.equal(true);
				unagi.isObject(function () {}).should.equal(false);
				unagi.isObject(Object).should.equal(false);
				unagi.isObject([]).should.equal(true);
				unagi.isObject([1]).should.equal(true);
				unagi.isObject({}).should.equal(true);
				unagi.isObject({
					a: 1
				}).should.equal(true);
			});
		});

		describe('#isNotObject', function () {
			it('should return false only when the value is object', function () {
				unagi.isNotObject(void 0).should.equal(true);
				unagi.isNotObject(null).should.equal(true);
				unagi.isNotObject(NaN).should.equal(true);
				unagi.isNotObject(0).should.equal(true);
				unagi.isNotObject(1).should.equal(true);
				unagi.isNotObject(true).should.equal(true);
				unagi.isNotObject(false).should.equal(true);
				unagi.isNotObject('').should.equal(true);
				unagi.isNotObject('str').should.equal(true);
				unagi.isNotObject(/regexp/).should.equal(false);
				unagi.isNotObject(new Date()).should.equal(false);
				unagi.isNotObject(function () {}).should.equal(true);
				unagi.isNotObject(Object).should.equal(true);
				unagi.isNotObject([]).should.equal(false);
				unagi.isNotObject([1]).should.equal(false);
				unagi.isNotObject({}).should.equal(false);
				unagi.isNotObject({
					a: 1
				}).should.equal(false);
			});
		});

		describe('#isNull', function () {
			it('should return true only when the value is null', function () {
				unagi.isNull(void 0).should.equal(false);
				unagi.isNull(null).should.equal(true);
				unagi.isNull(NaN).should.equal(false);
				unagi.isNull(0).should.equal(false);
				unagi.isNull(1).should.equal(false);
				unagi.isNull(true).should.equal(false);
				unagi.isNull(false).should.equal(false);
				unagi.isNull('').should.equal(false);
				unagi.isNull('str').should.equal(false);
				unagi.isNull(/regexp/).should.equal(false);
				unagi.isNull(new Date()).should.equal(false);
				unagi.isNull(function () {}).should.equal(false);
				unagi.isNull(Object).should.equal(false);
				unagi.isNull([]).should.equal(false);
				unagi.isNull([1]).should.equal(false);
				unagi.isNull({}).should.equal(false);
				unagi.isNull({
					a: 1
				}).should.equal(false);
			});
		});

		describe('#isNotNull', function () {
			it('should return false only when the value is null', function () {
				unagi.isNotNull(void 0).should.equal(true);
				unagi.isNotNull(null).should.equal(false);
				unagi.isNotNull(NaN).should.equal(true);
				unagi.isNotNull(0).should.equal(true);
				unagi.isNotNull(1).should.equal(true);
				unagi.isNotNull(true).should.equal(true);
				unagi.isNotNull(false).should.equal(true);
				unagi.isNotNull('').should.equal(true);
				unagi.isNotNull('str').should.equal(true);
				unagi.isNotNull(/regexp/).should.equal(true);
				unagi.isNotNull(new Date()).should.equal(true);
				unagi.isNotNull(function () {}).should.equal(true);
				unagi.isNotNull(Object).should.equal(true);
				unagi.isNotNull([]).should.equal(true);
				unagi.isNotNull([1]).should.equal(true);
				unagi.isNotNull({}).should.equal(true);
				unagi.isNotNull({
					a: 1
				}).should.equal(true);
			});
		});

		describe('#isUndefined', function () {
			it('should return true only when the value is undefined', function () {
				unagi.isUndefined(void 0).should.equal(true);
				unagi.isUndefined(null).should.equal(false);
				unagi.isUndefined(NaN).should.equal(false);
				unagi.isUndefined(0).should.equal(false);
				unagi.isUndefined(1).should.equal(false);
				unagi.isUndefined(true).should.equal(false);
				unagi.isUndefined(false).should.equal(false);
				unagi.isUndefined('').should.equal(false);
				unagi.isUndefined('str').should.equal(false);
				unagi.isUndefined(/regexp/).should.equal(false);
				unagi.isUndefined(new Date()).should.equal(false);
				unagi.isUndefined(function () {}).should.equal(false);
				unagi.isUndefined(Object).should.equal(false);
				unagi.isUndefined([]).should.equal(false);
				unagi.isUndefined([1]).should.equal(false);
				unagi.isUndefined({}).should.equal(false);
				unagi.isUndefined({
					a: 1
				}).should.equal(false);
			});
		});

		describe('#isNotUndefined', function () {
			it('should return false only when the value is undefined', function () {
				unagi.isNotUndefined(void 0).should.equal(false);
				unagi.isNotUndefined(null).should.equal(true);
				unagi.isNotUndefined(NaN).should.equal(true);
				unagi.isNotUndefined(0).should.equal(true);
				unagi.isNotUndefined(1).should.equal(true);
				unagi.isNotUndefined(true).should.equal(true);
				unagi.isNotUndefined(false).should.equal(true);
				unagi.isNotUndefined('').should.equal(true);
				unagi.isNotUndefined('str').should.equal(true);
				unagi.isNotUndefined(/regexp/).should.equal(true);
				unagi.isNotUndefined(new Date()).should.equal(true);
				unagi.isNotUndefined(function () {}).should.equal(true);
				unagi.isNotUndefined(Object).should.equal(true);
				unagi.isNotUndefined([]).should.equal(true);
				unagi.isNotUndefined([1]).should.equal(true);
				unagi.isNotUndefined({}).should.equal(true);
				unagi.isNotUndefined({
					a: 1
				}).should.equal(true);
			});
		});

		describe('#isSet', function () {
			it('should return true only when the value is set', function () {
				unagi.isSet(void 0).should.equal(false);
				unagi.isSet(null).should.equal(false);
				unagi.isSet(NaN).should.equal(true);
				unagi.isSet(0).should.equal(true);
				unagi.isSet(1).should.equal(true);
				unagi.isSet(true).should.equal(true);
				unagi.isSet(false).should.equal(true);
				unagi.isSet('').should.equal(true);
				unagi.isSet('str').should.equal(true);
				unagi.isSet(/regexp/).should.equal(true);
				unagi.isSet(new Date()).should.equal(true);
				unagi.isSet(function () {}).should.equal(true);
				unagi.isSet(Object).should.equal(true);
				unagi.isSet([]).should.equal(true);
				unagi.isSet([1]).should.equal(true);
				unagi.isSet({}).should.equal(true);
				unagi.isSet({
					a: 1
				}).should.equal(true);
			});
		});

		describe('#isNotSet', function () {
			it('should return false only when the value is set', function () {
				unagi.isNotSet(void 0).should.equal(true);
				unagi.isNotSet(null).should.equal(true);
				unagi.isNotSet(NaN).should.equal(false);
				unagi.isNotSet(0).should.equal(false);
				unagi.isNotSet(1).should.equal(false);
				unagi.isNotSet(true).should.equal(false);
				unagi.isNotSet(false).should.equal(false);
				unagi.isNotSet('').should.equal(false);
				unagi.isNotSet('str').should.equal(false);
				unagi.isNotSet(/regexp/).should.equal(false);
				unagi.isNotSet(new Date()).should.equal(false);
				unagi.isNotSet(function () {}).should.equal(false);
				unagi.isNotSet(Object).should.equal(false);
				unagi.isNotSet([]).should.equal(false);
				unagi.isNotSet([1]).should.equal(false);
				unagi.isNotSet({}).should.equal(false);
				unagi.isNotSet({
					a: 1
				}).should.equal(false);
			});
		});

		describe('#isEmptyArray', function () {
			it('should return true only when the value is an array and is empty', function () {
				unagi.isEmptyArray(void 0).should.equal(false);
				unagi.isEmptyArray(null).should.equal(false);
				unagi.isEmptyArray(NaN).should.equal(false);
				unagi.isEmptyArray(0).should.equal(false);
				unagi.isEmptyArray(1).should.equal(false);
				unagi.isEmptyArray(true).should.equal(false);
				unagi.isEmptyArray(false).should.equal(false);
				unagi.isEmptyArray('').should.equal(false);
				unagi.isEmptyArray('str').should.equal(false);
				unagi.isEmptyArray(/regexp/).should.equal(false);
				unagi.isEmptyArray(new Date()).should.equal(false);
				unagi.isEmptyArray(function () {}).should.equal(false);
				unagi.isEmptyArray(Object).should.equal(false);
				unagi.isEmptyArray([]).should.equal(true);
				unagi.isEmptyArray([1]).should.equal(false);
				unagi.isEmptyArray({}).should.equal(false);
				unagi.isEmptyArray({
					a: 1
				}).should.equal(false);
			});
		});

		describe('#isEmptyObject', function () {
			it('should return true only when the value is a JSON object and is empty', function () {
				unagi.isEmptyObject(void 0).should.equal(false);
				unagi.isEmptyObject(null).should.equal(false);
				unagi.isEmptyObject(NaN).should.equal(false);
				unagi.isEmptyObject(0).should.equal(false);
				unagi.isEmptyObject(1).should.equal(false);
				unagi.isEmptyObject(true).should.equal(false);
				unagi.isEmptyObject(false).should.equal(false);
				unagi.isEmptyObject('').should.equal(false);
				unagi.isEmptyObject('str').should.equal(false);
				unagi.isEmptyObject(/regexp/).should.equal(false);
				unagi.isEmptyObject(new Date()).should.equal(false);
				unagi.isEmptyObject(function () {}).should.equal(false);
				unagi.isEmptyObject(Object).should.equal(false);
				unagi.isEmptyObject([]).should.equal(false);
				unagi.isEmptyObject([1]).should.equal(false);
				unagi.isEmptyObject({}).should.equal(true);
				unagi.isEmptyObject({
					a: 1
				}).should.equal(false);
			});
		});

		describe('#isEmpty', function () {
			it('should return true only when the value is empty (falsey or empty array or empty JSON object)', function () {
				unagi.isEmpty(void 0).should.equal(true);
				unagi.isEmpty(null).should.equal(true);
				unagi.isEmpty(NaN).should.equal(true);
				unagi.isEmpty(0).should.equal(true);
				unagi.isEmpty(1).should.equal(false);
				unagi.isEmpty(true).should.equal(false);
				unagi.isEmpty(false).should.equal(true);
				unagi.isEmpty('').should.equal(true);
				unagi.isEmpty('str').should.equal(false);
				unagi.isEmpty(/regexp/).should.equal(false);
				unagi.isEmpty(new Date()).should.equal(false);
				unagi.isEmpty(function () {}).should.equal(false);
				unagi.isEmpty(Object).should.equal(false);
				unagi.isEmpty([]).should.equal(true);
				unagi.isEmpty([1]).should.equal(false);
				unagi.isEmpty({}).should.equal(true);
				unagi.isEmpty({
					a: 1
				}).should.equal(false);
			});
		});

		describe('#isNotEmpty', function () {
			it('should return false only when the value is empty (falsey or empty array or empty JSON object)', function () {
				unagi.isNotEmpty(void 0).should.equal(false);
				unagi.isNotEmpty(null).should.equal(false);
				unagi.isNotEmpty(NaN).should.equal(false);
				unagi.isNotEmpty(0).should.equal(false);
				unagi.isNotEmpty(1).should.equal(true);
				unagi.isNotEmpty(true).should.equal(true);
				unagi.isNotEmpty(false).should.equal(false);
				unagi.isNotEmpty('').should.equal(false);
				unagi.isNotEmpty('str').should.equal(true);
				unagi.isNotEmpty(/regexp/).should.equal(true);
				unagi.isNotEmpty(new Date()).should.equal(true);
				unagi.isNotEmpty(function () {}).should.equal(true);
				unagi.isNotEmpty(Object).should.equal(true);
				unagi.isNotEmpty([]).should.equal(false);
				unagi.isNotEmpty([1]).should.equal(true);
				unagi.isNotEmpty({}).should.equal(false);
				unagi.isNotEmpty({
					a: 1
				}).should.equal(true);
			});
		});

		describe('#isJson', function () {
			it('should return true only when the value is JSON object', function () {
				unagi.isJson(void 0).should.equal(false);
				unagi.isJson(null).should.equal(false);
				unagi.isJson(NaN).should.equal(false);
				unagi.isJson(0).should.equal(false);
				unagi.isJson(1).should.equal(false);
				unagi.isJson(true).should.equal(false);
				unagi.isJson(false).should.equal(false);
				unagi.isJson('').should.equal(false);
				unagi.isJson('str').should.equal(false);
				unagi.isJson(/regexp/).should.equal(false);
				unagi.isJson(new Date()).should.equal(false);
				unagi.isJson(function () {}).should.equal(false);
				unagi.isJson(Object).should.equal(false);
				unagi.isJson([]).should.equal(false);
				unagi.isJson([1]).should.equal(false);
				unagi.isJson({}).should.equal(true);
				unagi.isJson({
					a: 1
				}).should.equal(true);
			});
		});

		describe('#isNotJson', function () {
			it('should return false only when the value is JSON object', function () {
				unagi.isNotJson(void 0).should.equal(true);
				unagi.isNotJson(null).should.equal(true);
				unagi.isNotJson(NaN).should.equal(true);
				unagi.isNotJson(0).should.equal(true);
				unagi.isNotJson(1).should.equal(true);
				unagi.isNotJson(true).should.equal(true);
				unagi.isNotJson(false).should.equal(true);
				unagi.isNotJson('').should.equal(true);
				unagi.isNotJson('str').should.equal(true);
				unagi.isNotJson(/regexp/).should.equal(true);
				unagi.isNotJson(new Date()).should.equal(true);
				unagi.isNotJson(function () {}).should.equal(true);
				unagi.isNotJson(Object).should.equal(true);
				unagi.isNotJson([]).should.equal(true);
				unagi.isNotJson([1]).should.equal(true);
				unagi.isNotJson({}).should.equal(false);
				unagi.isNotJson({
					a: 1
				}).should.equal(false);
			});
		});

		describe('#isFalsey', function () {
			it('should return true only when the value is falsey', function () {
				unagi.isFalsey(void 0).should.equal(true);
				unagi.isFalsey(null).should.equal(true);
				unagi.isFalsey(NaN).should.equal(true);
				unagi.isFalsey(0).should.equal(true);
				unagi.isFalsey(1).should.equal(false);
				unagi.isFalsey(true).should.equal(false);
				unagi.isFalsey(false).should.equal(true);
				unagi.isFalsey('').should.equal(true);
				unagi.isFalsey('str').should.equal(false);
				unagi.isFalsey(/regexp/).should.equal(false);
				unagi.isFalsey(new Date()).should.equal(false);
				unagi.isFalsey(function () {}).should.equal(false);
				unagi.isFalsey(Object).should.equal(false);
				unagi.isFalsey([]).should.equal(false);
				unagi.isFalsey([1]).should.equal(false);
				unagi.isFalsey({}).should.equal(false);
				unagi.isFalsey({
					a: 1
				}).should.equal(false);
			});
		});

		describe('#isTruthy', function () {
			it('should return true only when the value is truthy', function () {
				unagi.isTruthy(void 0).should.equal(false);
				unagi.isTruthy(null).should.equal(false);
				unagi.isTruthy(NaN).should.equal(false);
				unagi.isTruthy(0).should.equal(false);
				unagi.isTruthy(1).should.equal(true);
				unagi.isTruthy(true).should.equal(true);
				unagi.isTruthy(false).should.equal(false);
				unagi.isTruthy('').should.equal(false);
				unagi.isTruthy('str').should.equal(true);
				unagi.isTruthy(/regexp/).should.equal(true);
				unagi.isTruthy(new Date()).should.equal(true);
				unagi.isTruthy(function () {}).should.equal(true);
				unagi.isTruthy(Object).should.equal(true);
				unagi.isTruthy([]).should.equal(true);
				unagi.isTruthy([1]).should.equal(true);
				unagi.isTruthy({}).should.equal(true);
				unagi.isTruthy({
					a: 1
				}).should.equal(true);
			});
		});
	});

})();
