module.exports = function shellSort(array) {
        let k = 1;
        while (k < array.length / 3) {
            k = (3 * k) + 1;
        }
        console.log('k=', k);

        while (k > 0) {
            for (let i = k; i < array.length; i += 1) {
                for (let j = i; j > 0 && array[j] < array[j - k]; j -= k) {
                    const temp = array[j - k];
                    array[j - k] = array[j];
                    array[j] = temp;
                }
            }
            k = (k -= 1) / 3;
        }
        console.log('array =', array);
        return array;
    };
