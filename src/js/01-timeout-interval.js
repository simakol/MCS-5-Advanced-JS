/*
 * Синхронний vs Асинхронний JS
 *
 * Стек виклику функцій (http://latentflip.com/loupe/)
 * window.setTimeout(callback, delay);
 * window.setInterval(callback, delay);
 * Очищення інтервалів та таймутів clearInterval(intervalID), clearTimeout(timeoutID)
 */

//! в джс спочатку виконується весь СИНХРОННИЙ код, а тільки потім починає виконуватись АСИНХРОННИЙ код

// const a = () => console.log('1 Моментальний вивід');
// const b = () => console.log('3 Вивід консоль логу через 2 секунди!');
// const c = () => console.log('2 start');
// const d = () => console.log('4 end');

// setTimeout(a, 0);

// c();

// setTimeout(b, 2000);

// d();

// console.log('1. До виклику setTimeout');

// setTimeout(() => console.log('2 - Всередині зворотного виклику для setTimeout'), 2000);

// setTimeout(() => console.log('3 - Всередині зворотного виклику для setTimeout'), 1000);

// console.log('4. Після виклику setTimeout');

//! ============

// const logger = ms =>
//   console.log(`Оскільки таймер не було скасовано, він спрацює через ${ms} мілісекунд`);

// const timeoutId = setTimeout(logger, 2000, 2000);

// console.log(timeoutId);

// setTimeout(() => {
//   console.log('Таймер скасовано!');
//   clearTimeout(timeoutId);
// }, 1000);

//! ============

// let counter = 0;

// const intervalId = setInterval(() => {
//   counter += 1;

//   if (counter > 10) {
//     console.log('Зупинка інтервалу');
//     clearInterval(intervalId);
//     return;
//   }

//   console.log(`Виклик інтервалу номер ${counter}`);
// }, 500);

//! ============

console.log('First');

const timeoutId = setTimeout(() => {
  console.log('Open modal');
}, 5000);

console.log('Second');

document.addEventListener('click', () => {
  console.log('Cancel modal open!');
  clearTimeout(timeoutId);
});

const intervalId = setInterval(() => {
  console.log('From setInterval');
}, 1000);

// clearInterval(intervalId);
 