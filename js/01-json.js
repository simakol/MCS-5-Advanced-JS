/*
 * Формат JSON
 *
 * - Метод JSON.strigify(value)
 * - Метод JSON.parse(value)
 */

/*
"
{
  "name": "Oleg",
  "age": 25,
  "password": 1111,
  "isAdmin": true,
  "stack": ["HTML", "CSS", "JS"]
}
"
*/

const user = {
  name: 'Oleg',
  age: 25,
  password: 1111,
  isAdmin: true,
  stack: ['HTML', 'CSS', 'JS'],
  getBirthYear() {
    return new Date().getFullYear() - this.age;
  },
};

console.log(user.getBirthYear());

const userJSON = JSON.stringify(user);

console.log(userJSON);

const userFromJSON = JSON.parse(userJSON);

console.log(userFromJSON);

const users = [
  { name: 'Oleg', age: 25 },
  { name: 'Maria', age: 26 },
  { name: 'Roma', age: 27 },
];

const usersJSON = JSON.stringify(users);
console.log(usersJSON);
const usersFromJSON = JSON.parse(usersJSON);
console.log(usersFromJSON);

// console.log(JSON.stringify(5));
// console.log(JSON.stringify('Hello world'));
// console.log(JSON.stringify(true));

const numberJSON = JSON.stringify(5);

console.log(numberJSON);

const numberFromJSON = JSON.parse(numberJSON);
console.log(numberFromJSON);

const validUserJSON = '{"name": "Oleg", "age": 25 }';
const invalidUserJSON = '{ "name": "Oleg", age: 25 }';

console.log(JSON.parse(validUserJSON));
// console.log(JSON.parse('Hello')); //! помилка парсингу! не валідний джсон
// console.log(JSON.parse(invalidUserJSON)); //! помилка парсингу! не валідний джсон

// console.log('Hello');

/*
 * Конструкція try...catch для обробки помилок
 */

console.log('Start');

try {
  const invalidUserJSON = '{ "name": "Oleg", age: 25 }';
  console.log(JSON.parse(invalidUserJSON));
} catch (err) {
  console.log(err);
} finally {
  console.log('Я виконуюсь завжди, в не залежності чи була помилка, чи ні');
}

console.log('End');
