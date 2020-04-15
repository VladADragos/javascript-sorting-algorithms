const { bubble_sort, bubble } = require('./algos/bubble_sort');
const { insertion_sort, insert } = require('./algos/insertion_sort');
const { selection_sort } = require('./algos/selection_sort');

const { merge, merge_sort, split } = require('./algos/merge_sort');

const { isSorted } = require('./utils/testUtils');
const { partition, quick_sort } = require('./algos/quick_sort');
function main() {

    let testArr = [4, 4, 1, 67, 0, 2, 0, 1, 2, 6, 7, 1];

    quick_sort(testArr);



    console.log(testArr);

}

main();