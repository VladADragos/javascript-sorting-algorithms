const { bubble_sort, bubble } = require('./algos/bubble_sort');
const { insertion_sort, insert } = require('./algos/insertion_sort');
const { selection_sort } = require('./algos/selection_sort');
function main() {

    let testArr = [69, 420, 0, 11, 16];

    selection_sort(testArr);

    console.log(testArr);

}



main();