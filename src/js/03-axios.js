/*
 * Перепишемо на async/await
 * Використовуємо бібліотеку https://axios-http.com/
 *
 * Використовуємо сервіс https://mockapi.io/ для бекенду
 */

import axios from 'axios';

const BASE_URL = 'https://670e94f73e71518616552504.mockapi.io';

/*
 * Read (GET)
 */

// function getBooks() {
//   return fetch(`${BASE_URL}/books`).then(res => {
//     if (!res.ok) {
//       throw new Error(`Error while getting books: ${res.status}`);
//     }

//     return res.json();
//   });
// }

// getBooks().then(console.log).catch(console.error);

/*
 * Create (POST)
 */

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

/*
 * Update (PUT/PATCH)
 */

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
/*
 * Delete (DELETE)
 */

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
