// console.log(sum(1,41));

// function sum(a, b) {
//     return a + b;
// }

// // var -  подвержена хостингу 
// console.log(i);
// var i = 42
// console.log(i);

// // let , const - не подвержены хостингу 
/**
 *  console.log(i);
 * const i = 42
 * console.log(i);
 */

/**
 * Function expression 
 *  &&
 * Function declaration
 */

// //  С Function declaration Работает 
// /** console.log(square(25));
//  * Function declaration
//  * @param {*} num 
//  * @returns 
//  */
// function square(num) {
//     return num ** 2
// }


// //  С Function expression не ! Работает 
/** console.log(square(25));
 * Function expression 
 * @param {*} num 
 * @returns 
 */
const square = function (num) {
    return num ** 2
}
// ONLY AFTER 
console.log(square(25));