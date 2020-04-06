const { bubble, bubble_sort } = require('./algos/bubble_sort');
const { insert, insertion_sort } = require('./algos/insertion_sort');
const { test, isSorted } = require('./utils/testUtils');
const { selection_sort } = require('./algos/selection_sort');
const { merge_sort } = require('./algos/merge_sort');


function main() {
    bubble_sort_test();
    selection_sort_test();
    insertion_sort_test();
    merge_sort_test();
}
main();




// array should be sorted
function bubble_sort_test() {
    test(bubble_sort, (array) => isSorted(array), 100, 5000);
}

// array should be sorted
function insertion_sort_test() {
    test(insertion_sort, (array) => isSorted(array), 100, 5000);
}

// array should be sorted
function selection_sort_test() {
    test(selection_sort, (array) => isSorted(array), 100, 5000);
}

// array should be sorted
function merge_sort_test() {
    test(merge_sort, (array) => isSorted(array), 100, 5000);
}





