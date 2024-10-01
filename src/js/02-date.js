//* Створення нової дати
// const date = new Date('2024-10-20T10:15');

// console.log(date);

// console.dir(date);

//* Методи дати

// const today = new Date();

// console.log(today);

// console.log(today.getFullYear()); // 2024
// console.log(today.getMonth()); // 9 (місяці починаються з 0)
// console.log(today.getDay()); // 2, день тижня починаэться з неділі, тобто, з 0
// console.log(today.getDate()); // 1, день місяця(число)
// console.log(today.getTime()); // повертає кількість мілісекунд, яка пройшла з 1 січня 1970 року до поточного моменту
// console.log(Date.now()); // повертає кількість мілісекунд, яка пройшла з 1 січня 1970 року до поточного моменту
// console.log(today.getHours()); // кількість годин (час в годинах)

// console.log(today.toLocaleTimeString('uk-UK'));
// console.log(today.toLocaleTimeString('en-EN'));

//? Створіть об'єкт date для дати: 10 вересня 2022 року, 3 години 12 хвилин.
// const date = new Date('2022-09-10T03:12');
// const date = new Date(2022, 8, 10, 3, 12);

// console.log(date);

/*
? Створіть функцію getWeekDay(date), яка показує день тижня у короткому форматі:
? 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'НД'.
*/
// const getWeekDay = date => {
//   const days = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

//   const day = date.getDay();
//   return days[day];
// };

// const date = new Date('2024-10-05');

// console.log(date);

// console.log(getWeekDay(date));

/*
? Створіть функуію getLastDayOfMonth(year, month), яка повертає останнє число місяця. Інколи це 30, 31 або навіть 28/29 у лютому.
? Параметри:
? year – рік з чотирьох цифр, наприклад, 2012.
? month – місяць від 0 до 11.
? Наприклад, getLastDayOfMonth(2012, 1) = 29 (високосний рік, лютий).
*/
// const getLastDayOfMonth = (year, month) => {
//   const date = new Date(year, month + 1, 0); // якщо передати 0 в якості поточного числа місяця, то насправді буде братися останній день ПОПЕРЕДНЬОГО місяця

//   console.log(date);
//   return date.getDate();
// };

// console.log(getLastDayOfMonth(2016, 2));
// console.log(getLastDayOfMonth(2012, 1));
// console.log(getLastDayOfMonth(2024, 9));
// console.log(getLastDayOfMonth(2023, 11));
// console.log(getLastDayOfMonth(1999, 11));

//? Створіть функцію getSecondsToTomorrow(), яка повертає кількість секунд до завтрашнього дня.
const getSecondsToTomorrow = () => {
  const today = new Date();
  const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);

  console.log(today);
  console.log(tomorrow);

  //   return (tomorrow - today) / 1000;

  //   const time = tomorrow - today;

  //   console.log(time);
  //   console.log(new Date(time).toISOString());
  //   console.log(new Date(time).toLocaleTimeString('uk-UK'));

  const timeDiff = tomorrow - today;

  const hours = Math.floor(timeDiff / 1000 / 60 / 60);
  const minutes = Math.floor(timeDiff / 1000 / 60) % 60;
  const seconds = Math.floor(timeDiff / 1000) % 60;

  return `${hours}:${minutes}:${seconds}`;
};

console.log(getSecondsToTomorrow());
