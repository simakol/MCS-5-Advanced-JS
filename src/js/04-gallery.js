// https://unsplash.com/documentation
// N2hFKxqELoV2Hd6dcIRJn1oRrjfp310WTtPLEXfMXjg

/*
<li class="gallery-card">
  <img class="gallery-img" src="" alt="" />
</li>
*/

import { getPhotos } from './api/photosService';
import createCardsMarkup from './template/card';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const notFoundTextEl = document.querySelector('.not-found-text');

searchFormEl.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();
  notFoundTextEl.innerHTML = '';

  const form = event.currentTarget;
  const userQuery = form.elements.user_query.value.trim();

  getPhotos(userQuery)
    .then(data => {
      if (data.total === 0) {
        galleryEl.innerHTML = '';
        notFoundTextEl.innerHTML = `Results for query <span>${userQuery}</span> not found!`;
        return;
      }

      galleryEl.innerHTML = createCardsMarkup(data.results);
    })
    .catch(console.error)
    // .catch((err) => console.error(err)) -> ідентичний запис
    .finally(() => form.reset());
}
