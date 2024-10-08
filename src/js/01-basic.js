/*
 * Основи запиту
 * - Fetch API
 * - URL запиту
 * - Владка Network
 * - Обробка відповіді response (404 з fetch)
 *
 * https://jsonplaceholder.typicode.com/
 */

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    console.log('THEN BLOCK');
    console.log(res);
    return res.json();
  })
  .then(data => console.log(data))
  .catch(err => {
    console.log('CATCH BLOCK');
    console.error(err);
  });
