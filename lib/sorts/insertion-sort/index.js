
module.exports = function insertionSort(array) {
    let i;
    let temp;
    let j;
    for (i = 1; i < array.length; i += 1) {
        temp = array[i];
        j = i;
        while (j > 0 && array[j - 1] > temp) {
            array[j] = array[j - 1];
            j -= 1;
        }
        array[j] = temp;
    }
    return array;

};

