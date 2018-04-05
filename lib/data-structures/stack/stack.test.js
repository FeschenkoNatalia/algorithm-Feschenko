const should = require('should');
const data = require('../../index.js');

describe('Data structures stack', () => {
    it('should return 10', () => {
        const element = data.stack(3, 10, 10);
        should(element).be.eql(10);
    });
});
