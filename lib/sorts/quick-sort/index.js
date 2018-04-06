module.exports = function quickSort(array) {
        if (array.length === 0 || array.length < 2) {
            return array;
        }
        const partition = array[0];
        const left = [];
        const right = [];
        const sortedArray = [];
        for (let i = 1; i < array.length; i += 1) {
            if (array[i] < partition) {
                left.push(array[i]);
            }
            if (array[i] >= partition) {
                    right.push(array[i]);
            }
        }
        return sortedArray.concat(quickSort(left), partition, quickSort(right));
    };
