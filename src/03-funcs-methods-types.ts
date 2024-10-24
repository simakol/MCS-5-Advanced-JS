/*
 * Return Type
 * Void
 * Never
 * Function Type
 * Optional parameters
 */

//* Return Type - Тип повернення — це тип значення, який функція повертає після виконання. В TypeScript ви можете явно вказати тип повернення функції, що допомагає у забезпеченні коректності типів під час роботи з функціями.

// function sum(a: number, b: number): number {
//   return a + b;
// }

// console.log(sum(10, 20));

/*
? Реалізуйте функцію getBooksTitles(books),
? яка буде приймати до параметру books масив книг,
? а повертати буде масив із назвами книг.
*/

// type Book = {
//   title: string;
//   description: string;
//   rating: number;
// };

// const books: Book[] = [
//   {
//     title: 'JS',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, illo.',
//     rating: 9,
//   },
//   {
//     title: 'HTML',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, illo.',
//     rating: 8.5,
//   },
//   {
//     title: 'CSS',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, illo.',
//     rating: 9,
//   },
// ];

// function getBooksTitles(books: Book[]): string[] {
//   return books.map(({ title }) => title);
// }

// console.log(getBooksTitles(books));

//* Void - використовується для функцій, які не повертають значення. Це означає, що функція може виконувати певні дії, але не має значення, яке можна використовувати після її виклику.

// function greet(firstName: string, lastName: string): void {
//   console.log(`Welcome ${firstName} ${lastName}`);
// }

// greet('Johh', 'Black');

//* Never - представляє тип, який ніколи не повертається. Це може бути корисно для функцій, які завжди викликають помилку або безкінечно циклічні. Коли функція має тип повернення never, це означає, що вона не може завершити своє виконання нормальним чином.

// function generateError(message: string): never {
//   throw new Error(message);
// }

//* Function Type - Тип функції визначає сигнатуру функції — типи параметрів і тип повернення. Це дозволяє створювати змінні або параметри, які приймають функції як значення.

// type ForEachCallBack = (el: number, idx: number, arr: number[]) => void;

// function forEachNumbers(items: number[], cb: ForEachCallBack): void {
//   for (let i = 0; i < items.length; i++) {
//     cb(items[i], i, items);
//   }
// }

// forEachNumbers([1, 2, 3, 4], (el, idx, arr) => {
//   console.log(idx, el, arr);
// });

//* Optional parameters - це параметри, які не є обов'язковими для передачі під час виклику функції. Вони позначаються знаком питання (?) після імені параметра.

// const greetUser = (firstName: string, lastName?: string): void => {
//   if (lastName === undefined) {
//     console.log(`Welcome ${firstName}`);
//   } else {
//     console.log(`Welcome ${firstName} ${lastName}`);
//   }
// };

// greetUser('Johh', 'Black');
// greetUser('Johh');
