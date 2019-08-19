let numbers = [8, 11, 7, 12, 5, 10, 5];

/* Take an array of integers and a seperate integer, return the number of 
integers in the array that are less than the seperate integer */
function lessThanNumber(arr, target) {
    count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < target) count++;
    }
    return count;
}

/* Take an array of integers and two separate integers, and multiply 
all the integers in the array whose value is less than the first 
separate integer by the value of the second separate integer argument */

function dMultiplyLessThanNumber(arr, target, multiplier) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < target) arr[i] *= multiplier;
    }
    return arr;
}

function cMultiplyLessThanNumber(arr, target, multiplier) {
    let
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < target) arr[i] *= multiplier;
    }
}