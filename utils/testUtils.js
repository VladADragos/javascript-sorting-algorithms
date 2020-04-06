
function isSorted(array) {

    let sortedArray = (Array.from(array)).sort();

    for (let i = 0; i < array.lenght; i++) {
        if (array[i] !== sortedArray[i]) {
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
    console.log(`running ${fn.name} test...`);
    // console.log("");
    console.time(`time elapsed`);
    let fails = 0;
    for (let i = 0; i < testCount; i++) {
        let array = generateArray(arraySize);
        fn(array);

        if (condition(array)) {
            // console.log("passed");

        } else {
            fails++;
            console.log("failed");
        }
    }
    if (fails === 0) {
        console.log("passed all, (100/100) tests")
    } else {
        console.log(`failed, ${fails}/100 tests`);
    }
    console.timeEnd(`time elapsed`);
    console.log("")
}
module.exports = {
    isSorted,
    generateArray,
    getRndInteger,
    test
}