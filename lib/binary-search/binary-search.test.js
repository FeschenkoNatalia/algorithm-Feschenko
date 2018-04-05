    const should = require('should');
    const algo = require('../index.js');

    describe('Binary search', () => {
        it('should return searched number 0 (sequance length > 1, first element)', () => {
            const elementIndex = algo.binarySearch([1, 2, 3, 4, 5, 6], 1);
            should(elementIndex).be.eql(0);
        });
        it('should return searched number 5 (sequance length > 1, last element)', () => {
            const elementIndex = algo.binarySearch([1, 2, 3, 4, 5, 6], 6);
            should(elementIndex).be.eql(5);
        });
        it('should return searched number 3 (sequance length > 1, mid element)', () => {
            const elementIndex = algo.binarySearch([1, 2, 3, 4, 5, 6], 4);
            should(elementIndex).be.eql(3);
        });
        it('should return searched number 0 (sequance length = 1, element presents)', () => {
            const elementIndex = algo.binarySearch([4], 4);
            should(elementIndex).be.eql(0);
        });
        it('should return -1 (empty sequance)', () => {
            const elementIndex = algo.binarySearch([], 4);
            should(elementIndex).be.eql(-1);
        });
        it('should return -1 (no such element in sequance)', () => {
            const elementIndex = algo.binarySearch([1, 2, 3, 4, 5, 6], 7);
            should(elementIndex).be.eql(-1);
        });
    });
