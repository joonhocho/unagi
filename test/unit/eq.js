(function () {
	'use strict';

	var eq = require('../../lib/unagi.js').eq;

	describe('eq', function () {
		describe('#strict', function () {
			it('should return true when two values are strictly equal', function () {
				eq.strict(void 0, void 0).should.equal(true);
				eq.strict(null, null).should.equal(true);
				eq.strict(NaN, NaN).should.equal(true);
				eq.strict(0, 0).should.equal(true);
				eq.strict(1, 1).should.equal(true);
				eq.strict(false, false).should.equal(true);
				eq.strict(true, true).should.equal(true);
				eq.strict('', '').should.equal(true);
				eq.strict('str', 'str').should.equal(true);

				var a = {};
				eq.strict(a, a).should.equal(true);

				a = [];
				eq.strict(a, a).should.equal(true);
			});

			it('should return false when two values are not strictly equal', function () {
				eq.strict(void 0, null).should.equal(false);
				eq.strict(null, void 0).should.equal(false);
				eq.strict(null, 0).should.equal(false);
				eq.strict(null, '').should.equal(false);
				eq.strict(0, '').should.equal(false);
				eq.strict(0, '0').should.equal(false);
				eq.strict(0, false).should.equal(false);
				eq.strict(NaN, null).should.equal(false);
				eq.strict(NaN, void 0).should.equal(false);
				eq.strict(NaN, 0).should.equal(false);
				eq.strict({}, {}).should.equal(false);
				eq.strict([], []).should.equal(false);
			});
		});

		describe('#arr', function () {
			it('should return false when two arrays do not have same length', function () {
				var a, b;
				a = [];
				b = [];
				a.length = 10;
				b.length = 9;
				eq.arr(a, b).should.equal(false);
			});

			it('should return false when two arrays do not have same indices', function () {
				var a, b;
				a = [];
				b = [];
				a[4] = 1;
				b[5] = 1;
				eq.arr(a, b).should.equal(false);

				a = [];
				b = [];
				a[4] = 1;
				a[6] = 2;
				b[4] = 1;
				b[7] = 2;
				eq.arr(a, b).should.equal(false);

				a = [void 0];
				b = [];
				b.length = 1;
				eq.arr(a, b).should.equal(false);
			});

			it('should return true when two arrays are recursively/strictly equal with same indices and length', function () {
				eq.arr([], []).should.equal(true);
				eq.arr([1], [1]).should.equal(true);
				eq.arr([NaN], [NaN]).should.equal(true);
				eq.arrS([void 0, null, NaN, 0, false, ''], [void 0, null, NaN, 0, false, '']).should.equal(true);
				eq.arr([1, 3, 2], [1, 3, 2]).should.equal(true);
				eq.arr([1, [5, 2, 3], 2], [1, [5, 2, 3], 2]).should.equal(true);
				eq.arr([1, [5, NaN, {
							a: void 0,
							b: [null, false]
				}], 2], [1, [5, NaN, {
							a: void 0,
							b: [null, false]
				}], 2]).should.equal(true);
			});

			it('should return false when two arrays are not recursively/strictly equal with same indices and length', function () {
				eq.arr([], [1]).should.equal(false);
				eq.arr([1], [2]).should.equal(false);
				eq.arr([void 0], [null]).should.equal(false);
				eq.arr([1, 3, 2], [1, 4, 2]).should.equal(false);
				eq.arr([1, 3, 2], [1, 2, 3]).should.equal(false);
				eq.arr([1, [5, 2, 3], 2], [1, [5, 3, 2], 2]).should.equal(false);
				eq.arr([1, [5, NaN, {
							a: void 0,
							b: [null, false]
				}], 2], [1, [5, NaN, {
							a: null,
							b: [null, false]
				}], 2]).should.equal(false);

				var a = [1, 2, 3];
				var b = [1, 2, 3];
				b.length = 10;
				eq.arr(a, b).should.equal(false);
			});
		});

		describe('#arrS', function () {
			it('should return false when two arrays do not have same length', function () {
				var a, b;
				a = [];
				b = [];
				a.length = 10;
				b.length = 9;
				eq.arrS(a, b).should.equal(false);
			});

			it('should return false when two arrays do not have same indices', function () {
				var a, b;
				a = [];
				b = [];
				a[4] = 1;
				b[5] = 1;
				eq.arrS(a, b).should.equal(false);

				a = [];
				b = [];
				a[4] = 1;
				a[6] = 2;
				b[4] = 1;
				b[7] = 2;
				eq.arrS(a, b).should.equal(false);

				a = [void 0];
				b = [];
				b.length = 1;
				eq.arrS(a, b).should.equal(false);
			});

			it('should return true when two arrays are recursively/strictly equal with same indices and length', function () {
				eq.arrS([], []).should.equal(true);
				eq.arrS([1], [1]).should.equal(true);
				eq.arrS([NaN], [NaN]).should.equal(true);
				eq.arrS([void 0, null, NaN, 0, false, ''], [void 0, null, NaN, 0, false, '']).should.equal(true);
				eq.arrS([1, 3, 2], [1, 3, 2]).should.equal(true);
				var a = [5, 2, 3];
				eq.arrS([1, a, 2], [1, a, 2]).should.equal(true);
			});

			it('should return false when two arrays are not recursively/strictly equal with same indices and length', function () {
				eq.arrS([], [1]).should.equal(false);
				eq.arrS([1], [2]).should.equal(false);
				eq.arrS([void 0], [null]).should.equal(false);
				eq.arrS([1, 3, 2], [1, 4, 2]).should.equal(false);
				eq.arrS([1, 3, 2], [1, 2, 3]).should.equal(false);
				eq.arrS([1, [5, 3, 2], 2], [1, [5, 3, 2], 2]).should.equal(false);
				eq.arrS([1, [], 2], [1, [], 2]).should.equal(false);
				eq.arrS([1, {},
					2], [1, {},
					2]).should.equal(false);

				var a = [1, 2, 3];
				var b = [1, 2, 3];
				b.length = 10;
				eq.arrS(a, b).should.equal(false);
			});
		});

		describe('#obj', function () {
			it('should return false when two objects do not have same keys', function () {
				var a, b;
				a = {};
				b = {};
				a.valueOf = void 0;
				eq.obj(a, b).should.equal(false);

				a = {};
				b = {};
				a.a = void 0;
				eq.obj(a, b).should.equal(false);

				eq.obj({
					a: 1
				}, {
					b: 1
				}).should.equal(false);
			});

			it('should return true when two objects have same keys in different order', function () {
				eq.obj({}, {}).should.equal(true);

				eq.obj({
					a: 1,
					b: 2,
					c: 3
				}, {
					a: 1,
					c: 3,
					b: 2
				}).should.equal(true);
			});

			it('should return true when two objects are recursively/strictly equal', function () {
				eq.obj([], []).should.equal(true);
				eq.obj({}, {}).should.equal(true);
				eq.obj([1], [1]).should.equal(true);
				eq.obj({
					a: 1
				}, {
					a: 1
				}).should.equal(true);

				eq.obj({
					a: void 0,
					b: null,
					c: NaN,
					d: 0,
					e: false,
					f: ''
				}, {
					a: void 0,
					b: null,
					c: NaN,
					d: 0,
					e: false,
					f: ''
				}).should.equal(true);

				eq.obj({
					e: false,
					a: void 0,
					d: 0,
					c: NaN,
					b: null,
					f: ''
				}, {
					d: 0,
					b: null,
					c: NaN,
					e: false,
					a: void 0,
					f: ''
				}).should.equal(true);

				eq.obj({
					a: 'str',
					b: {
						c: [1, 3, void 0, {
								d: true
						}]
					},
					e: null,
					f: [{
							g: {},
							h: -123
					}
					]
				}, {
					e: null,
					b: {
						c: [1, 3, void 0, {
								d: true
						}]
					},
					a: 'str',
					f: [{
							h: -123,
							g: {}
					}
					]
				}).should.equal(true);
			});

			it('should return false when two objects are not recursively/strictly equal', function () {
				eq.obj([], [1]).should.equal(false);
				eq.obj([1], [2]).should.equal(false);
				eq.obj([void 0], [null]).should.equal(false);
				eq.obj([1, 3, 2], [1, 4, 2]).should.equal(false);
				eq.obj([1, 3, 2], [1, 2, 3]).should.equal(false);
				eq.obj([1, [5, 2, 3], 2], [1, [5, 3, 2], 2]).should.equal(false);

				eq.obj({}, {
					a: void 0
				}).should.equal(false);
				eq.obj({
					a: void 0
				}, {
					b: void 0
				}).should.equal(false);
				eq.obj({
					a: void 0
				}, {
					a: null
				}).should.equal(false);
				eq.obj({
					a: 1,
					b: {
						a: 1,
						b: 2
					}
				}, {
					a: 1,
					b: {
						a: 2,
						b: 1
					}
				}).should.equal(false);
			});

			it('should return check specified keys only if keys are given', function () {
				eq.obj({
					a: 1,
					b: 2,
					c: 3,
					d: 4,
					f: 6
				}, {
					b: 2,
					c: 3,
					d: 4,
					e: 5,
					f: 7
				}, ['b', 'c', 'd']).should.equal(true);
			});
		});
	});
})();
