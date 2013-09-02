(function () {
	'use strict';

	var obj = require('../../lib/unagi.js').obj;

	describe('obj', function () {
		describe('#keys', function () {
			it('should throw error when called on non-object', function () {
				(function () {
					obj.keys(void 0);
				}).should.throwError();

				(function () {
					obj.keys(null);
				}).should.throwError();

				(function () {
					obj.keys(NaN);
				}).should.throwError();

				(function () {
					obj.keys(0);
				}).should.throwError();

				(function () {
					obj.keys(1);
				}).should.throwError();

				(function () {
					obj.keys(false);
				}).should.throwError();

				(function () {
					obj.keys(true);
				}).should.throwError();

				(function () {
					obj.keys('');
				}).should.throwError();

				(function () {
					obj.keys('str');
				}).should.throwError();
			});

			it('should return an empty array for empty object/array', function () {
				obj.keys({}).should.eql([]);
				obj.keys([]).should.eql([]);
				obj.keys(new Date()).should.eql([]);
			});

			it('should return an array of keys for object and an array of indices for array', function () {
				obj.keys({
					a: void 0,
					b: null,
					c: 0,
					d: false,
					e: '',
					f: NaN
				}).should.eql(['a', 'b', 'c', 'd', 'e', 'f']);

				obj.keys(['a', 'b', 'c']).should.eql(['0', '1', '2']);
			});
		});

		describe('#vals', function () {
			it('should return an empty array for empty object/array', function () {
				obj.vals({}).should.eql([]);
				obj.vals([]).should.eql([]);
				obj.vals(new Date()).should.eql([]);
			});

			it('should return an array of values for object/array', function () {
				obj.vals({
					a: void 0,
					b: null,
					c: 0,
					d: false,
					e: ''
				}).should.eql([void 0, null, 0, false, '']);

				obj.vals(['a', 'b', 'c']).should.eql(['a', 'b', 'c']);

				var d = new Date();
				d.test = true;
				obj.vals(d).should.eql([true]);
			});
		});

		function testCommonCallbackFunctions(fn) {
			it('should never call a function for empty object', function () {
				var count = 0;

				function addCount() {
					count++;
				}

				fn({}, addCount);
				count.should.eql(0);

				fn([], addCount);
				count.should.eql(0);

				fn(new Date(), addCount);
				count.should.eql(0);
			});

			it('should pass parameters properly and keep the order', function () {
				var keys = [],
					values = [];
				fn({
					a: 1,
					c: 3,
					b: 2
				}, function (val, key, obj) {
					(obj[key] === val).should.equal(true);
					keys.push(key);
					values.push(val);
				});
				keys.should.eql(['a', 'c', 'b']);
				values.should.eql([1, 3, 2]);

				keys = [];
				values = [];
				fn([5, 2, 4], function (val, key, obj) {
					(obj[key] === val).should.equal(true);
					keys.push(key);
					values.push(val);
				});
				keys.should.eql(['0', '1', '2']);
				values.should.eql([5, 2, 4]);

				keys = [];
				values = [];
				var testObj = {
					c: 3
				};
				testObj.f = 2;
				testObj.a = 8;
				fn(testObj, function (val, key, obj) {
					(obj[key] === val).should.equal(true);
					keys.push(key);
					values.push(val);
				});
				keys.should.eql(['c', 'f', 'a']);
				values.should.eql([3, 2, 8]);
			});

			it('should call a function with proper "this"', function () {
				var testObj = {
					a: 1,
					b: 2
				};
				fn(testObj, function () {
					(this === void 0).should.equal(true);
				});

				fn(testObj, function () {
					(this === void 0).should.equal(true);
				}, void 0);

				fn(testObj, function () {
					(this === null).should.equal(true);
				}, null);

				fn(testObj, function () {
					isNaN(this).should.equal(true);
				}, NaN);

				fn(testObj, function () {
					this.should.equal(0);
				}, 0);

				fn(testObj, function () {
					this.should.equal(1);
				}, 1);

				fn(testObj, function () {
					this.should.equal(true);
				}, true);

				fn(testObj, function () {
					this.should.equal(false);
				}, false);

				fn(testObj, function () {
					this.should.equal('');
				}, '');

				fn(testObj, function () {
					this.should.equal('str');
				}, 'str');

				fn(testObj, function () {
					this.should.eql({});
				}, {});

				fn(testObj, function () {
					this.should.eql([]);
				}, []);

				var thisp = {};
				fn(testObj, function () {
					this.should.equal(thisp);
				}, thisp);
			});

			it('should iterate on keys that exist in object and in specified key list if given', function () {
				var keys = [],
					values = [];
				fn({
					a: 1,
					c: 3,
					b: 2
				}, function (val, key, obj) {
					(obj[key] === val).should.equal(true);
					keys.push(key);
					values.push(val);
				}, null, ['b', 'c', 'd']);
				keys.should.eql(['b', 'c']);
				values.should.eql([2, 3]);
			});

			it('should not modify original object', function () {
				var testObj = {
					a: 1,
					c: 3,
					b: 2
				};

				obj.map(testObj, function (val) {
					return val > 2;
				});

				testObj.should.eql({
					a: 1,
					c: 3,
					b: 2
				});
			});
		}

		describe('#each', function () {
			testCommonCallbackFunctions(obj.each);
		});

		describe('#map', function () {
			testCommonCallbackFunctions(obj.map);

			it('should map returned values into new key/value object', function () {
				obj.map({
					a: 1,
					c: 3,
					b: 2
				}, function (val, key /*, obj*/ ) {
					return [val, key];
				}).should.eql({
					a: [1, 'a'],
					c: [3, 'c'],
					b: [2, 'b']
				});

				obj.map({
					a: 1,
					c: 3,
					b: 2
				}, function (val /*, key, obj*/ ) {
					return val > 2;
				}).should.eql({
					a: false,
					c: true,
					b: false
				});
			});
		});

		describe('#mapVals', function () {
			testCommonCallbackFunctions(obj.mapVals);

			it('should map returned values into a new array to return', function () {
				obj.mapVals({
					a: 1,
					c: 3,
					b: 2
				}, function (val, key /*, obj*/ ) {
					return [val, key];
				}).should.eql([[1, 'a'], [3, 'c'], [2, 'b']]);

				obj.mapVals({
					a: 1,
					c: 3,
					b: 2
				}, function (val /*, key, obj*/ ) {
					return val > 2;
				}).should.eql([
					false,
					true,
					false
				]);
			});
		});

		describe('#filter', function () {
			testCommonCallbackFunctions(obj.filter);

			it('should filter out failing key/value pairs and return new object', function () {
				obj.filter({
					a: 1,
					c: 3,
					b: 2
				}, function ( /*val, key, obj*/ ) {
					return true;
				}).should.eql({
					a: 1,
					c: 3,
					b: 2
				});

				obj.filter({
					a: 1,
					c: 3,
					b: 2
				}, function ( /*val, key, obj*/ ) {
					return false;
				}).should.eql({});

				obj.filter({
					a: 1,
					c: 3,
					b: 2
				}, function (val /*, key, obj*/ ) {
					return val > 1;
				}).should.eql({
					c: 3,
					b: 2
				});

				obj.filter({
					a: 1,
					c: 3,
					b: 2
				}, function (val /*, key, obj*/ ) {
					// truthy / falsey instead of true / false
					return val > 1 ? 1 : 0;
				}).should.eql({
					c: 3,
					b: 2
				});

				obj.filter([4, 2, 8], function (val /*, key, obj*/ ) {
					return val > 5;
				}).should.eql({
					'2': 8
				});
			});
		});

		describe('#copy', function () {
			it('should always create new object', function () {
				obj.copy({
					a: 1,
					c: 3,
					b: 2
				}).should.not.equal({
					a: 1,
					c: 3,
					b: 2
				});

				obj.copy({
					a: 1,
					c: 3,
					b: 2
				}).should.eql({
					a: 1,
					c: 3,
					b: 2
				});
			});

			it('should create and return a new object with same key/value pairs in the same order', function () {
				obj.copy({
					a: 1,
					c: 3,
					b: 2
				}).should.eql({
					a: 1,
					c: 3,
					b: 2
				});
			});
		});

	});
})();
