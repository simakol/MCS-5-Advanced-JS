// import refs from '../consts/refs.js';
// import { products } from '../data/products.js';

function createPruductCard(product) {
  return `<li class="product-card" data-id="${product.id}">
    <img src="${product.img}" alt="${product.name}" class="product-card-img" />
    <div class="product-card-text-content">
      <h2 class="product-card-title">${product.name}</h2>
      <p class="product-card-price">Price: ${product.price} uah.</p>
    </div>
  </li>`;
}

function displayCardsMarkup(products, container) {
  const productsListMarkup = products.map(createPruductCard).join('');

  container.innerHTML = productsListMarkup;
}

export default displayCardsMarkup;
