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
				eq.strict(123, new Date(123)).should.equal(false);
			});
		});

		describe('#loose', function () {
			it('should return true when two values are loosely equal', function () {
				eq.loose(void 0, void 0).should.equal(true);
				eq.loose(null, null).should.equal(true);
				eq.loose(NaN, NaN).should.equal(true);
				eq.loose(0, 0).should.equal(true);
				eq.loose(1, 1).should.equal(true);
				eq.loose(false, false).should.equal(true);
				eq.loose(true, true).should.equal(true);
				eq.loose('', '').should.equal(true);
				eq.loose('str', 'str').should.equal(true);

				var a = {};
				eq.loose(a, a).should.equal(true);

				a = [];
				eq.loose(a, a).should.equal(true);

				eq.loose(void 0, null).should.equal(true);
				eq.loose(null, void 0).should.equal(true);
				eq.loose(0, '').should.equal(true);
				eq.loose(0, '0').should.equal(true);
				eq.loose(0, false).should.equal(true);

			});

			it('should return false when two values are not loosely equal', function () {
				eq.loose(null, 0).should.equal(false);
				eq.loose(null, '').should.equal(false);
				eq.loose(NaN, null).should.equal(false);
				eq.loose(NaN, void 0).should.equal(false);
				eq.loose(NaN, 0).should.equal(false);
				eq.loose({}, {}).should.equal(false);
				eq.loose([], []).should.equal(false);
			});

			it('should use valueOf if available', function () {
				eq.loose(123, new Date(123)).should.equal(true);
				eq.loose(new Date(123), new Date(123)).should.equal(true);
				eq.loose(new Date(123), 123).should.equal(true);
				eq.loose(new Date(123), '123').should.equal(true);
				eq.loose('123', new Date(123)).should.equal(true);

				function Cat() {}
				Cat.prototype.valueOf = function () {
					return 'cat';
				};

				function Tiger() {}
				Tiger.prototype.valueOf = function () {
					return 'cat';
				};

				eq.loose(new Cat(), new Tiger()).should.equal(true);
				eq.loose(new Tiger(), new Cat()).should.equal(true);
			});

			it('should use equals if available', function () {
				function Point(x, y) {
					this.x = x;
					this.y = y;
				}
				Point.prototype.equals = function (p) {
					return p != null && this.x === p.x && this.y === p.y;
				};

				function Location(x, y) {
					this.x = x;
					this.y = y;
				}
				eq.loose(new Point(3, 4), new Location(3, 4)).should.equal(true);
				eq.loose(new Location(3, 4), new Point(3, 4)).should.equal(true);
				eq.loose(new Location(4, 4), new Point(3, 4)).should.equal(false);
				eq.loose(new Location(3, 5), new Point(3, 4)).should.equal(false);
			});
		});

		function testArrayEq(fn) {
			it('should return false when two arrays do not have same length', function () {
				var a, b;
				a = [];
				b = [];
				a.length = 10;
				b.length = 9;
				fn(a, b).should.equal(false);
			});

			it('should return false when two arrays do not have same indices', function () {
				var a, b;
				a = [];
				b = [];
				a[4] = 1;
				b[5] = 1;
				fn(a, b).should.equal(false);

				a = [];
				b = [];
				a[4] = 1;
				a[6] = 2;
				b[4] = 1;
				b[7] = 2;
				fn(a, b).should.equal(false);

				a = [void 0];
				b = [];
				b.length = 1;
				fn(a, b).should.equal(false);
			});

			it('should return true when two arrays are recursively/strictly equal with same indices and length', function () {
				fn([], []).should.equal(true);
				fn([1], [1]).should.equal(true);
				fn([NaN], [NaN]).should.equal(true);
				fn([void 0, null, NaN, 0, false, ''], [void 0, null, NaN, 0, false, '']).should.equal(true);
				fn([1, 3, 2], [1, 3, 2]).should.equal(true);
				fn([1, [5, 2, 3], 2], [1, [5, 2, 3], 2]).should.equal(true);
				fn([1, [5, NaN, {
							a: void 0,
							b: [null, false]
				}], 2], [1, [5, NaN, {
							a: void 0,
							b: [null, false]
				}], 2]).should.equal(true);
			});

			it('should return false when two arrays are not recursively/strictly equal with same indices and length', function () {
				fn([], [1]).should.equal(false);
				fn([1], [2]).should.equal(false);
				fn([void 0], [null]).should.equal(false);
				fn([1, 3, 2], [1, 4, 2]).should.equal(false);
				fn([1, 3, 2], [1, 2, 3]).should.equal(false);
				fn([1, [5, 2, 3], 2], [1, [5, 3, 2], 2]).should.equal(false);
				fn([1, [5, NaN, {
							a: void 0,
							b: [null, false]
				}], 2], [1, [5, NaN, {
							a: null,
							b: [null, false]
				}], 2]).should.equal(false);

				var a = [1, 2, 3];
				var b = [1, 2, 3];
				b.length = 10;
				fn(a, b).should.equal(false);
			});
		}

		describe('#arr', function () {
			testArrayEq(eq.arr);
		});

		function testArrayEqS(fn) {
			it('should return false when two arrays do not have same length', function () {
				var a, b;
				a = [];
				b = [];
				a.length = 10;
				b.length = 9;
				fn(a, b).should.equal(false);
			});

			it('should return false when two arrays do not have same indices', function () {
				var a, b;
				a = [];
				b = [];
				a[4] = 1;
				b[5] = 1;
				fn(a, b).should.equal(false);

				a = [];
				b = [];
				a[4] = 1;
				a[6] = 2;
				b[4] = 1;
				b[7] = 2;
				fn(a, b).should.equal(false);

				a = [void 0];
				b = [];
				b.length = 1;
				fn(a, b).should.equal(false);
			});

			it('should return true when two arrays are recursively/strictly equal with same indices and length', function () {
				fn([], []).should.equal(true);
				fn([1], [1]).should.equal(true);
				fn([NaN], [NaN]).should.equal(true);
				fn([void 0, null, NaN, 0, false, ''], [void 0, null, NaN, 0, false, '']).should.equal(true);
				fn([1, 3, 2], [1, 3, 2]).should.equal(true);
				var a = [5, 2, 3];
				fn([1, a, 2], [1, a, 2]).should.equal(true);
			});

			it('should return false when two arrays are not recursively/strictly equal with same indices and length', function () {
				fn([], [1]).should.equal(false);
				fn([1], [2]).should.equal(false);
				fn([void 0], [null]).should.equal(false);
				fn([1, 3, 2], [1, 4, 2]).should.equal(false);
				fn([1, 3, 2], [1, 2, 3]).should.equal(false);
				fn([1, [5, 3, 2], 2], [1, [5, 3, 2], 2]).should.equal(false);
				fn([1, [], 2], [1, [], 2]).should.equal(false);
				fn([1, {},
					2], [1, {},
					2]).should.equal(false);

				var a = [1, 2, 3];
				var b = [1, 2, 3];
				b.length = 10;
				fn(a, b).should.equal(false);
			});
		}

		describe('#arrS', function () {
			testArrayEqS(eq.arrS);
		});

		function testJsonEq(fn) {
			it('should return false when two objects do not have same keys', function () {
				var a, b;
				a = {};
				b = {};
				a.valueOf = void 0;
				fn(a, b).should.equal(false);

				a = {};
				b = {};
				a.a = void 0;
				fn(a, b).should.equal(false);

				fn({
					a: 1
				}, {
					b: 1
				}).should.equal(false);
			});

			it('should return true when two objects have same keys in different order', function () {
				fn({}, {}).should.equal(true);

				fn({
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
				fn([], []).should.equal(true);
				fn({}, {}).should.equal(true);
				fn([1], [1]).should.equal(true);
				fn({
					a: 1
				}, {
					a: 1
				}).should.equal(true);

				fn({
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

				fn({
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

				fn({
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
				fn([], [1]).should.equal(false);
				fn([1], [2]).should.equal(false);
				fn([void 0], [null]).should.equal(false);
				fn([1, 3, 2], [1, 4, 2]).should.equal(false);
				fn([1, 3, 2], [1, 2, 3]).should.equal(false);
				fn([1, [5, 2, 3], 2], [1, [5, 3, 2], 2]).should.equal(false);

				fn({}, {
					a: void 0
				}).should.equal(false);
				fn({
					a: void 0
				}, {
					b: void 0
				}).should.equal(false);
				fn({
					a: void 0
				}, {
					a: null
				}).should.equal(false);
				fn({
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

			it('should use valueOf if available', function () {
				fn([new Date(100)], [new Date(100)]).should.equal(true);
				fn([new Date(100)], [100]).should.equal(false);
				fn({
					a: new Date(100)
				}, {
					a: new Date(100)
				}).should.equal(true);
			});

			it('should use equals if available', function () {
				function Point(x, y) {
					this.x = x;
					this.y = y;
				}
				Point.prototype.equals = function (p) {
					return p != null && this.x == p.x && this.y == p.y;
				};

				function Location(x, y) {
					this.x = x;
					this.y = y;
				}

				fn([new Point(3, 4)], [new Point(3, 4)]).should.equal(true);
				fn([new Point('3', '4')], [new Point(3, 4)]).should.equal(true);
				fn([new Location(3, 4)], [new Location(3, 4)]).should.equal(true);
				fn([new Location('3', '4')], [new Location(3, 4)]).should.equal(false);
				fn([new Point(3, 4)], [new Location(3, 4)]).should.equal(false);
				fn([new Location(3, 4)], [new Point(3, 4)]).should.equal(false);
			});
		}

		describe('#json', function () {
			var fn = eq.json;
			testJsonEq(fn);

			it('should return check specified keys only if keys are given', function () {
				fn({
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

		describe('#jsonS', function () {
			var fn = eq.jsonS;
			it('should return false when two objects do not have same keys', function () {
				var a, b;
				a = {};
				b = {};
				a.valueOf = void 0;
				fn(a, b).should.equal(false);

				a = {};
				b = {};
				a.a = void 0;
				fn(a, b).should.equal(false);

				fn({
					a: 1
				}, {
					b: 1
				}).should.equal(false);
			});

			it('should return true when two objects have same keys in different order', function () {
				fn({}, {}).should.equal(true);

				fn({
					a: 1,
					b: 2,
					c: 3
				}, {
					a: 1,
					c: 3,
					b: 2
				}).should.equal(true);
			});

			it('should return true when two objects are shallowly/strictly equal', function () {
				fn([], []).should.equal(true);
				fn({}, {}).should.equal(true);
				fn([1], [1]).should.equal(true);
				fn({
					a: 1
				}, {
					a: 1
				}).should.equal(true);

				fn({
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

				fn({
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

				var o = {},
					a = [];

				fn({
					a: 'str',
					b: o,
					c: a
				}, {
					a: 'str',
					c: a,
					b: o
				}).should.equal(true);
			});

			it('should return false when two objects are not shallowly/strictly equal', function () {
				fn([], [1]).should.equal(false);
				fn([1], [2]).should.equal(false);
				fn([void 0], [null]).should.equal(false);
				fn([1, 3, 2], [1, 4, 2]).should.equal(false);
				fn([1, 3, 2], [1, 2, 3]).should.equal(false);
				fn([1, {},
					2], [1, {},
					2]).should.equal(false);
				fn([1, [], 2], [1, [], 2]).should.equal(false);

				fn({}, {
					a: void 0
				}).should.equal(false);
				fn({
					a: void 0
				}, {
					b: void 0
				}).should.equal(false);
				fn({
					a: void 0
				}, {
					a: null
				}).should.equal(false);
				fn({
					a: 2,
					b: 1
				}, {
					a: 1,
					b: 2
				}).should.equal(false);
			});

			it('should return check specified keys only if keys are given', function () {
				fn({
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

			it('should use valueOf if available', function () {
				fn([new Date(100)], [new Date(100)]).should.equal(true);
				fn([new Date(100)], [100]).should.equal(false);
				fn({
					a: new Date(100)
				}, {
					a: new Date(100)
				}).should.equal(true);
			});

			it('should use equals if available', function () {
				function Point(x, y) {
					this.x = x;
					this.y = y;
				}
				Point.prototype.equals = function (p) {
					return p != null && this.x === p.x && this.y === p.y;
				};

				function Location(x, y) {
					this.x = x;
					this.y = y;
				}

				fn({
					a: new Point(3, 4)
				}, {
					a: new Point(3, 4)
				}).should.equal(true);

				fn({
					a: new Location(3, 4)
				}, {
					a: new Location(3, 4)
				}).should.equal(false);

				fn({
					a: new Location(3, 4)
				}, {
					a: new Point(3, 4)
				}).should.equal(false);

				fn({
					a: new Point(3, 4)
				}, {
					a: new Location(3, 4)
				}).should.equal(false);
			});
		});

		function testValueEq(fn) {
			it('should return true when two values are strictly equal', function () {
				fn(void 0, void 0).should.equal(true);
				fn(null, null).should.equal(true);
				fn(NaN, NaN).should.equal(true);
				fn(0, 0).should.equal(true);
				fn(1, 1).should.equal(true);
				fn(false, false).should.equal(true);
				fn(true, true).should.equal(true);
				fn('', '').should.equal(true);
				fn('str', 'str').should.equal(true);

				var a = {};
				fn(a, a).should.equal(true);

				a = [];
				fn(a, a).should.equal(true);
			});

			it('should return false when primitive values are not strictly equal', function () {
				fn(void 0, null).should.equal(false);
				fn(null, void 0).should.equal(false);
				fn(null, 0).should.equal(false);
				fn(null, '').should.equal(false);
				fn(0, '').should.equal(false);
				fn(0, '0').should.equal(false);
				fn(0, false).should.equal(false);
				fn(NaN, null).should.equal(false);
				fn(NaN, void 0).should.equal(false);
				fn(NaN, 0).should.equal(false);
				fn(123, new Date(123)).should.equal(false);
			});

			it('should use valueOf if available', function () {
				fn(new Date(123), new Date(123)).should.equal(true);

				function Cat(name, age) {
					this.name = name;
					this.age = age;
				}
				Cat.prototype.valueOf = function () {
					return this.name;
				};
				fn(new Cat('kitty', 15), new Cat('kitty', 20)).should.equal(true);
			});

			it('should ignore local valueOf function', function () {
				fn(new Date(123), new Date(123)).should.equal(true);

				function Cat(name, age) {
					this.name = name;
					this.age = age;
				}
				Cat.prototype.valueOf = function () {
					return this.name;
				};
				var a = new Cat('kitty', 15);
				a.valueOf = function () {
					return this.age;
				};
				var b = new Cat('kitty', 20);
				b.valueOf = function () {
					return this.age;
				};

				fn(a, b).should.equal(true);
				fn(b, a).should.equal(true);
			});

			it('should use equals if available', function () {
				function Dog(name, age) {
					this.name = name;
					this.age = age;
				}
				Dog.prototype.equals = function (d) {
					return this.name === d.name;
				};
				fn(new Dog('doggy', 15), new Dog('doggy', 20)).should.equal(true);
			});

			it('should ignore local equals function', function () {
				function Dog(name, age) {
					this.name = name;
					this.age = age;
				}
				Dog.prototype.equals = function (d) {
					return this.name === d.name;
				};
				var a = new Dog('doggy', 15),
					b = new Dog('doggy', 20);
				a.equals = function () {
					return false;
				};
				b.equals = function () {
					return null;
				};
				fn(a, b).should.equal(true);
				fn(b, a).should.equal(true);
			});

			it('should return false for objects of different classes', function () {
				function Dog(name) {
					this.name = name;
				}
				Dog.prototype.valueOf = function () {
					return this.name;
				};
				Dog.prototype.equals = function (d) {
					return this.name === d.name;
				};

				function Cat(name) {
					this.name = name;
				}
				Cat.prototype.valueOf = function () {
					return this.name;
				};
				Cat.prototype.equals = function (d) {
					return this.name === d.name;
				};

				var d = new Dog('hey'),
					c = new Cat('hey');

				fn(d, c).should.equal(false);
				fn(c, d).should.equal(false);
			});
		}

		describe('#val', function () {
			var fn = eq.val;
			testJsonEq(fn);
			testArrayEq(fn);
			testValueEq(fn);

			it('should return true for two objects with same properties and of same class', function () {
				function Cat(a, b) {
					this.a = a;
					this.b = b;
				}
				fn(new Cat(1, 2), new Cat(1, 2)).should.equal(true);
				fn(new Cat(2, 1), new Cat(1, 2)).should.equal(false);
				fn(new Cat(2, 1), {
					a: 2,
					b: 1
				}).should.equal(false);
			});
		});

		describe('#valS', function () {
			var fn = eq.valS;
			testValueEq(fn);

			it('should return false for two objects with same properties and of same class without valueOf or equals functions', function () {
				function Cat(a, b) {
					this.a = a;
					this.b = b;
				}
				fn(new Cat(1, 2), new Cat(1, 2)).should.equal(false);
			});
		});
	});
})();
