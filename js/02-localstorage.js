/*
 * LocalStorage
 */

/*
 * Збереження
 * Чому треба використовувати метод JSON.stringify
 */

const STORAGE_KEY = 'item-info';

const item = {
  title: 'Some item',
  description: 'Lorem ipsum dolor sit amet.',
  price: 5000,
};

console.log(item.toString());

localStorage.setItem(STORAGE_KEY, JSON.stringify(item));
localStorage.setItem('test', 'Hello world!');

/*
 * Читання
 * Чому треба використовувати метод JSON.parse
 */

const testValueFromLS = localStorage.getItem('test');

console.log(testValueFromLS);

try {
  const itemFromLS = JSON.parse(localStorage.getItem(STORAGE_KEY));

  console.log(itemFromLS);
} catch (err) {
  console.log(err);
}

/*
 * Видалення
 */

localStorage.removeItem('test');

// localStorage.clear()

/*
 * LocalStorage не може зберігати функції
 */

// function foo() {
//   return 5;
// }

// localStorage.setItem("some-fn", foo);


// console.log(JSON.parse(localStorage.getItem("some-fn")));