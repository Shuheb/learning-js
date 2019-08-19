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

function sumAll(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}