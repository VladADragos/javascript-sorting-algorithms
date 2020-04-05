
function isSorted(array) {

    let sortedArray = (Array.from(array)).sort();

    for (let i = 0; i < array.lenght; i++) {
        if (array[i] !== sortedArray[i]) {
            return false;
        }
    }

    return true;
}



function generateArray() {
    const lenght = getRndInteger(30, 100);
    let array = new Array(lenght);

    for (let i = 0; i < lenght; i++) {
        array[i] = getRndInteger(0, 100);
    }
    return array;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function test(fn, condition, testCount = 100) {
    console.log(`running ${fn.name} test...`);
    // console.log("");
    console.time(`time elapsed`);
    let fails = 0;
    for (let i = 0; i < testCount; i++) {
        let array = generateArray();
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