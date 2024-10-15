function createCardsMarkup(cards) {
  return cards
    .map(
      ({ alt_description, urls: { regular } }) => `<li class="gallery-card">
     <img class="gallery-img" src="${regular}" alt="${alt_description}" />
        </li>`
    )
    .join('');
}

export default createCardsMarkup;
