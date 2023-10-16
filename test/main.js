/* global describe, it */
'use strict'
require('mocha');

var should = require('should');
var Chinese = require('../');

describe('Chinese-s2t', function() {
	describe('# Chinese.s2t()', function() {

		it('返回繁体中文 success', function(done) {
			var zhS = '2017年，A区15号# 人类终于回想起了曾经一度被他们所支配的恐怖，还有被囚禁于鸟笼中的那份屈辱';
			String(Chinese.s2t(zhS).should.equal('2017年，A區15號# 人類終於回想起了曾經一度被他們所支配的恐怖，還有被囚禁於鳥籠中的那份屈辱'));
			done()
		});

	});
	describe('# Chinese.t2s()', function() {
		it('返回简体中文 success', function(done) {
			var zhT = '2017年，A區15號# 人類終於回想起了曾經一度被他們所支配的恐怖，還有被囚禁於鳥籠中的那份屈辱';
			String(Chinese.t2s(zhT).should.equal('2017年，A区15号# 人类终于回想起了曾经一度被他们所支配的恐怖，还有被囚禁于鸟笼中的那份屈辱'));
			done();
		});
	});
})