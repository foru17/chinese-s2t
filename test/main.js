/* global describe, it */
'use strict'
require('mocha');

var should = require('should');

var Chinese = require('../');

describe('chinse-s2t', function() {

	it('should produce Traditional Traditional output when  a translation is one', function(done) {
		var zhT= '那一天，人类终于回想起了，曾经一度被他们所支配的恐怖，还有被囚禁于鸟笼中的那份屈辱';
		String(Chinese.s2t.should.equal('那一天，人類終於回想起了，曾經一度被他們所支配的恐怖，還有被囚禁於鳥籠中的那份屈辱'));
	})

})