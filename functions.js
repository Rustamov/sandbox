function arraysEqual(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

// arr[middleOfArray(arr)]
function middleOfArray(arr) {
    Math.floor((arr.length - 1) / 2)
}

function ucFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}

function randomInteger(min, max) {
    let result = min + (Math.random() * (max + 1 - min));

    return Math.floor(result)
}

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}