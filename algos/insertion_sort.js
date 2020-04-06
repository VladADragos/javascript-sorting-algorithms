function insertion_sort(array) {
    let key;
    for (let i = 1; i < array.length; i++) {
        key = array[i];
        insert(array, i, key);


    }

    return array;
}

function insert(array, i, key) {
    for (let j = i - 1; j > -1 && array[j] > key; j--) {
        key = array[j + 1];
        array[j + 1] = array[j];
        array[j] = key;
    }
}


module.exports = {
    insertion_sort: insertion_sort,
    insert: insert
}


// loop over array

// check if i+1 < i

// if true shift