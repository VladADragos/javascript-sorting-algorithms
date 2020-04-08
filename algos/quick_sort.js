const { swap } = require('../utils/swap');


// if pivot not first then swap it to first element or array

function quick_sort(array) {
    sort(array, 0, array.length - 1);
    return array;
}


function partition(array, start, end) {
    let pivot_index = start;
    let pivot = array[pivot_index];
    start = start + 1;

    while (start <= end) {
        while (array[start] < pivot) start++;
        while (array[end] > pivot) end--;

        if (start <= end) {
            swap(array, start, end);
            start++;
            end--;
        }

    }

    swap(array, pivot_index, end);

    return end;

}




//median of three, pick first,middle,last element in array and compute median, than is then the pivot
// random,random
// first element
function sort(array, low, high) {
    if (low >= high) {
        return;
    }

    const pivot = partition(array, low, high);
    sort(array, low, pivot - 1);
    sort(array, pivot + 1, high);

}

// pick an element from the array, the pivot
// partition the array
//  -first all elements smaller than pivot after all elements greater than pivot
// recourse

module.exports = {
    quick_sort: quick_sort,
    partition: partition
}