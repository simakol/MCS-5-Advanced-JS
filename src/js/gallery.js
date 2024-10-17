import { getPhotos } from './api/photosService';
import createCardsMarkup from './template/card';
import ButtonService from './services/ButtonService';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const notFoundTextEl = document.querySelector('.not-found-text');
const loadMoreBtnEl = document.querySelector('.js-load-more');

const loadMoreBtnService = new ButtonService(loadMoreBtnEl);

const params = {
  page: 1,
  perPage: 10,
  maxPage: 1,
  query: '',
};

searchFormEl.addEventListener('submit', handleSearch);

async function handleSearch(event) {
  event.preventDefault();
  notFoundTextEl.innerHTML = '';

  // loadMoreBtnEl.classList.add(HIDDEN_CLASS);
  loadMoreBtnService.hide();

  params.page = 1; // reset page

  const form = event.currentTarget;
  const userQuery = form.elements.user_query.value.trim();

  if (userQuery === '') {
    alert('Для пошуку потрібно ввести значення');
    form.reset();
    return;
  }

  params.query = userQuery; // set user query to params

  try {
    const data = await getPhotos(params);

    if (data.total === 0) {
      galleryEl.innerHTML = '';
      notFoundTextEl.innerHTML = `Results for query <span>${userQuery}</span> not found!`;
      return;
    }

    params.maxPage = data.total_pages; // set max page

    galleryEl.innerHTML = createCardsMarkup(data.results);

    // якщо у нас більше 1єї сторінки
    if (params.maxPage > params.page) {
      // loadMoreBtnEl.classList.remove(HIDDEN_CLASS);
      loadMoreBtnService.show();

      loadMoreBtnEl.addEventListener('click', handleLoadMore);
    }
  } catch (err) {
    console.log(err);
  } finally {
    form.reset();
  }
}

async function handleLoadMore() {
  // const prevButtonText = event.target.textContent;

  // event.target.disabled = true;
  // event.target.textContent = 'Loading...';

  loadMoreBtnService.setLoading();

  params.page += 1;

  try {
    const data = await getPhotos(params);

    const photosMarkup = createCardsMarkup(data.results);

    galleryEl.insertAdjacentHTML('beforeend', photosMarkup);

    // event.target.disabled = false;
    // event.target.textContent = prevButtonText;
    loadMoreBtnService.setNormal();

    // перевірка на кінець колекції
    if (params.maxPage === params.page) {
      // loadMoreBtnEl.classList.add(HIDDEN_CLASS);
      loadMoreBtnService.hide();

      loadMoreBtnEl.removeEventListener('click', handleLoadMore);
    }
  } catch (err) {
    console.log(err);
  }
}
