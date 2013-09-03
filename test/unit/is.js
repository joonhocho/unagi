(function () {
	'use strict';

	var is = require('../../lib/unagi.js').is;

	describe('is', function () {
		describe('#arr', function () {
			it('should return true only when the value is array', function () {
				is.arr(void 0).should.equal(false);
				is.arr(null).should.equal(false);
				is.arr(NaN).should.equal(false);
				is.arr(0).should.equal(false);
				is.arr(1).should.equal(false);
				is.arr(true).should.equal(false);
				is.arr(false).should.equal(false);
				is.arr('').should.equal(false);
				is.arr('str').should.equal(false);
				is.arr(/regexp/).should.equal(false);
				is.arr(new Date()).should.equal(false);
				is.arr(function () {}).should.equal(false);
				is.arr(Object).should.equal(false);
				is.arr([]).should.equal(true);
				is.arr([1]).should.equal(true);
				is.arr({}).should.equal(false);
				is.arr({
					a: 1
				}).should.equal(false);
			});
		});

		describe('#nArr', function () {
			it('should return false only when the value is array', function () {
				is.nArr(void 0).should.equal(true);
				is.nArr(null).should.equal(true);
				is.nArr(NaN).should.equal(true);
				is.nArr(0).should.equal(true);
				is.nArr(1).should.equal(true);
				is.nArr(true).should.equal(true);
				is.nArr(false).should.equal(true);
				is.nArr('').should.equal(true);
				is.nArr('str').should.equal(true);
				is.nArr(/regexp/).should.equal(true);
				is.nArr(new Date()).should.equal(true);
				is.nArr(function () {}).should.equal(true);
				is.nArr(Object).should.equal(true);
				is.nArr([]).should.equal(false);
				is.nArr([1]).should.equal(false);
				is.nArr({}).should.equal(true);
				is.nArr({
					a: 1
				}).should.equal(true);
			});
		});

		describe('#bool', function () {
			it('should return true only when the value is boolean', function () {
				is.bool(void 0).should.equal(false);
				is.bool(null).should.equal(false);
				is.bool(NaN).should.equal(false);
				is.bool(0).should.equal(false);
				is.bool(1).should.equal(false);
				is.bool(true).should.equal(true);
				is.bool(false).should.equal(true);
				is.bool('').should.equal(false);
				is.bool('str').should.equal(false);
				is.bool(/regexp/).should.equal(false);
				is.bool(new Date()).should.equal(false);
				is.bool(function () {}).should.equal(false);
				is.bool(Object).should.equal(false);
				is.bool([]).should.equal(false);
				is.bool([1]).should.equal(false);
				is.bool({}).should.equal(false);
				is.bool({
					a: 1
				}).should.equal(false);
			});
		});

		describe('#nBool', function () {
			it('should return false only when the value is boolean', function () {
				is.nBool(void 0).should.equal(true);
				is.nBool(null).should.equal(true);
				is.nBool(NaN).should.equal(true);
				is.nBool(0).should.equal(true);
				is.nBool(1).should.equal(true);
				is.nBool(true).should.equal(false);
				is.nBool(false).should.equal(false);
				is.nBool('').should.equal(true);
				is.nBool('str').should.equal(true);
				is.nBool(/regexp/).should.equal(true);
				is.nBool(new Date()).should.equal(true);
				is.nBool(function () {}).should.equal(true);
				is.nBool(Object).should.equal(true);
				is.nBool([]).should.equal(true);
				is.nBool([1]).should.equal(true);
				is.nBool({}).should.equal(true);
				is.nBool({
					a: 1
				}).should.equal(true);
			});
		});

		describe('#num', function () {
			it('should return true only when the value is number', function () {
				is.num(void 0).should.equal(false);
				is.num(null).should.equal(false);
				is.num(NaN).should.equal(true);
				is.num(0).should.equal(true);
				is.num(1).should.equal(true);
				is.num(true).should.equal(false);
				is.num(false).should.equal(false);
				is.num('').should.equal(false);
				is.num('str').should.equal(false);
				is.num(/regexp/).should.equal(false);
				is.num(new Date()).should.equal(false);
				is.num(function () {}).should.equal(false);
				is.num(Object).should.equal(false);
				is.num([]).should.equal(false);
				is.num([1]).should.equal(false);
				is.num({}).should.equal(false);
				is.num({
					a: 1
				}).should.equal(false);
			});
		});

		describe('#nNum', function () {
			it('should return false only when the value is number', function () {
				is.nNum(void 0).should.equal(true);
				is.nNum(null).should.equal(true);
				is.nNum(NaN).should.equal(false);
				is.nNum(0).should.equal(false);
				is.nNum(1).should.equal(false);
				is.nNum(true).should.equal(true);
				is.nNum(false).should.equal(true);
				is.nNum('').should.equal(true);
				is.nNum('str').should.equal(true);
				is.nNum(/regexp/).should.equal(true);
				is.nNum(new Date()).should.equal(true);
				is.nNum(function () {}).should.equal(true);
				is.nNum(Object).should.equal(true);
				is.nNum([]).should.equal(true);
				is.nNum([1]).should.equal(true);
				is.nNum({}).should.equal(true);
				is.nNum({
					a: 1
				}).should.equal(true);
			});
		});

		describe('#str', function () {
			it('should return true only when the value is string', function () {
				is.str(void 0).should.equal(false);
				is.str(null).should.equal(false);
				is.str(NaN).should.equal(false);
				is.str(0).should.equal(false);
				is.str(1).should.equal(false);
				is.str(true).should.equal(false);
				is.str(false).should.equal(false);
				is.str('').should.equal(true);
				is.str('str').should.equal(true);
				is.str(/regexp/).should.equal(false);
				is.str(new Date()).should.equal(false);
				is.str(function () {}).should.equal(false);
				is.str(Object).should.equal(false);
				is.str([]).should.equal(false);
				is.str([1]).should.equal(false);
				is.str({}).should.equal(false);
				is.str({
					a: 1
				}).should.equal(false);
			});
		});

		describe('#nStr', function () {
			it('should return false only when the value is string', function () {
				is.nStr(void 0).should.equal(true);
				is.nStr(null).should.equal(true);
				is.nStr(NaN).should.equal(true);
				is.nStr(0).should.equal(true);
				is.nStr(1).should.equal(true);
				is.nStr(true).should.equal(true);
				is.nStr(false).should.equal(true);
				is.nStr('').should.equal(false);
				is.nStr('str').should.equal(false);
				is.nStr(/regexp/).should.equal(true);
				is.nStr(new Date()).should.equal(true);
				is.nStr(function () {}).should.equal(true);
				is.nStr(Object).should.equal(true);
				is.nStr([]).should.equal(true);
				is.nStr([1]).should.equal(true);
				is.nStr({}).should.equal(true);
				is.nStr({
					a: 1
				}).should.equal(true);
			});
		});

		describe('#fn', function () {
			it('should return true only when the value is function', function () {
				is.fn(void 0).should.equal(false);
				is.fn(null).should.equal(false);
				is.fn(NaN).should.equal(false);
				is.fn(0).should.equal(false);
				is.fn(1).should.equal(false);
				is.fn(true).should.equal(false);
				is.fn(false).should.equal(false);
				is.fn('').should.equal(false);
				is.fn('str').should.equal(false);
				is.fn(/regexp/).should.equal(false);
				is.fn(new Date()).should.equal(false);
				is.fn(function () {}).should.equal(true);
				is.fn(Object).should.equal(true);
				is.fn([]).should.equal(false);
				is.fn([1]).should.equal(false);
				is.fn({}).should.equal(false);
				is.fn({
					a: 1
				}).should.equal(false);
			});
		});

		describe('#nFn', function () {
			it('should return false only when the value is function', function () {
				is.nFn(void 0).should.equal(true);
				is.nFn(null).should.equal(true);
				is.nFn(NaN).should.equal(true);
				is.nFn(0).should.equal(true);
				is.nFn(1).should.equal(true);
				is.nFn(true).should.equal(true);
				is.nFn(false).should.equal(true);
				is.nFn('').should.equal(true);
				is.nFn('str').should.equal(true);
				is.nFn(/regexp/).should.equal(true);
				is.nFn(new Date()).should.equal(true);
				is.nFn(function () {}).should.equal(false);
				is.nFn(Object).should.equal(false);
				is.nFn([]).should.equal(true);
				is.nFn([1]).should.equal(true);
				is.nFn({}).should.equal(true);
				is.nFn({
					a: 1
				}).should.equal(true);
			});
		});

		describe('#obj', function () {
			it('should return true only when the value is object', function () {
				is.obj(void 0).should.equal(false);
				is.obj(null).should.equal(false);
				is.obj(NaN).should.equal(false);
				is.obj(0).should.equal(false);
				is.obj(1).should.equal(false);
				is.obj(true).should.equal(false);
				is.obj(false).should.equal(false);
				is.obj('').should.equal(false);
				is.obj('str').should.equal(false);
				is.obj(/regexp/).should.equal(true);
				is.obj(new Date()).should.equal(true);
				is.obj(function () {}).should.equal(false);
				is.obj(Object).should.equal(false);
				is.obj([]).should.equal(true);
				is.obj([1]).should.equal(true);
				is.obj({}).should.equal(true);
				is.obj({
					a: 1
				}).should.equal(true);
			});
		});

		describe('#nObj', function () {
			it('should return false only when the value is object', function () {
				is.nObj(void 0).should.equal(true);
				is.nObj(null).should.equal(true);
				is.nObj(NaN).should.equal(true);
				is.nObj(0).should.equal(true);
				is.nObj(1).should.equal(true);
				is.nObj(true).should.equal(true);
				is.nObj(false).should.equal(true);
				is.nObj('').should.equal(true);
				is.nObj('str').should.equal(true);
				is.nObj(/regexp/).should.equal(false);
				is.nObj(new Date()).should.equal(false);
				is.nObj(function () {}).should.equal(true);
				is.nObj(Object).should.equal(true);
				is.nObj([]).should.equal(false);
				is.nObj([1]).should.equal(false);
				is.nObj({}).should.equal(false);
				is.nObj({
					a: 1
				}).should.equal(false);
			});
		});

		describe('#nul', function () {
			it('should return true only when the value is null', function () {
				is.nul(void 0).should.equal(false);
				is.nul(null).should.equal(true);
				is.nul(NaN).should.equal(false);
				is.nul(0).should.equal(false);
				is.nul(1).should.equal(false);
				is.nul(true).should.equal(false);
				is.nul(false).should.equal(false);
				is.nul('').should.equal(false);
				is.nul('str').should.equal(false);
				is.nul(/regexp/).should.equal(false);
				is.nul(new Date()).should.equal(false);
				is.nul(function () {}).should.equal(false);
				is.nul(Object).should.equal(false);
				is.nul([]).should.equal(false);
				is.nul([1]).should.equal(false);
				is.nul({}).should.equal(false);
				is.nul({
					a: 1
				}).should.equal(false);
			});
		});

		describe('#nNul', function () {
			it('should return false only when the value is null', function () {
				is.nNul(void 0).should.equal(true);
				is.nNul(null).should.equal(false);
				is.nNul(NaN).should.equal(true);
				is.nNul(0).should.equal(true);
				is.nNul(1).should.equal(true);
				is.nNul(true).should.equal(true);
				is.nNul(false).should.equal(true);
				is.nNul('').should.equal(true);
				is.nNul('str').should.equal(true);
				is.nNul(/regexp/).should.equal(true);
				is.nNul(new Date()).should.equal(true);
				is.nNul(function () {}).should.equal(true);
				is.nNul(Object).should.equal(true);
				is.nNul([]).should.equal(true);
				is.nNul([1]).should.equal(true);
				is.nNul({}).should.equal(true);
				is.nNul({
					a: 1
				}).should.equal(true);
			});
		});

		describe('#undef', function () {
			it('should return true only when the value is undefined', function () {
				is.undef(void 0).should.equal(true);
				is.undef(null).should.equal(false);
				is.undef(NaN).should.equal(false);
				is.undef(0).should.equal(false);
				is.undef(1).should.equal(false);
				is.undef(true).should.equal(false);
				is.undef(false).should.equal(false);
				is.undef('').should.equal(false);
				is.undef('str').should.equal(false);
				is.undef(/regexp/).should.equal(false);
				is.undef(new Date()).should.equal(false);
				is.undef(function () {}).should.equal(false);
				is.undef(Object).should.equal(false);
				is.undef([]).should.equal(false);
				is.undef([1]).should.equal(false);
				is.undef({}).should.equal(false);
				is.undef({
					a: 1
				}).should.equal(false);
			});
		});

		describe('#nUndef', function () {
			it('should return false only when the value is undefined', function () {
				is.nUndef(void 0).should.equal(false);
				is.nUndef(null).should.equal(true);
				is.nUndef(NaN).should.equal(true);
				is.nUndef(0).should.equal(true);
				is.nUndef(1).should.equal(true);
				is.nUndef(true).should.equal(true);
				is.nUndef(false).should.equal(true);
				is.nUndef('').should.equal(true);
				is.nUndef('str').should.equal(true);
				is.nUndef(/regexp/).should.equal(true);
				is.nUndef(new Date()).should.equal(true);
				is.nUndef(function () {}).should.equal(true);
				is.nUndef(Object).should.equal(true);
				is.nUndef([]).should.equal(true);
				is.nUndef([1]).should.equal(true);
				is.nUndef({}).should.equal(true);
				is.nUndef({
					a: 1
				}).should.equal(true);
			});
		});

		describe('#set', function () {
			it('should return true only when the value is set', function () {
				is.set(void 0).should.equal(false);
				is.set(null).should.equal(false);
				is.set(NaN).should.equal(true);
				is.set(0).should.equal(true);
				is.set(1).should.equal(true);
				is.set(true).should.equal(true);
				is.set(false).should.equal(true);
				is.set('').should.equal(true);
				is.set('str').should.equal(true);
				is.set(/regexp/).should.equal(true);
				is.set(new Date()).should.equal(true);
				is.set(function () {}).should.equal(true);
				is.set(Object).should.equal(true);
				is.set([]).should.equal(true);
				is.set([1]).should.equal(true);
				is.set({}).should.equal(true);
				is.set({
					a: 1
				}).should.equal(true);
			});
		});

		describe('#nSet', function () {
			it('should return false only when the value is set', function () {
				is.nSet(void 0).should.equal(true);
				is.nSet(null).should.equal(true);
				is.nSet(NaN).should.equal(false);
				is.nSet(0).should.equal(false);
				is.nSet(1).should.equal(false);
				is.nSet(true).should.equal(false);
				is.nSet(false).should.equal(false);
				is.nSet('').should.equal(false);
				is.nSet('str').should.equal(false);
				is.nSet(/regexp/).should.equal(false);
				is.nSet(new Date()).should.equal(false);
				is.nSet(function () {}).should.equal(false);
				is.nSet(Object).should.equal(false);
				is.nSet([]).should.equal(false);
				is.nSet([1]).should.equal(false);
				is.nSet({}).should.equal(false);
				is.nSet({
					a: 1
				}).should.equal(false);
			});
		});

		describe('#emptyArr', function () {
			it('should return true only when the value is an array and is empty', function () {
				is.emptyArr(void 0).should.equal(false);
				is.emptyArr(null).should.equal(false);
				is.emptyArr(NaN).should.equal(false);
				is.emptyArr(0).should.equal(false);
				is.emptyArr(1).should.equal(false);
				is.emptyArr(true).should.equal(false);
				is.emptyArr(false).should.equal(false);
				is.emptyArr('').should.equal(false);
				is.emptyArr('str').should.equal(false);
				is.emptyArr(/regexp/).should.equal(false);
				is.emptyArr(new Date()).should.equal(false);
				is.emptyArr(function () {}).should.equal(false);
				is.emptyArr(Object).should.equal(false);
				is.emptyArr([]).should.equal(true);
				is.emptyArr([1]).should.equal(false);
				is.emptyArr({}).should.equal(false);
				is.emptyArr({
					a: 1
				}).should.equal(false);
			});
		});

		describe('#emptyObj', function () {
			it('should return true only when the value is a JSON object and is empty', function () {
				is.emptyObj(void 0).should.equal(false);
				is.emptyObj(null).should.equal(false);
				is.emptyObj(NaN).should.equal(false);
				is.emptyObj(0).should.equal(false);
				is.emptyObj(1).should.equal(false);
				is.emptyObj(true).should.equal(false);
				is.emptyObj(false).should.equal(false);
				is.emptyObj('').should.equal(false);
				is.emptyObj('str').should.equal(false);
				is.emptyObj(/regexp/).should.equal(true);
				is.emptyObj(new Date()).should.equal(true);
				is.emptyObj(function () {}).should.equal(false);
				is.emptyObj(Object).should.equal(false);
				is.emptyObj([]).should.equal(true);
				is.emptyObj([1]).should.equal(false);
				is.emptyObj({}).should.equal(true);
				is.emptyObj({
					a: 1
				}).should.equal(false);
			});
		});

		describe('#emptyJson', function () {
			it('should return true only when the value is a JSON object and is empty', function () {
				is.emptyJson(void 0).should.equal(false);
				is.emptyJson(null).should.equal(false);
				is.emptyJson(NaN).should.equal(false);
				is.emptyJson(0).should.equal(false);
				is.emptyJson(1).should.equal(false);
				is.emptyJson(true).should.equal(false);
				is.emptyJson(false).should.equal(false);
				is.emptyJson('').should.equal(false);
				is.emptyJson('str').should.equal(false);
				is.emptyJson(/regexp/).should.equal(false);
				is.emptyJson(new Date()).should.equal(false);
				is.emptyJson(function () {}).should.equal(false);
				is.emptyJson(Object).should.equal(false);
				is.emptyJson([]).should.equal(false);
				is.emptyJson([1]).should.equal(false);
				is.emptyJson({}).should.equal(true);
				is.emptyJson({
					a: 1
				}).should.equal(false);
			});
		});

		describe('#empty', function () {
			it('should return true only when the value is empty (falsey or empty array or empty JSON object)', function () {
				is.empty(void 0).should.equal(true);
				is.empty(null).should.equal(true);
				is.empty(NaN).should.equal(true);
				is.empty(0).should.equal(true);
				is.empty(1).should.equal(false);
				is.empty(true).should.equal(false);
				is.empty(false).should.equal(true);
				is.empty('').should.equal(true);
				is.empty('str').should.equal(false);
				is.empty(/regexp/).should.equal(false);
				is.empty(new Date()).should.equal(false);
				is.empty(function () {}).should.equal(false);
				is.empty(Object).should.equal(false);
				is.empty([]).should.equal(true);
				is.empty([1]).should.equal(false);
				is.empty({}).should.equal(true);
				is.empty({
					a: 1
				}).should.equal(false);
			});
		});

		describe('#nEmpty', function () {
			it('should return false only when the value is empty (falsey or empty array or empty JSON object)', function () {
				is.nEmpty(void 0).should.equal(false);
				is.nEmpty(null).should.equal(false);
				is.nEmpty(NaN).should.equal(false);
				is.nEmpty(0).should.equal(false);
				is.nEmpty(1).should.equal(true);
				is.nEmpty(true).should.equal(true);
				is.nEmpty(false).should.equal(false);
				is.nEmpty('').should.equal(false);
				is.nEmpty('str').should.equal(true);
				is.nEmpty(/regexp/).should.equal(true);
				is.nEmpty(new Date()).should.equal(true);
				is.nEmpty(function () {}).should.equal(true);
				is.nEmpty(Object).should.equal(true);
				is.nEmpty([]).should.equal(false);
				is.nEmpty([1]).should.equal(true);
				is.nEmpty({}).should.equal(false);
				is.nEmpty({
					a: 1
				}).should.equal(true);
			});
		});

		describe('#json', function () {
			it('should return true only when the value is JSON object', function () {
				is.json(void 0).should.equal(false);
				is.json(null).should.equal(false);
				is.json(NaN).should.equal(false);
				is.json(0).should.equal(false);
				is.json(1).should.equal(false);
				is.json(true).should.equal(false);
				is.json(false).should.equal(false);
				is.json('').should.equal(false);
				is.json('str').should.equal(false);
				is.json(/regexp/).should.equal(false);
				is.json(new Date()).should.equal(false);
				is.json(function () {}).should.equal(false);
				is.json(Object).should.equal(false);
				is.json([]).should.equal(false);
				is.json([1]).should.equal(false);
				is.json({}).should.equal(true);
				is.json({
					a: 1
				}).should.equal(true);
			});
		});

		describe('#nJson', function () {
			it('should return false only when the value is JSON object', function () {
				is.nJson(void 0).should.equal(true);
				is.nJson(null).should.equal(true);
				is.nJson(NaN).should.equal(true);
				is.nJson(0).should.equal(true);
				is.nJson(1).should.equal(true);
				is.nJson(true).should.equal(true);
				is.nJson(false).should.equal(true);
				is.nJson('').should.equal(true);
				is.nJson('str').should.equal(true);
				is.nJson(/regexp/).should.equal(true);
				is.nJson(new Date()).should.equal(true);
				is.nJson(function () {}).should.equal(true);
				is.nJson(Object).should.equal(true);
				is.nJson([]).should.equal(true);
				is.nJson([1]).should.equal(true);
				is.nJson({}).should.equal(false);
				is.nJson({
					a: 1
				}).should.equal(false);
			});
		});

		describe('#falsey', function () {
			it('should return true only when the value is falsey', function () {
				is.falsey(void 0).should.equal(true);
				is.falsey(null).should.equal(true);
				is.falsey(NaN).should.equal(true);
				is.falsey(0).should.equal(true);
				is.falsey(1).should.equal(false);
				is.falsey(true).should.equal(false);
				is.falsey(false).should.equal(true);
				is.falsey('').should.equal(true);
				is.falsey('str').should.equal(false);
				is.falsey(/regexp/).should.equal(false);
				is.falsey(new Date()).should.equal(false);
				is.falsey(function () {}).should.equal(false);
				is.falsey(Object).should.equal(false);
				is.falsey([]).should.equal(false);
				is.falsey([1]).should.equal(false);
				is.falsey({}).should.equal(false);
				is.falsey({
					a: 1
				}).should.equal(false);
			});
		});

		describe('#truthy', function () {
			it('should return true only when the value is truthy', function () {
				is.truthy(void 0).should.equal(false);
				is.truthy(null).should.equal(false);
				is.truthy(NaN).should.equal(false);
				is.truthy(0).should.equal(false);
				is.truthy(1).should.equal(true);
				is.truthy(true).should.equal(true);
				is.truthy(false).should.equal(false);
				is.truthy('').should.equal(false);
				is.truthy('str').should.equal(true);
				is.truthy(/regexp/).should.equal(true);
				is.truthy(new Date()).should.equal(true);
				is.truthy(function () {}).should.equal(true);
				is.truthy(Object).should.equal(true);
				is.truthy([]).should.equal(true);
				is.truthy([1]).should.equal(true);
				is.truthy({}).should.equal(true);
				is.truthy({
					a: 1
				}).should.equal(true);
			});
		});

	});
})();
