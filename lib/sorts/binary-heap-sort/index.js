function heapify(array, n, i) {
    // Find largest among root, left and right children
    let largest = i;
    const leftChild = (2 * i) + 1;
    const rightChild = (2 * i) + 2;

    if (leftChild < n && array[leftChild] > array[largest]) {
        largest = leftChild;
    }

    if (rightChild < n && array[rightChild] > array[largest]) {
        largest = rightChild;
    }

    // Swap and continue heapifying if root is not largest
    if (largest !== i) {
        const swap = array[i];
        array[i] = array[largest];
        array[largest] = swap;

        heapify(array, n, largest);
    }
}

module.exports = function binaryHeapSort(array) {
    const n = array.length;
    if (n <= 1) {
        console.log(array);
        return array;
    }
    // Build max heap
    for (let i = (n / 2) - 1; i >= 0; i -= 1) {
        heapify(array, n, i);
    }
    // Heap sort
    for (let i = n - 1; i >= 0; i -= 1) {
        const temp = array[0];
        array[0] = array[i];
        array[i] = temp;

        // Heapify root element
        heapify(array, i, 0);
    }
    console.log(array);
    return array;
};
