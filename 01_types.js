// однострочный комментарий
/* 
  Многострочные комментарии
*/
/**
 * JSDoc комментарии
 */

/**
 * Типы данных:
 * 1. Примитивные
 * - Number: 2019, 1.5, NaN, Infinity
 * - String: 'Hello', "Hello", `Hello`
 * - Boolean: true, false
 * - Null: null
 * - Undefined: undefined,
 * - Symbol()
 */
//  console.log(2019, 1.5);
//  console.log(20 * 'asdasd');
//  console.log(1 / 0);
 
//  console.log('Hello', "Hello", `Hello`);
 
//  console.log(true, false);
 
//  console.log(null);
 
//  console.log(undefined);
 
//  console.log(Symbol());
 
//   /**
//   * Типы данных:
//   * 2. Объекты. (Reference type) Передаються по ссылке.
//   * - Object: { name: 'Denis', age: 30 }
//   *  * Array: [1, 2, 3]
//   *  * Function: function foo() {}
//   *  * Date: new Date()
//   *  ....
//   */
 
//   console.table({ name: 'Denis', age: 30 });
//   console.log([1, 2, 3, 4]);
 
//   /**
//   * Особености:
//   * 1. JS динамически типизированный язык
//   * 2. Одна и та же переменная может хранить в себе любой тип данных
//   * 3. Нам не нужно определять тип данных при создании переменных
//   * 4. Если мы хотим использовать статическую типизацию мы можем использовать TypeScript или Flow
//   */



console.log(typeof NaN);
 
// Привидение тиопв 
// Falsy values

// '', 0, null 

// ==  vs ===
// ==  сравнивает только по значению (сравнрвет с приведением типов)
// ===  сравнивает  по значению  и по типу данных (по значению но без приведения типов)