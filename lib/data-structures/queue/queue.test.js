
const should = require('should');
const data = require('../../index.js');

describe('Data structures queue', () => {
    it('should return 3', () => {
        const element = data.queue(3, 10, 3);
        should(element).be.eql(3);
    });
});
