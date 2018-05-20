
const should = require('should');
const algo = require('../../index.js');

describe('Selection sort', () => {
    it('should return empty array when empty array was passed', () => {
        const array = algo.selectionSort([]);
        should(array).be.eql([]);
    });
    it('should return sorted array if sorted array was passed', () => {
        const array = algo.selectionSort([0, 1, 2, 3, 5]);
        should(array).be.eql([0, 1, 2, 3, 5]);
    });
    it('should return sorted array if any not empty array was passed', () => {
        const array = algo.selectionSort([9, 11, 2, 31, 722, 3, 1, 2, 2, 2]);
        should(array).be.eql([1, 2, 2, 2, 2, 3, 9, 11, 31, 722]);
    });
    it('should return sorted less than 0 array if any not empty array was passed', () => {
        const array = algo.selectionSort([-9, -11, -2, -31, -722]);
        should(array).be.eql([-722, -31, -11, -9, -2]);
    });
    it('should return sorted string array if any not empty array was passed', () => {
        const array = algo.selectionSort(['a', 's', 'b', 'd']);
        should(array).be.eql(['a', 'b', 'd', 's']);
    });
    it('should return sorted string array if any not empty array was passed', () => {
        const array = algo.selectionSort(['aa', 's', 'ab', 'ad']);
        should(array).be.eql(['aa', 'ab', 'ad', 's']);
    });
});
