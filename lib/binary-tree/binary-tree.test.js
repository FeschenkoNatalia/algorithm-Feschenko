const should = require('should');
const algo = require('./../index.js');

    describe('Binary tree', () => {
        it('Should build the tree', () => {
            const array = [0, 50, 6, 8, 10, 82, -20];
            const binaryTree = new algo.BinaryTree();
            array.forEach(el => {
            binaryTree.add(el);
                });
            });
        });

    describe('Binary tree', () => {
        it('Should return sorted tree content', () => {
            const array = [0, 50, 6, 8, 10, 82, -20];
            const binaryTree = new algo.BinaryTree();
            array.forEach(el => {
            binaryTree.add(el);
            });
            const resultedArray = [-20, 0, 6, 8, 10, 50, 82];
            const result = binaryTree.getValues();
            let match = true;
            for (let i = 0; i < resultedArray.length; i += 1) {
                if (resultedArray[i] !== result[i]) {
                    match = false;
                    break;
                    }
            }
            console.log(result);
            should(match).be.eql(true);
            });
        });

    describe('Binary tree', () => {
        it('Should return searched node and the value of this node', () => {
            const array = [0, 50, 6, 8, 10, 82, -20];
            const binaryTree = new algo.BinaryTree();
                array.forEach(el => {
                    binaryTree.add(el);
                });
            console.log(binaryTree.getValues(6));
            should(binaryTree.search(6).value).be.eql(6);
            should(binaryTree.search(12)).be.eql(null);
            });
        });

    describe('Binary tree', () => {
        it('Should remove value and make it unable for searching', () => {
            const array = [0, 50, 6, 8, 10, 82, -20];
            const binaryTree = new algo.BinaryTree();
            array.forEach(el => {
                binaryTree.add(el);
                });
            should(binaryTree.search(6).value).be.eql(6);
            binaryTree.remove(6);
            should(binaryTree.search(6)).be.eql(null);
            should(binaryTree.search(0).value).be.eql(0);
            });
        });
