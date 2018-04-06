const should = require('should');
const el = require('../index.js');

describe('Text reader', () => {
    it('should return true if all brackets in the text look like {...} or (...) or [...]', () => {
        const bracketsValidator = el.textReader('[[[]]]{{}}()');
        should(bracketsValidator).be.eql(true);
    });
});

describe('Text reader', () => {
    it('should return false if brackets in the text do not look like {...} or (...) or [...]', () => {
        const bracketsValidator = el.textReader('[[[]]]{{}}(');
        should(bracketsValidator).be.eql(false);
    });
});
