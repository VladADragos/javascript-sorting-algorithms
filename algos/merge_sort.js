

function merge_sort(array) {
    return sort(array, 0, array.length - 1);


}

function sort(array, low, high) {
    if (low === high) {
        return array;
    }

    let mid = Math.floor((high + low) / 2);

    let left = split(array, low, mid);
    let right = split(array, mid + 1, high)

    return merge(merge_sort(left), merge_sort(right));


}

function split(array, low, high) {
    let len = high - low;
    let tempArr = new Array(len);

    for (let i = 0, j = low; i <= len;) {
        tempArr[i++] = array[j++];
    }

    return tempArr;
}

function merge(array1, array2) {

    let tempArray = new Array(array1.length + array2.length);
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < array1.length && j < array2.length) {
        if (array1[i] > array2[j]) {

            tempArray[k++] = array2[j++]
        } else {
            tempArray[k++] = array1[i++]
        }
    }
    while (i < array1.length) {
        tempArray[k++] = array1[i++]
    }
    while (j < array2.length) {
        tempArray[k++] = array2[j++]
    }
    return tempArray;
}

module.exports = {
    merge: merge,
    merge_sort: merge_sort,
    split: split
}