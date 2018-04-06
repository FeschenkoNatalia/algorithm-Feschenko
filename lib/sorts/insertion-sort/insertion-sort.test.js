const should = require('should');
const algo = require('../../index.js');

describe('Insertion sort', () => {
    it('should return empty array when empty array was passed', () => {
        const array = algo.insertionSort([]);
        should(array).be.eql([]);
    });
    it('should return sorted array if sorted array was passed', () => {
        const array = algo.insertionSort([0, 1, 2, 3, 5]);
        should(array).be.eql([0, 1, 2, 3, 5]);
    });
    it('should return sorted array if any not empty array was passed', () => {
        const array = algo.insertionSort([9, 11, 2, 31, 722, 3, 1, 2, 2, 2]);
        should(array).be.eql([1, 2, 2, 2, 2, 3, 9, 11, 31, 722]);
    });
});
