/*
 * Перепишемо на async/await
 * Використовуємо бібліотеку https://axios-http.com/
 *
 * Використовуємо сервіс https://mockapi.io/ для бекенду
 */

import axios from 'axios';

axios.defaults.baseURL = 'https://670e94f73e71518616552504.mockapi.io';

/*
 * Read (GET)
 */

//* with fetch

// function getBooks() {
//   return fetch(`${BASE_URL}/books`).then(res => {
//     if (!res.ok) {
//       throw new Error(`Error while getting books: ${res.status}`);
//     }

//     return res.json();
//   });
// }

// getBooks().then(console.log).catch(console.error);

//* with axios

async function getBooks() {
  const { data } = await axios.get('/books');
  return data;
}

try {
  const books = await getBooks();
  console.log(books);
} catch (err) {
  console.log(err);
}

// getBooks().then(console.log).catch(console.log);

/*
 * Create (POST)
 */

//* with fetch
// function addNewBook(book) {
//   const body = { ...book, createdAt: new Date() };
//   const options = {
//     method: 'POST',
//     body: JSON.stringify(body),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };

//   return fetch(`${BASE_URL}/books`, options).then(res => {
//     if (!res.ok) {
//       throw new Error(`Error while adding new book: ${res.status}`);
//     }

//     console.log(res);

//     return res.json();
//   });
// }

// addNewBook({
//   title: 'Тестова книга з CSS',
//   author: 'Я',
//   genres: ['CSS'],
//   rating: 9,
// })
//   .then(console.log)
//   .catch(console.error);

//* with axios

async function addNewBook(book) {
  const body = { ...book, createdAt: new Date() };

  const res = await axios.post('/books', body);
  return res;
}

// try {
//   const res = await addNewBook({
//     title: 'Тестова книга з CSS',
//     author: 'Я',
//     genres: ['CSS'],
//     rating: 9,
//   });

//   console.log(res);
// } catch (err) {
//   console.log(err);
// }

/*
 * Update (PUT/PATCH)
 */

//* with fetch
// function updateBookById(id, fieldsToUpdate) {
//   const options = {
//     method: 'PUT',
//     body: JSON.stringify(fieldsToUpdate),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };

//   return fetch(`${BASE_URL}/books/${id}`, options).then(res => {
//     if (!res.ok) {
//       throw new Error(`Error while updating a book with id ${id}: ${res.status}`);
//     }

//     console.log(res);

//     return res.json();
//   });
// }

// updateBookById(12, {
//   genres: ['Fiction', 'Psyhology'],
//   rating: 10,
// })
//   .then(console.log)
//   .catch(console.error);

//* with axios

function updateBookById(id, fieldsToUpdate) {
  return axios.put(`books/${id}`, fieldsToUpdate);
}

// try {
//   const res = await updateBookById(7, {
//     genres: ['Fiction', 'Psyhology'],
//     rating: 10,
//   });

//   console.log(res);
// } catch (err) {
//   console.log(err);
// }

/*
 * Delete (DELETE)
 */

//* with fetch
// function deleteBookById(id) {
//   const options = {
//     method: 'DELETE',
//   };

//   return fetch(`${BASE_URL}/books/${id}`, options).then(res => {
//     if (!res.ok) {
//       throw new Error(`Error while deleting a book with id ${id}: ${res.status}`);
//     }

//     console.log(res);
//     return res.json();
//   });
// }

// deleteBookById(13).then(console.log).catch(console.error);
// deleteBookById(13).then(console.log).catch(console.error);

//* with axios

function deleteBookById(id) {
  return axios.delete(`books/${id}`);
}

deleteBookById(6).then(console.log).catch(console.error);
