(function () {
	'use strict';

	var should = require('should'),
		str = require('../../lib/unagi.js').str;

	describe('str', function () {
		describe('#ucfirst', function () {
			it('should not try to cast to string', function () {
				should.not.exist(str.ucfirst(void 0));
				should.not.exist(str.ucfirst(null));
				isNaN(str.ucfirst(NaN)).should.equal(true);
				str.ucfirst(0).should.equal(0);
				str.ucfirst(false).should.equal(false);
				str.ucfirst('').should.equal('');
			});

			it('should trasfrom the first character of a string to an upper case', function () {
				str.ucfirst('').should.equal('');
				str.ucfirst('a').should.equal('A');
				str.ucfirst('A').should.equal('A');
				str.ucfirst('abc').should.equal('Abc');
				str.ucfirst('ABC').should.equal('ABC');
				str.ucfirst('Abc').should.equal('Abc');
				str.ucfirst('aBC').should.equal('ABC');
				str.ucfirst('-abc').should.equal('-abc');
				str.ucfirst(' abc').should.equal(' abc');
			});
		});

		describe('#lcfirst', function () {
			it('should not try to cast to string', function () {
				should.not.exist(str.lcfirst(void 0));
				should.not.exist(str.lcfirst(null));
				isNaN(str.lcfirst(NaN)).should.equal(true);
				str.lcfirst(0).should.equal(0);
				str.lcfirst(false).should.equal(false);
				str.lcfirst('').should.equal('');
			});

			it('should trasfrom the first character of a string to an upper case', function () {
				str.lcfirst('').should.equal('');
				str.lcfirst('a').should.equal('a');
				str.lcfirst('A').should.equal('a');
				str.lcfirst('abc').should.equal('abc');
				str.lcfirst('ABC').should.equal('aBC');
				str.lcfirst('Abc').should.equal('abc');
				str.lcfirst('aBC').should.equal('aBC');
				str.lcfirst('-Abc').should.equal('-Abc');
				str.lcfirst(' Abc').should.equal(' Abc');
			});
		});

		describe('#startsWith', function () {
			it('should return false for empty string as search string', function () {
				str.startsWith('', '').should.equal(false);
				str.startsWith('a', '').should.equal(false);
			});

			it('should return true if input string starts with search string', function () {
				str.startsWith('a', 'a').should.equal(true);
				str.startsWith('ab', 'a').should.equal(true);
				str.startsWith('abc', 'ab').should.equal(true);
				str.startsWith('abc', 'abc').should.equal(true);
			});

			it('should be case sensitive', function () {
				str.startsWith('a', 'A').should.equal(false);
				str.startsWith('A', 'a').should.equal(false);
				str.startsWith('Ab', 'a').should.equal(false);
				str.startsWith('ab', 'A').should.equal(false);
			});

			it('should return false if input string does not start with search string', function () {
				str.startsWith('b', 'a').should.equal(false);
				str.startsWith('ab', 'b').should.equal(false);
				str.startsWith('a', 'ab').should.equal(false);
				str.startsWith('abc', 'ac').should.equal(false);
				str.startsWith('abc', 'abd').should.equal(false);
				str.startsWith('abc', 'bc').should.equal(false);
				str.startsWith('ab', 'abc').should.equal(false);
				str.startsWith('', 'a').should.equal(false);
				str.startsWith('abc', 'AB').should.equal(false);
			});
		});

		describe('#endsWith', function () {
			it('should return false for empty string as search string', function () {
				str.endsWith('', '').should.equal(false);
				str.endsWith('a', '').should.equal(false);
			});

			it('should return true if input string starts with search string', function () {
				str.endsWith('a', 'a').should.equal(true);
				str.endsWith('ab', 'b').should.equal(true);
				str.endsWith('abc', 'bc').should.equal(true);
				str.endsWith('abc', 'abc').should.equal(true);
			});

			it('should be case sensitive', function () {
				str.endsWith('a', 'A').should.equal(false);
				str.endsWith('A', 'a').should.equal(false);
				str.endsWith('aB', 'b').should.equal(false);
				str.endsWith('ab', 'B').should.equal(false);
			});

			it('should return false if input string does not start with search string', function () {
				str.endsWith('b', 'a').should.equal(false);
				str.endsWith('ab', 'a').should.equal(false);
				str.endsWith('a', 'ab').should.equal(false);
				str.endsWith('abc', 'ac').should.equal(false);
				str.endsWith('abc', 'abd').should.equal(false);
				str.endsWith('abc', 'ab').should.equal(false);
				str.endsWith('ab', 'abc').should.equal(false);
				str.endsWith('', 'a').should.equal(false);
				str.endsWith('abc', 'BC').should.equal(false);
			});
		});

		describe('#camelCase', function () {
			it('should transform a string to camelCase with default delimiters as -|_|\\s', function () {
				str.camelCase('').should.equal('');
				str.camelCase('_').should.equal('');
				str.camelCase('-').should.equal('');
				str.camelCase(' ').should.equal('');
				str.camelCase('__--  ').should.equal('');
				str.camelCase('under_scored_word_test').should.equal('underScoredWordTest');
				str.camelCase('under_scored-word-test').should.equal('underScoredWordTest');
				str.camelCase('under_scored-word Test').should.equal('underScoredWordTest');
				str.camelCase('this is_a-camel-Case--tEST-_ ').should.equal('thisIsACamelCaseTEST');
			});

			it('should transform only underscores to camelCase with "_" as a delimeter', function () {
				str.camelCase('under_scored_word_test', '_').should.equal('underScoredWordTest');
				str.camelCase('under-scored-word-test', '_').should.equal('under-scored-word-test');
				str.camelCase('under__scored_word_test__', '_').should.equal('underScoredWordTest');
			});

			it('should transform only hyphens to camelCase with "-" as a delimeter', function () {
				str.camelCase('under_scored_word_test', '-').should.equal('under_scored_word_test');
				str.camelCase('under-scored-word-test', '-').should.equal('underScoredWordTest');
				str.camelCase('under--scored-word-test--', '-').should.equal('underScoredWordTest');
			});

			it('should transform only spaces to camelCase with " " as a delimeter', function () {
				str.camelCase('under_scored_word_test', ' ').should.equal('under_scored_word_test');
				str.camelCase('under scored word test', ' ').should.equal('underScoredWordTest');
				str.camelCase('under  scored word test  ', ' ').should.equal('underScoredWordTest');
			});

			it('should not transform anything to lower case', function () {
				str.camelCase('UNDER_SCORED_WORD_TEST').should.equal('UNDERSCOREDWORDTEST');
			});

			it('should transform a string to CamelCase with first letter as an upper case if the string starts with delimiter', function () {
				str.camelCase('_under_scored_word_test').should.equal('UnderScoredWordTest');
			});
		});
	});

})();
