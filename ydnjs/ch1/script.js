"use strict";

function someFunc() {
    let [a, b, c, d] = arguments
    // console.log(a, b, c, d)

    return b + a + c + a + d
}
function someFunc2() {
    let [a, b, c, d] = arguments
    // console.log(a, b, c, d)

    return [].slice.call(arguments, 1).join(arguments[0])
}
console.log(someFunc('*', '1', 'b', '1c'));
console.log(someFunc('*', '1', 'b', '1c'));


// const array = [1, 25, 55, 77, -5, 108];
// const array1 = [1, 25, 55, 77, -5, 108];
// const array2 = [1, 25, 55, 77, -5, 108];

// Array.prototype.myMap = function(callback) {
//     // let modifiedArray = this.forEach((el, index, arr) => {
//     //     arr[index] = callback(el, index, arr)
//     // });

//     let arr = this;

//     for (let index = 0; index < arr.length; index++) {
//         // const element = array[index];
//         arr[index] = callback(arr[index], index, arr)
//     }

// }

// array.myMap((el, index, arr) => {
//     // console.log(el, index, arr)
    
//     return el + 1000;
// })

// console.log(array);




















































































// let banckAccount = 300.00;
// const TAX = 13;
// const SPENDING_LIMIT = banckAccount;
// const PHONE_PRICE = 80;
// const ACCESSORY_PRICE = 30;
// let curSum = 0;
// function calculateWithTax(amount) {
//     return amount + amount * (TAX / 100)
// }

// function formatAmount(amount) {
//     return "$" + amount.toFixed( 2 );
// }

// while (confirm("Buy phone?")) {
//     curSum += PHONE_PRICE + ACCESSORY_PRICE;
// }

// if (curSum <= SPENDING_LIMIT) {
//     console.log(`Purchasses for ${formatAmount(curSum)}. The purchase was compeleted!`)
// } else {
//     console.log(`Purchasses for ${formatAmount(curSum)}. Purchase is not possible. Limit exceeded!`)
// }
