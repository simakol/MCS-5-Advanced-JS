// https://jsonplaceholder.typicode.com/

import { getPosts } from './api/jsonPlaceholder';
import { createPostCards } from './template/postCard';

const HIDDEN_CLASS = 'is-hidden';

const postsListEl = document.querySelector('.js-posts');
const loadMoreBtnEl = document.querySelector('.js-load-more');

/*
1. задаємо каунтер сторінок (1)
2. пишемо фукцнію яка буде відмальовувати карточки отримані з серверу (викликаємо цю фукцнію відразу для відьмальовки перших 20 карток)
3. показуємо кнопку завантажити ще + вішаємо слухач по кліку
4. при кліку на кнопку збільшувати сторіку +1, робити кнопку дізейбл та зробити запит на нові картки
5. Після отримання відповіді з серверу - знову зробити кнопку енейбл
6. Робимо перевірку на відповідь від серверу - якщо це пустий масив то ховаємо кнопку, тому що ми досягли ліміту колекції
*/

let page = 1;

renderPosts();

async function renderPosts() {
  try {
    const { data } = await getPosts(page);

    const postsMarkup = createPostCards(data);

    postsListEl.innerHTML = postsMarkup;

    loadMoreBtnEl.classList.remove(HIDDEN_CLASS);

    loadMoreBtnEl.addEventListener('click', handleLoadMore);
  } catch (err) {
    console.log(err);
  }
}

async function handleLoadMore(event) {
  const prevButtonText = event.target.textContent;

  page += 1;
  event.target.disabled = true;
  event.target.textContent = 'Loading...';

  try {
    const { data } = await getPosts(page);

    if (data.length === 0) {
      loadMoreBtnEl.classList.add(HIDDEN_CLASS);
      loadMoreBtnEl.removeEventListener('click', handleLoadMore);
      return;
    }

    const postsMarkup = createPostCards(data);

    postsListEl.insertAdjacentHTML('beforeend', postsMarkup);

    event.target.disabled = false;
    event.target.textContent = prevButtonText;
  } catch (err) {
    console.log(err);
  }
}
