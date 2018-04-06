
module.exports = function selectionSort(array) {
        let minIndex;
        let temp;
        for (let i = 0; i < array.length; i += 1) {
            minIndex = i;
            for (let j = i + 1; j < array.length; j += 1) {
                if (array[j] < array[minIndex]) {
                    minIndex = j;
                }
            }
            temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
        console.log('array =', array);
        return array;
};
