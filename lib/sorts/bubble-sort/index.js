module.exports = function bubbleSort(array) {
    if (array.length === 0 || array.length < 2) {
        return array;
    }
    for (let i = 0; i < array.length; i += 1) {
        for (let j = 1; j < (array.length - i); j += 1) {
            if (array[j - 1] > array[j]) {
                const temp = array[j - 1];
                array[j - 1] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
};
