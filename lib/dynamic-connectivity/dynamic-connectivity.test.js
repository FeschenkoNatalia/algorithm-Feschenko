const should = require('should');
const algo = require('./../index.js');

const elements = 6;
function getUnqueElement(count, notEqual) {
    const _result = Math.floor(Math.random() * count);
    return _result === notEqual ? getUnqueElement(count, notEqual) : _result;
}
describe('Dynamic Connectivity', () => {
    it('Should connect p and q', () => {
        const dynamicConnectivity = new algo.DynamicConnectivity(elements);
        for (let i = 0; i <= 5; i += 1) {
            const p = getUnqueElement(elements, null);
            const q = getUnqueElement(elements, p);
            dynamicConnectivity.connect(p, q);
        }
    });
});

describe('Dynamic Connectivity', () => {
    it('Should check if p and q are connected and return true', () => {
        const dynamicConnectivity = new algo.DynamicConnectivity(elements);
        dynamicConnectivity.connect(1, 2);
        dynamicConnectivity.connect(3, 4);
        dynamicConnectivity.connect(1, 4);
        should(dynamicConnectivity.isConnected(2, 4)).be.eql(true);
    });
});

describe('Dynamic Connectivity', () => {
    it('Should check if p and q are connected and return false', () => {
        const dynamicConnectivity = new algo.DynamicConnectivity(elements);
        dynamicConnectivity.connect(1, 2);
        dynamicConnectivity.connect(3, 4);
        dynamicConnectivity.connect(1, 4);
        should(dynamicConnectivity.isConnected(1, 7)).be.eql(false);
    });
});
