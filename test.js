const { bubble, bubble_sort } = require('./algos/bubble_sort');
const { insert, insertion_sort } = require('./algos/insertion_sort');
const { test, isSorted } = require('./utils/testUtils');
const { selection_sort } = require('./algos/selection_sort');


function main() {

    bubble_sort_test();
    insertion_sort_test();
    selection_sort_test();
}
main();


// last element should be the greatest in the array
function bubble_test() {
    test(bubble, (array) => Math.max(...array) === array[array.length - 1]);
}


// array should be sorted
function bubble_sort_test() {
    test(bubble_sort, (array) => isSorted(array), 100000);
}

// array should be sorted
function insertion_sort_test() {
    test(insertion_sort, (array) => isSorted(array), 100000);
}

// array should be sorted
function selection_sort_test() {
    test(selection_sort, (array) => isSorted(array), 100000);
}





