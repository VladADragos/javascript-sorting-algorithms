
function isSorted(array) {

    // let sortedArray = Array.from(array);
    // sortedArray = sortedArray.sort();
    // console.log(array);
    // console.log(sortedArray);

    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            return false;
        }
    }

    return true;
}



function generateArray(arraySize = 500) {
    // const lenght = getRndInteger(500, 1000);
    let array;
    if (arraySize === "random") {
        array = new Array(getRndInteger(100, 1000));
    } else {
        array = new Array(arraySize);
    }

    for (let i = 0; i < arraySize; i++) {
        array[i] = getRndInteger(0, 1000);
    }
    return array;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function test(fn, condition, testCount = 100, arraySize) {
    console.log('\x1b[36m', `running ${fn.name} test...`);
    const timerString = `\t\x1b[33mtime elapsed \x1b[37m`
    console.time(timerString);
    let fails = 0;
    for (let i = 0; i < testCount; i++) {
        let array = generateArray(arraySize);

        if (!condition(fn(array))) {

            console.log("failed");
            fails++;
        }
    }
    if (fails === 0) {
        console.log('\x1b[32m', "\tpassed all, (100/100) tests")
    } else {
        console.log(`failed, ${fails}/100 tests`);
    }
    console.timeEnd(timerString);
    console.log("")
}
module.exports = {
    isSorted,
    generateArray,
    getRndInteger,
    test
}