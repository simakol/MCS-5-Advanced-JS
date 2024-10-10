/*
 * Використовуємо сервіс https://mockapi.io/ для створення бекенду
 */

const BASE_URL = 'https://670801b98e86a8d9e42dc515.mockapi.io';

/*
 * Read (GET) - ідемпотентний
 */

function getBooks() {
  return fetch(`${BASE_URL}/books`).then(res => {
    if (!res.ok) {
      throw new Error(`Error while getting books: ${res.status}`);
    }

    return res.json();
  });
}

function getBookById(id) {
  return fetch(`${BASE_URL}/books/${id}`).then(res => {
    if (!res.ok) {
      throw new Error(`Error while getting book with id ${id}: ${res.status}`);
    }

    return res.json();
  });
}

// getBooks().then(console.log).catch(console.error);
// getBookById(5).then(console.log).catch(console.error);
// getBookById(55).then(console.log).catch(console.error);

/*
 * Create (POST) - не ідемпотентний метод
 */

/*
    method: "POST", - описує HTTP метод який зараз буде передаватись
    body: JSON.stringify(book), - описує тіло запиту, тобто ті дані які ми хочемо передати на сервер (у фрматі JSON)
    headers: { - список заголовків, тобто технічної інфонмації
      "Content-Type": "application/json", - один з заголовків який вказує тип контенту який ми передаємо на сервер, список усіх MIME типів можна вивчити за наступним посиланням: 
      https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
    },

    Список всіх можливих заголовків: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers 
  */

function addNewBook(book) {
  const body = { ...book, createdAt: new Date() };
  const options = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return fetch(`${BASE_URL}/books`, options).then(res => {
    if (!res.ok) {
      throw new Error(`Error while adding new book: ${res.status}`);
    }

    console.log(res);

    return res.json();
  });
}

// addNewBook({
//   title: 'Тестова книга з CSS',
//   author: 'Я',
//   genres: ['CSS'],
//   rating: 9,
// })
//   .then(console.log)
//   .catch(console.error);

// getBooks().then(console.log).catch(console.error);

/*
 * Update (PUT/PATCH)
 */

/*
в базі є обʼєкт:
{
    title: "Тестова книга з CSS",
    author: "Я",
    genres: ["CSS"],
    rating: 9,
    id: "1"
}
ці два методи оновлюють вже існуючі дані на сервері

* PUT - повне оновлення даних (також цей метод може створити дані на сервері якщо їх не було, наприклад, коли ви намагаєтесь оновити неіснуючі дані)

body: {
  title: "Оновлена тестова книга по CSS",
  author: "Оновлений автор я"
}

Отримаємо наступну відповідь від серверу:

{
  title: "Оновлена тестова книга по CSS",
  author: "Оновлений автор я",
  id: "1"
}


* PATCH - часткове оновлення даних
body: {
  title: "Оновлена тестова книга по CSS",
  author: "Оновлений автор я"
}

Отримаємо наступну відповідь від серверу:

{
  title: "Оновлена тестова книга по CSS",
  author: "Оновлений автор я",
  genres: ["CSS"],
  rating: 9,
  id: "1"
}
*/

function updateBookById(id, fieldsToUpdate) {
  const options = {
    method: 'PUT',
    body: JSON.stringify(fieldsToUpdate),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return fetch(`${BASE_URL}/books/${id}`, options).then(res => {
    if (!res.ok) {
      throw new Error(`Error while updating a book with id ${id}: ${res.status}`);
    }

    console.log(res);

    return res.json();
  });
}

// updateBookById(12, {
//   genres: ['Fiction', 'Psyhology'],
//   rating: 10,
// })
//   .then(console.log)
//   .catch(console.error);

// updateBookById(100, {
//   genres: ['Fiction', 'Psyhology'],
//   rating: 10,
// })
//   .then(console.log)
//   .catch(console.error);

/*
 * Delete (DELETE)
 */

function deleteBookById(id) {
  const options = {
    method: 'DELETE',
  };

  return fetch(`${BASE_URL}/books/${id}`, options).then(res => {
    if (!res.ok) {
      throw new Error(`Error while deleting a book with id ${id}: ${res.status}`);
    }

    console.log(res);
    return res.json();
  });
}

deleteBookById(13).then(console.log).catch(console.error);
deleteBookById(13).then(console.log).catch(console.error);
