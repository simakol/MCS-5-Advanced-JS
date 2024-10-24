/*
 * Function overloads
 * Generics
 */

//* Function overloads - Перевантаження функцій — це можливість визначати кілька варіантів підписів (сигнатур) для однієї і тієї ж функції. Це дозволяє одній функції мати різні вхідні параметри та повертати різні типи значень в залежності від того, які параметри були передані.

//? =================================

// function concat(a: number, b: number): string;
// function concat(a: string, b: string): string;
// function concat(a: number | string, b: number | string): string {
//   if (typeof a === 'string' && typeof b === 'string') {
//     return a + b;
//   }

//   if (typeof a === 'number' && typeof b === 'number') {
//     a = String(Math.trunc(a));
//     b = String(Math.trunc(b));

//     return a + b;
//   }

//   return '';
// }

// const result1 = concat(10.4, 20);
// const result2 = concat('20', '30');

// console.log(result1); // '1020'
// console.log(result2); // '2030'

//? =================================

// function merge(arr1: number[], arr2: number[]): number[];
// function merge(arr1: string[], arr2: string[]): string[];
// function merge(arr1: (number | string)[], arr2: (number | string)[]): (number | string)[] {
//   if (typeof arr1[0] === 'number' && typeof arr2[0] === 'number') {
//     return [...arr1, ...arr2] as number[];
//   }

//   if (typeof arr1[0] === 'string' && typeof arr2[0] === 'string') {
//     return [...arr1, ...arr2] as string[];
//   }

//   return [];
// }

// const result1 = merge([1, 2], [3, 4]);
// const result2 = merge(['1', '2'], ['3', '4']);

// console.log(result1); // [1, 2, 3, 4]
// console.log(result2); // ['1', '2', '3', '4']

//* Generics - Узагальнення — це можливість створювати компоненти (функції, класи або інтерфейси), які працюють з різними типами даних, не вказуючи конкретний тип наперед. Це дозволяє створювати більш універсальний і повторно використовуваний код.

//? =================================
// function merge<T>(arr1: T[], arr2: T[]): T[] {
//   return [...arr1, ...arr2] as T[];
// }

// const result1 = merge([1, 2], [3, 4]); // [1, 2, 3, 4]
// const result2 = merge(['1', '2'], ['3', '4']); // [1, 2, 3, 4]

// console.log(result1); // [1, 2, 3, 4]
// console.log(result2); // ['1', '2', '3', '4']

/*
? Реалізуйте дженерик last(), який витягує останній елемент з масиву.
*/

// function last<T>(arr: T[]): T | undefined {
//   return arr[arr.length - 1];
// }

// const result1 = last<number>([3, 2]);
// const result2 = last<string>(['hello', 'world']);

// console.log(result1); // 2
// console.log(result2); // world

//* Generics Type
/*
? Реалізуйте тип MyArr, який буде описувати обʼєкт із властивістю items та
? методом forEach.
?
? У властивості items буде зберігатися масив, це може бути, як масив рядків, так і масив чисел.
? Метод forEach, має працювати, як Array.prototype.forEach. 
*/

// type MyArr<T> = {
//   items: T[];
//   forEach(callback: (item: T, i: number, arr: T[]) => void): void;
// };

// const myArrStrings: MyArr<string> = {
//   items: ['hello', 'world', '!'],

//   forEach(callback) {
//     for (let i = 0; i < this.items.length; i++) {
//       callback(this.items[i], i, this.items);
//     }
//   },
// };

// console.log(myArrStrings.items);

// myArrStrings.forEach((item, index) => {
//   console.log(`Item at index ${index}: ${item}`);
// });

// const myArrNumbers: MyArr<number> = {
//   items: [1, 2, 3],

//   forEach(callback) {
//     for (let i = 0; i < this.items.length; i++) {
//       callback(this.items[i], i, this.items);
//     }
//   },
// };

// console.log(myArrNumbers.items);

// myArrNumbers.forEach((item, index) => {
//   console.log(`Item at index ${index}: ${item}`);
// });

/*
? Реалізуйте функцію updateData(data, dataForUpdate), яка буде оновлюваті данні.
*/

//* Partial — це вбудований утилітарний тип, який дозволяє створити новий тип на основі існуючого, де всі властивості оригінального типу стають необов'язковими. Це корисно, коли ви хочете дозволити часткове оновлення об'єктів, оскільки ви не зобов'язані надавати всі властивості.
// https://www.typescriptlang.org/docs/handbook/utility-types.html

// function updateData<T>(data: T, dataForUpdate: Partial<T>): T {
//   return { ...data, ...dataForUpdate };
// }

// const result1 = updateData(
//   {
//     firstName: 'Lizzie',
//     lastName: 'Ortega',
//     email: 'sijev@ve.ro',
//     phone_number: '(369) 669-2267',
//   },
//   { email: 'paiw@azoehiisi.bw' }
// );

// console.log(result1);

// const result2 = updateData(
//   {
//     title: 'HTML',
//     description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, earum?',
//     rating: 9,
//   },
//   { rating: 10 }
// );

// console.log(result2);
