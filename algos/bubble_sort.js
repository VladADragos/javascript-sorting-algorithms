function bubble(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let first = array[i];
        let second = array[i + 1];

        if (first > second) {
            array[i] = second;
            array[i + 1] = first;
        }
    }
}

function bubble_sort(array) {
    for (let i = 0; i < array.length; i++) {
        bubble(array);
    }
    return array;
}


module.exports = {
    bubble: bubble,
    bubble_sort: bubble_sort,
}
