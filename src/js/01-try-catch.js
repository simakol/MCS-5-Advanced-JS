/*
 * Обробка помилок з try...catch
 *
 * - Синтаксис
 * - Які помилки ловить
 * - ❌ помилки парсингу (parsing errors)
 * - ✅ помилки виконання (runtime errors)
 * - Ловить лише помилки в синхронному коді
 * - Як зловити помилку в асинхронному коді
 */

/*
try {
 тіло блоку трай, тут описується код, який потенційно може викинути помилку (наприклад, проміс, або ручний виклик оператору throw)
} catch (err){
    тіло блоку кетч, приймає обʼєкт помилки err, і оброблює помилку яка виникла в блоці try
}
*/

// console.log('before');

// try {
//   const a = 5;

//   a = 6;

//   console.log(a);
// } catch (err) {
//   console.log(err);
// }

// console.log('after');

//! =================================================

//* в асинхронних операціях обробка помилок робиться всередині, а не зовні

// setTimeout(() => {
//   try {
//     console.log('Початок блоку try');

//     a;

//     console.log('Кінець блоку try');
//   } catch (err) {
//     console.log('Блок catch');
//     console.log(err);
//     console.dir(err);
//     console.log('name - назва помилки:', err.name);
//     console.log('message - повідомлення про помилку:', err.message);
//     console.log('stack - рядок з назвою і повідомленням про помилку:', err.stack);
//   }
// }, 1000);

// console.log('Виконуємо код далі');

//! =================================================

console.log('before');

try {
  console.log('try block start');

  const throwErrorOrNot = confirm('Чи варто скрипту викинути помилку?');

  if (throwErrorOrNot) {
    throw new Error('Користувач вирішив, що помилка буде!');
  }

  console.log('try block end');
} catch (err) {
  console.error(err);
}

console.log('after');
