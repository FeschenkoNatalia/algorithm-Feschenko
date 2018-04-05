
    const binarySearch = require('./binary-search');
    const stack = require('./data-structures/stack');
    const queue = require('./data-structures/queue');
    const DynamicConnectivity = require('./dynamic-connectivity');
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

    module.exports = {
        binarySearch,
        stack,
        queue,
        DynamicConnectivity,
        textReader,
        binaryHeapSort,
        bubbleSort,
        insertionSort,
        mergeSort,
        quickSort,
        selectionSort,
        shellSort,
    };
