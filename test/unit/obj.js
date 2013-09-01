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
			});
		});
	});

})();
