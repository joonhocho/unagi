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

		describe('#values', function () {
			it('should return an empty array for empty object/array', function () {
				obj.values({}).should.eql([]);
				obj.values([]).should.eql([]);
				obj.values(new Date()).should.eql([]);
			});

			it('should return an array of values for object/array', function () {
				obj.values({
					a: void 0,
					b: null,
					c: 0,
					d: false,
					e: ''
				}).should.eql([void 0, null, 0, false, '']);

				obj.values(['a', 'b', 'c']).should.eql(['a', 'b', 'c']);

				var d = new Date();
				d.test = true;
				obj.values(d).should.eql([true]);
			});
		});

		describe('#each', function () {
			it('should never call a function for empty object', function () {
				var count = 0;

				function addCount() {
					count++;
				}

				obj.each({}, addCount);
				count.should.eql(0);

				obj.each([], addCount);
				count.should.eql(0);

				obj.each(new Date(), addCount);
				count.should.eql(0);
			});

			it('should pass parameters properly and keep the order', function () {
				var keys = [],
					values = [];
				obj.each({
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
				obj.each([5, 2, 4], function (val, key, obj) {
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
				obj.each(testObj, function (val, key, obj) {
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
				obj.each(testObj, function () {
					(this === void 0).should.equal(true);
				});

				obj.each(testObj, function () {
					(this === void 0).should.equal(true);
				}, void 0);

				obj.each(testObj, function () {
					(this === null).should.equal(true);
				}, null);

				obj.each(testObj, function () {
					isNaN(this).should.equal(true);
				}, NaN);

				obj.each(testObj, function () {
					this.should.equal(0);
				}, 0);

				obj.each(testObj, function () {
					this.should.equal(1);
				}, 1);

				obj.each(testObj, function () {
					this.should.equal(true);
				}, true);

				obj.each(testObj, function () {
					this.should.equal(false);
				}, false);

				obj.each(testObj, function () {
					this.should.equal('');
				}, '');

				obj.each(testObj, function () {
					this.should.equal('str');
				}, 'str');

				obj.each(testObj, function () {
					this.should.eql({});
				}, {});

				obj.each(testObj, function () {
					this.should.eql([]);
				}, []);

				var thisp = {};
				obj.each(testObj, function () {
					this.should.equal(thisp);
				}, thisp);
			});

			it('should iterate only on the specified keys if given', function () {
				var keys = [],
					values = [];
				obj.each({
					a: 1,
					c: 3,
					b: 2
				}, function (val, key, obj) {
					(obj[key] === val).should.equal(true);
					keys.push(key);
					values.push(val);
				}, null, ['b', 'c', 'd']);
				keys.should.eql(['b', 'c', 'd']);
				values.should.eql([2, 3, void 0]);
			});
		});

		describe('#map', function () {
			it('should never call a function for empty object', function () {
				var count = 0;

				function addCount() {
					count++;
				}

				obj.map({}, addCount);
				count.should.eql(0);

				obj.map([], addCount);
				count.should.eql(0);

				obj.map(new Date(), addCount);
				count.should.eql(0);
			});

			it('should pass parameters properly and keep the order', function () {
				var keys = [],
					values = [];
				obj.map({
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
				obj.map([5, 2, 4], function (val, key, obj) {
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
				obj.map(testObj, function (val, key, obj) {
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
				obj.map(testObj, function () {
					(this === void 0).should.equal(true);
				});

				obj.map(testObj, function () {
					(this === void 0).should.equal(true);
				}, void 0);

				obj.map(testObj, function () {
					(this === null).should.equal(true);
				}, null);

				obj.map(testObj, function () {
					isNaN(this).should.equal(true);
				}, NaN);

				obj.map(testObj, function () {
					this.should.equal(0);
				}, 0);

				obj.map(testObj, function () {
					this.should.equal(1);
				}, 1);

				obj.map(testObj, function () {
					this.should.equal(true);
				}, true);

				obj.map(testObj, function () {
					this.should.equal(false);
				}, false);

				obj.map(testObj, function () {
					this.should.equal('');
				}, '');

				obj.map(testObj, function () {
					this.should.equal('str');
				}, 'str');

				obj.map(testObj, function () {
					this.should.eql({});
				}, {});

				obj.map(testObj, function () {
					this.should.eql([]);
				}, []);

				var thisp = {};
				obj.map(testObj, function () {
					this.should.equal(thisp);
				}, thisp);
			});

			it('should iterate only on the specified keys if given', function () {
				var keys = [],
					values = [];
				obj.map({
					a: 1,
					c: 3,
					b: 2
				}, function (val, key, obj) {
					(obj[key] === val).should.equal(true);
					keys.push(key);
					values.push(val);
				}, null, ['b', 'c', 'd']);
				keys.should.eql(['b', 'c', 'd']);
				values.should.eql([2, 3, void 0]);
			});

			it('should map returned values into a new array to return', function () {
				var keys = [],
					values = [];
				obj.map({
					a: 1,
					c: 3,
					b: 2
				}, function (val, key, obj) {
					(obj[key] === val).should.equal(true);
					keys.push(key);
					values.push(val);
				}, null, ['b', 'c', 'd']);
				keys.should.eql(['b', 'c', 'd']);
				values.should.eql([2, 3, void 0]);
			});
		});
	});

})();
