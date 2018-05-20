    const binarySearch = require('./binary-search');
    const BinaryTree = require('./binary-tree');
    const stack = require('./data-structures/stack');
    const queue = require('./data-structures/queue');
    const DynamicConnectivity = require('./dynamic-connectivity');
    const RBTree = require('./red-black-tree');
    // const fs = require('fs');
    //
    // console.log('dirname =', __dirname);
    // const text = fs.readFileSync(`${__dirname}/binary-search/index.js`).toString();
    // console.log('text =', text);
    // console.log('text.length =', text.length);
    const textReader = require('./text-reader');
    const binaryHeapSort = require('./sorts/binary-heap-sort');
    const bubbleSort = require('./sorts/bubble-sort');
    const insertionSort = require('./sorts/insertion-sort');
    const mergeSort = require('./sorts/merge-sort');
    const quickSort = require('./sorts/quick-sort');
    const selectionSort = require('./sorts/selection-sort');
    const shellSort = require('./sorts/shell-sort');
    const Graph = require('./Graph');
    const bfs = require('./bfs');
    const dfs = require('./dfs');
    const tpsp = require('./tpsp');

    module.exports = {
        binarySearch,
        BinaryTree,
        stack,
        queue,
        DynamicConnectivity,
        Graph,
        RBTree,
        textReader,
        binaryHeapSort,
        bubbleSort,
        insertionSort,
        mergeSort,
        quickSort,
        selectionSort,
        shellSort,
        bfs,
        dfs,
        tpsp,
    };
