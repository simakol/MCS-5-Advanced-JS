import { products } from '../data/products';
// namespace import
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

export default function handleOpenCardModal(event) {
  if (event.target === event.currentTarget) {
    return;
  }

  const liEl = event.target.closest('.product-card');

  const productId = Number(liEl.dataset.id);

  const currentProduct = products.find(product => productId === product.id);

  const instance = basicLightbox.create(`
      <img class="product-modal-img" src="${currentProduct.img}" alt="${currentProduct.name}" />
    <div class="product-modal-text-content">
    <h2 class="product-modal-title">${currentProduct.name}</h2>
    <p class="product-modal-price">Price: ${currentProduct.price} uah.</p>
    <p class="product-modal-desc">${currentProduct.description}</p>
  </div>
    `);

  instance.show();
}
