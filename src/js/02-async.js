/*
 * Синтаксис async/await
 * try...catch
 */

/*
 - async/await - фактично це імітація синхронності асинхронного коду (послідовність, як .then)
 - async - оператор який оголошує асинхронну фукнцію. В асинхронних функція можна використовувати оператор await (І ТІЛЬКИ В НИХ). Будь-яка асинхронна фукнція повертає Promise (завжди)!!!
===
async function foo(){
  return 5;
}

foo().then(console.log)
===

- await - оператор який можна використовувати тільки в асинхронних фукнціях. Цей оператор пишеться перед асинхроними операціями (промісами) і заморожує виконання фукнції до ти пір поки проміс не виконається (не перейде в стан Fullfilled або Rejected). І як тільки проміс виконається оператор await буде повертати відразу дані промісу. Але якщо статус промісу реджектед - то у нас примусово викидується помилка, яку треба обробити

*/

//* without async

// const fetchTodos = () => {
//   return fetch('https://jsonplaceholder.typicode.com/todos').then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// };

// fetchTodos()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

//* with async

const fetchTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');

  console.log(res);

  if (!res.ok) {
    throw new Error(res.status);
  }

  const dataFromServer = await res.json();

  return dataFromServer;
};

//* v1

// fetchTodos()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

//* v2

console.log('start');

// обрбка помилки в місці, де викликаєтсья асинхронна функція
try {
  const todos = await fetchTodos();
  console.log(todos);
} catch (err) {
  console.log(err);
}

console.log('end');
