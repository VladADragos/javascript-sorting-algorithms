function selection_sort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            let smallest = array[i];
            if (smallest > array[j]) {
                smallest = array[j];
                array[j] = array[i];

                array[i] = smallest;
            }
        }
    }

    return array;
}

module.exports = {
    selection_sort: selection_sort
}